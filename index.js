// accordion: show one description at a time
document.querySelectorAll('.acc-item').forEach(item => {
  if (!item.nextElementSibling || !item.nextElementSibling.classList.contains('acc-description')) return;

  item.addEventListener('click', () => {
    const shouldOpen = item.nextElementSibling.hidden;

    document.querySelectorAll('.acc-item').forEach(currentItem => {
      if (!currentItem.nextElementSibling || !currentItem.nextElementSibling.classList.contains('acc-description')) return;

      const isOpen = currentItem === item && shouldOpen;
      currentItem.querySelector('i').textContent = isOpen ? '−' : '+';
      currentItem.nextElementSibling.hidden = !isOpen;
    });
  });
});

// random 4-digit captcha
const code = String(Math.floor(1000 + Math.random() * 9000));
document.querySelectorAll('.captcha-code').forEach(el => { el.textContent = code; });
