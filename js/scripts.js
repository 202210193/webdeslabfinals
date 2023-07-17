 window.addEventListener('DOMContentLoaded', event => {
    const currentDateElement = document.getElementById('current-date');
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    const formattedDate = today.toLocaleDateString('en-US', options);
    currentDateElement.textContent = formattedDate;
  });

 // Get the current page URL
    var currentUrl = window.location.href;

    // Get the list of navbar links
    var navbarLinks = document.querySelectorAll('.navbar-nav .nav-link');

    // Iterate over the links and check if the URL matches the link href
    navbarLinks.forEach(function(link) {
        if (link.href === currentUrl) {
            link.classList.add('active'); 
            link.classList.add('text-white'); 
        }
    });