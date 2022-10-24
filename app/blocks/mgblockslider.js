/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./app/assets/blocks/controls.js":
/*!***************************************!*\
  !*** ./app/assets/blocks/controls.js ***!
  \***************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "controlsSlider": function() { return /* binding */ controlsSlider; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");




var controlsSlider = function controlsSlider(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Help', 'mg-block-slider'),
    initialOpen: false,
    className: "components-panel__body__mg-block-slider",
    icon: "editor-help"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Check out how to configure and customize at the', 'mg-block-slider'), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('https://github.com/gigenam/mgblockslider/wiki', 'mg-block-slider'),
    target: "_blank"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('GitHub Wiki', 'mg-block-slider')), "."))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Navigations', 'mg-block-slider'),
    initialOpen: true,
    className: "components-panel__body__mg-block-slider"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Navigation arrows', 'mg-block-slider'),
    checked: attributes.directionNav,
    onChange: function onChange(val) {
      setAttributes({
        directionNav: val,
        showArrowsOptions: val
      });
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
    className: attributes.showArrowsOptions ? '' : 'hidden'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Auto hide arrows', 'mg-block-slider'),
    checked: attributes.hideDirections,
    onChange: function onChange(val) {
      return setAttributes({
        hideDirections: val
      });
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
    className: attributes.showArrowsOptions ? '' : 'hidden'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Arrows type', 'mg-block-slider'),
    value: attributes.arrowType,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Default', 'mg-block-slider'),
      value: ''
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Squares', 'mg-block-slider'),
      value: 'squares'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Circles', 'mg-block-slider'),
      value: 'circles'
    }],
    onChange: function onChange(val) {
      return setAttributes({
        arrowType: val
      });
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Pagination dots', 'mg-block-slider'),
    checked: attributes.controlNav,
    onChange: function onChange(val) {
      setAttributes({
        controlNav: val,
        showControlOptions: val
      });
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
    className: attributes.showControlOptions ? '' : 'hidden'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Auto hide dots', 'mg-block-slider'),
    checked: attributes.hideControls,
    onChange: function onChange(val) {
      return setAttributes({
        hideControls: val
      });
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
    className: attributes.showControlOptions ? '' : 'hidden'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Paginations type', 'mg-block-slider'),
    value: attributes.paginationType,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Circles', 'mg-block-slider'),
      value: ''
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Squares', 'mg-block-slider'),
      value: 'squares'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Circles with background', 'mg-block-slider'),
      value: 'block'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Squares with background', 'mg-block-slider'),
      value: 'squares-block'
    }],
    onChange: function onChange(val) {
      return setAttributes({
        paginationType: val
      });
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Thumbnails navigation', 'mg-block-slider'),
    checked: attributes.thumbsNav,
    onChange: function onChange(val) {
      setAttributes({
        thumbsNav: val,
        showThumbOptions: val
      });
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
    className: attributes.showThumbOptions ? '' : 'hidden'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Auto hide thumbs', 'mg-block-slider'),
    checked: attributes.hideThumbs,
    onChange: function onChange(val) {
      return setAttributes({
        hideThumbs: val
      });
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Swipe navigation', 'mg-block-slider'),
    checked: attributes.swipeNav,
    onChange: function onChange(val) {
      return setAttributes({
        swipeNav: val
      });
    }
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Animations', 'mg-block-slider'),
    initialOpen: false,
    className: "components-panel__body__mg-block-slider"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Auto start animations', 'mg-block-slider'),
    checked: attributes.autoStart,
    onChange: function onChange(val) {
      return setAttributes({
        autoStart: val
      });
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Stop animations on hover', 'mg-block-slider'),
    checked: attributes.stopOnHover,
    onChange: function onChange(val) {
      return setAttributes({
        stopOnHover: val
      });
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Animation type', 'mg-block-slider'),
    value: attributes.animation,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Swipe', 'mg-block-slider'),
      value: 'slide'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Fade', 'mg-block-slider'),
      value: 'fade'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Cards', 'mg-block-slider'),
      value: 'cards'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('No animation', 'mg-block-slider'),
      value: 'none'
    }],
    onChange: function onChange(val) {
      return setAttributes({
        animation: val
      });
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Vertical animations', 'mg-block-slider'),
    checked: attributes.vertical,
    onChange: function onChange(val) {
      return setAttributes({
        vertical: val
      });
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Transition type', 'mg-block-slider'),
    value: attributes.transition,
    options: [{
      label: 'Linear',
      value: 'linear'
    }, {
      label: 'Ease',
      value: 'ease'
    }, {
      label: 'Ease-in',
      value: 'ease-in'
    }, {
      label: 'Ease-out',
      value: 'ease-out'
    }, {
      label: 'Ease-in-out',
      value: 'ease-in-out'
    }, {
      label: 'Custom',
      value: 'custom'
    }],
    onChange: function onChange(val) {
      setAttributes({
        transition: val,
        showCustomTransition: 'custom' === val ? true : false
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    className: attributes.showCustomTransition ? 'components-base-control--custom' : 'hidden',
    value: attributes.customTransition,
    onChange: function onChange(val) {
      return setAttributes({
        customTransition: val
      });
    },
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add custom css transitions with steps() or cubic-bezier().', 'mg-block-slider')
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Duration between slides', 'mg-block-slider'),
    value: attributes.duration,
    onChange: function onChange(val) {
      setAttributes({
        duration: val
      });

      if (val <= attributes.speed) {
        setAttributes({
          speed: val - 0.2
        });
      }
    },
    min: 0.5,
    max: 10.0,
    step: 0.1
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Animation speed', 'mg-block-slider'),
    value: attributes.speed,
    onChange: function onChange(val) {
      setAttributes({
        speed: val
      });

      if (val >= attributes.duration) {
        setAttributes({
          speed: attributes.duration - 0.2
        });
      }
    },
    min: 0.1,
    max: 9.5,
    step: 0.1
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Media', 'mg-block-slider'),
    initialOpen: false,
    className: "components-panel__body__mg-block-slider"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Pause content when losing focus', 'mg-block-slider'),
    checked: attributes.pauseUnfocused,
    onChange: function onChange(val) {
      return setAttributes({
        pauseUnfocused: val
      });
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Wait videos to finish', 'mg-block-slider'),
    checked: attributes.waitVideo,
    onChange: function onChange(val) {
      return setAttributes({
        waitVideo: val
      });
    }
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Theme', 'mg-block-slider'),
    initialOpen: false,
    className: "components-panel__body__mg-block-slider"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    value: attributes.theme,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Light', 'mg-block-slider'),
      value: 'light'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Dark', 'mg-block-slider'),
      value: 'dark'
    }],
    onChange: function onChange(val) {
      return setAttributes({
        theme: val
      });
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Auto minimum height', 'mg-block-slider'),
    checked: attributes.autoHeight,
    onChange: function onChange(val) {
      return setAttributes({
        autoHeight: val
      });
    }
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorAdvancedControls, {
    key: "inspector"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    className: "component-button--restore",
    onClick: function onClick() {
      return setAttributes({
        theme: 'light',
        directionNav: true,
        showArrowsOptions: true,
        hideDirections: true,
        controlNav: false,
        showControlOptions: false,
        hideControls: false,
        thumbsNav: false,
        showThumbOptions: false,
        hideThumbs: false,
        autoStart: true,
        stopOnHover: true,
        pauseUnfocused: true,
        waitVideo: false,
        swipeNav: true,
        animation: 'slide',
        vertical: false,
        transition: 'ease',
        showCustomTransition: false,
        customTransition: '',
        duration: 5.0,
        speed: 0.5,
        arrowType: '',
        paginationType: '',
        autoHeight: true
      });
    },
    variant: "secondary"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Restore everything to default', 'mg-block-slider')))));
};

/***/ }),

/***/ "./app/assets/blocks/editBlocks.js":
/*!*****************************************!*\
  !*** ./app/assets/blocks/editBlocks.js ***!
  \*****************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditSlider": function() { return /* binding */ EditSlider; },
/* harmony export */   "EditSlides": function() { return /* binding */ EditSlides; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./block.json */ "./app/assets/blocks/block.json");
/* harmony import */ var _controls_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./controls.js */ "./app/assets/blocks/controls.js");







/**
 * Main Slider
 *
 * @param { Object } props Properties of the block
 */

var EditSlider = function EditSlider(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes;
  var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)();
  attributes.id = blockProps.id;

  function compactSlider(e) {
    e.target.classList.toggle('is-collapse');
    e.target.parentElement.querySelector('.block-editor-inner-blocks > .block-editor-block-list__layout').classList.toggle('is-collapse-full'); // Save state.

    if ('is-collapse' === e.target.classList[2]) {
      localStorage.setItem('mg-block-slider_collapse_full', true);
    } else {
      localStorage.removeItem('mg-block-slider_collapse_full');
    }
  }

  function collapseSlides(e) {
    e.target.classList.toggle('is-collapse');
    e.target.nextElementSibling.classList.toggle('is-collapse');
    e.target.parentElement.querySelectorAll('.wp-block-mg-block-slider-slide__title').forEach(function (title) {
      return title.classList.toggle('is-collapse');
    }); // Save state.

    if ('is-collapse' === e.target.classList[2]) {
      localStorage.setItem('mg-block-slider_collapse_slides', true);
    } else {
      localStorage.removeItem('mg-block-slider_collapse_slides');
    }
  } // Remember collapsed options.


  setTimeout(function () {
    document.querySelectorAll('.wp-block-mg-block-slider-slider').forEach(function (slider) {
      // Collapse full.
      if (localStorage.getItem('mg-block-slider_collapse_full')) {
        slider.querySelector('.wp-block-mg-block-slider-slider__toggle--full').setAttribute('title', (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Expand block', 'mg-block-slider'));
        slider.querySelector('.wp-block-mg-block-slider-slider__toggle--full').classList.add('is-collapse');
        slider.querySelector('.block-editor-inner-blocks > .block-editor-block-list__layout').classList.add('is-collapse-full');
      } else {
        slider.querySelector('.wp-block-mg-block-slider-slider__toggle--full').setAttribute('title', (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Collapse block', 'mg-block-slider'));
      } // Compact mode.


      if (localStorage.getItem('mg-block-slider_collapse_slides')) {
        slider.querySelector('.wp-block-mg-block-slider-slider__toggle--compact').setAttribute('title', (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Expand slides', 'mg-block-slider'));
        slider.querySelectorAll('.block-editor-inner-blocks, .wp-block-mg-block-slider-slider__toggle--compact, .wp-block-mg-block-slider-slide__title').forEach(function (els) {
          return els.classList.add('is-collapse');
        });
      } else {
        slider.querySelector('.wp-block-mg-block-slider-slider__toggle--compact').setAttribute('title', (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Collapse slides', 'mg-block-slider'));
      }
    });
  }, 150); // Dark theme.

  function changeColor(attrs) {
    if ('dark' === attributes.theme) {
      attrs.style = {
        color: '#ffffff',
        backgroundColor: '#555555'
      };
    }
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_controls_js__WEBPACK_IMPORTED_MODULE_6__.controlsSlider)(props), changeColor(blockProps), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    onClick: function onClick(e) {
      return compactSlider(e);
    },
    className: "wp-block-mg-block-slider-slider__toggle wp-block-mg-block-slider-slider__toggle--full",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Collapse', 'mg-block-slider')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M6.5 12.4L12 8l5.5 4.4-.9 1.2L12 10l-4.5 3.6-1-1.2z"
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "wp-block-mg-block-slider-slider__title"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('MG Block Slider', 'mg-block-slider'),
    hideLabelFromVision: true,
    className: "wp-block-mg-block-slider-slider__title__input",
    value: '' === attributes.customId ? _block_json__WEBPACK_IMPORTED_MODULE_5__.title : attributes.customId,
    onChange: function onChange(val) {
      return setAttributes({
        customId: val
      });
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    onClick: function onClick(e) {
      return collapseSlides(e);
    },
    className: "wp-block-mg-block-slider-slider__toggle wp-block-mg-block-slider-slider__toggle--compact",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Collapse', 'mg-block-slider')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M6.5 12.4L12 8l5.5 4.4-.9 1.2L12 10l-4.5 3.6-1-1.2z"
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks, {
    allowedBlocks: ['mg-block-slider/slides']
  })));
};
/**
 * Inner slides
 *
 * @param { Object } props Properties of the block
 */

var EditSlides = function EditSlides(props) {
  var clientId = props.clientId;
  var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)();
  var blockCount = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(function (select) {
    return select('core/block-editor').getBlockIndex(clientId) + 1;
  });
  var ALLOWED_BLOCKS = ['core/paragraph', 'core/heading', 'core/list', 'core/buttons', 'core/html', 'core/blockquote', 'core/pullquote', 'core/image', 'core/video', 'core/columns', 'core/cover', 'core/media-text', 'core/embed', 'core/group'];
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "wp-block-mg-block-slider-slide__title"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Slide ', 'mg-block-slider') + blockCount), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks, {
    allowedBlocks: ALLOWED_BLOCKS
  })));
};

/***/ }),

/***/ "./app/assets/blocks/saveBlocks.js":
/*!*****************************************!*\
  !*** ./app/assets/blocks/saveBlocks.js ***!
  \*****************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SaveSlider": function() { return /* binding */ SaveSlider; },
/* harmony export */   "SaveSlides": function() { return /* binding */ SaveSlides; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");


var SaveSlider = function SaveSlider(props) {
  var blockId = '' !== props.attributes.customId ? props.attributes.customId : props.attributes.id;

  for (var i = 0; i < blockId.length; i++) {
    // Replace every instance.
    blockId = blockId.replace(' ', '-');
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null);
};
var SaveSlides = function SaveSlides() {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null);
};

/***/ }),

