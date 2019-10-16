/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ch1-block-style-variations/index.js":
/*!*************************************************!*\
  !*** ./src/ch1-block-style-variations/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Based on: Block Style Variations
 *
 * @url https://developer.wordpress.org/block-editor/developers/filters/block-filters/#block-style-variations
 */
// Add a class name to core gallery.
wp.blocks.registerBlockStyle('core/gallery', {
  name: 'roundy-round',
  // string for class name.
  label: 'Roundy Round Borders' // Label displayed in the editor.
  // isDefault: true,

}); // Add another class name.

wp.blocks.registerBlockStyle('core/gallery', {
  name: 'blocky-block',
  // string for class name.
  label: 'Blocky Block Gallery' // Label displayed in the editor.

}); // Remove block style.
// wp.blocks.unregisterBlockStyle( 'core/gallery', 'blocky-block' );
// Remove block style once the DOM is fully loaded.
// wp.domReady( function() {
// 	wp.blocks.unregisterBlockStyle( 'core/gallery', 'blocky-block' );
// } );

/***/ }),

/***/ "./src/ch10-block-list-block/index.js":
/*!********************************************!*\
  !*** ./src/ch10-block-list-block/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/ch11-blacklist-blocks/index.js":
/*!********************************************!*\
  !*** ./src/ch11-blacklist-blocks/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/ch12-whitelist-blocks/index.js":
/*!********************************************!*\
  !*** ./src/ch12-whitelist-blocks/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/ch13-hide-blocks-from-inserter/index.js":
/*!*****************************************************!*\
  !*** ./src/ch13-hide-blocks-from-inserter/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/ch14-block-categories/index.js":
/*!********************************************!*\
  !*** ./src/ch14-block-categories/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/ch15-parser-filters/index.js":
/*!******************************************!*\
  !*** ./src/ch15-parser-filters/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 *
 *
 * @note At the present time it’s not possible to replace the client-side parser.
 *
 * @link https://developer.wordpress.org/block-editor/developers/filters/parser-filters/
 */

/***/ }),

/***/ "./src/ch16-combining-filters/index.js":
/*!*********************************************!*\
  !*** ./src/ch16-combining-filters/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// This demo will cover an example of filters used in combination together.

/***/ }),

/***/ "./src/ch3-register-block-type/index.js":
/*!**********************************************!*\
  !*** ./src/ch3-register-block-type/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Adds a class to the core/list block called wp-block-list.
 *
 * @param settings Object = registered block settings.
 * @param name = 'block name'
 * @return Object
 *
 * @link https://developer.wordpress.org/block-editor/developers/filters/block-filters/#blocks-registerblocktype
 */
function addListBlockClassName(settings, name) {
  // returns if block is not in the editor.
  if (name !== 'core/list') {
    return settings;
  } // Enableds the a default class name for this block.
  // eslint-disable-next-line no-undef


  return lodash.assign({}, settings, {
    // eslint-disable-next-line no-undef
    supports: lodash.assign({}, settings.supports, {
      className: true
    })
  });
} // Client side filter registration.


wp.hooks.addFilter('blocks.registerBlockType', 'gfd/class-names/list-block', addListBlockClassName);

/***/ }),

/***/ "./src/ch4-get-save-element/index.js":
/*!*******************************************!*\
  !*** ./src/ch4-get-save-element/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/ch5-get-save-content/index.js":
/*!*******************************************!*\
  !*** ./src/ch5-get-save-content/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A filter that applies to all blocks returning a WP Element in the save function.
 *
 * @param {*} props
 */
function addBackgroundColorStyle(props, settings) {
  console.log(settings.name);

  if ('core/paragraph' !== settings.name) {
    return;
  }

  return lodash.assign(props, {
    style: {
      backgroundColor: 'red'
    }
  });
}

wp.hooks.addFilter('blocks.getSaveContent.extraProps', 'gfd/add-background-color-style', addBackgroundColorStyle);

/***/ }),

/***/ "./src/ch6-get-block-default-classname/index.js":
/*!******************************************************!*\
  !*** ./src/ch6-get-block-default-classname/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/ch7-switch-block-type/index.js":
/*!********************************************!*\
  !*** ./src/ch7-switch-block-type/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/ch8-get-block-attributes/index.js":
/*!***********************************************!*\
  !*** ./src/ch8-get-block-attributes/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/ch9-block-edit/index.js":
/*!*************************************!*\
  !*** ./src/ch9-block-edit/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/chX-inserting-controls/index.js":
/*!*********************************************!*\
  !*** ./src/chX-inserting-controls/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Register Toggle Settings.
 *
 * @param {*} settings Object.
 * @param {*} name
 * @return {*} settings Object.
 */
