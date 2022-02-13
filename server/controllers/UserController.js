const { User, Package } = require("../models/index");
const UserController = {
  index: async (req, res) => {
    try {
      const user_id = parseInt(req.user_id);
      const user = await User.findByPk(user_id, {
        include: [{ model: Package }],
      });
      if (!user)
        throw {
          code: 404,
          detail: ["User Not Found"],
        };
      console.log(user);
      return res.status(200).json({
        status: "success",
        detail: user,
      });
    } catch (error) {
      const status = error.status ? error.status : 500;
      return res.status(status).json({
        status: "error",
        detail: error.detail,
      });
    }
  },
  get_enrolled_packages: async (req, res) => {
    try {
      console.log("Here");
      const user_id = parseInt(req.user_id);
      const packages = await User.findAll({
        include: [
          {
            model: Package,
          },
        ],
        where: { id: user_id },
      });
      const sum = packages[0].Packages.reduce((a, b) => {
        return {
          price: parseInt(a.price) + parseInt(b.price),
        };
      }).price;
      return res.status(200).json({
        status: "success",
        detail: { data: packages[0].Packages, total_price: sum },
      });
    } catch (error) {
      console.log(error);
      const status = error.status ? error.status : 500;
      return res.status(status).json({
        status: "error",
        detail: error.detail,
      });
    }
  },
  enroll_course: async (req, res) => {
    try {
      const { PackageId } = req.body;
      const UserId = parseInt(req.user_id);
      const Package_Promise = Package.findByPk(PackageId);
      const User_Promise = User.findByPk(UserId);
      const resolvePromise = await Promise.all([Package_Promise, User_Promise]);
      if (!resolvePromise[0])
        throw {
          code: 404,
          detail: ["Package Not Found"],
        };
      if (!resolvePromise[1])
        throw {
          code: 404,
          detail: ["User Not Found"],
        };

      const setAssociation = await resolvePromise[0].addUser(UserId);
      if (!setAssociation)
        throw {
          code: 500,
          detail: ["Association Not Set"],
        };
      return res.status(201).json({
        status: "success",
        detail: ["Enrolled Successfully"],
      });
    } catch (error) {
      console.log(error);
      const status = error.code ? error.code : 500;
      return res.status(status).json({
        status: "error",
        detail: error.detail,
      });
    }
  },
};
module.exports = UserController;
