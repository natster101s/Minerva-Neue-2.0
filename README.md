# Minerva-Neue-2.0
A modification to the MediaWiki Minerva Neue skin. Can be used on all MediaWiki projects, including Wikipedia.

![Light Mode](https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Minerva_Neue_2.0_4.1_Light.png/2560px-Minerva_Neue_2.0_4.1_Light.png)
![Dark Mode](https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Minerva_Neue_2.0_4.1_Dark.png/2560px-Minerva_Neue_2.0_4.1_Dark.png)

## About
This skin is a modification of the existing Minerva Neue theme. It provides a sleek, modern interface that removes the clutter found in the default Vector theme. Some of its highlights include removing the sidebar and introducing a stuck header bar with beautiful translucency, a collapsible menu with simple options, a compact search UI, and a soft, rounded interface with an automatic dark mode.

## Installation on MediaWiki Projects
A Wikipedia account is required to install. Before you begin, ensure you know your account username.

The gist: copy the CSS and JavaScript from the provided links and add to your own Custom CSS and JavaScript for the Minerva Neue theme, and then select the Minerva Neue theme as your main. More detailed steps are outlined below.

### Step One
Copy and paste the CSS from [here](https://raw.githubusercontent.com/natster101s/Minerva-Neue-2.0/master/minerva.css) into en.wikipedia.org/wiki/User:YOURUSERNAME/minerva.css and save changes. If it says that this page does not exist, click the edit button anyway and save changes.

### Step Two
Copy and paste the JavaScript from [here](https://raw.githubusercontent.com/natster101s/Minerva-Neue-2.0/master/minerva.js) into en.wikipedia.org/wiki/User:YOURUSERNAME/minerva.js and save changes. If it says that this page does not exist, click the edit button anyway and save changes.

*Please note, JavaScript is not necessary for the theme to function, but enhances the experience*

### Step Three
On Wikipedia, navigate to User Preferences and Appearance. Select Minerva Neue as the theme, and then press save! Please note that this theme will only display when logged into your Wikipedia account.

## Updating
Check back periodically for updated code which can include new features and bug fixes. It is recommended to update to the newest version as soon as it comes out. To do that, follow the instructions above again, but since the page will already exist and have code in it, this time just delete all of the exisitng code and replace it with the new code. That's it!

## Changelog
Version 2.0: The code for this theme has been completely rewritten and is now much more efficient. It also includes a dark mode (currently experimental) that is toggled on or off in accordance with the settings of your operating system. macOS Mojave, iOS 13 and Windows 10 or higher are required. This feature also requires the latest version of Chrome, Safari or Firefox to be installed. 

**Version 3.0:** Includes an all new navigation bar at the top left that takes up less space.

**Version 3.1:** Includes a rebuilt collapsible navigation bar when scrolling that takes up even less space, and major bug fixes. Collapsible navigation bar can be turned off by removing JavaScript.

**Version 3.2:** Simple bug fixes

**Version 4.0:** Many bug fixes, including fixes for the Safari browser on Hi-DPI displays. Introduction of a new compact sidebar search UI.

**Version 4.1:** UI tweaks to light theme for better performance, sidebar UI expanded to other information panels, and preparation for iOS 15 and macOS Monterey with meta tag theme-color.

**Version 4.1.1:** A couple of bug fixes, including changes to search and the theme colour made on Wikipedia's end that are now fixed. 

**Version 4.1.2:** CRITICAL Bug Fixes. Wikipedia made some changes to the site on their end to the navigation bar which broke this theme. Please update to the new code as soon as possible to avoid any undesirable glitches.

**Version 4.1.3:** Fixes to the Wikipedia homepage to make the text *actually* readable. 

**Future:** We have some exciting things in the works that will make your Wikipedia reading experience even sleeker, but they aren't ready to be released yet. Maybe in an optional alpha channel?

*Please note that versions prior to 3.2 are not documented on this git*

## Bugs and Fixes
Everyone is welcome to contribute to the project!

For those who encounter bugs or issues without any coding experience, please create an Issue from the Issues tab, describe the bug, and we will do the best we can to fix it! You should come back periodically to check if your issue was resolved and the code has been updated.

Please note that the Dark Mode is experimental at this point, and some elements may not render correctly, especially when editing, but we're working on it! It is recommended at this point to turn off dark mode when editing. As well, we are aware of an issue where pages may take a little longer to load.

iOS 15 currently spaces the compact navigation bar icons incorrectly. We will wait for the final release until we make any changes, as this appears to be a bug on Apple's end *(Edit: Fixed as of iOS 15 beta 4)*
