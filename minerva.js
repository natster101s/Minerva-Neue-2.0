function scrollFunction() {
  if (window.innerWidth > 768) {
		if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
				document.querySelector(".minerva-header .branding-box").style.width = "0px";
				document.querySelector(".minerva-header .branding-box").style.height = "0px";
				document.querySelector(".overlay-header, .minerva-header").style.display = "table";
				document.querySelector(".branding-box img").style.opacity = "0";
				document.querySelector(".minerva-header .branding-box").style.position = "absolute";
				document.querySelector(".header-container").style.width = "auto";
				document.querySelector(".header-container").style.height = "auto";
				document.querySelector(".header-container").style.margin = "10px 0px 0px 0px";
				document.querySelector(".header-container").style.borderRadius = "0px";
				document.querySelector(".header-container").style.borderBottomLeftRadius = "20px";
				document.querySelector(".header-container").style.borderTopLeftRadius = "20px";
				document.querySelector(".overlay-header > div, .minerva-header > div, .overlay-header > .navigation-drawer, .minerva-header > .navigation-drawer").style.display = "table-row";
				document.querySelector(".overlay-header > div, .minerva-header > div, .overlay-header > .navigation-drawer, .minerva-header > .navigation-drawer").style.textAlign = "right";
				document.querySelector(".header-container").style.paddingTop = "5px";
				document.querySelector(".header-container").style.paddingRight = "3px";
				document.querySelector(".header-container").style.paddingBottom = "8px";
				document.querySelector(".header-container").style.paddingLeft = "7px";
				document.querySelector(".minerva-user-navigation").style.display = "table-row";	
				document.querySelector(".minerva-user-navigation").style.minWidth = "none";	
				document.querySelector(".minerva-user-navigation").style.minHeight = "none";	
				document.querySelector(".minerva-user-navigation").style.width = "40px";
				document.querySelector(".minerva-user-navigation").style.alignItems = "center";
				document.querySelector(".minerva-user-navigation").style.justifyContent = "flex-end";
				document.querySelector(".minerva-user-navigation").style.paddingBottom = "10px";
				document.querySelector(".minerva-user-navigation .minerva-user-notifications ul").style.flexDirection = "column";
			
		} else {
				document.querySelector(".minerva-header .branding-box").style.width = "128px";
				document.querySelector(".minerva-header .branding-box").style.height = "auto";
				document.querySelector(".overlay-header, .minerva-header").style.display = "flex";
				document.querySelector(".branding-box img").style.opacity = "1";
				document.querySelector(".minerva-header .branding-box").style.position = "static";
				document.querySelector(".header-container").style.width = "410px";
				document.querySelector(".header-container").style.height = "65px";
				document.querySelector(".header-container").style.margin = "30px 30px 0 0";
				document.querySelector(".header-container").style.borderRadius = "20px";
				document.querySelector(".header-container").style.borderBottomLeftRadius = "20px";
				document.querySelector(".overlay-header > div, .minerva-header > div, .overlay-header > .navigation-drawer, .minerva-header > .navigation-drawer").style.display = "table-cell";
				document.querySelector(".overlay-header > div, .minerva-header > div, .overlay-header > .navigation-drawer, .minerva-header > .navigation-drawer").style.textAlign = "center";
				document.querySelector(".header-container").style.paddingTop = "5px";
				document.querySelector(".header-container").style.paddingRight = "16px";
				document.querySelector(".header-container").style.paddingBottom = "5px";
				document.querySelector(".header-container").style.paddingLeft = "16px";
				document.querySelector(".minerva-user-navigation").style.display = "flex";	
				document.querySelector(".minerva-user-navigation").style.minWidth = "none";	
				document.querySelector(".minerva-user-navigation").style.minHeight = "none";	
				document.querySelector(".minerva-user-navigation").style.width = "auto";
				document.querySelector(".minerva-user-navigation").style.alignItems = "center";
				document.querySelector(".minerva-user-navigation").style.justifyContent = "flex-end";
				document.querySelector(".minerva-user-navigation").style.paddingBottom = "0px";
				document.querySelector(".minerva-user-navigation .minerva-user-notifications ul").style.flexDirection = "row";
		}
	} else {
			if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
				document.querySelector(".branding-box img").style.width = "0px";
				document.querySelector(".branding-box img").style.opacity = "0";
				document.querySelector(".header-container").style.width = "189px";
				document.querySelector(".header-container").style.height = "55px";
				document.querySelector(".header-container").style.margin = "0px 0px 0px 0px";
				document.querySelector(".header-container").style.borderRadius = "0px";
				document.querySelector(".header-container").style.borderBottomLeftRadius = "20px";
				document.querySelector(".header-container").style.paddingTop = "0px";
				document.querySelector(".header-container").style.paddingBottom = "0px";
				document.querySelector(".header-container").style.right = "0";
		} else {
				document.querySelector(".branding-box img").style.width = "119px";
				document.querySelector(".branding-box img").style.opacity = "1";
				document.querySelector(".header-container").style.width = "100%";
				document.querySelector(".header-container").style.height = "55px";
				document.querySelector(".header-container").style.margin = "0px";
				document.querySelector(".header-container").style.borderRadius = "0px";
				document.querySelector(".header-container").style.borderBottomLeftRadius = "0px";
				document.querySelector(".header-container").style.paddingTop = "0px";
				document.querySelector(".header-container").style.paddingBottom = "0px";
			}
	}
}
window.onscroll = function () { scrollFunction () };

/* Preparing for iOS 15 and macOS Monterey */
const link = document.querySelector("meta[name=theme-color]");
function lightthemecolor() {
  link.setAttribute('name', 'theme-color');
  link.content = '#ebecf0';
  document.getElementsByTagName('head')[0].appendChild(link);
}
function darkthemecolor() {
  link.setAttribute('name', 'theme-color');
  link.content = '#3d3d3d';
  document.getElementsByTagName('head')[0].appendChild(link);
}
if (window.matchMedia && 
    window.matchMedia('(prefers-color-scheme: dark)').matches) {
  darkthemecolor();
} else {
	lightthemecolor();
}

function test() {
	var elements = document.getElementsByClassName('infobox');
	var requiredElement = elements[0];
	requiredElement.classList.add("primaryinfo");
}
test();
