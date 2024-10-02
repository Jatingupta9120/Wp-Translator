// Select chat message element
const messageElements = document.querySelectorAll('.message-body');

// Function to simulate translation
function translateMessage(messageElement) {
  const originalText = messageElement.textContent;
  const translatedText = "** (Simulated Translation) **" + originalText;
  messageElement.textContent = translatedText;
}

// Add a button to trigger translation
const translateButton = document.createElement('button');
translateButton.textContent = "Translate";
document.body.appendChild(translateButton);

translateButton.addEventListener('click', () => {
  messageElements.forEach(translateMessage);
});

// Observe for new messages (optional)
const observer = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    if (mutation.addedNodes.length) {
      const newMessage = mutation.addedNodes[0];
      if (newMessage.classList.contains('message-body')) {
        translateMessage(newMessage);
      }
    }
  });
});

observer.observe(document.body, { childList: true });