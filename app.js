document.addEventListener('DOMContentLoaded', function() {
  let submitBtn = document.getElementById('submitbtn');
  let resetBtn = document.getElementById('resetbtn');

  resetBtn.addEventListener('click', function(e) {
    document.getElementById('meme-generator').reset();
    document.getElementById('meme').remove();
  });

  submitBtn.addEventListener('click', function(e) {
    var inputs = document.querySelectorAll('input[type=text]');
    var meme = [];
    for (var i = 0; i < inputs.length; i++) {
      key = inputs[i].name;
      var textDetails = {};
      textDetails[key] = inputs[i].value;
      meme.push(textDetails);
    }

    for (item in meme) {
      for (key in meme[item]) {
        console.log(key);
        if (key == 'meme-image') {
          console.log(meme[item][key]);
          addImage(meme[item][key]);
        } else {
          addText(meme[item][key])
        }
      }
    }
  });

  function addImage(image) {
    let meme = document.createElement("div");
    meme.style.backgroundImage = "url('"+image+"')";
    meme.setAttribute("id","meme");
    console.log(meme);
    document.getElementById("finished-meme").append(meme);
  }

  function addText(text) {
    let memetext = document.createElement("div");
    memetext.classList.add("meme-text");
    memetext.innerText = text;
    document.getElementById("meme").append(memetext);
  }
});
