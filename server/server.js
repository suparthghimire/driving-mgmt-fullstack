const path = require("path");
const dotenv = require("dotenv");
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
dotenv.config();
const app = express();
const fileUpload = require("express-fileupload");
const IsAuthenticated = require("./middleware/authMiddleware");

app.use(cors({ origin: true, credentials: true }));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: path.join(__dirname, "tmp"),
    createParentPath: true,
    limits: {
      fileSize: 1024 * 1024 * 5, //5mb
    },
  })
);
app.use("/auth", require("./routes/auth"));
app.use("/user", IsAuthenticated, require("./routes/user"));
app.use("/", require("./routes/index"));

const PORT = process.env.port || 3000;
app.listen(PORT, () => console.log(`Server Started at ${PORT}`));
