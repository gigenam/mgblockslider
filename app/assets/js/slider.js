/**
 * Main slider class
 *
 * @since 1.0.0
 */

class MGBlockSlider {
	constructor( {
		selector       = '.wp-block-mgblockslider-slider',
		theme          = 'light',
		directionNav   = true,
		hideDirections = true,
		controlNav     = false,
		hideControls   = false,
		thumbsNav      = false,
		hideThumbs     = false,
		autoStart      = true,
		stopOnHover    = true,
		pauseUnfocused = true,
		waitVideo      = false,
		swipeNav       = true,
		animation      = 'slide',
		vertical       = false,
		transition     = 'ease',
		duration       = 5.0,
		speed          = 0.5,
		arrowType      = '',
		paginationType = '',
		autoHeight     = true,
	} = {} ) {
		this.selector        = selector;
		this.theme           = theme;
		this.directionNav    = directionNav;
		this.hideDirections  = hideDirections;
		this.controlNav      = controlNav;
		this.hideControls    = hideControls;
		this.thumbsNav       = thumbsNav;
		this.hideThumbs      = hideThumbs;
		this.autoStart       = autoStart;
		this.stopOnHover     = stopOnHover;
		this.pauseUnfocused  = pauseUnfocused;
		this.waitVideo       = waitVideo;
		this.swipeNav        = swipeNav;
		this.animation       = animation;
		this.vertical        = vertical;
		this.transition      = transition;
		this.duration        = duration * 1000;
		this.speed           = speed * 1000;
		this.arrowType       = arrowType;
		this.paginationType  = paginationType;
		this.autoHeight      = autoHeight;
		this.current         = 0;
		this.loadState       = false;
		this.triggerObserver = false;
		this.slider          = document.querySelector( `${ this.selector } .wp-block-mgblockslider-slider__container` );
		this.slidesContainer = document.querySelector( `${ this.selector } .wp-block-mgblockslider-slides__container` );
		this.slides          = document.querySelectorAll( `${ this.selector } .wp-block-mgblockslider-slide` );
		this.i18n            = mgblocksliderI18n;

		if ( this.slider ) {
			document.addEventListener( 'DOMContentLoaded', () => this.initSlider() );
			window.addEventListener( 'load', () => {
				this.loadState = true;
				this.slider.parentElement.removeChild( this.loadingSpinner );
			} );
		}
	}

	/**
	 * Init slider
	 */
	initSlider() {
		// Transition styles.
		if ( 'none' !== this.animation ) {
			this.slidesContainer.style.transitionDuration = `${ this.speed }ms`;
			this.slidesContainer.style.transitionTimingFunction = this.transition;
		}

		// Themes.
		this.slider.parentElement.classList.add( `${ this.theme }-theme` );

		// Animations.
		this.slider.classList.add( `is-${ this.animation }` );

		// Vertical animations.
		if ( this.vertical ) {
			this.slider.classList.add( 'is-vertical' );
		}
		this.slides[ this.current ].classList.add( 'wp-block-mgblockslider-slide__current' );

		// If the slider only contains 2 slides, add a custom class to prevent
		// breaking the animations.
		if ( this.slides.length === 2 ) {
			this.slidesContainer.classList.add( 'wp-block-mgblockslider-slides__container--2-slides' );
		}

		this.createControls();
		this.changeSlide();
		this.loadingEvent( this.loadState );

		if ( this.swipeNav ) {
			this.swipeEvents();
			this.keyEvents();
		}

		if ( this.autoStart ) {
			this.startAnimation();
		}

		if ( this.autoHeight ) {
			this.calcMinHeight();
			this.slider.parentElement.classList.add( 'auto-height' );
		}
	}

	/**
	 * Calculate the max height of all slides
	 */
	calcMinHeight() {
		let minHeight = 0;
		this.slides.forEach( ( slide ) => {
			if ( slide.getBoundingClientRect().height > minHeight ) {
				minHeight = slide.getBoundingClientRect().height;
			}
			slide.style.height = `${ Math.floor( minHeight ) }px`;
		} );
	}

