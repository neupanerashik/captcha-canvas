const { CaptchaGenerator } = require("captcha-canvas");
const fs = require("node:fs");
const options = { height: 200, width: 600 }; //options for captcha image
//other options can be added

const captcha = new CaptchaGenerator(options); //getting captcha constructor
const captchaText = captcha.text; // Returns text of the captcha image
console.log(`Captcha text: ${captchaText}`);
const buffer = captcha.generateSync(); //returns buffer of the captcha image

const transportToFolder = (buffer) => {
  try {
    const directoryName = "images";
    if (!fs.existsSync(directoryName)) {
      fs.mkdirSync(directoryName);
    }
    fs.writeFileSync(`${directoryName}/image.png`, buffer); //will create image.png file of the captcha
  } catch (error) {
    console.log(error);
  }
};

transportToFolder(buffer);
