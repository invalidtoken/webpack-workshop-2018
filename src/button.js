// take a str, the button label and return a element
/**
 *
 * @param {string} buttonName
 * @returns {Element}
 */
const makeButton = (buttonName) => {
  const buttonLabel = `Button Amazing: ${buttonName}`;

  const button = document.createElement("button");
  button.innerText = buttonLabel;

  return button;
};

module.exports = makeButton;
