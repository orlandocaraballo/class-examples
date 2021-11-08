import _ from "lodash/fp.js";

import { wrapInDiv, trim } from "./composability.js";

const transform = _.compose(wrapInDiv, trim);

console.log(transform("   orlando      "));

const transformWithPipe = _.pipe(trim, wrapInDiv);

console.log(transformWithPipe("   orlando      "));
