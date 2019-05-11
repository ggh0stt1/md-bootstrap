import footerTemplate from '../../templates/footer.hbs';

var footerElement = document.getElementById('footer');

if (footerElement) {
  footerElement.innerHTML = footerTemplate({ });
}
