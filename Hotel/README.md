# ECO & Co. Website Management and Update Guide

## Table of Contents
1. [Introduction](#introduction)
2. [File Structure](#file-structure)
3. [Updating Content](#updating-content)
   - [HTML](#html)
   - [CSS](#css)
   - [JavaScript](#javascript)
4. [Managing the Live Chat](#managing-the-live-chat)
5. [Adding New Sections](#adding-new-sections)
6. [Best Practices](#best-practices)
7. [Troubleshooting](#troubleshooting)

---

## Introduction

This guide is designed to help you manage and update the ECO & Co. hotel website. It covers the basics of updating content, managing the live chat feature, and adding new sections.

## File Structure

Here is an overview of the file structure:

root/
├── assets/
│ ├── hotel-1.jpg
│ ├── hotel-2.jpg
│ └── ...
├── styles.css
├── scripts.js
├── index.html
└── README.md

less


## Updating Content

### HTML

The `index.html` file contains the structure of your website. To update any text or content:

1. **Open `index.html`**: Use any code editor (e.g., VS Code, Sublime Text).
2. **Edit Content**: Locate the section you want to update and make the necessary changes. For example, to update the "Popular Hotels" section:
   ```html
   <div class="popular-card">
     <img src="assets/hotel-1.jpg" alt="popular hotel" />
     <div class="popular-content">
       <div class="popular-card-header">
         <h4>The Plaza Hotel</h4>
         <h4>$499</h4>
       </div>
       <p>New York City, USA</p>
     </div>
   </div>
Update the h4 tags to change the hotel name and price.
Update the p tag to change the location.
Save Changes: Save the file and refresh your browser to see the updates.
CSS
The styles.css file controls the appearance of your website. To update styles:

Open styles.css.
Edit Styles: Locate the CSS class or ID you want to update. For example, to change the background color of the header:
css

.header-container {
  background-color: #f0f0f0;
}
Save Changes: Save the file and refresh your browser to see the updates.
JavaScript
The scripts.js file contains JavaScript code for interactivity. To update scripts:

Open scripts.js.
Edit Scripts: Locate the function or event listener you want to update. For example, to change the chat window toggle behavior:
javascript

document.addEventListener("DOMContentLoaded", function () {
  const chatIcon = document.querySelector(".chat-icon");
  const chatWindow = document.querySelector(".chat-window");
  const chatClose = document.querySelector(".chat-close");

  chatIcon.addEventListener("click", function () {
    chatWindow.style.display = "flex";
  });

  chatClose.addEventListener("click", function () {
    chatWindow.style.display = "none";
  });
});
Save Changes: Save the file and refresh your browser to see the updates.
Managing the Live Chat
To manage the live chat feature:

HTML Structure: The live chat section is defined in index.html.
html

<div class="live-chat">
  <div class="chat-icon">
    <i class="ri-message-3-line"></i>
  </div>
  <div class="chat-window">
    <div class="chat-header">
      <h3>Live Chat</h3>
      <span class="chat-close">&times;</span>
    </div>
    <div class="chat-body">
      <p>Welcome to ECO & Co. How can we help you today?</p>
    </div>
    <div class="chat-footer">
      <input type="text" placeholder="Type your message..." />
      <button><i class="ri-send-plane-2-line"></i></button>
    </div>
  </div>
</div>
CSS Styling: The chat styles are in styles.css.
css

.live-chat {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 300px;
  max-width: 100%;
  z-index: 1000;
}

.chat-icon {
  background-color: #007bff;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  font-size: 24px;
  padding: 10px;
  text-align: center;
}

.chat-window {
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: none;
  flex-direction: column;
  height: 400px;
  max-height: 80vh;
  width: 100%;
}

.chat-header {
  align-items: center;
  background-color: #007bff;
  border-bottom: 1px solid #ccc;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 10px;
}

.chat-body {
  flex: 1;
  overflow-y: auto;
  padding: 10px;
}

.chat-footer {
  border-top: 1px solid #ccc;
  display: flex;
  padding: 10px;
}

.chat-footer input {
  border: 1px solid #ccc;
  border-radius: 5px;
  flex: 1;
  padding: 5px;
}

.chat-footer button {
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  margin-left: 10px;
  padding: 5px 10px;
}

.chat-close {
  cursor: pointer;
  font-size: 20px;
}
JavaScript Functionality: The chat functionality is in scripts.js.
javascript

document.addEventListener("DOMContentLoaded", function () {
  const chatIcon = document.querySelector(".chat-icon");
  const chatWindow = document.querySelector(".chat-window");
  const chatClose = document.querySelector(".chat-close");

  chatIcon.addEventListener("click", function () {
    chatWindow.style.display = "flex";
  });

  chatClose.addEventListener("click", function () {
    chatWindow.style.display = "none";
  });
});
Adding New Sections
To add new sections to your website:

HTML: Define the new section in index.html.
html

<section class="new-section">
  <div class="section-container">
    <h2>New Section Header</h2>
    <p>Content for the new section.</p>
  </div>
</section>
CSS: Style the new section in styles.css.
css

.new-section {
  padding: 20px;
  background-color: #f9f9f9;
}

.new-section .section-container {
  max-width: 1200px;
  margin: auto;
  padding: 20px;
}

.new-section h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

.new-section p {
  font-size: 16px;
}
Best Practices
Backup: Always create a backup of your files before making major changes.
Testing: Test your changes on multiple devices and browsers to ensure compatibility.
Version Control: Use version control systems like Git to manage changes and collaborate with others.
Code Comments: Add comments to your code to explain complex sections for future reference.
Troubleshooting
Changes Not Reflecting: Clear your browser cache or try a hard refresh (Ctrl+F5).
Broken Layout: Use browser developer tools (F12) to inspect and debug CSS issues.
JavaScript Errors: Check the console (F12) for any JavaScript errors and debug accordingly.
By following this guide, you should be able to manage and update the ECO & Co. website efficiently. For further assistance, feel free to reach out to the development team.




### Saving the Documentation

1. **Create a new file** in the root directory of your project.
2. **Name the file** `README.md`.
3. **Copy and paste** the provided documentation into the file.
4. **Save the file**.
