function showContent(imgSrc, title, desc) {
  const panel = document.getElementById('rightPanel');

  // Remove fade class to restart animation
  panel.classList.remove('fade-in');

  // Update content
  document.getElementById('rightImg').src = imgSrc;
  document.getElementById('rightTitle').textContent = title;
  document.getElementById('rightDesc').textContent = desc;

  // Trigger reflow to restart animation
  void panel.offsetWidth;

  // Add fade-in class
  panel.classList.add('fade-in');
}


// degree-page


function showPage(index) {
  const pages = document.querySelectorAll('.degree-page');
  const buttons = document.querySelectorAll('.page-btn');

  pages.forEach((page, i) => {
    page.classList.toggle('active', i === index);
  });

  buttons.forEach((btn, i) => {
    btn.classList.toggle('active', i === index);
  });
}