/***/ "./app/assets/blocks/block.json":
/*!**************************************!*\
  !*** ./app/assets/blocks/block.json ***!
  \**************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"$schema":"https://json.schemastore.org/block.json","apiVersion":2,"version":"1.0","name":"mg-block-slider/slider","title":"MG Block Slider","description":"A simple slideshow block to use it in any block editor","textdomain":"mg-block-slider","keywords":["slider","slideshow","block","anything","content"],"category":"media","supports":{"anchor":true,"align":["left","right","wide","full"]},"attributes":{"id":{"type":"string"},"customId":{"type":"string","default":""},"align":{"type":"string","default":"none"},"theme":{"type":"string","default":"light"},"directionNav":{"type":"boolean","default":true},"showArrowsOptions":{"type":"boolean","default":true},"hideDirections":{"type":"boolean","default":true},"controlNav":{"type":"boolean","default":false},"showControlOptions":{"type":"boolean","default":false},"hideControls":{"type":"boolean","default":false},"thumbsNav":{"type":"boolean","default":false},"showThumbOptions":{"type":"boolean","default":false},"hideThumbs":{"type":"boolean","default":false},"autoStart":{"type":"boolean","default":true},"stopOnHover":{"type":"boolean","default":true},"pauseUnfocused":{"type":"boolean","default":true},"waitVideo":{"type":"boolean","default":false},"swipeNav":{"type":"boolean","default":true},"animation":{"type":"string","default":"slide"},"vertical":{"type":"boolean","default":false},"transition":{"type":"string","default":"ease"},"showCustomTransition":{"type":"boolean","default":false},"customTransition":{"type":"string","default":""},"duration":{"type":"integer","default":5},"speed":{"type":"integer","default":0.5},"arrowType":{"type":"string","default":""},"paginationType":{"type":"string","default":""},"autoHeight":{"type":"boolean","default":true}},"editorScript":"file:./mgblockslider.js","editorStyle":"file:../css/mgblockslider.css"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!********************************************!*\
  !*** ./app/assets/blocks/mgblockslider.js ***!
  \********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ "./app/assets/blocks/block.json");
/* harmony import */ var _editBlocks_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editBlocks.js */ "./app/assets/blocks/editBlocks.js");
/* harmony import */ var _saveBlocks_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./saveBlocks.js */ "./app/assets/blocks/saveBlocks.js");




 // Custom MG icon.