	/**
	 * Create controls for change slides
	 */
	createControls() {
		//
		// Directional arrows
		// --------------------------------------
		if ( this.directionNav ) {
			const directionNavigation = document.createElement( 'div' );
			directionNavigation.classList.add( 'wp-block-mgblockslider-slider__control', 'wp-block-mgblockslider-slider__control__arrows' );
			directionNavigation.innerHTML = `
				<p class="wp-block-mgblockslider-slider__control__arrow wp-block-mgblockslider-slider__control__arrow--prev" title="${ this.i18n.prev }">
					<span class="screen-reader-text">${ this.i18n.showPrevSlide }</span>
				</p>
				<p class="wp-block-mgblockslider-slider__control__arrow wp-block-mgblockslider-slider__control__arrow--next" title="${ this.i18n.next }">
					<span class="screen-reader-text">${ this.i18n.showNextSlide }</span>
				</p>`;

			if ( '' !== this.arrowType ) {
				directionNavigation.classList.add( `wp-block-mgblockslider-slider__control--${ this.arrowType }` );
			}

			this.slider.appendChild( directionNavigation );
			const navPrev = directionNavigation.querySelector( `.wp-block-mgblockslider-slider__control__arrow--prev` );
			const navNext = directionNavigation.querySelector( `.wp-block-mgblockslider-slider__control__arrow--next` );

			// Change slides.
			navPrev.addEventListener( 'click', ( e ) => {
				if ( ! e.target.classList.contains( 'is-changing' ) ) {
					e.target.classList.add( 'is-changing' );
					if ( this.current > 0 ) {
						this.current--;
					} else {
						this.current = this.slides.length - 1;
					}
					this.changeSlide( 'prev' );
					setTimeout( () => e.target.classList.remove( 'is-changing' ), this.speed );
				}
			} );

			navNext.addEventListener( 'click', ( e ) => {
				if ( ! e.target.classList.contains( 'is-changing' ) ) {
					e.target.classList.add( 'is-changing' );
					this.current = ( this.current + 1 ) % this.slides.length;
					this.changeSlide( 'next' );
					setTimeout( () => e.target.classList.remove( 'is-changing' ), this.speed );
				}
			} );

			// Add classes to the slider.
			this.slider.classList.add( 'directional-nav' );

			if ( this.hideDirections ) {
				this.slider.classList.add( 'directional-nav--is-hidden' );
			}
		}

		//
		// Control dots
		// --------------------------------------
		if ( this.controlNav ) {
			const controlNavigation = document.createElement( 'ul' );
			controlNavigation.classList.add( 'wp-block-mgblockslider-slider__control', 'wp-block-mgblockslider-slider__control__dots' );
			this.slides.forEach( ( slide, index ) => controlNavigation.innerHTML += `
				<li class="wp-block-mgblockslider-slider__control__dot" title="${ index + 1 }">
					<span class="screen-reader-text">${ this.i18n.showSlide } ${ index + 1 }</span>
				</li>`,
			);

			if ( '' !== this.paginationType ) {
				controlNavigation.classList.add( `wp-block-mgblockslider-slider__control--${ this.paginationType }` );
			}

			this.slider.insertAdjacentElement( 'afterend', controlNavigation );
			this.navDots = document.querySelectorAll( `${ this.selector } .wp-block-mgblockslider-slider__control__dot` );
			this.navDots[ this.current ].classList.add( 'wp-block-mgblockslider-slider__control__dot--current' );

			// Change slides and dots.
			this.navDots.forEach( ( dot, index ) => {
				dot.addEventListener( 'click', () => {
					this.changeControls( this.navDots, 'wp-block-mgblockslider-slider__control__dot--current', index );
					this.changeSlide( 'dots', index );

					// Check the current index and change slides in the correct
					// order.
					if ( index === this.current + 1 ) {
						this.changeSlide( false, index );
					} else if ( index === this.current - 1 ) {
						this.changeSlide( false, index );
					}
					this.current = index;
				} );
			} );

			// Add classes to the slider.
			this.slider.classList.add( 'control-nav' );

			if ( this.hideControls ) {
				this.slider.classList.add( 'control-nav--is-hidden' );
			}
		}

		//
		// Thumbnails
		// --------------------------------------
		if ( this.thumbsNav ) {
			const thumbNavigation = document.createElement( 'ul' );
			thumbNavigation.classList.add( 'wp-block-mgblockslider-slider__thumbnails' );

			if ( this.slider.classList.contains( 'alignwide' ) ) {
				thumbNavigation.classList.add( 'alignwide' );
			}
			if ( this.slider.classList.contains( 'alignfull' ) ) {
				thumbNavigation.classList.add( 'alignfull' );
			}

			this.slides.forEach( ( slide, index ) => {
				// Add thumbnails based on the images file name or with a generic
				// image.
				let slideSrc = slide.querySelector( 'img' ) ? slide.querySelector( 'img' ).src : null;

				if ( slideSrc ) {
					const imageFormat = slideSrc.split( '.' ).pop();
					const imagePath = slideSrc.slice( 0, slideSrc.length - imageFormat.length - 1 );

					thumbNavigation.innerHTML += `
						<li class="wp-block-mgblockslider-slider__thumb">
							<img src="${ imagePath }.${ imageFormat }" alt="${ this.i18n.slide } ${ index + 1 }">
							<span class="screen-reader-text">${ this.i18n.showSlide } ${ index + 1 }</span>
						</li>`;
				} else {
					slideSrc = slide.querySelector( 'video' ) ? 'video' : 'img';
					thumbNavigation.innerHTML += `
						<li class="wp-block-mgblockslider-slider__thumb wp-block-mgblockslider-slider__thumb--${ slideSrc }">
							<span class="screen-reader-text">${ this.i18n.showSlide } ${ index + 1 }</span>
						</li>`;
				}
			} );
			this.slider.insertAdjacentElement( 'afterend', thumbNavigation );
			this.thumbs = document.querySelectorAll( `${ this.selector } .wp-block-mgblockslider-slider__thumbnails .wp-block-mgblockslider-slider__thumb` );
			this.thumbs[ this.current ].classList.add( 'wp-block-mgblockslider-slider__thumb--current' );

			// Change slides and thumbnails.
			this.thumbs.forEach( ( img, index ) => {
				img.addEventListener( 'click', () => {
					this.changeControls( this.navDots, 'wp-block-mgblockslider-slider__control__dot--current', index );
					this.changeSlide( 'dots', index );

					// Check the current index and change slides in the correct order.
					if ( index === this.current + 1 ) {
						this.changeSlide( false, index );
					} else if ( index === this.current - 1 ) {
						this.changeSlide( false, index );
					}
					this.current = index;
				} );
			} );

			// Add classes to the slider.
			this.slider.classList.add( 'thumbnails-nav' );

			if ( this.hideThumbs ) {
				this.slider.classList.add( 'thumbnails-nav--is-hidden' );
			}
		}
	}

