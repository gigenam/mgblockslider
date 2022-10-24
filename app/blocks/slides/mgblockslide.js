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

/***/ }),

/***/ "./app/assets/blocks/slides/block.json":
/*!*********************************************!*\
  !*** ./app/assets/blocks/slides/block.json ***!
  \*********************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"$schema":"https://json.schemastore.org/block.json","apiVersion":2,"version":"1.0","name":"mg-block-slider/slide","title":"MG Block Slide","textdomain":"mg-block-slide","keywords":["slide","slideshow","block","anything","content"],"category":"media","editorScript":"file:./mgblockslide.js","editorStyle":"file:../../css/mgblockslider.css"}');

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
/*!**************************************************!*\
  !*** ./app/assets/blocks/slides/mgblockslide.js ***!
  \**************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ "./app/assets/blocks/slides/block.json");
/* harmony import */ var _editBlocks_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../editBlocks.js */ "./app/assets/blocks/editBlocks.js");
/* harmony import */ var _saveBlocks_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../saveBlocks.js */ "./app/assets/blocks/saveBlocks.js");





var mgIconSlide = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)('svg', {
  width: 20,
  height: 20
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)('path', {
  d: 'M 2.1796662,2.3719057 V 8.7758114 15.179718 H 11.090816 20 V 8.7758114 2.3719057 h -8.909184 z m 1.1138939,1.1138939 h 7.7972559 7.79529 V 8.7758114 14.065823 H 11.090816 3.2935601 V 8.7758114 Z m 4.5261138,0.5296222 c -1.2654734,0 -2.2936599,1.0281865 -2.2936599,2.2936598 0,1.2654734 1.0281865,2.2936599 2.2936599,2.2936599 1.2654734,0 2.2936591,-1.0281865 2.2936591,-2.2936599 0,-1.2654733 -1.0281857,-2.2936598 -2.2936591,-2.2936598 z m 0.066184,0.4425998 c 0.025801,-0.025802 0.4381628,0.4408107 0.5129195,0.5811708 0.027941,0.052458 0.07376,0.020507 -0.9058819,0.6266717 C 6.9561036,5.9980116 6.97525,5.9695767 7.130956,6.1973975 c 0.036757,0.05378 0.083622,0.1243204 0.1034111,0.1551168 0.019786,0.030797 0.074082,0.112239 0.1220252,0.1820036 0.047941,0.069765 0.135811,0.1977685 0.1944129,0.2833467 0.058601,0.085578 0.1316708,0.1809092 0.1613216,0.213027 l 0.053774,0.059979 0.068251,-0.041365 c 0.037934,-0.022047 0.1421239,-0.08888 0.231641,-0.1489123 0.089515,-0.06003 0.1859787,-0.1227418 0.2130266,-0.1385707 0.027048,-0.01583 0.106161,-0.070579 0.1778672,-0.1220252 C 8.5283913,6.58855 8.6091221,6.5352603 8.634554,6.5200404 8.8539041,6.3887691 8.8629645,6.3667939 8.7710567,6.2346256 8.583406,5.9647757 8.5632798,5.9515846 8.4401409,6.0257349 8.2410863,6.1455997 8.1793116,6.2448247 8.1857494,6.4311069 8.1922934,6.6205495 8.1636878,6.6064912 7.9623813,6.3235591 7.7547244,6.0317011 7.7538136,6.032149 7.8341514,5.9740294 7.9077936,5.920753 8.128039,5.7775483 8.1361121,5.7775482 c 0.0036,0 0.033229,-0.018726 0.066184,-0.041365 0.081451,-0.055955 0.213185,-0.138006 0.2523233,-0.1592534 0.1754068,-0.095225 0.1545816,-0.1240194 0.2440504,-0.088934 0.051681,0.022863 0.1178886,0.1034113 0.1178887,0.1034113 0.1572856,0.1732185 0.2484404,0.4046537 0.4736232,0.6142623 0.096863,0.084666 0.179094,0.07033 0.304029,0.045501 0.2121939,-0.039975 0.1998034,0.031506 -0.6638999,0.620467 -0.9619365,0.655947 -1.0717812,0.7772037 -0.9968841,1.1064999 0.012408,0.054548 0.021127,0.1197372 0.018614,0.1447757 0.00539,0.098781 -0.062183,-0.012999 -0.09307,-0.045502 C 7.7584192,7.9715988 7.7077208,7.9046538 7.4618712,7.5603568 7.2828615,7.3096639 7.2430257,7.2531825 7.0544311,6.9791861 6.5302337,6.2176159 6.4300845,6.1426242 6.0492745,6.2222162 5.9042458,6.2525289 5.899339,6.24233 6.0058419,6.1601696 6.0727221,6.1085751 6.3177299,5.9383406 6.3925996,5.8913005 6.8593539,5.598049 7.4282185,5.2288619 7.5239179,5.1570812 7.5603634,5.1297443 7.6306322,5.0799988 7.6790347,5.045397 7.9112045,4.8794267 7.9604002,4.7792945 7.9127438,4.5862514 7.8957907,4.5175714 7.8833436,4.4605327 7.8858579,4.4580216 Z M 0.83945114,4.8378227 c -0.40685303,0.00372 -0.81310339,0.014029 -0.83050038,0.029521 -0.01741432,0.015505 -0.009353797,1.1090875 0.02361612,3.1114244 0.0058945,0.3580804 0.01424101,0.9969859 0.0196801,1.4189355 0.005431,0.4219415 0.0154452,1.0588704 0.0216481,1.4169684 0.006206,0.358093 0.0158503,0.986135 0.0216482,1.395318 0.005799,0.409187 0.0206332,1.372005 0.0314881,2.139227 0.0108561,0.767215 0.0213833,1.793184 0.0255841,2.278956 0.004199,0.485765 0.0149022,0.910205 0.0236161,0.944645 0.0119149,0.04709 0.0881261,0.0612 0.30700961,0.05314 0.35308225,-0.01304 0.62948841,-0.0179 2.47772511,-0.0433 0.7927782,-0.01089 1.7556055,-0.02585 2.1392271,-0.03149 0.3836218,-0.0056 1.344492,-0.01888 2.1372594,-0.02953 1.2485522,-0.01683 4.1860722,-0.05743 6.4629462,-0.09052 3.64666,-0.05297 4.32355,-0.06614 4.337494,-0.07872 0.0089,-0.0079 0.0097,-0.392205 0.002,-0.854117 -0.0088,-0.532976 -0.002,-0.834436 -0.002,-0.834436 0,0 -0.759157,0.01182 -0.86986,0.01968 l -0.202704,0.01377 -0.0039,0.310946 -0.0039,0.308977 -0.486098,0.0078 c -0.266724,0.0043 -0.818873,0.01227 -1.228038,0.01772 -0.409165,0.0053 -1.874081,0.02746 -3.25509,0.04723 -1.381009,0.01978 -4.300052,0.05897 -6.4865622,0.08856 -2.1865092,0.02959 -4.0417886,0.05719 -4.1229818,0.06102 l -0.1476007,0.0059 -0.00985,-0.303073 c -0.00591,-0.167431 -0.013588,-0.483281 -0.015744,-0.700613 -0.00216,-0.217337 -0.0092,-0.708573 -0.015744,-1.092245 -0.00656,-0.383663 -0.020992,-1.335631 -0.031488,-2.115611 -0.010562,-0.779912 -0.029727,-2.244878 -0.04336,-3.255021 -0.013636,-1.0101356 -0.031692,-2.1190829 -0.03936,-2.4659169 -0.00769,-0.346834 -0.01118,-0.6525246 -0.00984,-0.6789635 0.00138,-0.027317 0.1349775,-0.04644 0.3129135,-0.043297 0.1717498,0.00313 0.3164227,0.00296 0.3207858,-0.00197 0.02139,-0.022787 -0.010531,-1.0097774 -0.033457,-1.0351685 -0.01374,-0.015211 -0.4197115,-0.019463 -0.82656346,-0.015746 z M 14.787358,7.4514554 c -0.02205,-0.00756 -0.48411,0.546086 -1.027302,1.2300065 l -0.98794,1.2437822 -0.18893,-0.013774 C 12.479088,9.904719 11.986669,9.8373393 11.488973,9.7618997 9.2141094,9.4170944 8.7460037,9.3474217 8.3401564,9.2915451 L 7.905226,9.2325048 7.6198646,9.5316424 C 7.4625162,9.6963892 7.1229541,10.061711 6.8661166,10.342463 6.2013263,11.069156 5.2386608,12.11594 4.7013052,12.696203 4.4479573,12.969784 4.1991106,13.245624 4.1482942,13.310222 l -0.092496,0.11808 h 7.1733968 c 3.945139,0 7.173398,-0.01194 7.173398,-0.02559 0,-0.02613 -0.137524,-0.254113 -1.291014,-2.154971 C 16.716634,10.596914 16.040823,9.4787633 15.609986,8.7641183 15.17915,8.0494808 14.809405,7.4590126 14.787358,7.4514554 Z'
})); // Register the slides.

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_2__.name, {
  parent: ['mg-block-slider/slider'],
  icon: mgIconSlide,
  edit: _editBlocks_js__WEBPACK_IMPORTED_MODULE_3__.EditSlides,
  save: _saveBlocks_js__WEBPACK_IMPORTED_MODULE_4__.SaveSlides
});
}();
/******/ })()
;
//# sourceMappingURL=mgblockslide.js.map