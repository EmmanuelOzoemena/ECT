document.addEventListener('DOMContentLoaded', function() {
  const contactUsBtn = document.getElementById('contactUsBtn');
  const contactFormPopup = document.getElementById('contactFormPopup');
  const closePopup = document.getElementById('closePopup');

  contactUsBtn.addEventListener('click', function(event) {
    event.preventDefault();
    contactFormPopup.style.display = 'flex';
  });

  closePopup.addEventListener('click', function() {
    contactFormPopup.style.display = 'none';
  });

  window.addEventListener('click', function(event) {
    if (event.target === contactFormPopup) {
      contactFormPopup.style.display = 'none';
    }
  });
});
