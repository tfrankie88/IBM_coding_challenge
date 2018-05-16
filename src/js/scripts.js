document.addEventListener("DOMContentLoaded", function() {
  // variables
  var key = config.API_KEY;
  var xhr = new XMLHttpRequest();
  var gridItem = document.querySelector('.grid-wrapper');

  // grid wrapper item creator
  var itemCreate = function(image) {
    var imageItem = document.createElement('div');
    imageItem.setAttribute('class', 'grid-image lazy');
    imageItem.setAttribute('data-src', image);
    gridItem.appendChild(imageItem);
    var myLazyLoad = new LazyLoad({
      elements_selector: '.lazy',
    });
    setTimeout(function() {
      imageItem.classList.add("transition");
    }, 1000)
  }

  // XMLHttpRequest
  xhr.open('GET', 'https://pixabay.com/api/?username=tfrankie88&key='+key+'&q=kittens&image_type=photo');
  xhr.onload = function() {
      if (xhr.status === 200) {
        var imageInfo = JSON.parse(xhr.responseText);
        for (i = 0; i <= 10; i++) {
          var imageUrl = imageInfo.hits[i].largeImageURL;
          itemCreate(imageUrl);
        }
      }
      else {
        console.log('Request failed.  Returned status of ' + xhr.status);
      }
  };
  xhr.send();
});