	/**
	 * Change slides depending the direction
	 *
	 * @param { string } direction The direction of the slides.
	 * @param { number } index     The position number of the current slide.
	 */
	changeSlide( direction, index = this.current ) {
		this.slides.forEach( ( slide, position ) => {
			slide.classList.remove(
				'wp-block-mgblockslider-slide__current',
				'wp-block-mgblockslider-slide__prev',
				'wp-block-mgblockslider-slide__next',
			);

			setTimeout( () => {
				this.slidesContainer.classList.remove(
					'wp-block-mgblockslider-slides__container--prev',
					'wp-block-mgblockslider-slides__container--next',
				);
			}, this.speed );

			// If there are videos.
			if ( slide.querySelector( 'video' ) ) {
				slide.classList.add( 'wp-block-mgblockslider-slide--has-video' );
				const videoDuration = Math.ceil( slide.querySelector( 'video' ).duration ) * 1000;

				// Pause the video on change slide.
				if ( this.pauseUnfocused ) {
					if ( position === index ) {
						slide.querySelector( 'video' ).play();
					} else {
						slide.querySelector( 'video' ).pause();
					}
				}

				// Stop animation and wait until the video ends.
				if ( position === index && this.waitVideo ) {
					if ( slide.querySelector( 'video' ).autoplay ) {
						clearInterval( this.animation );
						this.animation = setInterval( ( nextIndex ) => {
							this.current = ( this.current + 1 ) % this.slides.length;
							this.changeSlide( 'next', nextIndex );
						}, videoDuration + 250 );
					} else {
						this.animation = setInterval( ( nextIndex ) => {
							this.current = ( this.current + 1 ) % this.slides.length;
							this.changeSlide( 'next', nextIndex );
						}, this.duration );
					}
				}
			}
		} );

		if ( 'none' !== this.animation || 'fade' !== this.animation ) {
			this.orderSlides( index );

			if ( 'next' === direction ) {
				this.slidesContainer.classList.add( 'wp-block-mgblockslider-slides__container--next' );
			}
			if ( 'prev' === direction ) {
				this.slidesContainer.classList.add( 'wp-block-mgblockslider-slides__container--prev' );
			}
		}

		this.slides[ index ].classList.add( 'wp-block-mgblockslider-slide__current' );

		if ( this.controlNav ) {
			this.changeControls( this.navDots, 'wp-block-mgblockslider-slider__control__dot--current', index );
		}

		if ( this.thumbsNav ) {
			this.changeControls( this.thumbs, 'wp-block-mgblockslider-slider__thumb--current', index );
		}
	}

