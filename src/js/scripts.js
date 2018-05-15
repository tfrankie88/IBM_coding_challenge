document.addEventListener("DOMContentLoaded", function() {
  // variables
  var xhr = new XMLHttpRequest();
  var API_Key = '9004815-ec1e7f3573a0246f9f6c2004d';
  xhr.open('GET', 'https://pixabay.com/api/?username=tfrankie88&key='+API_Key+'&q=kittens&image_type=photo');
  xhr.onload = function() {
      if (xhr.status === 200) {
        var imageInfo = JSON.parse(xhr.responseText);
        for (i = 0; i <= 10; i++) {
          console.log(imageInfo.hits[i].largeImageURL)
        }
      }
      else {
        console.log('Request failed.  Returned status of ' + xhr.status);
      }
  };
  xhr.send();
});
