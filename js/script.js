const popUpButtons=document.querySelectorAll(".info__pop__up__title"),popUpDecorations=document.querySelectorAll(".info__pop__up__decor"),popUps=document.querySelectorAll(".info__pop__up__list");for(let e=0;e<popUpButtons.length;e++)popUpButtons[e].addEventListener("click",(function(){popUps[e].classList.toggle("pop__up__hide"),popUpDecorations[e].classList.toggle("pop__up__hide"),popUpButtons[e].classList.toggle("pop__up__hide")}));$(document).ready((function(){$(".city__slider").slick({slidesToShow:1,speed:1500,easing:"ease",slidesToScroll:1,dots:!0,autoplay:!0,autoplaySpeed:2e3,arrows:!1})}));const animItems=document.querySelectorAll("._anim-items");if(animItems.length>0){function animOnScroll(){for(let e=0;e<animItems.length;e++){const t=animItems[e],o=t.offsetHeight,n=offset(t).top,i=2;let s=window.innerHeight-o/i;o>window.innerHeight&&(s=window.innerHeight-window.innerHeight/i),pageYOffset>n-s&&pageYOffset<n+o?t.classList.add("an_active"):t.classList.contains("_anim-no-hide")||t.classList.remove("an_active")}}function offset(e){const t=e.getBoundingClientRect(),o=window.pageXOffset||document.documentElement.scrollLeft;return scrollTop=window.pageYOffset||document.documentElement.scrollTop,{top:t.top+scrollTop,left:t.left+o}}window.addEventListener("scroll",animOnScroll),setTimeout((()=>{animOnScroll()}),400)}