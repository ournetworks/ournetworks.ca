const words = ['Regeneration', 'Renewal', 'Remediation', 'Repair', 'Refusal', 'Relation', 'Reproduction', 'Reenchantment', 'Resistance']
let i = 0
let timer

function typingEffect () {
  let word = words[i].split("")
  var loopTyping = function () {
    if (word.length > 0) {
      document.getElementById('word').innerHTML += word.shift()
    } else {
      setTimeout(deletingEffect, 4000)
      return false
    };
    timer = setTimeout(loopTyping, 200)
  }
  loopTyping()
};

function deletingEffect () {
  let word = words[i].split("")
  var loopDeleting = function () {
    if (word.length > 0) {
      word.pop()
      document.getElementById('word').innerHTML = word.join("")
    } else {
      if (words.length > (i + 1)) {
        i++
      } else {
        i = 0
      };
      setTimeout(typingEffect, 1000)
      return false
    };
    timer = setTimeout(loopDeleting, 150)
  }
  loopDeleting()
};

function blockTyping () {
  const paragraphBlock = document.getElementsByClassName('typing')
  const paragraphBlockEl = [...paragraphBlock[0].children]
  paragraphBlockEl.map(function(i, int){
    setTimeout(function(){
      i.classList.add('visible')
      if (window.matchMedia('(min-width: 736px)').matches) {
         paragraphBlock[0].scrollTop = i.offsetTop
      }
    }, 3100 * int)
  });
}


  blockTyping()


typingEffect()
