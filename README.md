```
Contributors : gigenam
License      : GPLv2 or later
License URI  : https://www.gnu.org/licenses/old-licenses/gpl-2.0.html
```

![Package Version](https://img.shields.io/github/package-json/v/gigenam/mgblockslider)
![Required Node Version](https://img.shields.io/badge/Minimum->=16.x%20-blue?logo=node.js)
![Required PHP Version](https://img.shields.io/badge/Recomended->=7.0-blue?logo=php)
![Required WP Version](https://img.shields.io/badge/Required->=5.9-blue?logo=wordpress)
![Tested WP Version](https://img.shields.io/badge/Tested-6.0.2-lightgrey?logo=wordpress)

![MG Block Slider Banner](./app/assets/img/banner.png)

# MG Block Slider

A simple slideshow block to use it in any block editor with any type of content.
Post, pages, widgets. Anything and anywhere you want.

## Description

Make a slideshow of almost any other default block. Images, videos, groups,
columns, etc. With a simple block interface and a couple of configurations you
can customize and add as many slideshows in your content as you want.

In the first step when you add a new slide, you will see only a couple of blocks
to select. This is for simplicity and to highlight the most common ones (and most
tested), but you can add anything inside. For example, you want to slide posts,
widgets, files, even WooCommerce products? Add a group block, or a cover, or
columns and put any block inside.

A couple of examples of what you can configure with this plugin.

- Multiple navigations (arrows, dots, thumbnails).
- Auto start changing slides and stop on hover.
- Change slides with touch gestures or arrow keys.
- Multiple animations.
- Multiple transitions and the possibility to add custom CSS transitions.
- Custom time between slides and changing speed.
- Custom interactions for videos.
- Light and Dark theme.
- A couple of arrows and dots types to choose.
- Texts in English and Spanish (check FAQ), and is translation ready.
- Developer friendly, you can add your own assets with a couple of CSS lines.

Go to the [Wiki](https://github.com/gigenam/mgblockslider/wiki) for the full documentation on
how to use and/or customize everything.

## Installation

Install it like any other plugin, via the WordPress plugin directory inside your
WordPress administration or by downloading this repo, compress the content of the
`app` folder and uploading the .zip file to your server at /wp-content/plugins/.

Go to the [Wiki](https://github.com/gigenam/mgblockslider/wiki) for the full documentation on
how to use and/or customize everything.

## Frequently Asked Questions

### How can I change the style of the content I want to diplay?

This plugin only adds styles to it's own elements (arrows, dots, etc). All the
styles for paragraphs, headings, columns, covers, or whatever block you add
depends on the theme you are using or the block option you can tweak, like colors,
spacings, typography, etc.

### What type of alignments are supported?

If your theme support block alignments:

- None (witch is the content width defined by the theme).
- Left.
- Right.
- Wide screen.
- Full width.

### Can I add custom colors or themes?

Not for the slider elements (arrows, dots, etc) unless you have a bit of knowledge
with CSS and WP themes modification (or using plugins to help). In this case is
pretty easy because was designed to be customizable.

If you have some cool ideas for new themes/styles, let me know. Any help for
improvements is very welcome.

For easy content customization, the recommended way is editing the inner blocks.
For example, add a paragraph block and set up the custom styles in that block.
Want more separation between the slider and content? Add a group block or similar
and configure the spacing, alignments, etc.

### Can I add custom classes for better CSS modifications?

Yes, of course. Like any other block, you can add as many classes as you want.
You can add custom classes for the main slider block, and for the individual
slides.

Also, when you configure the title, you are adding a custom ID to the main slider
container element.

### How translations work?

By default everything is in English and comes with a couple of Spanish types:

- `es_ES`
- `es_AR`
- `es_MX`

Every string of text is translation ready and you can learn how to make your own
translations at the [Wiki](https://github.com/gigenam/mgblockslider/wiki).

### Where are the PRO features?

There aren't. First and most important, I made this for myself and my clients,
and thats why it has minimum features and is easy to extend. If you want hundreds
of features with a ton of buttons and a really bloated UI, this is not for you.

Do you have cool ideas for more options/themes or want to contribute to this project?
Go to the [GitHub Repo](https://github.com/gigenam/mgblockslider), clone it and
do whatever you want, or make a pull request with your changes. Keep in mind the
simplicity of this project.

You want to contribute without coding? Every donation to keep this rolling is very
appreciated. Check [this link](https://www.paypal.com/donate/?hosted_button_id=X73V9XW8Y94C8).

No money, no coding? No problem. Please, share, review it and let me know if you
find problems or bugs in the support forum.

## Changelog

See [CHANGELOG.md](./CHANGELOG.md) for all the updates of this repository.

See [Changelog.txt](./app/changelog.txt) for all the updates of the plugin.