	/**
	 * Change the current element control
	 *
	 * @param { Object } control      The elements to control and interact.
	 * @param { string } currentClass The current control class to modify.
	 * @param { number } index        The position number of the current slide.
	 */
	changeControls( control, currentClass, index = this.current ) {
		if ( typeof( control ) !== 'undefined' ) {
			control.forEach( ( el ) => el.classList.remove( currentClass ) );
			control[ index ].classList.add( currentClass );
		}
	}

	/**
	 * Order slides for correct animations
	 *
	 * @param { number } index The position number of the current slide.
	 */
	orderSlides( index ) {
		if ( this.slides.length > 2 ) {
			// Prevent null on previous sibling of current.
			if ( undefined != this.slides[ index ].previousElementSibling ) {
				this.slides[ index ].previousElementSibling.classList.add( 'wp-block-mgblockslider-slide__prev' );
			} else {
				this.slides[ this.slides.length - 1 ].classList.add( 'wp-block-mgblockslider-slide__prev' );
			}

			// Prevent null on next sibling of current.
			if ( undefined != this.slides[ index ].nextElementSibling ) {
				this.slides[ index ].nextElementSibling.classList.add( 'wp-block-mgblockslider-slide__next' );
			} else {
				this.slides[ 0 ].classList.add( 'wp-block-mgblockslider-slide__next' );
			}
		}
	}

	/**
	 * Change slides with a swipe on touch screens
	 */
	swipeEvents() {
		let touchstartX = 0;
		let startTouch  = 0;

		this.slidesContainer.addEventListener( 'touchstart', ( e ) => {
			// Stop animation to prevent overlapping.
			clearInterval( this.animation );

			this.slider.classList.add( 'dragging' );
			this.slidesContainer.style.transitionDuration = '0ms';
			startTouch = e.touches[ 0 ].clientX - this.slides[ this.current ].clientLeft;
		}, false );

		this.slidesContainer.addEventListener( 'touchmove', ( e ) => {
			touchstartX = e.touches[ 0 ].clientX;
			this.slides[ this.current ].style.transform = `translate3d(${ touchstartX - startTouch }px, 0, 0)`;
			this.slidesContainer.querySelector( '.wp-block-mgblockslider-slide__prev' ).style.transform = `translate3d(calc(${ touchstartX - startTouch }px - 100%), 0, 0)`;
			this.slidesContainer.querySelector( '.wp-block-mgblockslider-slide__next' ).style.transform = `translate3d(calc(${ touchstartX - startTouch }px + 100%), 0, 0)`;
		} );

		this.slidesContainer.addEventListener( 'touchend', ( e ) => {
			this.slidesContainer.querySelector( '.wp-block-mgblockslider-slide__current' ).style.removeProperty( 'transform' );
			this.slidesContainer.querySelector( '.wp-block-mgblockslider-slide__prev' ).style.removeProperty( 'transform' );
			this.slidesContainer.querySelector( '.wp-block-mgblockslider-slide__next' ).style.removeProperty( 'transform' );

			if ( touchstartX - startTouch > 100 ) {
				if ( this.current > 0 ) {
					this.current--;
				} else {
					this.current = this.slides.length - 1;
				}
				this.changeSlide( 'prev' );
			} else if ( touchstartX - startTouch < 100 ) {
				this.current = ( this.current + 1 ) % this.slides.length;
				this.changeSlide( 'next' );
			}

			this.slider.classList.remove( 'dragging' );
			this.slidesContainer.style.transitionDuration = `${ this.speed }ms`;

			// Restart animation.
			if ( this.autoStart ) {
				this.animation = setInterval( () => {
					this.current = ( this.current + 1 ) % this.slides.length;
					this.changeSlide( 'next', this.current );
				}, this.duration );
			}
		}, false );
	}

