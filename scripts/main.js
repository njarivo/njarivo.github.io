"use strict";var browserVersion=function(){return!!(0<window.navigator.userAgent.indexOf("MSIE ")||navigator.userAgent.match(/Trident.*rv\:11\./)||navigator.userAgent.match(/Opera Mini/i))},modalBrowserVersion=function(){var e=document.createElement("div"),o=document.createElement("div"),t=document.createElement("p"),n=document.createElement("a");n.href="http://browsehappy.com",n.innerHTML="Upgrade",t.innerHTML="You are using an <strong>outdated</strong> browser. <br/> Please upgrade your browser to improve your experience.",o.appendChild(t),o.appendChild(n),e.appendChild(o),document.body.classList.add("is-ie"),o.classList.add("ie-modal-content"),e.classList.add("ie-modal"),document.body.appendChild(e)};browserVersion()&&modalBrowserVersion(),document.addEventListener("DOMContentLoaded",function(){AOS.init({offset:50,duration:500,once:!0}),app.menu(),app.jsSectionScroll(),app.counterTo(),app.slider(),app.textAnimate(),app.scrollProgressReading(),app.backToTop()}),$(window).on("load",function(){var e;e=$(".preloader"),setTimeout(function(){e.fadeOut(750)},2e3)});var forEach=function(e,o,t){if("[object Object]"===Object.prototype.toString.call(e))for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&o.call(t,e[n],n,e);else for(var a=0,r=e.length;a<r;a++)o.call(t,e[a],a,e)},app={menu:function(){$(window).on("scroll load",function(){100<$(".navbar").offset().top?$(".navbar").addClass("navbar-scrolled"):$(".navbar").removeClass("navbar-scrolled")});var e=document.querySelectorAll(".hamburger");e.length&&forEach(e,function(e){e.addEventListener("click",function(){this.classList.toggle("is-active")},!1)})},jsSectionScroll:function(){var t=$(".navbar-collapse");$(document).on("click","a.js-section-scroll",function(e){var o=$(this);$("html, body").stop().animate({scrollTop:$(o.attr("href")).offset().top},750,"easeInOutExpo",function(){t.is(":visible")&&(t.collapse("hide"),$(".navbar-toggler").removeClass("is-active"))}),e.preventDefault()})},counterTo:function(){var o=!1,t=$("#counterTo"),n=$(".number-count");$(window).on("load scroll",function(){var e;t.length&&(e=t.offset().top-window.innerHeight,!o&&$(window).scrollTop()>e&&(n.each(function(){var e=$(this),o=e.attr("data-count"),t=e.text();$({countNum:t}).animate({countNum:o},{duration:3e3,easing:"swing",step:function(){e.text(Math.floor(this.countNum))},complete:function(){e.text(this.countNum)}})}),o=!0))})},slider:function(){new Swiper(".project-slider",{autoplay:{delay:3e4,disableOnInteraction:!1},loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},slidesPerView:1,spaceBetween:20,breakpoints:{1366:{slidesPerView:5},1024:{slidesPerView:3},768:{slidesPerView:2},480:{slidesPerView:1}}})},scrollProgressReading:function(){function e(){return $(document).height()-$(window).height()}function o(){return $(window).scrollTop()}var t,n,a,r,i;"max"in document.createElement("progress")?((t=$("progress")).attr({max:e()}),$(document).on("scroll",function(){t.attr({value:o()})}),$(window).resize(function(){t.attr({max:e(),value:o()})})):(t=$(".progress-bar"),n=e(),i=function(){t.css({width:(a=o(),r=a/n*100,r+="%")})},$(document).on("scroll",i),$(window).on("resize",function(){n=e(),i()}))},textAnimate:function(){$("#js-rotating").Morphext({animation:"animate__animated animate__bounceIn",separator:",",speed:3e3,loop:-1})},backToTop:function(){$("body").prepend('<a href="body" class="back-to-top js-section-scroll" title="To top"><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-up" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa"><path fill="currentColor" d="M6.101 359.293L25.9 379.092c4.686 4.686 12.284 4.686 16.971 0L224 198.393l181.13 180.698c4.686 4.686 12.284 4.686 16.971 0l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L232.485 132.908c-4.686-4.686-12.284-4.686-16.971 0L6.101 342.322c-4.687 4.687-4.687 12.285 0 16.971z"></path></svg></a>');$(window).on("scroll",function(){900<$(window).scrollTop()?$("a.back-to-top").fadeIn("500"):$("a.back-to-top").fadeOut("500")})}};