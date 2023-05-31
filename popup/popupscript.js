document.addEventListener('DOMContentLoaded', function() {
    // Retrieve the "No" and "Yes" buttons
    const noBtn = document.getElementById('noBtn');
    const yesBtn = document.getElementById('yesBtn');

    // Add click event listener to the "No" button
    noBtn.addEventListener('click', function() {
        // Close the popup window
        window.close();
    });

    // Add click event listener to the "Yes" button
    yesBtn.addEventListener('click', function() {
        // Close the popup window
        window.close();
        // Send a message to background.js to remove the listener
        chrome.runtime.sendMessage({ action: 'removeListener' });

        // Open www.youtube.com in a new tab
        window.open('https://www.youtube.com', '_blank');

        // Once the website is opened, send a message to background.js to add the listener again
        chrome.runtime.sendMessage({ action: 'addListener' });

    });
});