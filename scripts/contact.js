// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

document.addEventListener('DOMContentLoaded', function () {
    // Add a click event listener to the submit button
    document.getElementById('submit-button').addEventListener('click', function (event) {
      // Prevent the default form submission behavior
      event.preventDefault();
  
      // Replace the contents of the contact-page with a "Thank you" message
      replaceWithThankYouMessage();
    });
  });
  
  // Function to replace the contents with a "Thank you" message
  function replaceWithThankYouMessage() {
    // Get the contact-page element
    var contactPage = document.getElementById('contact-page');
  
    // Create a new paragraph element
    var thankYouParagraph = document.createElement('p');
    thankYouParagraph.textContent = 'Thank you for your message';
    thankYouParagraph.style.fontSize = '24px';
  
    // Replace the contents of the contact-page with the new paragraph
    contactPage.innerHTML = ''; // Clear existing content
    contactPage.appendChild(thankYouParagraph);
  }
  