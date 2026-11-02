document.querySelector('.burger').addEventListener('click', function () {
  var menu = document.getElementById('menu');
  this.setAttribute('aria-expanded', menu.classList.toggle('open'));
});
document.getElementById('menu').addEventListener('click', function (e) {
  if (e.target.tagName === 'A') {
    this.classList.remove('open');
    document.querySelector('.burger').setAttribute('aria-expanded', 'false');
  }
});
