## IBM Coding Assessment

A single page to present simple XMLHttpRequest to pixabay using vanilla javascript, for kitten images.

### directions
1. Clone or fork branch
2. run `npm install --save` for dependencies
3. in `src/js` touch `config.js` and create your pixabay API variable
```
var config = {
  API_KEY : 'your api key'
}
```
4. in `src/index.html` add `<script src="./js/config.js" type="text/javascript"></script>` to the head directly above `<script src="./js/config.js" type="text/javascript"></script>`
5. to protect API create a `.gitignore` file and within it add
```
config.js
```
6. run `gulp` to compress the scss, js, and html files from src folder into a dist folder to minify files and convert scss in css
