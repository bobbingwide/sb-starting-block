# Starting block 
![banner](assets/sb-starting-block-banner-772x250.jpg)
* Contributors:      bobbingwide
* Tags:              block, starting, scaffold, SSR, static
* Tested up to:      6.4.1
* Stable tag:        0.1.1
* License:           GPLv3
* License URI:       https://www.gnu.org/licenses/gpl-2.0.html

Starting point for server side rendered, internationalized and localized blocks.

## Description 
The Starting block plugin is a block plugin to be used as the starting point for future Server Side Rendered blocks.
It includes a second block to demonstrate internationalization and localization of block plugins with multiple blocks.

Unlike some plugins, where all the blocks are delivered in `build/index.js`, the runtime components of each block are delivered separately.
The delivered files are named with an entry point that reflects the block name.
The entry points are defined in `webpack.config.js`

```
const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
module.exports = {
	...defaultConfig,
* 	entry: {
* 		'sb-starting-block': './src/starting-block',
* 		'second-block': './src/second-block'
	},
};
```

### Runtime components 

The runtime components for each block are defined in their `block.json` files.

eg for `oik-sb/sb-starting-block`, which is defined in `src\starting-block`,
the `block.json` file contains.

```
* "editorScript": "file:../../build/sb-starting-block.js",
* "editorStyle": "file:../../build/sb-starting-block.css",
* "style": "file:../../build/style-sb-starting-block.css"
```

editorScript contains the JavaScript for the block editor
editorStyle contains the CSS for the block editor
style contains the CSS for both the front end and the block editor

An additional file suffixed `.asset.php` is produced for each entry point.
Used during block registration, it lists the package dependencies for the block editor.

The build process requires wp-scripts v26.17.0 or later.

### Internationalization and Localization 
At build time `wp-scripts` copies each `block.json` file into a subdirectory of the `build` folder.

These files are not used in this version of the plugin.

Since the PHP code in this plugin registers the blocks using the original `block.json` file in the `src` folder
the filename in each `file:` is specified as a relative file to the original `block.json`

This relative path to the run time JavaScript is different to the path to the localized strings for the block
generated using `npm run makejson`.

To support localization, special logic is used to help WordPress locate this generated `.json` file.

Basically it converts something like `src/starting-block/../../build/sb-starting-block.js` to `build/sb-starting-block.js`.
* Internally WordPress converts this to its MD5 equivalent: `cef7108f087faf9f40f070ee4caf3c90`.
This is used in conjunction with the languages folder to determine the name of the file containing the translations.
ie `languages/sb-starting-block-en_GB-cef7108f087faf9f40f070ee4caf3c90.json`

For the `second-block` the editor script build file is `build/second-block.js`. MD5 is `bb36a1c4786c1e80b3a16bcb761ccd83.json`.

One would hope that in the future this special logic won't be necessary.

## Installation 
The purpose of this plugin is to provide the source code for a Server Side Rendered (SSR) block
that is copied into an existing plugin where the new SSR logic replaces an existing shortcode.

You should not need to activate this plugin. If you do, it's just like any other plugin.

## Screenshots 
1. Starting block - rendered in the editor in the bbboing language
2. Starting block - settings, bbboing language
3. Second block - editor display, bbboing language

## Upgrade Notice 
# 0.1.1 
Update for support for PHP 8.1 and PHP 8.2

# 0.1.0 
Update for each block's components packaged separately.

# 0.0.1 
Update for an internationalized / localized version with multiple blocks.

# 0.0.0 
First version to be used to replace any `[your name here]` shortcodes in FSE themes

## Changelog 
# 0.1.1 
* Changed: Add PHPUnit tests for PHP 8.1 and PHP 8.2 #4
* Changed: Update build files #3
* Changed: Updated wp-scripts #3
* Tested: With WordPress 6.4.1 and WordPress Multisite
* Tested: With Gutenberg 17.0.2
* Tested: With PHP 8.1 and PHP 8.2
* Tested: With PHPUnit 9.6

# 0.1.0 
* Changed: Update language files [#3](https://github.com/bobbingwide/sb-starting-block/issues/3)
* Changed: Update build files #3
* Changed: Changes after npm run package-update #3
* Changed: Update server logic for multiple entry points #3
* Changed: Update src to help to demonstrate multiple entry points #3
* Changed: Add webpack.config.js for multiple entry points #3
* Tested: With WordPress 5.9.1 and WordPress Multi Site
* Tested: With Gutenberg 12.7.0
* Tested: With PHP 8.0

# 0.0.1 
* Changed: Added oik-sb/second-block,[#2](https://github.com/bobbingwide/sb-starting-block/issues/2)
* Changed: Internationalized and localized into UK English and bbboing ( locale bb_BB ),[#2](https://github.com/bobbingwide/sb-starting-block/issues/2)
* Tested: With WordPress 5.8.1 and WordPress Multi Site
* Tested: With Gutenberg 11.5.1
* Tested: With PHP 8.0

# 0.0.0 
* Added: First version of the server side rendered block,[#1](https://github.com/bobbingwide/sb-starting-block/issues/1)
* Tested: With WordPress 5.7.1 and WordPress Multi Site
* Tested: With Gutenberg 10.6.0-rc.1
* Tested: With PHP 8.0
