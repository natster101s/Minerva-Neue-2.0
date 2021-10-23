function scrollFunction() {
  if (window.innerWidth > 768) {
		if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
				document.querySelector(".branding-box img").style.width = "0px";
				document.querySelector(".branding-box img").style.opacity = "0";
				document.querySelector(".header-container").style.width = "200px";
				document.querySelector(".header-container").style.height = "55px";
				document.querySelector(".header-container").style.margin = "0px 0px 0px 0px";
				document.querySelector(".header-container").style.borderRadius = "0px";
				document.querySelector(".header-container").style.borderBottomLeftRadius = "20px";
				document.querySelector(".header-container").style.paddingTop = "0px";
				document.querySelector(".header-container").style.paddingBottom = "0px";
		} else {
				document.querySelector(".branding-box img").style.width = "119px";
				document.querySelector(".branding-box img").style.opacity = "1";
				document.querySelector(".header-container").style.width = "350px";
				document.querySelector(".header-container").style.height = "65px";
				document.querySelector(".header-container").style.margin = "15px";
				document.querySelector(".header-container").style.borderRadius = "20px";
				document.querySelector(".header-container").style.borderBottomLeftRadius = "20px";
				document.querySelector(".header-container").style.paddingTop = "5px";
				document.querySelector(".header-container").style.paddingBottom = "5px";
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
