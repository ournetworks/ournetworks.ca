document.addEventListener('DOMContentLoaded', function(){
  if (window.location.search == '?signup=confirmed') {
    var post = document.querySelector('.header');

    var confirmationEle = document.createElement('div');
    confirmationEle.className = 'announcement';
    confirmationEle.setAttribute('role', 'alert');
    confirmationEle.innerHTML = '<div class="container"><p>Successfully signed up for updates</p></div>';

    post.append(confirmationEle);
    document.querySelector('.splash').classList.add('extended');
  }
});
