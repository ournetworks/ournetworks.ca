document.addEventListener('DOMContentLoaded', function(){
  if (window.location.search == '?signup=confirmed') {
    var post = document.querySelector('.header');

    var confirmationEle = document.createElement('div');
    confirmationEle.className = 'announcement';
    confirmationEle.setAttribute('role', 'alert');
    confirmationEle.innerHTML = '<div class="container"><p>Email submitted successfully</p></div>';

    post.append(confirmationEle);
    document.querySelector('.splash').classList.add('extended');
  }
});
