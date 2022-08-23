var words = document.querySelectorAll('.word');

var wordArray = [];
var currentWord = 0;
var anchoLetra =[];
// for(var i = 0; i < words.length; i++) {words[i].style.display = "none";}
words[currentWord].style.opacity = 1;
words[currentWord].style.display = "inline";
for (var i = 0; i < words.length; i++) {
  splitLetters(words[i]);
}

function changeWord() {
    for(var i = 0; i < words.length; i++) {words[i].style.display = "none";}
  var cw = wordArray[currentWord];
  var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
  for (var i = 0; i < cw.length; i++) {
    animateLetterOut(cw, i);
  }
  
  for (var i = 0; i < nw.length; i++) {
    nw[i].className = 'letter behind';
    nw[0].parentElement.style.opacity = 1;
    nw[0].parentElement.style.display = "inline";
    
    animateLetterIn(nw, i);
  }
//   console.log(nw[0].parentElement.clientWidth +"px")
//   console.log( document.querySelector('.text__'))
// console.log(document.querySelector('#contText_2').clientWidth*2)
// console.log(document.querySelector('.text__'))
// document.querySelector('.text__').style.width = (document.querySelector('#contText_2').clientWidth * 2 )+"px";
    // document.querySelector('.text__ span').replace(/\s/g,"");
    // document.querySelector('#contText_1').style.marginLeft = 110-nw[0].parentElement.clientWidth + "px";////"
    document.querySelector('#contText_2').style.width = (nw[0].parentElement.clientWidth) + "px";

    
  currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
}

function animateLetterOut(cw, i) {
  setTimeout(function() {
		cw[i].className = 'letter out';
  }, i*80);
}

function animateLetterIn(nw, i) {
  // document.querySelector('#contText_2').style.width = anchoLetra[i] + "px";
  setTimeout(function() {
		nw[i].className = 'letter in';
  }, 340+(i*80));
}

function splitLetters(word) {
  var content = word.innerHTML;
  word.innerHTML = ' ';
  
//   console.log(word.clientWidth)
  var letters = [];
  var width = 0;
  // 
  for (var i = 0; i < content.length; i++) {
    var letter = document.createElement('span');
    letter.className = 'letter';
    letter.innerHTML = content.charAt(i);
    
    word.appendChild(letter);
    var w = parseFloat(window.getComputedStyle(letter).getPropertyValue("width"));
    // width.push(w);
    width += w;
    letters.push(letter);
  }
  anchoLetra.push(width)
  // console.log(width)
  word.style.width = width +"px";
  wordArray.push(letters);
  

}
console.log( anchoLetra)
function maxWidthText(){

    for (let index = 0; index < words.length; index++) {
        const element = words[index];
        console.log(element.clientWidth)
        
    }
}
//  maxWidthText()
changeWord();
setInterval(changeWord, 4000);