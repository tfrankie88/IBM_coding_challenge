document.addEventListener("DOMContentLoaded", function() {
  // variables
  var xhr = new XMLHttpRequest();
  var API_Key = '9004815-ec1e7f3573a0246f9f6c2004d';
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
  xhr.open('GET', 'https://pixabay.com/api/?username=tfrankie88&key='+API_Key+'&q=kittens&image_type=photo');
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
