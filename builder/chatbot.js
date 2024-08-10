document.addEventListener("DOMContentLoaded", function() {
    const chatbotContainer = document.getElementById("chatbot");
    const toggleChatbotButton = document.getElementById("toggle-chatbot");
    const hideChatbotButton = document.getElementById("hide-chatbot");
    const sendButton = document.getElementById("send-btn");
    const userInput = document.getElementById("user-input");
    const chatbotBody = document.getElementById("chatbot-body");

    // Show/Hide chatbot container
    toggleChatbotButton.addEventListener("click", function() {
        if (chatbotContainer.style.display === "none" || chatbotContainer.style.display === "") {
            chatbotContainer.style.display = "block";
            toggleChatbotButton.style.display = "none";
        }
    });

    // Hide chatbot on close button click
    hideChatbotButton.addEventListener("click", function() {
        chatbotContainer.style.display = "none";
        toggleChatbotButton.style.display = "block";
    });

    // Send user input and generate bot response
    sendButton.addEventListener("click", function() {
        const userMessage = userInput.value.trim();
        if (userMessage !== "") {
            addMessage("user", userMessage);
            userInput.value = "";
            generateBotResponse(userMessage);
        }
    });

    // Function to add message to chat body
    function addMessage(sender, message) {
        const messageElement = document.createElement("div");
        messageElement.classList.add("chat-message", sender);

        const messageContent = document.createElement("div");
        messageContent.classList.add("message-content");
        messageContent.innerHTML = message;

        messageElement.appendChild(messageContent);
        chatbotBody.appendChild(messageElement);

        // Scroll to the latest message
        chatbotBody.scrollTop = chatbotBody.scrollHeight;
    }

    // Function to generate bot response
    function generateBotResponse(userMessage) {
        let botMessage = "I'm sorry, I didn't understand that.";

        const responses = {
            "add heading": "You can add a heading by selecting 'Add Item' and then choosing 'Heading'.",
            "add image": "To add an image, click on 'Add Item' and select 'Image'. You can then upload an image or choose one from the gallery.",
            "add text": "You can add text by selecting 'Add Item' and then choosing 'Text'.",
            "save": "To save your project, click the 'Save' button in the toolbar.",
            "export": "You can export your project by selecting 'Export to HTML'.",
            "delete": "To delete an item, use the 'Delete' function in the toolbar.",
            "how are you": "I'm fine! thanks for asking.",
            "terms of service": "Our terms of service is located <a href='https://webbuild.js.org/tos.html'>here</a>.",
        };

        const lowerCaseMessage = userMessage.toLowerCase();
        for (let key in responses) {
            if (lowerCaseMessage.includes(key)) {
                botMessage = responses[key];
                break;
            }
        }

        setTimeout(() => {
            addMessage("bot", botMessage);
        }, 500); // Simulate bot thinking time
    }
});