function demoToggleSettings(settings, name) {
  // Check for specific block.
  if ('core/quote' === name) {
    // Set our toggle to false by default.
    settings.attributes.testToggle = {
      type: 'boolean',
      defualt: false
    };
  }

  return settings;
} // wp.hooks.addFilter( 'hook, 'namespace', 'callback' );


wp.hooks.addFilter('blocks.registerBlockType', 'wds', demoToggleSettings);
/**
 * This function adds our toggle to the editor.
 */

var el = wp.element.createElement;
var withInspectorControls = wp.compose.createHigherOrderComponent(function (BlockEdit) {
  return function (props) {
    // Return without change.
    if ('core/list' !== props.name) {
      return BlockEdit;
    } // Output all values in block.
    // console.log( props );
    // Gets toggle value defined in demoToggleSettings().


    var testToggle = props.attributes.testToggle;
    var element = el(wp.element.Fragment, {}, el(BlockEdit, props), el(wp.editor.InspectorControls, {}, el(wp.components.ToggleControl, {
      label: 'This toggle is inserted with a filter.',
      checked: testToggle,
      onChange: function onChange() {
        props.setAttributes({
          testToggle: !testToggle
        });
      }
    })));
    return element;
  };
}, 'withInspectorControls');
wp.hooks.addFilter('editor.BlockEdit', 'my-plugin/with-inspector-controls', withInspectorControls);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ch1_block_style_variations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ch1-block-style-variations */ "./src/ch1-block-style-variations/index.js");
/* harmony import */ var _ch1_block_style_variations__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ch1_block_style_variations__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ch3_register_block_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ch3-register-block-type */ "./src/ch3-register-block-type/index.js");
/* harmony import */ var _ch3_register_block_type__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ch3_register_block_type__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ch4_get_save_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ch4-get-save-element */ "./src/ch4-get-save-element/index.js");
/* harmony import */ var _ch4_get_save_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ch4_get_save_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ch5_get_save_content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ch5-get-save-content */ "./src/ch5-get-save-content/index.js");
/* harmony import */ var _ch5_get_save_content__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ch5_get_save_content__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ch6_get_block_default_classname__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ch6-get-block-default-classname */ "./src/ch6-get-block-default-classname/index.js");
/* harmony import */ var _ch6_get_block_default_classname__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ch6_get_block_default_classname__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ch7_switch_block_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ch7-switch-block-type */ "./src/ch7-switch-block-type/index.js");
/* harmony import */ var _ch7_switch_block_type__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ch7_switch_block_type__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ch8_get_block_attributes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ch8-get-block-attributes */ "./src/ch8-get-block-attributes/index.js");
/* harmony import */ var _ch8_get_block_attributes__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ch8_get_block_attributes__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ch9_block_edit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ch9-block-edit */ "./src/ch9-block-edit/index.js");
/* harmony import */ var _ch9_block_edit__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ch9_block_edit__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ch10_block_list_block__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ch10-block-list-block */ "./src/ch10-block-list-block/index.js");
/* harmony import */ var _ch10_block_list_block__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_ch10_block_list_block__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ch11_blacklist_blocks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ch11-blacklist-blocks */ "./src/ch11-blacklist-blocks/index.js");
/* harmony import */ var _ch11_blacklist_blocks__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_ch11_blacklist_blocks__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ch12_whitelist_blocks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ch12-whitelist-blocks */ "./src/ch12-whitelist-blocks/index.js");
/* harmony import */ var _ch12_whitelist_blocks__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_ch12_whitelist_blocks__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _ch13_hide_blocks_from_inserter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ch13-hide-blocks-from-inserter */ "./src/ch13-hide-blocks-from-inserter/index.js");
/* harmony import */ var _ch13_hide_blocks_from_inserter__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_ch13_hide_blocks_from_inserter__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _ch14_block_categories__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ch14-block-categories */ "./src/ch14-block-categories/index.js");
/* harmony import */ var _ch14_block_categories__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_ch14_block_categories__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _ch15_parser_filters__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ch15-parser-filters */ "./src/ch15-parser-filters/index.js");
/* harmony import */ var _ch15_parser_filters__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_ch15_parser_filters__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _ch16_combining_filters__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ch16-combining-filters */ "./src/ch16-combining-filters/index.js");
/* harmony import */ var _ch16_combining_filters__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_ch16_combining_filters__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _chX_inserting_controls__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./chX-inserting-controls */ "./src/chX-inserting-controls/index.js");
/* harmony import */ var _chX_inserting_controls__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_chX_inserting_controls__WEBPACK_IMPORTED_MODULE_15__);
/**
 * Internal dependencies
 */

















/***/ })

/******/ });
//# sourceMappingURL=index.js.map