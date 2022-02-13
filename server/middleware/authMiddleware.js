const jwt = require("jsonwebtoken");
const { createToken } = require("../utils/helpers");

const refresh = (res, refresh_token) => {
  return jwt.verify(refresh_token, "REFRESH_TOKEN_SECRET", (err, payload) => {
    if (err) {
      return {
        status: "error",
        detail: ["Token Empty or Invalid 2"],
      };
    } else {
      const new_access_token = createToken("ACCESS_TOKEN_SECRET", payload);
      res.cookie("X-Access-Token-Drive", new_access_token);
      return {
        status: "success",
        detail: payload,
      };
    }
  });
};

// const IsAuthenticated = (req, res, next) => {
//   const access_token = req.cookies["X-Access-Token-Drive"];
//   const refresh_token = req.cookies["X-Access-Token-Drive"];

//   if (!access_token && !refresh_token)
//     return res.status(401).json({
//       status: "error",
//       detail: ["Token Empty or Invalid 1"],
//     });
//   else if (access_token) {
//     jwt.verify(access_token, "ACCESS_TOKEN_SECRET", (err, payload) => {
//       if (!err) {
//         console.log("Returning");
//         console.log(payload);
//         req.user_id = payload;
//         next();
//       }
//       const data = refresh(res, next, refresh_token);
//       if (data.status === "error") {
//         return res.status(401).json({
//           status: "error",
//           detail: ["Token Empty or Invalid 2"],
//         });
//       }
//       req.user_id = data.detail;
//       next();
//     });
//   } else if (!access_token && refresh_token) {
//     const data = refresh(res, next, refresh_token);
//     if (data.status === "error") {
//       return res.status(401).json({
//         status: "error",
//         detail: ["Token Empty or Invalid 3"],
//       });
//     }
//     req.user_id = data.detail;
//     next();
//   }
// };
const IsAuthenticated = (req, res, next) => {
  const access_token = req.cookies["X-Access-Token-Drive"];
  const refresh_token = req.cookies["X-Refresh-Token-Drive"];
  console.log(access_token);
  if (!access_token && !refresh_token) {
    console.log(access_token, refresh_token);
    return res.status(401).json({
      status: "error",
      detail: ["Token Empty or Invalid 1"],
    });
  }
  jwt.verify(access_token, "ACCESS_TOKEN_SECRET", (err, payload) => {
    if (err) {
      const refreshed = refresh(res, refresh_token);
      if (refreshed.status === "error")
        return res.status(401).json({
          status: "error",
          detail: refreshed.detail,
        });
      req.user_id = refreshed.detail;
      console.log("Going to Next!");
      next();
    } else {
      req.user_id = payload;
      next();
    }
  });
};
module.exports = IsAuthenticated;