var mgIcon = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)('svg', {
  width: 20,
  height: 20
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)('path', {
  d: 'M 10,0.10000018 C 4.537483,0.10000018 0.1000002,4.537483 0.10000019,10 0.1000002,15.462518 4.537483,19.9 10,19.9 c 5.462518,0 9.9,-4.437482 9.9,-9.9 0,-5.462517 -4.437482,-9.8999998 -9.9,-9.89999982 z m 0.287098,1.90422162 c 0.111373,-0.1113778 1.888158,1.9096505 2.210851,2.5155257 0.120605,0.2264414 0.3187,0.088412 -3.9100027,2.7049714 -2.3171031,1.4337414 -2.2326017,1.3114241 -1.5604852,2.2948313 0.1586656,0.2321463 0.3579257,0.5311018 0.4433418,0.6640368 0.085411,0.132935 0.3242845,0.487886 0.5312291,0.789031 0.2069405,0.301145 0.5829439,0.849297 0.8359045,1.218702 0.2529589,0.369405 0.5653418,0.787106 0.693332,0.925745 l 0.2324127,0.251943 0.2988168,-0.173822 c 0.163747,-0.09517 0.613552,-0.385373 0.99996,-0.644506 0.386402,-0.259125 0.797271,-0.527352 0.914026,-0.595679 0.116754,-0.06833 0.465835,-0.307204 0.775361,-0.529276 0.309519,-0.222077 0.65191,-0.455766 0.761688,-0.521464 0.946843,-0.566643 0.988502,-0.654046 0.591774,-1.2245609 -0.810009,-1.1648284 -0.898092,-1.222384 -1.429631,-0.902308 -0.859235,0.5174066 -1.125402,0.9419244 -1.097613,1.7460259 0.02825,0.817744 -0.09585,0.758426 -0.964806,-0.462873 C 9.7168902,8.8007165 9.7176661,8.799763 10.064451,8.5488854 c 0.317884,-0.2299687 1.267835,-0.8495758 1.302683,-0.8495758 0.01553,0 0.144851,-0.080005 0.287098,-0.1777274 0.351589,-0.2415325 0.913045,-0.5938035 1.081988,-0.6855198 0.757158,-0.4110488 0.672353,-0.5342501 1.058552,-0.3827974 0.223083,0.098692 0.507792,0.4492011 0.507792,0.4492011 0.678936,0.7477119 1.074776,1.74354 2.046795,2.6483328 0.41812,0.3654696 0.767298,0.3005277 1.306589,0.1933518 0.915953,-0.1725527 0.867027,0.1353291 -2.861215,2.6776293 -4.152274,2.831446 -4.62977,3.36158 -4.306471,4.783014 0.05356,0.235459 0.08897,0.514941 0.07812,0.623022 0.02327,0.426397 -0.263141,-0.05696 -0.396469,-0.197258 C 9.7358772,17.173805 9.5183227,16.888316 8.4570921,15.402131 7.6843834,14.319995 7.5075735,14.069334 6.6934899,12.886605 4.4307505,9.5992269 4.0034732,9.2755902 2.3596766,9.6191556 1.7336483,9.7500025 1.7046431,9.7121 2.1643718,9.3574473 2.4530652,9.1347359 3.5110465,8.4003889 3.8342278,8.1973367 5.8490095,6.9314937 8.3057062,5.3354339 8.7188006,5.025587 8.87612,4.9075849 9.1778101,4.6886393 9.386743,4.5392781 10.388923,3.8228534 10.606087,3.3960792 10.400375,2.5627936 10.32719,2.2663306 10.276248,2.0150614 10.287098,2.0042218 Z'
})); // Register the main slider block.

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_2__.name, {
  icon: mgIcon,
  edit: _editBlocks_js__WEBPACK_IMPORTED_MODULE_3__.EditSlider,
  save: _saveBlocks_js__WEBPACK_IMPORTED_MODULE_4__.SaveSlider
});
}();
/******/ })()
;
//# sourceMappingURL=mgblockslider.js.map