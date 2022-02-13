const { Package } = require("../models/index");
const IndexController = {
  get_packages: async (req, res) => {
    try {
      const packages = await Package.findAll();
      if (!packages)
        throw {
          code: 500,
          detail: ["Error While Retrieving Packages"],
        };
      return res.status(200).json({
        status: "success",
        detail: packages,
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
  get_single_package: async (req, res) => {
    try {
      const { packageId } = req.params;
      console.log(packageId);
      const package = await Package.findByPk(packageId);
      if (!package)
        throw {
          code: 404,
          detail: ["Package Not Found"],
        };
      return res.status(200).json({
        status: "success",
        detail: package,
      });
    } catch (error) {
      console.error(error);
      const status = error.code ? error.code : 500;
      return res.status(status).json({
        status: "error",
        detail: error.detail,
      });
    }
  },
};
module.exports = IndexController;
