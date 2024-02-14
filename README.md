ChatGPT Integration with Google Docs

This JavaScript code integrates the OpenAI ChatGPT API with Google Docs to generate prompts and LinkedIn posts based on the selected text.
Getting Started

To use this code, follow these steps:

    Create a new Google Docs document.
    Open the script editor by clicking on "Tools" > "Script editor".
    Copy and paste the code into the script editor.
    Replace <API_KEY> with your OpenAI API key.
    Save the script and reload the Google Docs document.
    Open the "Add-ons" menu and click on "ChatGPT" to see the available options.

Functions

The following functions are available in this code:

generatePrompt()
Generates a prompt based on the selected text and adds it to the document.

generateIdeas()
Generates ideas for a LinkedIn post based on the selected text and adds it to the document.

How It Works

This code uses the OpenAI ChatGPT API to generate prompts and LinkedIn post ideas based on the selected text in a Google Docs document. When the user selects text and clicks on the "Generate Prompt" or "Generate Ideas" option in the "ChatGPT" menu, the corresponding function is called. The function retrieves the selected text and sends a request to the OpenAI API to generate a prompt or LinkedIn post ideas. The response is then parsed and added to the document as a paragraph.

Error Handling

This code includes error handling to catch and log any errors that may occur during the API request. If an error occurs, a message is displayed in the console.
Rate Limiting. To prevent overloading the OpenAI API, this code includes rate limiting to limit the number of requests that can be made in a given time period. The rate limit is set to 3 requests per minute, which is the free tier limit.

API Key

This code requires an OpenAI API key to use the ChatGPT API. The API key should be added to the API_KEY constant in the code.
