webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./css/main.scss":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-6-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./css/main.scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".timer-wrapper {\n  display: flex;\n  flex-direction: column;\n  padding: 5px;\n}\n\n.timer-count {\n  background: -webkit-linear-gradient(45deg, #ff5100, orange);\n  font-size: 27px;\n  font-weight: 900;\n  line-height: 1.2em;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\nbody {\n  background-color: #f7fafc;\n  overflow-y: scroll;\n}\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n.container {\n  width: 100%;\n}\n\n@media (min-width: 640px) {\n  .container {\n    max-width: 640px;\n  }\n}\n\n@media (min-width: 768px) {\n  .container {\n    max-width: 768px;\n  }\n}\n\n@media (min-width: 1024px) {\n  .container {\n    max-width: 1024px;\n  }\n}\n\n@media (min-width: 1280px) {\n  .container {\n    max-width: 1280px;\n  }\n}\n\n/**\n * Constrain images and videos to the parent width and preserve\n * their instrinsic aspect ratio.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block;\n  vertical-align: middle;\n}\n\n/**\n * Make replaced elements `display: block` by default as that's\n * the behavior you want almost all of the time. Inspired by\n * CSS Remedy, with `svg` added as well.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\n\n/**\n * Use the configured 'mono' font family for elements that\n * are expected to be rendered with a monospace font, falling\n * back to the system monospace stack if there is no configured\n * 'mono' font family.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}\n\n/**\n * Reset form element properties that are easy to forget to\n * style explicitly so you don't inadvertently introduce\n * styles that deviate from your design system. These styles\n * supplement a partial reset that is already applied by\n * normalize.css.\n */\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/**\n * Reset links to optimize for opt-in styling instead of\n * opt-out.\n */\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\ntable {\n  border-collapse: collapse;\n}\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\ninput::-webkit-input-placeholder, textarea::-webkit-input-placeholder {\n  color: #a0aec0;\n}\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  color: #a0aec0;\n}\n\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\n  color: #a0aec0;\n}\n\ninput::-ms-input-placeholder, textarea::-ms-input-placeholder {\n  color: #a0aec0;\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  color: #a0aec0;\n}\n\ntextarea {\n  resize: vertical;\n}\n\nimg {\n  border-style: solid;\n}\n\n/**\n * Undo the `border-style: none` reset that Normalize applies to images so that\n * our `border-{width}` utilities have the expected effect.\n *\n * The Normalize reset is unnecessary for us since we default the border-width\n * to 0 on all elements.\n *\n * https://github.com/tailwindcss/tailwindcss/issues/362\n */\n\nhr {\n  border-top-width: 1px;\n}\n\n/*\n * Ensure horizontal rules are visible by default\n */\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e2e8f0; /* 2 */\n}\n\n/**\n * 1. Prevent padding and border from affecting element width.\n *\n *    We used to set this in the html element and inherit from\n *    the parent element for everything else. This caused issues\n *    in shadow-dom-enhanced elements like <details> where the content\n *    is wrapped by a div with box-sizing set to `content-box`.\n *\n *    https://github.com/mozdevs/cssremedy/issues/4\n *\n *\n * 2. Allow adding a border to an element by just adding a border-width.\n *\n *    By default, the way the browser specifies that an element should have no\n *    border is by setting it's border-style to `none` in the user-agent\n *    stylesheet.\n *\n *    In order to easily add borders to elements by just setting the `border-width`\n *    property, we change the default border-style for all elements to `solid`, and\n *    use border-width to hide them instead. This way our `border` utilities only\n *    need to set the `border-width` property instead of the entire `border`\n *    shorthand, making our border utilities much more straightforward to compose.\n *\n *    https://github.com/tailwindcss/tailwindcss/pull/116\n */\n\nhtml {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 1 */\n  line-height: 1.5; /* 2 */\n}\n\n/**\n * 1. Use the user's configured `sans` font-family (with Tailwind's default\n *    sans-serif font stack as a fallback) as a sane default.\n * 2. Use Tailwind's default \"normal\" line-height so the user isn't forced\n *    to override it to ensure consistency even when using the default theme.\n */\n\n/**\n * Tailwind custom reset styles\n */\n\nol,\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nbutton:focus {\n  outline: 1px dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n}\n\n/**\n * Work around a Firefox/IE bug where the transparent `button` background\n * results in a loss of the default `button` focus styles.\n */\n\nbutton {\n  background-color: transparent;\n  background-image: none;\n  padding: 0;\n}\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\n/**\n * Removes the default spacing and border for appropriate elements.\n */\n\n/**\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\n * A thin layer on top of normalize.css that provides a starting point more\n * suitable for web applications.\n */\n\n[hidden] {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10+.\n */\n\n/* Misc\n   ========================================================================== */\n\nsummary {\n  display: list-item;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\n/* Interactive\n   ========================================================================== */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\n/* Forms\n   ========================================================================== */\n\nimg {\n  border-style: none;\n}\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\n/* Embedded content\n   ========================================================================== */\n\nsup {\n  top: -0.5em;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\n/* Text-level semantics\n   ========================================================================== */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\n/* Grouping content\n   ========================================================================== */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Remove the margin in all browsers.\n */\n\n/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */", "",{"version":3,"sources":["/Users/kozakiewicz/Desktop/aukcje-app/css/timer.scss","/Users/kozakiewicz/Desktop/aukcje-app/css/main.scss","/Users/kozakiewicz/Desktop/aukcje-app/<no source>"],"names":[],"mappings":"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","file":"main.scss","sourcesContent":["@tailwind base;\n@tailwind components;\n\n.timer-wrapper {\n  display: flex;\n  flex-direction: column;\n  padding: 5px;\n}\n.timer-count {\n  background: -webkit-linear-gradient(45deg, rgb(255, 81, 0), orange);\n  font-size: 27px;\n  font-weight: 900;\n  line-height: 1.2em;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n","@tailwind base;\n@tailwind components;\n@import \"../css/timer.scss\";\n\nbody {\n  @apply bg-gray-100;\n  overflow-y: scroll;\n}\n",null]}]);


/***/ })

})
//# sourceMappingURL=_app.js.702d686828e97a70a1d3.hot-update.js.map