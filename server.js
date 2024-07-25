function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle("dark-mode");

  const icons = document.querySelectorAll('.dark-mode-toggle i');

  if (body.classList.contains('dark-mode')) {
      
      icons[0].classList.remove('bi-brightness-high');
      icons[0].classList.add('bi-moon'); 

      
      icons[1].classList.remove('fa-moon');
      icons[1].classList.add('fa-sun'); 
      
  } else {
      
      icons[0].classList.remove('bi-moon'); 
      icons[0].classList.add('bi-brightness-high');

      icons[1].classList.remove('fa-sun'); 
      icons[1].classList.add('fa-moon');
  }
}
