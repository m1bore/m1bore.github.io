// TMP:
document.getElementById('menu').addEventListener('click', function () {
  const nav = document.querySelector('nav');
  let nav2 = nav.cloneNode(true);
  nav2.className = 'nav2';
  if (!document.querySelector('.nav2')) {
    document.getElementById('menu').append(nav2);
  }
  nav2 = document.querySelector('#menu .nav2');
  nav2.style.display === 'flex'
    ? nav2.style.display = 'none'
    : nav2.style.display = 'flex';
});
