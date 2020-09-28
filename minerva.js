window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (screen.width > 767) {
		if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
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
				document.querySelector(".branding-box img").style.width = "116px";
				document.querySelector(".branding-box img").style.opacity = "1";
				document.querySelector(".header-container").style.width = "340px";
				document.querySelector(".header-container").style.height = "65px";
				document.querySelector(".header-container").style.margin = "15px";
				document.querySelector(".header-container").style.borderRadius = "20px";
				document.querySelector(".header-container").style.borderBottomLeftRadius = "20px";
				document.querySelector(".header-container").style.paddingTop = "5px";
				document.querySelector(".header-container").style.paddingBottom = "5px";
		}
	} else {
			if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
				document.querySelector(".branding-box img").style.width = "0px";
				document.querySelector(".branding-box img").style.opacity = "0";
				document.querySelector(".header-container").style.width = "189px";
				document.querySelector(".header-container").style.margin = "0px 0px 0px 0px";
				document.querySelector(".header-container").style.borderRadius = "0px";
				document.querySelector(".header-container").style.borderBottomLeftRadius = "20px";
				document.querySelector(".header-container").style.paddingTop = "0px";
				document.querySelector(".header-container").style.paddingBottom = "0px";
				document.querySelector(".header-container").style.right = "0";
		} else {
				document.querySelector(".branding-box img").style.width = "116px";
				document.querySelector(".branding-box img").style.opacity = "1";
				document.querySelector(".header-container").style.width = "100%";
				document.querySelector(".header-container").style.margin = "0px";
				document.querySelector(".header-container").style.borderRadius = "0px";
				document.querySelector(".header-container").style.borderBottomLeftRadius = "0px";
				document.querySelector(".header-container").style.paddingTop = "0px";
				document.querySelector(".header-container").style.paddingBottom = "0px";
			}
	}
}
