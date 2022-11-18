=== MG Block Slider ===
Contributors: gigenam
Tags: block, editor, slider, slideshow, content, image, video
Requires at least: 5.9
Tested up to: 6.1
Stable tag: 1.2.1
Requires PHP: 7.0
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/old-licenses/gpl-2.0.html

A simple slideshow block to use it in any block editor with any type of content. Post, pages, widgets. Anything and anywhere where you want.

== Description ==

Make a slideshow of almost any other default block. Images, videos, groups, columns, etc. With a simple block interface and a couple of configurations you can customize and add as many slideshows in your content as you want.

In the first step when you add a new slide, you will see only a couple of blocks to select. This is for simplicity and to highlight the most common ones (and most tested), but you can add anything inside. For example, you want to slide posts, widgets, files, even WooCommerce products? Add a group block, or a cover, or columns and put any block inside.

A couple of examples of what you can configure with this plugin.

- Multiple navigations (arrows, dots, thumbnails).
- Auto start changing slides and stop on hover.
- Change slides with touch gestures or arrow keys.
- Multiple animations.
- Multiple transitions and the possibility to add custom CSS transitions.
- Custom time between slides and changing speed.
- Custom interactions for videos.
- Light and Dark theme.
- Lightbox support.
- A couple of arrows and dots types to choose.
- Developer friendly, you can add your own assets with a couple of CSS lines.

Go to the [Wiki](https://github.com/gigenam/mgblockslider/wiki) for the full documentation on how to use and/or customize everything.

== Installation ==

Install it like any other plugin, via the WordPress plugin directory inside your WordPress administration or by downloading and uploading the .zip file to your server at /wp-content/plugins/.

Go to the [Wiki](https://github.com/gigenam/mgblockslider/wiki) for the full documentation on how to use and/or customize everything.

== Frequently Asked Questions ==

= How can I change the style of the content I want to diplay? =

This plugin only adds styles to it's own elements (arrows, dots, etc). All the styles for paragraphs, headings, columns, covers, or whatever block you add depends on the theme you are using or the block option you can tweak, like colors, spacings, typography, etc.

= What type of alignments are supported? =

If your theme support block alignments:

- None (witch is the content width defined by the theme).
- Left.
- Right.
- Wide screen.
- Full width.

= Can I add custom colors or themes? =

Not for the slider elements (arrows, dots, etc) unless you have a bit of knowledge with CSS and WP themes modification (or using plugins to help). In this case is pretty easy because was designed to be customizable.

If you have some cool ideas for new themes/styles, let me know. Any help for improvements is very welcome.

For easy content customization, the recommended way is editing the inner blocks. For example, add a paragraph block and set up the custom styles in that block. Want more separation between the slider and content? Add a group block or similar and configure the spacing, alignments, etc.

= Can I add custom classes for better CSS modifications? =

Yes, of course. Like any other block, you can add as many classes as you want. You can add custom classes for the main slider block, and for the individual slides.

Also, when you configure the title, you are adding a custom ID to the main slider container element.

= How translations work? =

By default everything is in English and comes with a couple of Spanish types:

- `es_ES`
- `es_AR`
- `es_MX`

Every string of text is translation ready and you can learn how to make your own translations at the [Wiki](https://github.com/gigenam/mgblockslider/wiki).

= Where are the PRO features? =

There aren't. First and most important, I made this for myself and my clients, and thats why it has minimum features and is easy to extend. If you want hundreds of features with a ton of buttons and a really bloated UI, this is not for you.

Do you have cool ideas for more options/themes or want to contribute to this project? Go to the [GitHub Repo](https://github.com/gigenam/mgblockslider), clone it and do whatever you want, or make a pull request with your changes. Keep in mind the simplicity of this project.

You want to contribute without coding? Every donation to keep this rolling is very appreciated. Check [this link](https://www.paypal.com/donate/?hosted_button_id=X73V9XW8Y94C8).

No money, no coding? No problem. Please, share, review it and let me know if you find problems or bugs in the support forum.

== Screenshots ==

1. Block slideshow in the gutenberg editor (compact and minimal).
2. Sidebar options.
3. Slider with default arrows.
4. Slider with circle arrows and pagination dots.
5. Slider with thumbnails and hidden arrows.

== Changelog ==

= 1.2.1 - 2022-11-17 : =
* Minor fixes with missing images.

= 1.2.0 - 2022-11-17 : =
* Added lightbox support (in beta).

= 1.1.3 - 2022-11-10 : =
* Minor fix for hiding arrows.

= 1.1.2 - 2022-11-07 : =
* Touch support improvements.
* Minor fix on thumbnails.

= 1.1.1 - 2022-11-02 : =
* Minor fix on touch scroll.

= 1.1.0 - 2022-11-01 : =
* Improvements in optimization for animations on lost focus.

= 1.0.1 - 2022-10-27 : =
* Support for WP 6.1

= 1.0.0 - 2022-10-22 : =
* Init Version.

== Upgrade Notice ==
