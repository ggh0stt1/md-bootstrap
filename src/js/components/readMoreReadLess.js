function toggleContent(evt) {
  var clickEl = evt.target;

  if (clickEl.classList.contains('read-more-read-less__cta')) {
    const currentContainer = clickEl.closest('.read-more-read-less');

    if (currentContainer) {
      const dots = currentContainer.getElementsByClassName('read-more-read-less__dots')[0];
      const moreText = currentContainer.getElementsByClassName('read-more-read-less__more')[0];
      const buttons = currentContainer.getElementsByClassName('read-more-read-less__cta');

      for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.toggle('hide');
      }

      dots.classList.toggle('hide');
      moreText.classList.toggle('hide');
    }
  }
}

const containers = document.getElementsByClassName('read-more-read-less__container');

if (containers.length) {
  containers[0].addEventListener('click', toggleContent);
}
