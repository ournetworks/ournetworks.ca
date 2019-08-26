// ics.js
!function(a){'use strict';if(a.URL=a.URL||a.webkitURL,a.Blob&&a.URL)try{return void new Blob;}catch(b){}var c=a.BlobBuilder||a.WebKitBlobBuilder||a.MozBlobBuilder||function(a){var b=function(a){return Object.prototype.toString.call(a).match(/^\[object\s(.*)\]$/)[1];},c=function(){this.data=[];},d=function(a,b,c){this.data=a,this.size=a.length,this.type=b,this.encoding=c;},e=c.prototype,f=d.prototype,g=a.FileReaderSync,h=function(a){this.code=this[this.name=a];},i='NOT_FOUND_ERR SECURITY_ERR ABORT_ERR NOT_READABLE_ERR ENCODING_ERR NO_MODIFICATION_ALLOWED_ERR INVALID_STATE_ERR SYNTAX_ERR'.split(' '),j=i.length,k=a.URL||a.webkitURL||a,l=k.createObjectURL,m=k.revokeObjectURL,n=k,o=a.btoa,p=a.atob,q=a.ArrayBuffer,r=a.Uint8Array,s=/^[\w-]+:\/*\[?[\w\.:-]+\]?(?::[0-9]+)?/;for(d.fake=f.fake=!0;j--;)h.prototype[i[j]]=j+1;return k.createObjectURL||(n=a.URL=function(a){var b,c=document.createElementNS('http://www.w3.org/1999/xhtml','a');return c.href=a,'origin'in c||('data:'===c.protocol.toLowerCase()?c.origin=null:(b=a.match(s),c.origin=b&&b[1])),c;}),n.createObjectURL=function(a){var b,c=a.type;return null===c&&(c='application/octet-stream'),a instanceof d?(b='data:'+c,'base64'===a.encoding?b+';base64,'+a.data:'URI'===a.encoding?b+','+decodeURIComponent(a.data):o?b+';base64,'+o(a.data):b+','+encodeURIComponent(a.data)):l?l.call(k,a):void 0;},n.revokeObjectURL=function(a){'data:'!==a.substring(0,5)&&m&&m.call(k,a);},e.append=function(a){var c=this.data;if(r&&(a instanceof q||a instanceof r)){for(var e='',f=new r(a),i=0,j=f.length;j>i;i++)e+=String.fromCharCode(f[i]);c.push(e);}else if('Blob'===b(a)||'File'===b(a)){if(!g)throw new h('NOT_READABLE_ERR');var k=new g;c.push(k.readAsBinaryString(a));}else a instanceof d?'base64'===a.encoding&&p?c.push(p(a.data)):'URI'===a.encoding?c.push(decodeURIComponent(a.data)):'raw'===a.encoding&&c.push(a.data):('string'!=typeof a&&(a+=''),c.push(unescape(encodeURIComponent(a))));},e.getBlob=function(a){return arguments.length||(a=null),new d(this.data.join(''),a,'raw');},e.toString=function(){return'[object BlobBuilder]';},f.slice=function(a,b,c){var e=arguments.length;return 3>e&&(c=null),new d(this.data.slice(a,e>1?b:this.data.length),c,this.encoding);},f.toString=function(){return'[object Blob]';},f.close=function(){this.size=0,delete this.data;},c;}(a);a.Blob=function(a,b){var d=b?b.type||'':'',e=new c;if(a)for(var f=0,g=a.length;g>f;f++)Uint8Array&&a[f]instanceof Uint8Array?e.append(a[f].buffer):e.append(a[f]);var h=e.getBlob(d);return!h.slice&&h.webkitSlice&&(h.slice=h.webkitSlice),h;};var d=Object.getPrototypeOf||function(a){return a.__proto__;};a.Blob.prototype=d(new a.Blob);}('undefined'!=typeof self&&self||'undefined'!=typeof window&&window||this.content||this);var saveAs=saveAs||function(a){'use strict';if(!('undefined'==typeof a||'undefined'!=typeof navigator&&/MSIE [1-9]\./.test(navigator.userAgent))){var b=a.document,c=function(){return a.URL||a.webkitURL||a;},d=b.createElementNS('http://www.w3.org/1999/xhtml','a'),e='download'in d,f=function(a){var b=new MouseEvent('click');a.dispatchEvent(b);},g=/constructor/i.test(a.HTMLElement)||a.safari,h=/CriOS\/[\d]+/.test(navigator.userAgent),i=function(b){(a.setImmediate||a.setTimeout)(function(){throw b;},0);},j='application/octet-stream',k=4e4,l=function(a){var b=function(){'string'==typeof a?c().revokeObjectURL(a):a.remove();};setTimeout(b,k);},m=function(a,b,c){b=[].concat(b);for(var d=b.length;d--;){var e=a['on'+b[d]];if('function'==typeof e)try{e.call(a,c||a);}catch(f){i(f);}}},n=function(a){return/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob([String.fromCharCode(65279),a],{type:a.type}):a;},o=function(b,i,k){k||(b=n(b));var o,p=this,q=b.type,r=q===j,s=function(){m(p,'writestart progress write writeend'.split(' '));},t=function(){if((h||r&&g)&&a.FileReader){var d=new FileReader;return d.onloadend=function(){var b=h?d.result:d.result.replace(/^data:[^;]*;/,'data:attachment/file;'),c=a.open(b,'_blank');c||(a.location.href=b),b=void 0,p.readyState=p.DONE,s();},d.readAsDataURL(b),void(p.readyState=p.INIT);}if(o||(o=c().createObjectURL(b)),r)a.location.href=o;else{var e=a.open(o,'_blank');e||(a.location.href=o);}p.readyState=p.DONE,s(),l(o);};return p.readyState=p.INIT,e?(o=c().createObjectURL(b),void setTimeout(function(){d.href=o,d.download=i,f(d),s(),l(o),p.readyState=p.DONE;})):void t();},p=o.prototype,q=function(a,b,c){return new o(a,b||a.name||'download',c);};return'undefined'!=typeof navigator&&navigator.msSaveOrOpenBlob?function(a,b,c){return b=b||a.name||'download',c||(a=n(a)),navigator.msSaveOrOpenBlob(a,b);}:(p.abort=function(){},p.readyState=p.INIT=0,p.WRITING=1,p.DONE=2,p.error=p.onwritestart=p.onprogress=p.onwrite=p.onabort=p.onerror=p.onwriteend=null,q);}}('undefined'!=typeof self&&self||'undefined'!=typeof window&&window||this.content);'undefined'!=typeof module&&module.exports?module.exports.saveAs=saveAs:'undefined'!=typeof define&&null!==define&&null!==define.amd&&define('FileSaver.js',function(){return saveAs;});var ics=function(){'use strict';if(navigator.userAgent.indexOf('MSIE')>-1&&-1==navigator.userAgent.indexOf('MSIE 10'))return void console.log('Unsupported Browser');var a=-1!==navigator.appVersion.indexOf('Win')?'\r\n':'\n',b=[],c=['BEGIN:VCALENDAR','VERSION:2.0'].join(a),d=a+'END:VCALENDAR';return{events:function(){return b;},calendar:function(){return c+a+b.join(a)+d;},addEvent:function(c,d,e,f,g){if('undefined'==typeof c||'undefined'==typeof d||'undefined'==typeof e||'undefined'==typeof f||'undefined'==typeof g)return!1;var h=new Date,i=('0000'+h.getFullYear().toString()).slice(-4),j=('00'+(h.getMonth()+1).toString()).slice(-2),k=('00'+h.getDate().toString()).slice(-2),l=('00'+h.getHours().toString()).slice(-2),m=('00'+h.getMinutes().toString()).slice(-2),n=('00'+h.getSeconds().toString()).slice(-2),o='T'+l+m+n,p=i+j+k+o,q=['BEGIN:VEVENT','DESCRIPTION:'+d,'DTSTAMP:'+p,'DTSTART;TZID=America/Toronto:'+f,'DTEND;TZID=America/Toronto:'+g,'LOCATION:'+e,'SUMMARY:'+c,'END:VEVENT'].join(a);return b.push(q),q;},download:function(e,f){if(b.length<1)return!1;f='undefined'!=typeof f?f:'.ics',e='undefined'!=typeof e?e:'event';var g=c+a+b.join(a)+d;if(!navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i)){var h=new Blob([g],{type:'text/calendar;charset=utf-8'});return saveAs(h,e+f),g;}window.open('data:text/calendar;charset=utf8,'+escape(g));}};};

// header signup notification

var header = document.querySelector('.header');

function formSubmitCallback(formContextMsg) {
  var confirmationEle = document.createElement('div');
  var splashEle = document.querySelector('.splash');
  var postEle = document.querySelector('.post');

  confirmationEle.className = 'announcement relative bg-yellow color-black';
  confirmationEle.setAttribute('role', 'alert');
  confirmationEle.innerHTML = '<div class="container"><p>' + formContextMsg + '</p> <button class="close-banner" aria-label="Close">×</button></div>';

  header.prepend(confirmationEle);
  if (splashEle) {
    splashEle.classList.add('extended');
  } else {
    postEle.classList.add('extended');
  }

  document.querySelector('.close-banner').addEventListener('click', function(){
    document.querySelector('.announcement').remove();
    if (postEle) {
      postEle.classList.remove('extended');
    }
    if (splashEle) {
      splashEle.classList.remove('extended');
    }
  });
}

if (window.location.search == '?signup=confirmed') {
  formSubmitCallback('Successfully signed up for updates');
}

if (window.location.search == '?feedback=confirmed') {
  document.querySelector('.announcement').style.display = 'none';
  formSubmitCallback('Successfully submitted your feedback!');
}

if (window.location.search == '?donation=confirmed') {
  formSubmitCallback('Thanks for your support!');
}

if (window.location.search == '?update=confirmed') {
  formSubmitCallback('Successfully confirmed your session!');
}

// scroll interaction

var scrollEvent = false;

function headerClassSetter() {
  if (window.scrollY > 10) {
    header.classList.add('active-bg');
  } else {
    header.classList.remove('active-bg');
  }
}

headerClassSetter();

document.addEventListener('scroll', function() {
  if (!scrollEvent) {
    window.requestAnimationFrame(function() {
      headerClassSetter();
      scrollEvent = false;
    });
    scrollEvent = true;
  }
});

// ics download

var eventAddButtons = document.getElementsByClassName('event-add-button');
var events = [].slice.call(eventAddButtons);

events.map(function(e){
  e.addEventListener('click', function() {
    var cal = ics();
    cal.addEvent(this.dataset.summary, this.dataset.description, this.dataset.location, this.dataset.dtstart, this.dataset.dtend, this.dataset.dtstamp);
    cal.download();
  });
});

// menu tab navigation support

var subMenuContainers = document.querySelectorAll('.nav-item-sub');
var menuItems = document.querySelectorAll('.menu > li');

function blurSubMenu() {
  document.querySelectorAll('[aria-haspopup]').forEach(function(e){
    e.classList.remove('active');
  });
  subMenuContainers.forEach(function(e){
    e.setAttribute('aria-hidden', true);
  });
}

subMenuContainers.forEach(function(container) {
  if (container.childElementCount) {
    container.parentElement.setAttribute('aria-haspopup', true);
    container.previousElementSibling.addEventListener('focus', function(){
      this.parentElement.classList.add('active');
      this.nextElementSibling.setAttribute('aria-hidden', false);
    });
  }
});

menuItems.forEach(function(e){
  if (!e.closest('[aria-haspopup]')) {
    e.firstElementChild.addEventListener('focus', function(){
      blurSubMenu();
    });
  }
});

document.addEventListener('click', function(){
  blurSubMenu();
});

document.querySelector('.logo').addEventListener('focus', function(){
  blurSubMenu();
})

// block typing

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
  })
}

blockTyping()

// text-mix

const words = ['Regeneration', 'Renewal', 'Remediation', 'Repair', 'Refusal', 'Relation', 'Reproduction', 'Reenchantment', 'Resistance']

function getRandomInt() {
  return Math.floor(Math.random() * Math.floor(words.length));
}

let word1 = words[getRandomInt()]
$('.word').html(word1)

function getRandomWord(word1) {
  let word2 = getRandomInt()
  if (word1 == word2) {
    word2 = getRandomInt()
  } else {
    return word2
  }
}

window.setInterval(function() {
  let randWord = words[getRandomWord(word1)]
  $('.word').each(function() {
    $(this).textMix(randWord, 1000, 'linear')
  })
}, 2000)

// registration modal

const panel = $('.panel')

const closePanel = function () {
  panel.hide()
  $('body').removeClass('invert')
}

const showPanel = function () {
  panel.show().focus()
  $('body').addClass('invert')
}

$('#close-panel').on('click', closePanel)

$('.nav .nav-item').last().on('click', function (e) {
  e.preventDefault()
  showPanel()
})

$(document).on('click', function (e) {
  if (!$(e.target).hasClass('nav-item') && $(e.target).parents('.panel').length === 0) {
    closePanel()
  }
}).keydown((e) => {
  if (e.keyCode === 27) {
    closePanel()
  }
})

// program active menu links

const programTargets = $('[data-nav-program-link]')
const programNavItems = $('.nav-item')
const programTopLevelItem = $('.nav-item[href="/program/"]')

const programPositionDetector = function () {
  if (programTargets.length) {
    const programSection = []
    programTargets.each(function (i) {
      if ($(this).offset().top - $(window).scrollTop() < $(this).height()) {
        programSection.push(i)
      }
    })

    if (programSection.length) {
      programTopLevelItem.removeClass('active')
      programNavItems.each(function () {
        if (this.hash.substr(1) === programTargets.eq([programSection.slice(-1)]).attr('id')) {
          programNavItems.removeClass('active')
          $(this).addClass('active')
        }
      })
    } else {
      programNavItems.removeClass('active')
      programTopLevelItem.addClass('active')
    }
  }
}

programPositionDetector()

document.addEventListener('scroll', programPositionDetector, {
  capture: true,
  passive: true
})
