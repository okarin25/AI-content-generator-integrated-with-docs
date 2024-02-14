// Constants
const API_KEY = "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";
const MODEL_TYPE = "gpt-3.5-turbo"; //chatGPT model
const BASE_URL = "https://api.openai.com/v1";

// Creates a custom menu in Google Docs
function onOpen() {
  DocumentApp.getUi().createMenu("ChatGPT")
      .addItem("Generate Prompt", "generatePrompt")
      .addItem("Generate Linkedin Post", "generateIdeas")
      .addItem("Generate Blog Post", "generateBlogPost")
      .addItem("Generate Story Idea", "generateStoryIdea")
      .addToUi();
}

// Generates prompt based on the selected text and adds it to the document
function generateIdeas() {
  const doc = DocumentApp.getActiveDocument();
  const selectedText = doc.getSelection().getRangeElements()[0].getElement().asText().getText();
  const body = doc.getBody();
  const prompt = `Generate 5 social media post ideas about ${selectedText}`;
  generateCompletion(prompt, (response) => {
    const ideas = JSON.parse(response).choices[0].message.content.split("\n");
    ideas.forEach((idea) => {
      body.appendParagraph(idea);
    });
  });
}

// Generates prompt based on the selected text and adds it to the document
function generatePrompt() {
  const doc = DocumentApp.getActiveDocument();
  const selectedText = doc.getSelection().getRangeElements()[0].getElement().asText().getText();
  const body = doc.getBody();
  const prompt = `Write an essay about ${selectedText}`;
  generateCompletion(prompt, (response) => {
    const essay = JSON.parse(response).choices[0].message.content;
    body.appendParagraph(essay);
  });
}

// Generates a completion for the given prompt and applies the callback function to the response
function generateCompletion(prompt, callback) {
  const body = {
    model: MODEL_TYPE,
    messages: [{role: "user", content: prompt}],
    temperature: 0.7,
    max_tokens: 2060,
  };
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + API_KEY,
  };
  const options = {
    method: "POST",
    headers,
    payload: JSON.stringify(body),
  };
  UrlFetchApp.fetch(BASE_URL + "/chat/completions", options)
      .then((response) => response.getContentText())
      .then(callback);
}

// Generates a blog post based on the selected text and adds it to the document
function generateBlogPost() {
  const doc = DocumentApp.getActiveDocument();
  const selectedText = doc.getSelection().getRangeElements()[0].getElement().asText().getText();
  const body = doc.getBody();
  const prompt = `Generate a blog post about ${selectedText}`;
  generateCompletion(prompt, (response) => {
    const post = JSON.parse(response).choices[0].message.content;
    body.appendParagraph(post.replace(/(#\w+)/g, '<a href="$1">$1</a>'));
  });
}

// Generates a story idea based on the selected text and adds it to the document
function generateStoryIdea() {
  const doc = DocumentApp.getActiveDocument();
  const selectedText = doc.getSelection().getRangeElements()[0].getElement().asText().getText();
  const body = doc.getBody();
  const prompt = `Generate a story idea related to ${selectedText}`;
  generateCompletion(prompt, (response) => {
    const idea = JSON.parse(response).choices[0].message.content;
    body.appendParagraph(idea);
  });
}