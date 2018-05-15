document.addEventListener("DOMContentLoaded", function() {
  // variables
  var input = document.querySelector('input');
  var tag = [
   "Dear Team Class Action,",
   "Thank you",
   "for the opportunity to join your team.",
   "I look forward to creating cool things with you all",
   "Best",
   "Tim Frankie"
  ];
  var results;

  // functions
  function autocomplete(val) {
    var tag_return = [];

    for (i = 0; i < tag.length; i++) {
      if (val === tag[i].slice(0, val.length)) {
        tag_return.push(tag[i]);
      }
    }

    return tag_return;
  }

  // events
  input.onkeyup = function(e) {
    input_val = this.value; // updates the variable on each ocurrence
    if (input_val.length > 0) {
      var tag_to_show = [];
      autocomplete_results = document.getElementById("autocomplete-results");
      autocomplete_results.innerHTML = '';
      tag_to_show = autocomplete(input_val);
      for (i = 0; i < tag_to_show.length; i++) {
        console.log(tag_to_show);
        autocomplete_results.innerHTML += '<li>' + tag_to_show[i] + '</li>';
      }
      autocomplete_results.style.display = 'block';
    } else {
      tag_to_show = [];
      autocomplete_results.innerHTML = '';
    }
  }
});
