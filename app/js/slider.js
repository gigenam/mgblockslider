/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/*!*********************************!*\
  !*** ./app/assets/js/slider.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * Main slider class
 *
 * @since 1.0.0
 */
var MGBlockSlider = /*#__PURE__*/function () {
  function MGBlockSlider() {
    var _this = this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$selector = _ref.selector,
        selector = _ref$selector === void 0 ? '.wp-block-mgblockslider-slider' : _ref$selector,
        _ref$theme = _ref.theme,
        theme = _ref$theme === void 0 ? 'light' : _ref$theme,
        _ref$directionNav = _ref.directionNav,
        directionNav = _ref$directionNav === void 0 ? true : _ref$directionNav,
        _ref$hideDirections = _ref.hideDirections,
        hideDirections = _ref$hideDirections === void 0 ? true : _ref$hideDirections,
        _ref$controlNav = _ref.controlNav,
        controlNav = _ref$controlNav === void 0 ? false : _ref$controlNav,
        _ref$hideControls = _ref.hideControls,
        hideControls = _ref$hideControls === void 0 ? false : _ref$hideControls,
        _ref$thumbsNav = _ref.thumbsNav,
        thumbsNav = _ref$thumbsNav === void 0 ? false : _ref$thumbsNav,
        _ref$hideThumbs = _ref.hideThumbs,
        hideThumbs = _ref$hideThumbs === void 0 ? false : _ref$hideThumbs,
        _ref$autoStart = _ref.autoStart,
        autoStart = _ref$autoStart === void 0 ? true : _ref$autoStart,
        _ref$stopOnHover = _ref.stopOnHover,
        stopOnHover = _ref$stopOnHover === void 0 ? true : _ref$stopOnHover,
        _ref$pauseUnfocused = _ref.pauseUnfocused,
        pauseUnfocused = _ref$pauseUnfocused === void 0 ? true : _ref$pauseUnfocused,
        _ref$waitVideo = _ref.waitVideo,
        waitVideo = _ref$waitVideo === void 0 ? false : _ref$waitVideo,
        _ref$swipeNav = _ref.swipeNav,
        swipeNav = _ref$swipeNav === void 0 ? true : _ref$swipeNav,
        _ref$animation = _ref.animation,
        animation = _ref$animation === void 0 ? 'slide' : _ref$animation,
        _ref$vertical = _ref.vertical,
        vertical = _ref$vertical === void 0 ? false : _ref$vertical,
        _ref$transition = _ref.transition,
        transition = _ref$transition === void 0 ? 'ease' : _ref$transition,
        _ref$duration = _ref.duration,
        duration = _ref$duration === void 0 ? 5.0 : _ref$duration,
        _ref$speed = _ref.speed,
        speed = _ref$speed === void 0 ? 0.5 : _ref$speed,
        _ref$arrowType = _ref.arrowType,
        arrowType = _ref$arrowType === void 0 ? '' : _ref$arrowType,
        _ref$paginationType = _ref.paginationType,
        paginationType = _ref$paginationType === void 0 ? '' : _ref$paginationType,
        _ref$autoHeight = _ref.autoHeight,
        autoHeight = _ref$autoHeight === void 0 ? true : _ref$autoHeight;

    _classCallCheck(this, MGBlockSlider);

    this.selector = selector;
    this.theme = theme;
    this.directionNav = directionNav;
    this.hideDirections = hideDirections;
    this.controlNav = controlNav;
    this.hideControls = hideControls;
    this.thumbsNav = thumbsNav;
    this.hideThumbs = hideThumbs;
    this.autoStart = autoStart;
    this.stopOnHover = stopOnHover;
    this.pauseUnfocused = pauseUnfocused;
    this.waitVideo = waitVideo;
    this.swipeNav = swipeNav;
    this.animation = animation;
    this.vertical = vertical;
    this.transition = transition;
    this.duration = duration * 1000;
    this.speed = speed * 1000;
    this.arrowType = arrowType;
    this.paginationType = paginationType;
    this.autoHeight = autoHeight;
    this.current = 0;
    this.loadState = false;
    this.triggerObserver = false;
    this.slider = document.querySelector("".concat(this.selector, " .wp-block-mgblockslider-slider__container"));
    this.slidesContainer = document.querySelector("".concat(this.selector, " .wp-block-mgblockslider-slides__container"));
    this.slides = document.querySelectorAll("".concat(this.selector, " .wp-block-mgblockslider-slide"));
    this.i18n = mgblocksliderI18n;

    if (this.slider) {
      document.addEventListener('DOMContentLoaded', function () {
        return _this.initSlider();
      });
      window.addEventListener('load', function () {
        _this.loadState = true;

        _this.slider.parentElement.removeChild(_this.loadingSpinner);
      });
    }
  }
  /**
   * Init slider
   */


  _createClass(MGBlockSlider, [{
    key: "initSlider",
    value: function initSlider() {
      // Transition styles.
      if ('none' !== this.animation) {
        this.slidesContainer.style.transitionDuration = "".concat(this.speed, "ms");
        this.slidesContainer.style.transitionTimingFunction = this.transition;
      } // Themes.


      this.slider.parentElement.classList.add("".concat(this.theme, "-theme")); // Animations.

      this.slider.classList.add("is-".concat(this.animation)); // Vertical animations.

      if (this.vertical) {
        this.slider.classList.add('is-vertical');
      }

      this.slides[this.current].classList.add('wp-block-mgblockslider-slide__current'); // If the slider only contains 2 slides, add a custom class to prevent
      // breaking the animations.

      if (this.slides.length === 2) {
        this.slidesContainer.classList.add('wp-block-mgblockslider-slides__container--2-slides');
      }

      this.createControls();
      this.changeSlide();
      this.loadingEvent(this.loadState);

      if (this.swipeNav) {
        this.swipeEvents();
        this.keyEvents();
      }

      if (this.autoStart) {
        this.startAnimation();
      }

      if (this.autoHeight) {
        this.calcMinHeight();
        this.slider.parentElement.classList.add('auto-height');
      }
    }
    /**
     * Calculate the max height of all slides
     */

  }, {
    key: "calcMinHeight",
    value: function calcMinHeight() {
      var minHeight = 0;
      this.slides.forEach(function (slide) {
        if (slide.getBoundingClientRect().height > minHeight) {
          minHeight = slide.getBoundingClientRect().height;
        }

        slide.style.height = "".concat(Math.floor(minHeight), "px");
      });
    }
    /**
     * Create controls for change slides
     */

  }, {
    key: "createControls",
    value: function createControls() {
      var _this2 = this;

      //
      // Directional arrows
      // --------------------------------------
      if (this.directionNav) {
        var directionNavigation = document.createElement('div');
        directionNavigation.classList.add('wp-block-mgblockslider-slider__control', 'wp-block-mgblockslider-slider__control__arrows');
        directionNavigation.innerHTML = "\n\t\t\t\t<p class=\"wp-block-mgblockslider-slider__control__arrow wp-block-mgblockslider-slider__control__arrow--prev\" title=\"".concat(this.i18n.prev, "\">\n\t\t\t\t\t<span class=\"screen-reader-text\">").concat(this.i18n.showPrevSlide, "</span>\n\t\t\t\t</p>\n\t\t\t\t<p class=\"wp-block-mgblockslider-slider__control__arrow wp-block-mgblockslider-slider__control__arrow--next\" title=\"").concat(this.i18n.next, "\">\n\t\t\t\t\t<span class=\"screen-reader-text\">").concat(this.i18n.showNextSlide, "</span>\n\t\t\t\t</p>");

        if ('' !== this.arrowType) {
          directionNavigation.classList.add("wp-block-mgblockslider-slider__control--".concat(this.arrowType));
        }

        this.slider.appendChild(directionNavigation);
        var navPrev = directionNavigation.querySelector(".wp-block-mgblockslider-slider__control__arrow--prev");
        var navNext = directionNavigation.querySelector(".wp-block-mgblockslider-slider__control__arrow--next"); // Change slides.

        navPrev.addEventListener('click', function (e) {
          if (!e.target.classList.contains('is-changing')) {
            e.target.classList.add('is-changing');

            if (_this2.current > 0) {
              _this2.current--;
            } else {
              _this2.current = _this2.slides.length - 1;
            }

            _this2.changeSlide('prev');

            setTimeout(function () {
              return e.target.classList.remove('is-changing');
            }, _this2.speed);
          }
        });
        navNext.addEventListener('click', function (e) {
          if (!e.target.classList.contains('is-changing')) {
            e.target.classList.add('is-changing');
            _this2.current = (_this2.current + 1) % _this2.slides.length;

            _this2.changeSlide('next');

            setTimeout(function () {
              return e.target.classList.remove('is-changing');
            }, _this2.speed);
          }
        }); // Add classes to the slider.

        this.slider.classList.add('directional-nav');

        if (this.hideDirections) {
          this.slider.classList.add('directional-nav--is-hidden');
        }
      } //
      // Control dots
      // --------------------------------------


      if (this.controlNav) {
        var controlNavigation = document.createElement('ul');
        controlNavigation.classList.add('wp-block-mgblockslider-slider__control', 'wp-block-mgblockslider-slider__control__dots');
        this.slides.forEach(function (slide, index) {
          return controlNavigation.innerHTML += "\n\t\t\t\t<li class=\"wp-block-mgblockslider-slider__control__dot\" title=\"".concat(index + 1, "\">\n\t\t\t\t\t<span class=\"screen-reader-text\">").concat(_this2.i18n.showSlide, " ").concat(index + 1, "</span>\n\t\t\t\t</li>");
        });

        if ('' !== this.paginationType) {
          controlNavigation.classList.add("wp-block-mgblockslider-slider__control--".concat(this.paginationType));
        }

        this.slider.insertAdjacentElement('afterend', controlNavigation);
        this.navDots = document.querySelectorAll("".concat(this.selector, " .wp-block-mgblockslider-slider__control__dot"));
        this.navDots[this.current].classList.add('wp-block-mgblockslider-slider__control__dot--current'); // Change slides and dots.

        this.navDots.forEach(function (dot, index) {
          dot.addEventListener('click', function () {
            _this2.changeControls(_this2.navDots, 'wp-block-mgblockslider-slider__control__dot--current', index);

            _this2.changeSlide('dots', index); // Check the current index and change slides in the correct
            // order.


            if (index === _this2.current + 1) {
              _this2.changeSlide(false, index);
            } else if (index === _this2.current - 1) {
              _this2.changeSlide(false, index);
            }

            _this2.current = index;
          });
        }); // Add classes to the slider.

        this.slider.classList.add('control-nav');

        if (this.hideControls) {
          this.slider.classList.add('control-nav--is-hidden');
        }
      } //
      // Thumbnails
      // --------------------------------------


      if (this.thumbsNav) {
        var thumbNavigation = document.createElement('ul');
        thumbNavigation.classList.add('wp-block-mgblockslider-slider__thumbnails');

        if (this.slider.classList.contains('alignwide')) {
          thumbNavigation.classList.add('alignwide');
        }

        if (this.slider.classList.contains('alignfull')) {
          thumbNavigation.classList.add('alignfull');
        }

        this.slides.forEach(function (slide, index) {
          // Add thumbnails based on the images file name or with a generic
          // image.
          var slideSrc = slide.querySelector('img') ? slide.querySelector('img').src : null;

          if (slideSrc) {
            var imageFormat = slideSrc.split('.').pop();
            var imagePath = slideSrc.slice(0, slideSrc.length - imageFormat.length - 1);
            thumbNavigation.innerHTML += "\n\t\t\t\t\t\t<li class=\"wp-block-mgblockslider-slider__thumb\">\n\t\t\t\t\t\t\t<img src=\"".concat(imagePath, ".").concat(imageFormat, "\" alt=\"").concat(_this2.i18n.slide, " ").concat(index + 1, "\">\n\t\t\t\t\t\t\t<span class=\"screen-reader-text\">").concat(_this2.i18n.showSlide, " ").concat(index + 1, "</span>\n\t\t\t\t\t\t</li>");
          } else {
            slideSrc = slide.querySelector('video') ? 'video' : 'img';
            thumbNavigation.innerHTML += "\n\t\t\t\t\t\t<li class=\"wp-block-mgblockslider-slider__thumb wp-block-mgblockslider-slider__thumb--".concat(slideSrc, "\">\n\t\t\t\t\t\t\t<span class=\"screen-reader-text\">").concat(_this2.i18n.showSlide, " ").concat(index + 1, "</span>\n\t\t\t\t\t\t</li>");
          }
        });
        this.slider.insertAdjacentElement('afterend', thumbNavigation);
        this.thumbs = document.querySelectorAll("".concat(this.selector, " .wp-block-mgblockslider-slider__thumbnails .wp-block-mgblockslider-slider__thumb"));
        this.thumbs[this.current].classList.add('wp-block-mgblockslider-slider__thumb--current'); // Change slides and thumbnails.

        this.thumbs.forEach(function (img, index) {
          img.addEventListener('click', function () {
            _this2.changeControls(_this2.navDots, 'wp-block-mgblockslider-slider__control__dot--current', index);

            _this2.changeSlide('dots', index); // Check the current index and change slides in the correct order.


            if (index === _this2.current + 1) {
              _this2.changeSlide(false, index);
            } else if (index === _this2.current - 1) {
              _this2.changeSlide(false, index);
            }

            _this2.current = index;
          });
        }); // Add classes to the slider.

        this.slider.classList.add('thumbnails-nav');

        if (this.hideThumbs) {
          this.slider.classList.add('thumbnails-nav--is-hidden');
        }
      }
    }
    /**
     * Change slides depending the direction
     *
     * @param { string } direction The direction of the slides.
     * @param { number } index     The position number of the current slide.
     */

  }, {
    key: "changeSlide",
    value: function changeSlide(direction) {
      var _this3 = this;

      var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.current;
      this.slides.forEach(function (slide, position) {
        slide.classList.remove('wp-block-mgblockslider-slide__current', 'wp-block-mgblockslider-slide__prev', 'wp-block-mgblockslider-slide__next');
        setTimeout(function () {
          _this3.slidesContainer.classList.remove('wp-block-mgblockslider-slides__container--prev', 'wp-block-mgblockslider-slides__container--next');
        }, _this3.speed); // If there are videos.

        if (slide.querySelector('video')) {
          slide.classList.add('wp-block-mgblockslider-slide--has-video');
          var videoDuration = Math.ceil(slide.querySelector('video').duration) * 1000; // Pause the video on change slide.

          if (_this3.pauseUnfocused) {
            if (position === index) {
              slide.querySelector('video').play();
            } else {
              slide.querySelector('video').pause();
            }
          } // Stop animation and wait until the video ends.


          if (position === index && _this3.waitVideo) {
            if (slide.querySelector('video').autoplay) {
              clearInterval(_this3.animation);
              _this3.animation = setInterval(function (nextIndex) {
                _this3.current = (_this3.current + 1) % _this3.slides.length;

                _this3.changeSlide('next', nextIndex);
              }, videoDuration + 250);
            } else {
              _this3.animation = setInterval(function (nextIndex) {
                _this3.current = (_this3.current + 1) % _this3.slides.length;

                _this3.changeSlide('next', nextIndex);
              }, _this3.duration);
            }
          }
        }
      });

      if ('none' !== this.animation || 'fade' !== this.animation) {
        this.orderSlides(index);

        if ('next' === direction) {
          this.slidesContainer.classList.add('wp-block-mgblockslider-slides__container--next');
        }

        if ('prev' === direction) {
          this.slidesContainer.classList.add('wp-block-mgblockslider-slides__container--prev');
        }
      }

      this.slides[index].classList.add('wp-block-mgblockslider-slide__current');

      if (this.controlNav) {
        this.changeControls(this.navDots, 'wp-block-mgblockslider-slider__control__dot--current', index);
      }

      if (this.thumbsNav) {
        this.changeControls(this.thumbs, 'wp-block-mgblockslider-slider__thumb--current', index);
      }
    }
    /**
     * Change the current element control
     *
     * @param { Object } control      The elements to control and interact.
     * @param { string } currentClass The current control class to modify.
     * @param { number } index        The position number of the current slide.
     */

  }, {
    key: "changeControls",
    value: function changeControls(control, currentClass) {
      var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.current;

      if (typeof control !== 'undefined') {
        control.forEach(function (el) {
          return el.classList.remove(currentClass);
        });
        control[index].classList.add(currentClass);
      }
    }
    /**
     * Order slides for correct animations
     *
     * @param { number } index The position number of the current slide.
     */

  }, {
    key: "orderSlides",
    value: function orderSlides(index) {
      if (this.slides.length > 2) {
        // Prevent null on previous sibling of current.
        if (undefined != this.slides[index].previousElementSibling) {
          this.slides[index].previousElementSibling.classList.add('wp-block-mgblockslider-slide__prev');
        } else {
          this.slides[this.slides.length - 1].classList.add('wp-block-mgblockslider-slide__prev');
        } // Prevent null on next sibling of current.


        if (undefined != this.slides[index].nextElementSibling) {
          this.slides[index].nextElementSibling.classList.add('wp-block-mgblockslider-slide__next');
        } else {
          this.slides[0].classList.add('wp-block-mgblockslider-slide__next');
        }
      }
    }
    /**
     * Change slides with a swipe on touch screens
     */

  }, {
    key: "swipeEvents",
    value: function swipeEvents() {
      var _this4 = this;

      var touchstartX = 0;
      var startTouch = 0;
      this.slidesContainer.addEventListener('touchstart', function (e) {
        // Stop animation to prevent overlapping.
        clearInterval(_this4.animation);

        _this4.slider.classList.add('dragging');

        _this4.slidesContainer.style.transitionDuration = '0ms';
        startTouch = e.touches[0].clientX - _this4.slides[_this4.current].clientLeft;
      }, false);
      this.slidesContainer.addEventListener('touchmove', function (e) {
        touchstartX = e.touches[0].clientX;
        _this4.slides[_this4.current].style.transform = "translate3d(".concat(touchstartX - startTouch, "px, 0, 0)");
        _this4.slidesContainer.querySelector('.wp-block-mgblockslider-slide__prev').style.transform = "translate3d(calc(".concat(touchstartX - startTouch, "px - 100%), 0, 0)");
        _this4.slidesContainer.querySelector('.wp-block-mgblockslider-slide__next').style.transform = "translate3d(calc(".concat(touchstartX - startTouch, "px + 100%), 0, 0)");
      });
      this.slidesContainer.addEventListener('touchend', function (e) {
        _this4.slidesContainer.querySelector('.wp-block-mgblockslider-slide__current').style.removeProperty('transform');

        _this4.slidesContainer.querySelector('.wp-block-mgblockslider-slide__prev').style.removeProperty('transform');

        _this4.slidesContainer.querySelector('.wp-block-mgblockslider-slide__next').style.removeProperty('transform');

        if (touchstartX - startTouch > 100) {
          if (_this4.current > 0) {
            _this4.current--;
          } else {
            _this4.current = _this4.slides.length - 1;
          }

          _this4.changeSlide('prev');
        } else if (touchstartX - startTouch < 100) {
          _this4.current = (_this4.current + 1) % _this4.slides.length;

          _this4.changeSlide('next');
        }

        _this4.slider.classList.remove('dragging');

        _this4.slidesContainer.style.transitionDuration = "".concat(_this4.speed, "ms"); // Restart animation.

        if (_this4.autoStart) {
          _this4.animation = setInterval(function () {
            _this4.current = (_this4.current + 1) % _this4.slides.length;

            _this4.changeSlide('next', _this4.current);
          }, _this4.duration);
        }
      }, false);
    }
    /**
     * Change slides with the keyboard <- ->
     */

  }, {
    key: "keyEvents",
    value: function keyEvents() {
      var _this5 = this;

      document.addEventListener('keydown', function (e) {
        // Stop animation to prevent overlapping.
        clearInterval(_this5.animation);

        switch (e.key) {
          case 'ArrowLeft':
            if (!_this5.slider.classList.contains('is-changing')) {
              _this5.slider.classList.add('is-changing');

              if (_this5.current > 0) {
                _this5.current--;
              } else {
                _this5.current = _this5.slides.length - 1;
              }

              _this5.changeSlide('prev');

              setTimeout(function () {
                return _this5.slider.classList.remove('is-changing');
              }, _this5.speed);
            }

            break;

          case 'ArrowRight':
            if (!_this5.slider.classList.contains('is-changing')) {
              _this5.slider.classList.add('is-changing');

              _this5.current = (_this5.current + 1) % _this5.slides.length;

              _this5.changeSlide('next');

              setTimeout(function () {
                return _this5.slider.classList.remove('is-changing');
              }, _this5.speed);
            }

            break;
        } // Restart animation.


        if (_this5.autoStart) {
          _this5.animation = setInterval(function () {
            _this5.current = (_this5.current + 1) % _this5.slides.length;

            _this5.changeSlide('next', _this5.current);
          }, _this5.duration);
        }
      });
    }
    /**
     * Auto start animation
     */

  }, {
    key: "startAnimation",
    value: function startAnimation() {
      var _this6 = this;

      this.animation = setInterval(function (index) {
        _this6.current = (_this6.current + 1) % _this6.slides.length;

        _this6.changeSlide('next', index);
      }, this.duration);

      if (this.stopOnHover) {
        // Stop animation on hover.
        this.slider.addEventListener('mouseenter', function () {
          return clearInterval(_this6.animation);
        }); // Resume animation when lost hover.

        this.slider.addEventListener('mouseleave', function () {
          _this6.animation = setInterval(function () {
            _this6.current = (_this6.current + 1) % _this6.slides.length;

            _this6.changeSlide('next', _this6.current);
          }, _this6.duration);
        });
      } else {
        // Stop and restart animation on click to prevent overlapping.
        this.slider.parentElement.addEventListener('click', function () {
          clearInterval(_this6.animation);
          _this6.animation = setInterval(function () {
            _this6.current = (_this6.current + 1) % _this6.slides.length;

            _this6.changeSlide('next', _this6.current);
          }, _this6.duration);
        });
      }

      if (this.pauseUnfocused) {
        // Observe when the slider gets out of window visibility.
        var Observer = new IntersectionObserver(function (entries, observer) {
          entries.forEach(function (entry) {
            if (!entry.isIntersecting) {
              clearInterval(_this6.animation);
              _this6.triggerObserver = true;
            } else if (_this6.triggerObserver) {
              _this6.animation = setInterval(function (index) {
                _this6.current = (_this6.current + 1) % _this6.slides.length;

                _this6.changeSlide('next', index);
              }, _this6.duration);
            }
          });
        }, {
          root: null,
          rootMargin: '0px',
          threshold: 0.3
        });
        Observer.observe(this.slider);
      }
    }
    /**
     * Check the state of the page and add a loading screen before you can interact
     *
     * @param { boolean } state The state of the page. Loading state = false.
     */

  }, {
    key: "loadingEvent",
    value: function loadingEvent(state) {
      if (!state) {
        this.loadingSpinner = document.createElement('div');
        this.loadingSpinner.classList.add('wp-block-mgblockslider-slider__loading');
        this.loadingSpinner.innerHTML = "<p><span class=\"screen-reader-text\">".concat(this.i18n.loading, "</span></p>");
        this.slider.parentElement.appendChild(this.loadingSpinner);
      }
    }
  }]);

  return MGBlockSlider;
}();

