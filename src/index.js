import nav from "./nav";
import { top, bottom } from "./footer";

import button from "./button"; // importing a common.js module
import { blue, makeColorStyle } from "./button-styles"; // Importing a commonjs module

console.log(nav(), top, bottom, button("Hello"), makeColorStyle("green"), blue);
