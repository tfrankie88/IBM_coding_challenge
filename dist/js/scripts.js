document.addEventListener("DOMContentLoaded",function(){var e=config.API_KEY,t=new XMLHttpRequest,a=document.querySelector(".grid-wrapper"),n=function(e){var t=document.createElement("div");t.setAttribute("class","grid-image lazy"),t.setAttribute("data-src",e),a.appendChild(t);new LazyLoad({elements_selector:".lazy"});setTimeout(function(){t.classList.add("transition")},1e3)};t.open("GET","https://pixabay.com/api/?username=tfrankie88&key="+e+"&q=kittens&image_type=photo"),t.onload=function(){if(200===t.status){var e=JSON.parse(t.responseText);for(i=0;i<=10;i++){var a=e.hits[i].largeImageURL;n(a)}}else console.log("Request failed.  Returned status of "+t.status)},t.send()});