(function (window) {
  // Make the slider for global access, save in the window.
  if (typeof window.MGBlockSlider === 'undefined') {
    window.MGBlockSlider = MGBlockSlider;
  }
})(window);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUUsSUFEUDtVQUVDQyxVQUFVLEVBQUUsS0FGYjtVQUdDQyxTQUFTLEVBQUU7UUFIWixDQWRnQixDQUFqQjtRQW9CQVIsUUFBUSxDQUFDUyxPQUFULENBQWtCLEtBQUtwRyxNQUF2QjtNQUNBO0lBQ0Q7SUFFRDtBQUNEO0FBQ0E7QUFDQTtBQUNBOzs7O1dBQ0Msc0JBQWNxRyxLQUFkLEVBQXNCO01BQ3JCLElBQUssQ0FBQ0EsS0FBTixFQUFjO1FBQ2IsS0FBS3hGLGNBQUwsR0FBc0JaLFFBQVEsQ0FBQ2tDLGFBQVQsQ0FBd0IsS0FBeEIsQ0FBdEI7UUFDQSxLQUFLdEIsY0FBTCxDQUFvQkksU0FBcEIsQ0FBOEJDLEdBQTlCLENBQW1DLHdDQUFuQztRQUNBLEtBQUtMLGNBQUwsQ0FBb0J1QixTQUFwQixtREFBd0UsS0FBSzlCLElBQUwsQ0FBVWdHLE9BQWxGO1FBQ0EsS0FBS3RHLE1BQUwsQ0FBWVcsYUFBWixDQUEwQjhCLFdBQTFCLENBQXVDLEtBQUs1QixjQUE1QztNQUNBO0lBQ0Q7Ozs7OztBQUdGLENBQUUsVUFBVUgsTUFBVixFQUFtQjtFQUNwQjtFQUNBLElBQUssT0FBUUEsTUFBTSxDQUFDbkMsYUFBZixLQUFtQyxXQUF4QyxFQUFzRDtJQUNyRG1DLE1BQU0sQ0FBQ25DLGFBQVAsR0FBdUJBLGFBQXZCO0VBQ0E7QUFDRCxDQUxELEVBS0ttQyxNQUxMLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZ2Jsb2Nrc2xpZGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21nYmxvY2tzbGlkZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9tZ2Jsb2Nrc2xpZGVyLy4vYXBwL2Fzc2V0cy9qcy9zbGlkZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyoqXG4gKiBNYWluIHNsaWRlciBjbGFzc1xuICpcbiAqIEBzaW5jZSAxLjAuMFxuICovXG5cbmNsYXNzIE1HQmxvY2tTbGlkZXIge1xuXHRjb25zdHJ1Y3Rvcigge1xuXHRcdHNlbGVjdG9yICAgICAgID0gJy53cC1ibG9jay1tZ2Jsb2Nrc2xpZGVyLXNsaWRlcicsXG5cdFx0dGhlbWUgICAgICAgICAgPSAnbGlnaHQnLFxuXHRcdGRpcmVjdGlvbk5hdiAgID0gdHJ1ZSxcblx0XHRoaWRlRGlyZWN0aW9ucyA9IHRydWUsXG5cdFx0Y29udHJvbE5hdiAgICAgPSBmYWxzZSxcblx0XHRoaWRlQ29udHJvbHMgICA9IGZhbHNlLFxuXHRcdHRodW1ic05hdiAgICAgID0gZmFsc2UsXG5cdFx0aGlkZVRodW1icyAgICAgPSBmYWxzZSxcblx0XHRhdXRvU3RhcnQgICAgICA9IHRydWUsXG5cdFx0c3RvcE9uSG92ZXIgICAgPSB0cnVlLFxuXHRcdHBhdXNlVW5mb2N1c2VkID0gdHJ1ZSxcblx0XHR3YWl0VmlkZW8gICAgICA9IGZhbHNlLFxuXHRcdHN3aXBlTmF2ICAgICAgID0gdHJ1ZSxcblx0XHRhbmltYXRpb24gICAgICA9ICdzbGlkZScsXG5cdFx0dmVydGljYWwgICAgICAgPSBmYWxzZSxcblx0XHR0cmFuc2l0aW9uICAgICA9ICdlYXNlJyxcblx0XHRkdXJhdGlvbiAgICAgICA9IDUuMCxcblx0XHRzcGVlZCAgICAgICAgICA9IDAuNSxcblx0XHRhcnJvd1R5cGUgICAgICA9ICcnLFxuXHRcdHBhZ2luYXRpb25UeXBlID0gJycsXG5cdFx0YXV0b0hlaWdodCAgICAgPSB0cnVlLFxuXHR9ID0ge30gKSB7XG5cdFx0dGhpcy5zZWxlY3RvciAgICAgICAgPSBzZWxlY3Rvcjtcblx0XHR0aGlzLnRoZW1lICAgICAgICAgICA9IHRoZW1lO1xuXHRcdHRoaXMuZGlyZWN0aW9uTmF2ICAgID0gZGlyZWN0aW9uTmF2O1xuXHRcdHRoaXMuaGlkZURpcmVjdGlvbnMgID0gaGlkZURpcmVjdGlvbnM7XG5cdFx0dGhpcy5jb250cm9sTmF2ICAgICAgPSBjb250cm9sTmF2O1xuXHRcdHRoaXMuaGlkZUNvbnRyb2xzICAgID0gaGlkZUNvbnRyb2xzO1xuXHRcdHRoaXMudGh1bWJzTmF2ICAgICAgID0gdGh1bWJzTmF2O1xuXHRcdHRoaXMuaGlkZVRodW1icyAgICAgID0gaGlkZVRodW1icztcblx0XHR0aGlzLmF1dG9TdGFydCAgICAgICA9IGF1dG9TdGFydDtcblx0XHR0aGlzLnN0b3BPbkhvdmVyICAgICA9IHN0b3BPbkhvdmVyO1xuXHRcdHRoaXMucGF1c2VVbmZvY3VzZWQgID0gcGF1c2VVbmZvY3VzZWQ7XG5cdFx0dGhpcy53YWl0VmlkZW8gICAgICAgPSB3YWl0VmlkZW87XG5cdFx0dGhpcy5zd2lwZU5hdiAgICAgICAgPSBzd2lwZU5hdjtcblx0XHR0aGlzLmFuaW1hdGlvbiAgICAgICA9IGFuaW1hdGlvbjtcblx0XHR0aGlzLnZlcnRpY2FsICAgICAgICA9IHZlcnRpY2FsO1xuXHRcdHRoaXMudHJhbnNpdGlvbiAgICAgID0gdHJhbnNpdGlvbjtcblx0XHR0aGlzLmR1cmF0aW9uICAgICAgICA9IGR1cmF0aW9uICogMTAwMDtcblx0XHR0aGlzLnNwZWVkICAgICAgICAgICA9IHNwZWVkICogMTAwMDtcblx0XHR0aGlzLmFycm93VHlwZSAgICAgICA9IGFycm93VHlwZTtcblx0XHR0aGlzLnBhZ2luYXRpb25UeXBlICA9IHBhZ2luYXRpb25UeXBlO1xuXHRcdHRoaXMuYXV0b0hlaWdodCAgICAgID0gYXV0b0hlaWdodDtcblx0XHR0aGlzLmN1cnJlbnQgICAgICAgICA9IDA7XG5cdFx0dGhpcy5sb2FkU3RhdGUgICAgICAgPSBmYWxzZTtcblx0XHR0aGlzLnRyaWdnZXJPYnNlcnZlciA9IGZhbHNlO1xuXHRcdHRoaXMuc2xpZGVyICAgICAgICAgID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggYCR7IHRoaXMuc2VsZWN0b3IgfSAud3AtYmxvY2stbWdibG9ja3NsaWRlci1zbGlkZXJfX2NvbnRhaW5lcmAgKTtcblx0XHR0aGlzLnNsaWRlc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIGAkeyB0aGlzLnNlbGVjdG9yIH0gLndwLWJsb2NrLW1nYmxvY2tzbGlkZXItc2xpZGVzX19jb250YWluZXJgICk7XG5cdFx0dGhpcy5zbGlkZXMgICAgICAgICAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCBgJHsgdGhpcy5zZWxlY3RvciB9IC53cC1ibG9jay1tZ2Jsb2Nrc2xpZGVyLXNsaWRlYCApO1xuXHRcdHRoaXMuaTE4biAgICAgICAgICAgID0gbWdibG9ja3NsaWRlckkxOG47XG5cblx0XHRpZiAoIHRoaXMuc2xpZGVyICkge1xuXHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB0aGlzLmluaXRTbGlkZXIoKSApO1xuXHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdsb2FkJywgKCkgPT4ge1xuXHRcdFx0XHR0aGlzLmxvYWRTdGF0ZSA9IHRydWU7XG5cdFx0XHRcdHRoaXMuc2xpZGVyLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoIHRoaXMubG9hZGluZ1NwaW5uZXIgKTtcblx0XHRcdH0gKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogSW5pdCBzbGlkZXJcblx0ICovXG5cdGluaXRTbGlkZXIoKSB7XG5cdFx0Ly8gVHJhbnNpdGlvbiBzdHlsZXMuXG5cdFx0aWYgKCAnbm9uZScgIT09IHRoaXMuYW5pbWF0aW9uICkge1xuXHRcdFx0dGhpcy5zbGlkZXNDb250YWluZXIuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gYCR7IHRoaXMuc3BlZWQgfW1zYDtcblx0XHRcdHRoaXMuc2xpZGVzQ29udGFpbmVyLnN0eWxlLnRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbiA9IHRoaXMudHJhbnNpdGlvbjtcblx0XHR9XG5cblx0XHQvLyBUaGVtZXMuXG5cdFx0dGhpcy5zbGlkZXIucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCBgJHsgdGhpcy50aGVtZSB9LXRoZW1lYCApO1xuXG5cdFx0Ly8gQW5pbWF0aW9ucy5cblx0XHR0aGlzLnNsaWRlci5jbGFzc0xpc3QuYWRkKCBgaXMtJHsgdGhpcy5hbmltYXRpb24gfWAgKTtcblxuXHRcdC8vIFZlcnRpY2FsIGFuaW1hdGlvbnMuXG5cdFx0aWYgKCB0aGlzLnZlcnRpY2FsICkge1xuXHRcdFx0dGhpcy5zbGlkZXIuY2xhc3NMaXN0LmFkZCggJ2lzLXZlcnRpY2FsJyApO1xuXHRcdH1cblx0XHR0aGlzLnNsaWRlc1sgdGhpcy5jdXJyZW50IF0uY2xhc3NMaXN0LmFkZCggJ3dwLWJsb2NrLW1nYmxvY2tzbGlkZXItc2xpZGVfX2N1cnJlbnQnICk7XG5cblx0XHQvLyBJZiB0aGUgc2xpZGVyIG9ubHkgY29udGFpbnMgMiBzbGlkZXMsIGFkZCBhIGN1c3RvbSBjbGFzcyB0byBwcmV2ZW50XG5cdFx0Ly8gYnJlYWtpbmcgdGhlIGFuaW1hdGlvbnMuXG5cdFx0aWYgKCB0aGlzLnNsaWRlcy5sZW5ndGggPT09IDIgKSB7XG5cdFx0XHR0aGlzLnNsaWRlc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCAnd3AtYmxvY2stbWdibG9ja3NsaWRlci1zbGlkZXNfX2NvbnRhaW5lci0tMi1zbGlkZXMnICk7XG5cdFx0fVxuXG5cdFx0dGhpcy5jcmVhdGVDb250cm9scygpO1xuXHRcdHRoaXMuY2hhbmdlU2xpZGUoKTtcblx0XHR0aGlzLmxvYWRpbmdFdmVudCggdGhpcy5sb2FkU3RhdGUgKTtcblxuXHRcdGlmICggdGhpcy5zd2lwZU5hdiApIHtcblx0XHRcdHRoaXMuc3dpcGVFdmVudHMoKTtcblx0XHRcdHRoaXMua2V5RXZlbnRzKCk7XG5cdFx0fVxuXG5cdFx0aWYgKCB0aGlzLmF1dG9TdGFydCApIHtcblx0XHRcdHRoaXMuc3RhcnRBbmltYXRpb24oKTtcblx0XHR9XG5cblx0XHRpZiAoIHRoaXMuYXV0b0hlaWdodCApIHtcblx0XHRcdHRoaXMuY2FsY01pbkhlaWdodCgpO1xuXHRcdFx0dGhpcy5zbGlkZXIucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCAnYXV0by1oZWlnaHQnICk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIENhbGN1bGF0ZSB0aGUgbWF4IGhlaWdodCBvZiBhbGwgc2xpZGVzXG5cdCAqL1xuXHRjYWxjTWluSGVpZ2h0KCkge1xuXHRcdGxldCBtaW5IZWlnaHQgPSAwO1xuXHRcdHRoaXMuc2xpZGVzLmZvckVhY2goICggc2xpZGUgKSA9PiB7XG5cdFx0XHRpZiAoIHNsaWRlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCA+IG1pbkhlaWdodCApIHtcblx0XHRcdFx0bWluSGVpZ2h0ID0gc2xpZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuXHRcdFx0fVxuXHRcdFx0c2xpZGUuc3R5bGUuaGVpZ2h0ID0gYCR7IE1hdGguZmxvb3IoIG1pbkhlaWdodCApIH1weGA7XG5cdFx0fSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIENyZWF0ZSBjb250cm9scyBmb3IgY2hhbmdlIHNsaWRlc1xuXHQgKi9cblx0Y3JlYXRlQ29udHJvbHMoKSB7XG5cdFx0Ly9cblx0XHQvLyBEaXJlY3Rpb25hbCBhcnJvd3Ncblx0XHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdGlmICggdGhpcy5kaXJlY3Rpb25OYXYgKSB7XG5cdFx0XHRjb25zdCBkaXJlY3Rpb25OYXZpZ2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2RpdicgKTtcblx0XHRcdGRpcmVjdGlvbk5hdmlnYXRpb24uY2xhc3NMaXN0LmFkZCggJ3dwLWJsb2NrLW1nYmxvY2tzbGlkZXItc2xpZGVyX19jb250cm9sJywgJ3dwLWJsb2NrLW1nYmxvY2tzbGlkZXItc2xpZGVyX19jb250cm9sX19hcnJvd3MnICk7XG5cdFx0XHRkaXJlY3Rpb25OYXZpZ2F0aW9uLmlubmVySFRNTCA9IGBcblx0XHRcdFx0PHAgY2xhc3M9XCJ3cC1ibG9jay1tZ2Jsb2Nrc2xpZGVyLXNsaWRlcl9fY29udHJvbF9fYXJyb3cgd3AtYmxvY2stbWdibG9ja3NsaWRlci1zbGlkZXJfX2NvbnRyb2xfX2Fycm93LS1wcmV2XCIgdGl0bGU9XCIkeyB0aGlzLmkxOG4ucHJldiB9XCI+XG5cdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJzY3JlZW4tcmVhZGVyLXRleHRcIj4keyB0aGlzLmkxOG4uc2hvd1ByZXZTbGlkZSB9PC9zcGFuPlxuXHRcdFx0XHQ8L3A+XG5cdFx0XHRcdDxwIGNsYXNzPVwid3AtYmxvY2stbWdibG9ja3NsaWRlci1zbGlkZXJfX2NvbnRyb2xfX2Fycm93IHdwLWJsb2NrLW1nYmxvY2tzbGlkZXItc2xpZGVyX19jb250cm9sX19hcnJvdy0tbmV4dFwiIHRpdGxlPVwiJHsgdGhpcy5pMThuLm5leHQgfVwiPlxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwic2NyZWVuLXJlYWRlci10ZXh0XCI+JHsgdGhpcy5pMThuLnNob3dOZXh0U2xpZGUgfTwvc3Bhbj5cblx0XHRcdFx0PC9wPmA7XG5cblx0XHRcdGlmICggJycgIT09IHRoaXMuYXJyb3dUeXBlICkge1xuXHRcdFx0XHRkaXJlY3Rpb25OYXZpZ2F0aW9uLmNsYXNzTGlzdC5hZGQoIGB3cC1ibG9jay1tZ2Jsb2Nrc2xpZGVyLXNsaWRlcl9fY29udHJvbC0tJHsgdGhpcy5hcnJvd1R5cGUgfWAgKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zbGlkZXIuYXBwZW5kQ2hpbGQoIGRpcmVjdGlvbk5hdmlnYXRpb24gKTtcblx0XHRcdGNvbnN0IG5hdlByZXYgPSBkaXJlY3Rpb25OYXZpZ2F0aW9uLnF1ZXJ5U2VsZWN0b3IoIGAud3AtYmxvY2stbWdibG9ja3NsaWRlci1zbGlkZXJfX2NvbnRyb2xfX2Fycm93LS1wcmV2YCApO1xuXHRcdFx0Y29uc3QgbmF2TmV4dCA9IGRpcmVjdGlvbk5hdmlnYXRpb24ucXVlcnlTZWxlY3RvciggYC53cC1ibG9jay1tZ2Jsb2Nrc2xpZGVyLXNsaWRlcl9fY29udHJvbF9fYXJyb3ctLW5leHRgICk7XG5cblx0XHRcdC8vIENoYW5nZSBzbGlkZXMuXG5cdFx0XHRuYXZQcmV2LmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsICggZSApID0+IHtcblx0XHRcdFx0aWYgKCAhIGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyggJ2lzLWNoYW5naW5nJyApICkge1xuXHRcdFx0XHRcdGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoICdpcy1jaGFuZ2luZycgKTtcblx0XHRcdFx0XHRpZiAoIHRoaXMuY3VycmVudCA+IDAgKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmN1cnJlbnQtLTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dGhpcy5jdXJyZW50ID0gdGhpcy5zbGlkZXMubGVuZ3RoIC0gMTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy5jaGFuZ2VTbGlkZSggJ3ByZXYnICk7XG5cdFx0XHRcdFx0c2V0VGltZW91dCggKCkgPT4gZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSggJ2lzLWNoYW5naW5nJyApLCB0aGlzLnNwZWVkICk7XG5cdFx0XHRcdH1cblx0XHRcdH0gKTtcblxuXHRcdFx0bmF2TmV4dC5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCAoIGUgKSA9PiB7XG5cdFx0XHRcdGlmICggISBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoICdpcy1jaGFuZ2luZycgKSApIHtcblx0XHRcdFx0XHRlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCAnaXMtY2hhbmdpbmcnICk7XG5cdFx0XHRcdFx0dGhpcy5jdXJyZW50ID0gKCB0aGlzLmN1cnJlbnQgKyAxICkgJSB0aGlzLnNsaWRlcy5sZW5ndGg7XG5cdFx0XHRcdFx0dGhpcy5jaGFuZ2VTbGlkZSggJ25leHQnICk7XG5cdFx0XHRcdFx0c2V0VGltZW91dCggKCkgPT4gZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSggJ2lzLWNoYW5naW5nJyApLCB0aGlzLnNwZWVkICk7XG5cdFx0XHRcdH1cblx0XHRcdH0gKTtcblxuXHRcdFx0Ly8gQWRkIGNsYXNzZXMgdG8gdGhlIHNsaWRlci5cblx0XHRcdHRoaXMuc2xpZGVyLmNsYXNzTGlzdC5hZGQoICdkaXJlY3Rpb25hbC1uYXYnICk7XG5cblx0XHRcdGlmICggdGhpcy5oaWRlRGlyZWN0aW9ucyApIHtcblx0XHRcdFx0dGhpcy5zbGlkZXIuY2xhc3NMaXN0LmFkZCggJ2RpcmVjdGlvbmFsLW5hdi0taXMtaGlkZGVuJyApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vXG5cdFx0Ly8gQ29udHJvbCBkb3RzXG5cdFx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHRpZiAoIHRoaXMuY29udHJvbE5hdiApIHtcblx0XHRcdGNvbnN0IGNvbnRyb2xOYXZpZ2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ3VsJyApO1xuXHRcdFx0Y29udHJvbE5hdmlnYXRpb24uY2xhc3NMaXN0LmFkZCggJ3dwLWJsb2NrLW1nYmxvY2tzbGlkZXItc2xpZGVyX19jb250cm9sJywgJ3dwLWJsb2NrLW1nYmxvY2tzbGlkZXItc2xpZGVyX19jb250cm9sX19kb3RzJyApO1xuXHRcdFx0dGhpcy5zbGlkZXMuZm9yRWFjaCggKCBzbGlkZSwgaW5kZXggKSA9PiBjb250cm9sTmF2aWdhdGlvbi5pbm5lckhUTUwgKz0gYFxuXHRcdFx0XHQ8bGkgY2xhc3M9XCJ3cC1ibG9jay1tZ2Jsb2Nrc2xpZGVyLXNsaWRlcl9fY29udHJvbF9fZG90XCIgdGl0bGU9XCIkeyBpbmRleCArIDEgfVwiPlxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwic2NyZWVuLXJlYWRlci10ZXh0XCI+JHsgdGhpcy5pMThuLnNob3dTbGlkZSB9ICR7IGluZGV4ICsgMSB9PC9zcGFuPlxuXHRcdFx0XHQ8L2xpPmAsXG5cdFx0XHQpO1xuXG5cdFx0XHRpZiAoICcnICE9PSB0aGlzLnBhZ2luYXRpb25UeXBlICkge1xuXHRcdFx0XHRjb250cm9sTmF2aWdhdGlvbi5jbGFzc0xpc3QuYWRkKCBgd3AtYmxvY2stbWdibG9ja3NsaWRlci1zbGlkZXJfX2NvbnRyb2wtLSR7IHRoaXMucGFnaW5hdGlvblR5cGUgfWAgKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zbGlkZXIuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCAnYWZ0ZXJlbmQnLCBjb250cm9sTmF2aWdhdGlvbiApO1xuXHRcdFx0dGhpcy5uYXZEb3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCggYCR7IHRoaXMuc2VsZWN0b3IgfSAud3AtYmxvY2stbWdibG9ja3NsaWRlci1zbGlkZXJfX2NvbnRyb2xfX2RvdGAgKTtcblx0XHRcdHRoaXMubmF2RG90c1sgdGhpcy5jdXJyZW50IF0uY2xhc3NMaXN0LmFkZCggJ3dwLWJsb2NrLW1nYmxvY2tzbGlkZXItc2xpZGVyX19jb250cm9sX19kb3QtLWN1cnJlbnQnICk7XG5cblx0XHRcdC8vIENoYW5nZSBzbGlkZXMgYW5kIGRvdHMuXG5cdFx0XHR0aGlzLm5hdkRvdHMuZm9yRWFjaCggKCBkb3QsIGluZGV4ICkgPT4ge1xuXHRcdFx0XHRkb3QuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0XHRcdHRoaXMuY2hhbmdlQ29udHJvbHMoIHRoaXMubmF2RG90cywgJ3dwLWJsb2NrLW1nYmxvY2tzbGlkZXItc2xpZGVyX19jb250cm9sX19kb3QtLWN1cnJlbnQnLCBpbmRleCApO1xuXHRcdFx0XHRcdHRoaXMuY2hhbmdlU2xpZGUoICdkb3RzJywgaW5kZXggKTtcblxuXHRcdFx0XHRcdC8vIENoZWNrIHRoZSBjdXJyZW50IGluZGV4IGFuZCBjaGFuZ2Ugc2xpZGVzIGluIHRoZSBjb3JyZWN0XG5cdFx0XHRcdFx0Ly8gb3JkZXIuXG5cdFx0XHRcdFx0aWYgKCBpbmRleCA9PT0gdGhpcy5jdXJyZW50ICsgMSApIHtcblx0XHRcdFx0XHRcdHRoaXMuY2hhbmdlU2xpZGUoIGZhbHNlLCBpbmRleCApO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAoIGluZGV4ID09PSB0aGlzLmN1cnJlbnQgLSAxICkge1xuXHRcdFx0XHRcdFx0dGhpcy5jaGFuZ2VTbGlkZSggZmFsc2UsIGluZGV4ICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMuY3VycmVudCA9IGluZGV4O1xuXHRcdFx0XHR9ICk7XG5cdFx0XHR9ICk7XG5cblx0XHRcdC8vIEFkZCBjbGFzc2VzIHRvIHRoZSBzbGlkZXIuXG5cdFx0XHR0aGlzLnNsaWRlci5jbGFzc0xpc3QuYWRkKCAnY29udHJvbC1uYXYnICk7XG5cblx0XHRcdGlmICggdGhpcy5oaWRlQ29udHJvbHMgKSB7XG5cdFx0XHRcdHRoaXMuc2xpZGVyLmNsYXNzTGlzdC5hZGQoICdjb250cm9sLW5hdi0taXMtaGlkZGVuJyApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vXG5cdFx0Ly8gVGh1bWJuYWlsc1xuXHRcdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0aWYgKCB0aGlzLnRodW1ic05hdiApIHtcblx0XHRcdGNvbnN0IHRodW1iTmF2aWdhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICd1bCcgKTtcblx0XHRcdHRodW1iTmF2aWdhdGlvbi5jbGFzc0xpc3QuYWRkKCAnd3AtYmxvY2stbWdibG9ja3NsaWRlci1zbGlkZXJfX3RodW1ibmFpbHMnICk7XG5cblx0XHRcdGlmICggdGhpcy5zbGlkZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCAnYWxpZ253aWRlJyApICkge1xuXHRcdFx0XHR0aHVtYk5hdmlnYXRpb24uY2xhc3NMaXN0LmFkZCggJ2FsaWdud2lkZScgKTtcblx0XHRcdH1cblx0XHRcdGlmICggdGhpcy5zbGlkZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCAnYWxpZ25mdWxsJyApICkge1xuXHRcdFx0XHR0aHVtYk5hdmlnYXRpb24uY2xhc3NMaXN0LmFkZCggJ2FsaWduZnVsbCcgKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zbGlkZXMuZm9yRWFjaCggKCBzbGlkZSwgaW5kZXggKSA9PiB7XG5cdFx0XHRcdC8vIEFkZCB0aHVtYm5haWxzIGJhc2VkIG9uIHRoZSBpbWFnZXMgZmlsZSBuYW1lIG9yIHdpdGggYSBnZW5lcmljXG5cdFx0XHRcdC8vIGltYWdlLlxuXHRcdFx0XHRsZXQgc2xpZGVTcmMgPSBzbGlkZS5xdWVyeVNlbGVjdG9yKCAnaW1nJyApID8gc2xpZGUucXVlcnlTZWxlY3RvciggJ2ltZycgKS5zcmMgOiBudWxsO1xuXG5cdFx0XHRcdGlmICggc2xpZGVTcmMgKSB7XG5cdFx0XHRcdFx0Y29uc3QgaW1hZ2VGb3JtYXQgPSBzbGlkZVNyYy5zcGxpdCggJy4nICkucG9wKCk7XG5cdFx0XHRcdFx0Y29uc3QgaW1hZ2VQYXRoID0gc2xpZGVTcmMuc2xpY2UoIDAsIHNsaWRlU3JjLmxlbmd0aCAtIGltYWdlRm9ybWF0Lmxlbmd0aCAtIDEgKTtcblxuXHRcdFx0XHRcdHRodW1iTmF2aWdhdGlvbi5pbm5lckhUTUwgKz0gYFxuXHRcdFx0XHRcdFx0PGxpIGNsYXNzPVwid3AtYmxvY2stbWdibG9ja3NsaWRlci1zbGlkZXJfX3RodW1iXCI+XG5cdFx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiJHsgaW1hZ2VQYXRoIH0uJHsgaW1hZ2VGb3JtYXQgfVwiIGFsdD1cIiR7IHRoaXMuaTE4bi5zbGlkZSB9ICR7IGluZGV4ICsgMSB9XCI+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwic2NyZWVuLXJlYWRlci10ZXh0XCI+JHsgdGhpcy5pMThuLnNob3dTbGlkZSB9ICR7IGluZGV4ICsgMSB9PC9zcGFuPlxuXHRcdFx0XHRcdFx0PC9saT5gO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHNsaWRlU3JjID0gc2xpZGUucXVlcnlTZWxlY3RvciggJ3ZpZGVvJyApID8gJ3ZpZGVvJyA6ICdpbWcnO1xuXHRcdFx0XHRcdHRodW1iTmF2aWdhdGlvbi5pbm5lckhUTUwgKz0gYFxuXHRcdFx0XHRcdFx0PGxpIGNsYXNzPVwid3AtYmxvY2stbWdibG9ja3NsaWRlci1zbGlkZXJfX3RodW1iIHdwLWJsb2NrLW1nYmxvY2tzbGlkZXItc2xpZGVyX190aHVtYi0tJHsgc2xpZGVTcmMgfVwiPlxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cInNjcmVlbi1yZWFkZXItdGV4dFwiPiR7IHRoaXMuaTE4bi5zaG93U2xpZGUgfSAkeyBpbmRleCArIDEgfTwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvbGk+YDtcblx0XHRcdFx0fVxuXHRcdFx0fSApO1xuXHRcdFx0dGhpcy5zbGlkZXIuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCAnYWZ0ZXJlbmQnLCB0aHVtYk5hdmlnYXRpb24gKTtcblx0XHRcdHRoaXMudGh1bWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCggYCR7IHRoaXMuc2VsZWN0b3IgfSAud3AtYmxvY2stbWdibG9ja3NsaWRlci1zbGlkZXJfX3RodW1ibmFpbHMgLndwLWJsb2NrLW1nYmxvY2tzbGlkZXItc2xpZGVyX190aHVtYmAgKTtcblx0XHRcdHRoaXMudGh1bWJzWyB0aGlzLmN1cnJlbnQgXS5jbGFzc0xpc3QuYWRkKCAnd3AtYmxvY2stbWdibG9ja3NsaWRlci1zbGlkZXJfX3RodW1iLS1jdXJyZW50JyApO1xuXG5cdFx0XHQvLyBDaGFuZ2Ugc2xpZGVzIGFuZCB0aHVtYm5haWxzLlxuXHRcdFx0dGhpcy50aHVtYnMuZm9yRWFjaCggKCBpbWcsIGluZGV4ICkgPT4ge1xuXHRcdFx0XHRpbWcuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0XHRcdHRoaXMuY2hhbmdlQ29udHJvbHMoIHRoaXMubmF2RG90cywgJ3dwLWJsb2NrLW1nYmxvY2tzbGlkZXItc2xpZGVyX19jb250cm9sX19kb3QtLWN1cnJlbnQnLCBpbmRleCApO1xuXHRcdFx0XHRcdHRoaXMuY2hhbmdlU2xpZGUoICdkb3RzJywgaW5kZXggKTtcblxuXHRcdFx0XHRcdC8vIENoZWNrIHRoZSBjdXJyZW50IGluZGV4IGFuZCBjaGFuZ2Ugc2xpZGVzIGluIHRoZSBjb3JyZWN0IG9yZGVyLlxuXHRcdFx0XHRcdGlmICggaW5kZXggPT09IHRoaXMuY3VycmVudCArIDEgKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmNoYW5nZVNsaWRlKCBmYWxzZSwgaW5kZXggKTtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKCBpbmRleCA9PT0gdGhpcy5jdXJyZW50IC0gMSApIHtcblx0XHRcdFx0XHRcdHRoaXMuY2hhbmdlU2xpZGUoIGZhbHNlLCBpbmRleCApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLmN1cnJlbnQgPSBpbmRleDtcblx0XHRcdFx0fSApO1xuXHRcdFx0fSApO1xuXG5cdFx0XHQvLyBBZGQgY2xhc3NlcyB0byB0aGUgc2xpZGVyLlxuXHRcdFx0dGhpcy5zbGlkZXIuY2xhc3NMaXN0LmFkZCggJ3RodW1ibmFpbHMtbmF2JyApO1xuXG5cdFx0XHRpZiAoIHRoaXMuaGlkZVRodW1icyApIHtcblx0XHRcdFx0dGhpcy5zbGlkZXIuY2xhc3NMaXN0LmFkZCggJ3RodW1ibmFpbHMtbmF2LS1pcy1oaWRkZW4nICk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIENoYW5nZSBzbGlkZXMgZGVwZW5kaW5nIHRoZSBkaXJlY3Rpb25cblx0ICpcblx0ICogQHBhcmFtIHsgc3RyaW5nIH0gZGlyZWN0aW9uIFRoZSBkaXJlY3Rpb24gb2YgdGhlIHNsaWRlcy5cblx0ICogQHBhcmFtIHsgbnVtYmVyIH0gaW5kZXggICAgIFRoZSBwb3NpdGlvbiBudW1iZXIgb2YgdGhlIGN1cnJlbnQgc2xpZGUuXG5cdCAqL1xuXHRjaGFuZ2VTbGlkZSggZGlyZWN0aW9uLCBpbmRleCA9IHRoaXMuY3VycmVudCApIHtcblx0XHR0aGlzLnNsaWRlcy5mb3JFYWNoKCAoIHNsaWRlLCBwb3NpdGlvbiApID0+IHtcblx0XHRcdHNsaWRlLmNsYXNzTGlzdC5yZW1vdmUoXG5cdFx0XHRcdCd3cC1ibG9jay1tZ2Jsb2Nrc2xpZGVyLXNsaWRlX19jdXJyZW50Jyxcblx0XHRcdFx0J3dwLWJsb2NrLW1nYmxvY2tzbGlkZXItc2xpZGVfX3ByZXYnLFxuXHRcdFx0XHQnd3AtYmxvY2stbWdibG9ja3NsaWRlci1zbGlkZV9fbmV4dCcsXG5cdFx0XHQpO1xuXG5cdFx0XHRzZXRUaW1lb3V0KCAoKSA9PiB7XG5cdFx0XHRcdHRoaXMuc2xpZGVzQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXG5cdFx0XHRcdFx0J3dwLWJsb2NrLW1nYmxvY2tzbGlkZXItc2xpZGVzX19jb250YWluZXItLXByZXYnLFxuXHRcdFx0XHRcdCd3cC1ibG9jay1tZ2Jsb2Nrc2xpZGVyLXNsaWRlc19fY29udGFpbmVyLS1uZXh0Jyxcblx0XHRcdFx0KTtcblx0XHRcdH0sIHRoaXMuc3BlZWQgKTtcblxuXHRcdFx0Ly8gSWYgdGhlcmUgYXJlIHZpZGVvcy5cblx0XHRcdGlmICggc2xpZGUucXVlcnlTZWxlY3RvciggJ3ZpZGVvJyApICkge1xuXHRcdFx0XHRzbGlkZS5jbGFzc0xpc3QuYWRkKCAnd3AtYmxvY2stbWdibG9ja3NsaWRlci1zbGlkZS0taGFzLXZpZGVvJyApO1xuXHRcdFx0XHRjb25zdCB2aWRlb0R1cmF0aW9uID0gTWF0aC5jZWlsKCBzbGlkZS5xdWVyeVNlbGVjdG9yKCAndmlkZW8nICkuZHVyYXRpb24gKSAqIDEwMDA7XG5cblx0XHRcdFx0Ly8gUGF1c2UgdGhlIHZpZGVvIG9uIGNoYW5nZSBzbGlkZS5cblx0XHRcdFx0aWYgKCB0aGlzLnBhdXNlVW5mb2N1c2VkICkge1xuXHRcdFx0XHRcdGlmICggcG9zaXRpb24gPT09IGluZGV4ICkge1xuXHRcdFx0XHRcdFx0c2xpZGUucXVlcnlTZWxlY3RvciggJ3ZpZGVvJyApLnBsYXkoKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0c2xpZGUucXVlcnlTZWxlY3RvciggJ3ZpZGVvJyApLnBhdXNlKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gU3RvcCBhbmltYXRpb24gYW5kIHdhaXQgdW50aWwgdGhlIHZpZGVvIGVuZHMuXG5cdFx0XHRcdGlmICggcG9zaXRpb24gPT09IGluZGV4ICYmIHRoaXMud2FpdFZpZGVvICkge1xuXHRcdFx0XHRcdGlmICggc2xpZGUucXVlcnlTZWxlY3RvciggJ3ZpZGVvJyApLmF1dG9wbGF5ICkge1xuXHRcdFx0XHRcdFx0Y2xlYXJJbnRlcnZhbCggdGhpcy5hbmltYXRpb24gKTtcblx0XHRcdFx0XHRcdHRoaXMuYW5pbWF0aW9uID0gc2V0SW50ZXJ2YWwoICggbmV4dEluZGV4ICkgPT4ge1xuXHRcdFx0XHRcdFx0XHR0aGlzLmN1cnJlbnQgPSAoIHRoaXMuY3VycmVudCArIDEgKSAlIHRoaXMuc2xpZGVzLmxlbmd0aDtcblx0XHRcdFx0XHRcdFx0dGhpcy5jaGFuZ2VTbGlkZSggJ25leHQnLCBuZXh0SW5kZXggKTtcblx0XHRcdFx0XHRcdH0sIHZpZGVvRHVyYXRpb24gKyAyNTAgKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dGhpcy5hbmltYXRpb24gPSBzZXRJbnRlcnZhbCggKCBuZXh0SW5kZXggKSA9PiB7XG5cdFx0XHRcdFx0XHRcdHRoaXMuY3VycmVudCA9ICggdGhpcy5jdXJyZW50ICsgMSApICUgdGhpcy5zbGlkZXMubGVuZ3RoO1xuXHRcdFx0XHRcdFx0XHR0aGlzLmNoYW5nZVNsaWRlKCAnbmV4dCcsIG5leHRJbmRleCApO1xuXHRcdFx0XHRcdFx0fSwgdGhpcy5kdXJhdGlvbiApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gKTtcblxuXHRcdGlmICggJ25vbmUnICE9PSB0aGlzLmFuaW1hdGlvbiB8fCAnZmFkZScgIT09IHRoaXMuYW5pbWF0aW9uICkge1xuXHRcdFx0dGhpcy5vcmRlclNsaWRlcyggaW5kZXggKTtcblxuXHRcdFx0aWYgKCAnbmV4dCcgPT09IGRpcmVjdGlvbiApIHtcblx0XHRcdFx0dGhpcy5zbGlkZXNDb250YWluZXIuY2xhc3NMaXN0LmFkZCggJ3dwLWJsb2NrLW1nYmxvY2tzbGlkZXItc2xpZGVzX19jb250YWluZXItLW5leHQnICk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoICdwcmV2JyA9PT0gZGlyZWN0aW9uICkge1xuXHRcdFx0XHR0aGlzLnNsaWRlc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCAnd3AtYmxvY2stbWdibG9ja3NsaWRlci1zbGlkZXNfX2NvbnRhaW5lci0tcHJldicgKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHR0aGlzLnNsaWRlc1sgaW5kZXggXS5jbGFzc0xpc3QuYWRkKCAnd3AtYmxvY2stbWdibG9ja3NsaWRlci1zbGlkZV9fY3VycmVudCcgKTtcblxuXHRcdGlmICggdGhpcy5jb250cm9sTmF2ICkge1xuXHRcdFx0dGhpcy5jaGFuZ2VDb250cm9scyggdGhpcy5uYXZEb3RzLCAnd3AtYmxvY2stbWdibG9ja3NsaWRlci1zbGlkZXJfX2NvbnRyb2xfX2RvdC0tY3VycmVudCcsIGluZGV4ICk7XG5cdFx0fVxuXG5cdFx0aWYgKCB0aGlzLnRodW1ic05hdiApIHtcblx0XHRcdHRoaXMuY2hhbmdlQ29udHJvbHMoIHRoaXMudGh1bWJzLCAnd3AtYmxvY2stbWdibG9ja3NsaWRlci1zbGlkZXJfX3RodW1iLS1jdXJyZW50JywgaW5kZXggKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogQ2hhbmdlIHRoZSBjdXJyZW50IGVsZW1lbnQgY29udHJvbFxuXHQgKlxuXHQgKiBAcGFyYW0geyBPYmplY3QgfSBjb250cm9sICAgICAgVGhlIGVsZW1lbnRzIHRvIGNvbnRyb2wgYW5kIGludGVyYWN0LlxuXHQgKiBAcGFyYW0geyBzdHJpbmcgfSBjdXJyZW50Q2xhc3MgVGhlIGN1cnJlbnQgY29udHJvbCBjbGFzcyB0byBtb2RpZnkuXG5cdCAqIEBwYXJhbSB7IG51bWJlciB9IGluZGV4ICAgICAgICBUaGUgcG9zaXRpb24gbnVtYmVyIG9mIHRoZSBjdXJyZW50IHNsaWRlLlxuXHQgKi9cblx0Y2hhbmdlQ29udHJvbHMoIGNvbnRyb2wsIGN1cnJlbnRDbGFzcywgaW5kZXggPSB0aGlzLmN1cnJlbnQgKSB7XG5cdFx0aWYgKCB0eXBlb2YoIGNvbnRyb2wgKSAhPT0gJ3VuZGVmaW5lZCcgKSB7XG5cdFx0XHRjb250cm9sLmZvckVhY2goICggZWwgKSA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKCBjdXJyZW50Q2xhc3MgKSApO1xuXHRcdFx0Y29udHJvbFsgaW5kZXggXS5jbGFzc0xpc3QuYWRkKCBjdXJyZW50Q2xhc3MgKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogT3JkZXIgc2xpZGVzIGZvciBjb3JyZWN0IGFuaW1hdGlvbnNcblx0ICpcblx0ICogQHBhcmFtIHsgbnVtYmVyIH0gaW5kZXggVGhlIHBvc2l0aW9uIG51bWJlciBvZiB0aGUgY3VycmVudCBzbGlkZS5cblx0ICovXG5cdG9yZGVyU2xpZGVzKCBpbmRleCApIHtcblx0XHRpZiAoIHRoaXMuc2xpZGVzLmxlbmd0aCA+IDIgKSB7XG5cdFx0XHQvLyBQcmV2ZW50IG51bGwgb24gcHJldmlvdXMgc2libGluZyBvZiBjdXJyZW50LlxuXHRcdFx0aWYgKCB1bmRlZmluZWQgIT0gdGhpcy5zbGlkZXNbIGluZGV4IF0ucHJldmlvdXNFbGVtZW50U2libGluZyApIHtcblx0XHRcdFx0dGhpcy5zbGlkZXNbIGluZGV4IF0ucHJldmlvdXNFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKCAnd3AtYmxvY2stbWdibG9ja3NsaWRlci1zbGlkZV9fcHJldicgKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuc2xpZGVzWyB0aGlzLnNsaWRlcy5sZW5ndGggLSAxIF0uY2xhc3NMaXN0LmFkZCggJ3dwLWJsb2NrLW1nYmxvY2tzbGlkZXItc2xpZGVfX3ByZXYnICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFByZXZlbnQgbnVsbCBvbiBuZXh0IHNpYmxpbmcgb2YgY3VycmVudC5cblx0XHRcdGlmICggdW5kZWZpbmVkICE9IHRoaXMuc2xpZGVzWyBpbmRleCBdLm5leHRFbGVtZW50U2libGluZyApIHtcblx0XHRcdFx0dGhpcy5zbGlkZXNbIGluZGV4IF0ubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoICd3cC1ibG9jay1tZ2Jsb2Nrc2xpZGVyLXNsaWRlX19uZXh0JyApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5zbGlkZXNbIDAgXS5jbGFzc0xpc3QuYWRkKCAnd3AtYmxvY2stbWdibG9ja3NsaWRlci1zbGlkZV9fbmV4dCcgKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogQ2hhbmdlIHNsaWRlcyB3aXRoIGEgc3dpcGUgb24gdG91Y2ggc2NyZWVuc1xuXHQgKi9cblx0c3dpcGVFdmVudHMoKSB7XG5cdFx0bGV0IHRvdWNoc3RhcnRYID0gMDtcblx0XHRsZXQgc3RhcnRUb3VjaCAgPSAwO1xuXG5cdFx0dGhpcy5zbGlkZXNDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lciggJ3RvdWNoc3RhcnQnLCAoIGUgKSA9PiB7XG5cdFx0XHQvLyBTdG9wIGFuaW1hdGlvbiB0byBwcmV2ZW50IG92ZXJsYXBwaW5nLlxuXHRcdFx0Y2xlYXJJbnRlcnZhbCggdGhpcy5hbmltYXRpb24gKTtcblxuXHRcdFx0dGhpcy5zbGlkZXIuY2xhc3NMaXN0LmFkZCggJ2RyYWdnaW5nJyApO1xuXHRcdFx0dGhpcy5zbGlkZXNDb250YWluZXIuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gJzBtcyc7XG5cdFx0XHRzdGFydFRvdWNoID0gZS50b3VjaGVzWyAwIF0uY2xpZW50WCAtIHRoaXMuc2xpZGVzWyB0aGlzLmN1cnJlbnQgXS5jbGllbnRMZWZ0O1xuXHRcdH0sIGZhbHNlICk7XG5cblx0XHR0aGlzLnNsaWRlc0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCAndG91Y2htb3ZlJywgKCBlICkgPT4ge1xuXHRcdFx0dG91Y2hzdGFydFggPSBlLnRvdWNoZXNbIDAgXS5jbGllbnRYO1xuXHRcdFx0dGhpcy5zbGlkZXNbIHRoaXMuY3VycmVudCBdLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgkeyB0b3VjaHN0YXJ0WCAtIHN0YXJ0VG91Y2ggfXB4LCAwLCAwKWA7XG5cdFx0XHR0aGlzLnNsaWRlc0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCAnLndwLWJsb2NrLW1nYmxvY2tzbGlkZXItc2xpZGVfX3ByZXYnICkuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKGNhbGMoJHsgdG91Y2hzdGFydFggLSBzdGFydFRvdWNoIH1weCAtIDEwMCUpLCAwLCAwKWA7XG5cdFx0XHR0aGlzLnNsaWRlc0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCAnLndwLWJsb2NrLW1nYmxvY2tzbGlkZXItc2xpZGVfX25leHQnICkuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKGNhbGMoJHsgdG91Y2hzdGFydFggLSBzdGFydFRvdWNoIH1weCArIDEwMCUpLCAwLCAwKWA7XG5cdFx0fSApO1xuXG5cdFx0dGhpcy5zbGlkZXNDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lciggJ3RvdWNoZW5kJywgKCBlICkgPT4ge1xuXHRcdFx0dGhpcy5zbGlkZXNDb250YWluZXIucXVlcnlTZWxlY3RvciggJy53cC1ibG9jay1tZ2Jsb2Nrc2xpZGVyLXNsaWRlX19jdXJyZW50JyApLnN0eWxlLnJlbW92ZVByb3BlcnR5KCAndHJhbnNmb3JtJyApO1xuXHRcdFx0dGhpcy5zbGlkZXNDb250YWluZXIucXVlcnlTZWxlY3RvciggJy53cC1ibG9jay1tZ2Jsb2Nrc2xpZGVyLXNsaWRlX19wcmV2JyApLnN0eWxlLnJlbW92ZVByb3BlcnR5KCAndHJhbnNmb3JtJyApO1xuXHRcdFx0dGhpcy5zbGlkZXNDb250YWluZXIucXVlcnlTZWxlY3RvciggJy53cC1ibG9jay1tZ2Jsb2Nrc2xpZGVyLXNsaWRlX19uZXh0JyApLnN0eWxlLnJlbW92ZVByb3BlcnR5KCAndHJhbnNmb3JtJyApO1xuXG5cdFx0XHRpZiAoIHRvdWNoc3RhcnRYIC0gc3RhcnRUb3VjaCA+IDEwMCApIHtcblx0XHRcdFx0aWYgKCB0aGlzLmN1cnJlbnQgPiAwICkge1xuXHRcdFx0XHRcdHRoaXMuY3VycmVudC0tO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuY3VycmVudCA9IHRoaXMuc2xpZGVzLmxlbmd0aCAtIDE7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5jaGFuZ2VTbGlkZSggJ3ByZXYnICk7XG5cdFx0XHR9IGVsc2UgaWYgKCB0b3VjaHN0YXJ0WCAtIHN0YXJ0VG91Y2ggPCAxMDAgKSB7XG5cdFx0XHRcdHRoaXMuY3VycmVudCA9ICggdGhpcy5jdXJyZW50ICsgMSApICUgdGhpcy5zbGlkZXMubGVuZ3RoO1xuXHRcdFx0XHR0aGlzLmNoYW5nZVNsaWRlKCAnbmV4dCcgKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zbGlkZXIuY2xhc3NMaXN0LnJlbW92ZSggJ2RyYWdnaW5nJyApO1xuXHRcdFx0dGhpcy5zbGlkZXNDb250YWluZXIuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gYCR7IHRoaXMuc3BlZWQgfW1zYDtcblxuXHRcdFx0Ly8gUmVzdGFydCBhbmltYXRpb24uXG5cdFx0XHRpZiAoIHRoaXMuYXV0b1N0YXJ0ICkge1xuXHRcdFx0XHR0aGlzLmFuaW1hdGlvbiA9IHNldEludGVydmFsKCAoKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5jdXJyZW50ID0gKCB0aGlzLmN1cnJlbnQgKyAxICkgJSB0aGlzLnNsaWRlcy5sZW5ndGg7XG5cdFx0XHRcdFx0dGhpcy5jaGFuZ2VTbGlkZSggJ25leHQnLCB0aGlzLmN1cnJlbnQgKTtcblx0XHRcdFx0fSwgdGhpcy5kdXJhdGlvbiApO1xuXHRcdFx0fVxuXHRcdH0sIGZhbHNlICk7XG5cdH1cblxuXHQvKipcblx0ICogQ2hhbmdlIHNsaWRlcyB3aXRoIHRoZSBrZXlib2FyZCA8LSAtPlxuXHQgKi9cblx0a2V5RXZlbnRzKCkge1xuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdrZXlkb3duJywgKCBlICkgPT4ge1xuXHRcdFx0Ly8gU3RvcCBhbmltYXRpb24gdG8gcHJldmVudCBvdmVybGFwcGluZy5cblx0XHRcdGNsZWFySW50ZXJ2YWwoIHRoaXMuYW5pbWF0aW9uICk7XG5cblx0XHRcdHN3aXRjaCAoIGUua2V5ICkge1xuXHRcdFx0XHRjYXNlICdBcnJvd0xlZnQnIDpcblx0XHRcdFx0XHRpZiAoICEgdGhpcy5zbGlkZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCAnaXMtY2hhbmdpbmcnICkgKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnNsaWRlci5jbGFzc0xpc3QuYWRkKCAnaXMtY2hhbmdpbmcnICk7XG5cdFx0XHRcdFx0XHRpZiAoIHRoaXMuY3VycmVudCA+IDAgKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMuY3VycmVudC0tO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5jdXJyZW50ID0gdGhpcy5zbGlkZXMubGVuZ3RoIC0gMTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHRoaXMuY2hhbmdlU2xpZGUoICdwcmV2JyApO1xuXHRcdFx0XHRcdFx0c2V0VGltZW91dCggKCkgPT4gdGhpcy5zbGlkZXIuY2xhc3NMaXN0LnJlbW92ZSggJ2lzLWNoYW5naW5nJyApLCB0aGlzLnNwZWVkICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2UgJ0Fycm93UmlnaHQnOlxuXHRcdFx0XHRcdGlmICggISB0aGlzLnNsaWRlci5jbGFzc0xpc3QuY29udGFpbnMoICdpcy1jaGFuZ2luZycgKSApIHtcblx0XHRcdFx0XHRcdHRoaXMuc2xpZGVyLmNsYXNzTGlzdC5hZGQoICdpcy1jaGFuZ2luZycgKTtcblx0XHRcdFx0XHRcdHRoaXMuY3VycmVudCA9ICggdGhpcy5jdXJyZW50ICsgMSApICUgdGhpcy5zbGlkZXMubGVuZ3RoO1xuXHRcdFx0XHRcdFx0dGhpcy5jaGFuZ2VTbGlkZSggJ25leHQnICk7XG5cdFx0XHRcdFx0XHRzZXRUaW1lb3V0KCAoKSA9PiB0aGlzLnNsaWRlci5jbGFzc0xpc3QucmVtb3ZlKCAnaXMtY2hhbmdpbmcnICksIHRoaXMuc3BlZWQgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFJlc3RhcnQgYW5pbWF0aW9uLlxuXHRcdFx0aWYgKCB0aGlzLmF1dG9TdGFydCApIHtcblx0XHRcdFx0dGhpcy5hbmltYXRpb24gPSBzZXRJbnRlcnZhbCggKCkgPT4ge1xuXHRcdFx0XHRcdHRoaXMuY3VycmVudCA9ICggdGhpcy5jdXJyZW50ICsgMSApICUgdGhpcy5zbGlkZXMubGVuZ3RoO1xuXHRcdFx0XHRcdHRoaXMuY2hhbmdlU2xpZGUoICduZXh0JywgdGhpcy5jdXJyZW50ICk7XG5cdFx0XHRcdH0sIHRoaXMuZHVyYXRpb24gKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cdH1cblxuXHQvKipcblx0ICogQXV0byBzdGFydCBhbmltYXRpb25cblx0ICovXG5cdHN0YXJ0QW5pbWF0aW9uKCkge1xuXHRcdHRoaXMuYW5pbWF0aW9uID0gc2V0SW50ZXJ2YWwoICggaW5kZXggKSA9PiB7XG5cdFx0XHR0aGlzLmN1cnJlbnQgPSAoIHRoaXMuY3VycmVudCArIDEgKSAlIHRoaXMuc2xpZGVzLmxlbmd0aDtcblx0XHRcdHRoaXMuY2hhbmdlU2xpZGUoICduZXh0JywgaW5kZXggKTtcblx0XHR9LCB0aGlzLmR1cmF0aW9uICk7XG5cblx0XHRpZiAoIHRoaXMuc3RvcE9uSG92ZXIgKSB7XG5cdFx0XHQvLyBTdG9wIGFuaW1hdGlvbiBvbiBob3Zlci5cblx0XHRcdHRoaXMuc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZWVudGVyJywgKCkgPT4gY2xlYXJJbnRlcnZhbCggdGhpcy5hbmltYXRpb24gKSApO1xuXG5cdFx0XHQvLyBSZXN1bWUgYW5pbWF0aW9uIHdoZW4gbG9zdCBob3Zlci5cblx0XHRcdHRoaXMuc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZWxlYXZlJywgKCkgPT4ge1xuXHRcdFx0XHR0aGlzLmFuaW1hdGlvbiA9IHNldEludGVydmFsKCAoKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5jdXJyZW50ID0gKCB0aGlzLmN1cnJlbnQgKyAxICkgJSB0aGlzLnNsaWRlcy5sZW5ndGg7XG5cdFx0XHRcdFx0dGhpcy5jaGFuZ2VTbGlkZSggJ25leHQnLCB0aGlzLmN1cnJlbnQgKTtcblx0XHRcdFx0fSwgdGhpcy5kdXJhdGlvbiApO1xuXHRcdFx0fSApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBTdG9wIGFuZCByZXN0YXJ0IGFuaW1hdGlvbiBvbiBjbGljayB0byBwcmV2ZW50IG92ZXJsYXBwaW5nLlxuXHRcdFx0dGhpcy5zbGlkZXIucGFyZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRcdGNsZWFySW50ZXJ2YWwoIHRoaXMuYW5pbWF0aW9uICk7XG5cdFx0XHRcdHRoaXMuYW5pbWF0aW9uID0gc2V0SW50ZXJ2YWwoICgpID0+IHtcblx0XHRcdFx0XHR0aGlzLmN1cnJlbnQgPSAoIHRoaXMuY3VycmVudCArIDEgKSAlIHRoaXMuc2xpZGVzLmxlbmd0aDtcblx0XHRcdFx0XHR0aGlzLmNoYW5nZVNsaWRlKCAnbmV4dCcsIHRoaXMuY3VycmVudCApO1xuXHRcdFx0XHR9LCB0aGlzLmR1cmF0aW9uICk7XG5cdFx0XHR9ICk7XG5cdFx0fVxuXG5cdFx0aWYgKCB0aGlzLnBhdXNlVW5mb2N1c2VkICkge1xuXHRcdFx0Ly8gT2JzZXJ2ZSB3aGVuIHRoZSBzbGlkZXIgZ2V0cyBvdXQgb2Ygd2luZG93IHZpc2liaWxpdHkuXG5cdFx0XHRjb25zdCBPYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcblx0XHRcdFx0KCBlbnRyaWVzLCBvYnNlcnZlciApID0+IHtcblx0XHRcdFx0XHRlbnRyaWVzLmZvckVhY2goICggZW50cnkgKSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAoICEgZW50cnkuaXNJbnRlcnNlY3RpbmcgKSB7XG5cdFx0XHRcdFx0XHRcdGNsZWFySW50ZXJ2YWwoIHRoaXMuYW5pbWF0aW9uICk7XG5cdFx0XHRcdFx0XHRcdHRoaXMudHJpZ2dlck9ic2VydmVyID0gdHJ1ZTtcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoIHRoaXMudHJpZ2dlck9ic2VydmVyICkge1xuXHRcdFx0XHRcdFx0XHR0aGlzLmFuaW1hdGlvbiA9IHNldEludGVydmFsKCAoIGluZGV4ICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMuY3VycmVudCA9ICggdGhpcy5jdXJyZW50ICsgMSApICUgdGhpcy5zbGlkZXMubGVuZ3RoO1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMuY2hhbmdlU2xpZGUoICduZXh0JywgaW5kZXggKTtcblx0XHRcdFx0XHRcdFx0fSwgdGhpcy5kdXJhdGlvbiApO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHJvb3Q6IG51bGwsXG5cdFx0XHRcdFx0cm9vdE1hcmdpbjogJzBweCcsXG5cdFx0XHRcdFx0dGhyZXNob2xkOiAwLjMsXG5cdFx0XHRcdH0sXG5cdFx0XHQpO1xuXHRcdFx0T2JzZXJ2ZXIub2JzZXJ2ZSggdGhpcy5zbGlkZXIgKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogQ2hlY2sgdGhlIHN0YXRlIG9mIHRoZSBwYWdlIGFuZCBhZGQgYSBsb2FkaW5nIHNjcmVlbiBiZWZvcmUgeW91IGNhbiBpbnRlcmFjdFxuXHQgKlxuXHQgKiBAcGFyYW0geyBib29sZWFuIH0gc3RhdGUgVGhlIHN0YXRlIG9mIHRoZSBwYWdlLiBMb2FkaW5nIHN0YXRlID0gZmFsc2UuXG5cdCAqL1xuXHRsb2FkaW5nRXZlbnQoIHN0YXRlICkge1xuXHRcdGlmICggIXN0YXRlICkge1xuXHRcdFx0dGhpcy5sb2FkaW5nU3Bpbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdkaXYnICk7XG5cdFx0XHR0aGlzLmxvYWRpbmdTcGlubmVyLmNsYXNzTGlzdC5hZGQoICd3cC1ibG9jay1tZ2Jsb2Nrc2xpZGVyLXNsaWRlcl9fbG9hZGluZycgKTtcblx0XHRcdHRoaXMubG9hZGluZ1NwaW5uZXIuaW5uZXJIVE1MID0gYDxwPjxzcGFuIGNsYXNzPVwic2NyZWVuLXJlYWRlci10ZXh0XCI+JHsgdGhpcy5pMThuLmxvYWRpbmcgfTwvc3Bhbj48L3A+YDtcblx0XHRcdHRoaXMuc2xpZGVyLnBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoIHRoaXMubG9hZGluZ1NwaW5uZXIgKTtcblx0XHR9XG5cdH1cbn1cblxuKCBmdW5jdGlvbiggd2luZG93ICkge1xuXHQvLyBNYWtlIHRoZSBzbGlkZXIgZm9yIGdsb2JhbCBhY2Nlc3MsIHNhdmUgaW4gdGhlIHdpbmRvdy5cblx0aWYgKCB0eXBlb2YoIHdpbmRvdy5NR0Jsb2NrU2xpZGVyICkgPT09ICd1bmRlZmluZWQnICkge1xuXHRcdHdpbmRvdy5NR0Jsb2NrU2xpZGVyID0gTUdCbG9ja1NsaWRlcjtcblx0fVxufSApKCB3aW5kb3cgKTtcbiJdLCJuYW1lcyI6WyJNR0Jsb2NrU2xpZGVyIiwic2VsZWN0b3IiLCJ0aGVtZSIsImRpcmVjdGlvbk5hdiIsImhpZGVEaXJlY3Rpb25zIiwiY29udHJvbE5hdiIsImhpZGVDb250cm9scyIsInRodW1ic05hdiIsImhpZGVUaHVtYnMiLCJhdXRvU3RhcnQiLCJzdG9wT25Ib3ZlciIsInBhdXNlVW5mb2N1c2VkIiwid2FpdFZpZGVvIiwic3dpcGVOYXYiLCJhbmltYXRpb24iLCJ2ZXJ0aWNhbCIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsInNwZWVkIiwiYXJyb3dUeXBlIiwicGFnaW5hdGlvblR5cGUiLCJhdXRvSGVpZ2h0IiwiY3VycmVudCIsImxvYWRTdGF0ZSIsInRyaWdnZXJPYnNlcnZlciIsInNsaWRlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNsaWRlc0NvbnRhaW5lciIsInNsaWRlcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpMThuIiwibWdibG9ja3NsaWRlckkxOG4iLCJhZGRFdmVudExpc3RlbmVyIiwiaW5pdFNsaWRlciIsIndpbmRvdyIsInBhcmVudEVsZW1lbnQiLCJyZW1vdmVDaGlsZCIsImxvYWRpbmdTcGlubmVyIiwic3R5bGUiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJ0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb24iLCJjbGFzc0xpc3QiLCJhZGQiLCJsZW5ndGgiLCJjcmVhdGVDb250cm9scyIsImNoYW5nZVNsaWRlIiwibG9hZGluZ0V2ZW50Iiwic3dpcGVFdmVudHMiLCJrZXlFdmVudHMiLCJzdGFydEFuaW1hdGlvbiIsImNhbGNNaW5IZWlnaHQiLCJtaW5IZWlnaHQiLCJmb3JFYWNoIiwic2xpZGUiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJoZWlnaHQiLCJNYXRoIiwiZmxvb3IiLCJkaXJlY3Rpb25OYXZpZ2F0aW9uIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsInByZXYiLCJzaG93UHJldlNsaWRlIiwibmV4dCIsInNob3dOZXh0U2xpZGUiLCJhcHBlbmRDaGlsZCIsIm5hdlByZXYiLCJuYXZOZXh0IiwiZSIsInRhcmdldCIsImNvbnRhaW5zIiwic2V0VGltZW91dCIsInJlbW92ZSIsImNvbnRyb2xOYXZpZ2F0aW9uIiwiaW5kZXgiLCJzaG93U2xpZGUiLCJpbnNlcnRBZGphY2VudEVsZW1lbnQiLCJuYXZEb3RzIiwiZG90IiwiY2hhbmdlQ29udHJvbHMiLCJ0aHVtYk5hdmlnYXRpb24iLCJzbGlkZVNyYyIsInNyYyIsImltYWdlRm9ybWF0Iiwic3BsaXQiLCJwb3AiLCJpbWFnZVBhdGgiLCJzbGljZSIsInRodW1icyIsImltZyIsImRpcmVjdGlvbiIsInBvc2l0aW9uIiwidmlkZW9EdXJhdGlvbiIsImNlaWwiLCJwbGF5IiwicGF1c2UiLCJhdXRvcGxheSIsImNsZWFySW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsIm5leHRJbmRleCIsIm9yZGVyU2xpZGVzIiwiY29udHJvbCIsImN1cnJlbnRDbGFzcyIsImVsIiwidW5kZWZpbmVkIiwicHJldmlvdXNFbGVtZW50U2libGluZyIsIm5leHRFbGVtZW50U2libGluZyIsInRvdWNoc3RhcnRYIiwic3RhcnRUb3VjaCIsInRvdWNoZXMiLCJjbGllbnRYIiwiY2xpZW50TGVmdCIsInRyYW5zZm9ybSIsInJlbW92ZVByb3BlcnR5Iiwia2V5IiwiT2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJvYnNlcnZlciIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJyb290Iiwicm9vdE1hcmdpbiIsInRocmVzaG9sZCIsIm9ic2VydmUiLCJzdGF0ZSIsImxvYWRpbmciXSwic291cmNlUm9vdCI6IiJ9