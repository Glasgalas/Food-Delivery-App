const { Product } = require("../../models");
const path = require("path");
const fs = require("fs/promises");

const imageDir = path.join(__dirname, "../../", "images", "products");

const updateImage = async (req, res) => {
  const { path: tempUpload, originalname } = req.file;
  const indx = originalname.indexOf(".");
  const imageType = originalname.slice(indx);
  console.log(imageType);
  const { id } = req.params;
  const imageName = `img_${id}${imageType}`;
  try {
    const resultUpload = path.join(imageDir, imageName);
    await fs.rename(tempUpload, resultUpload);
    const imageURL = path.join("public", "images", "products", imageName);
    await Product.findByIdAndUpdate(id, { imageURL });
    res.json({ imageURL });
  } catch (error) {
    await fs.unlink(tempUpload);
    throw error;
  }
};

module.exports = updateImage;
