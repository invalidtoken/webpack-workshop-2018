const makeColorStyle = (colorName) => `color: ${colorName};`;
const red = makeColorStyle("red");
const blue = makeColorStyle("blue");

exports.red = red;
exports.blue = blue;
exports.makeColorStyle = makeColorStyle;