	/**
	 * Change slides with the keyboard <- ->
	 */
	keyEvents() {
		document.addEventListener( 'keydown', ( e ) => {
			// Stop animation to prevent overlapping.
			clearInterval( this.animation );

			switch ( e.key ) {
				case 'ArrowLeft' :
					if ( ! this.slider.classList.contains( 'is-changing' ) ) {
						this.slider.classList.add( 'is-changing' );
						if ( this.current > 0 ) {
							this.current--;
						} else {
							this.current = this.slides.length - 1;
						}
						this.changeSlide( 'prev' );
						setTimeout( () => this.slider.classList.remove( 'is-changing' ), this.speed );
					}
					break;

				case 'ArrowRight':
					if ( ! this.slider.classList.contains( 'is-changing' ) ) {
						this.slider.classList.add( 'is-changing' );
						this.current = ( this.current + 1 ) % this.slides.length;
						this.changeSlide( 'next' );
						setTimeout( () => this.slider.classList.remove( 'is-changing' ), this.speed );
					}
					break;
			}

			// Restart animation.
			if ( this.autoStart ) {
				this.animation = setInterval( () => {
					this.current = ( this.current + 1 ) % this.slides.length;
					this.changeSlide( 'next', this.current );
				}, this.duration );
			}
		} );
	}

	/**
	 * Auto start animation
	 */
	startAnimation() {
		this.animation = setInterval( ( index ) => {
			this.current = ( this.current + 1 ) % this.slides.length;
			this.changeSlide( 'next', index );
		}, this.duration );

		if ( this.stopOnHover ) {
			// Stop animation on hover.
			this.slider.addEventListener( 'mouseenter', () => clearInterval( this.animation ) );

			// Resume animation when lost hover.
			this.slider.addEventListener( 'mouseleave', () => {
				this.animation = setInterval( () => {
					this.current = ( this.current + 1 ) % this.slides.length;
					this.changeSlide( 'next', this.current );
				}, this.duration );
			} );
		} else {
			// Stop and restart animation on click to prevent overlapping.
			this.slider.parentElement.addEventListener( 'click', () => {
				clearInterval( this.animation );
				this.animation = setInterval( () => {
					this.current = ( this.current + 1 ) % this.slides.length;
					this.changeSlide( 'next', this.current );
				}, this.duration );
			} );
		}

		if ( this.pauseUnfocused ) {
			// Observe when the slider gets out of window visibility.
			const Observer = new IntersectionObserver(
				( entries, observer ) => {
					entries.forEach( ( entry ) => {
						if ( ! entry.isIntersecting ) {
							clearInterval( this.animation );
							this.triggerObserver = true;
						} else if ( this.triggerObserver ) {
							this.animation = setInterval( ( index ) => {
								this.current = ( this.current + 1 ) % this.slides.length;
								this.changeSlide( 'next', index );
							}, this.duration );
						}
					} );
				},
				{
					root: null,
					rootMargin: '0px',
					threshold: 0.3,
				},
			);
			Observer.observe( this.slider );
		}
	}

	/**
	 * Check the state of the page and add a loading screen before you can interact
	 *
	 * @param { boolean } state The state of the page. Loading state = false.
	 */
	loadingEvent( state ) {
		if ( !state ) {
			this.loadingSpinner = document.createElement( 'div' );
			this.loadingSpinner.classList.add( 'wp-block-mgblockslider-slider__loading' );
			this.loadingSpinner.innerHTML = `<p><span class="screen-reader-text">${ this.i18n.loading }</span></p>`;
			this.slider.parentElement.appendChild( this.loadingSpinner );
		}
	}
}

( function( window ) {
	// Make the slider for global access, save in the window.
	if ( typeof( window.MGBlockSlider ) === 'undefined' ) {
		window.MGBlockSlider = MGBlockSlider;
	}
} )( window );
