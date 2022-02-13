const jwt = require("jsonwebtoken");
const path = require("path");
module.exports = {
  createToken: (secret, payload) => {
    return jwt.sign(payload, secret);
  },
  create_file: async (file, dir) => {
    const img_name = new Date().getTime().toString() + path.extname(file.name);
    await file.mv(path.join(dir, img_name));
    return img_name;
  },
  remove_file: async (file, dir) => {
    console.log(path.join(dir, file));
    return fs.unlink(path.join(dir, file), (err) => {
      if (err) console.error(err);
    });
  },
};
