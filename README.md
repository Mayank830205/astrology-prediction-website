# 🔮 AI Astrology Prediction Website

## 📌 Project Description
The AI Astrology Prediction Website is a frontend-based web application that collects user birth details and generates personalized astrology predictions. The application uses a structured form to gather astrological information and sends this data to an automated workflow using a webhook. The workflow processes the data using AI logic and delivers a customized prediction to the user via email.

The goal of this project is to demonstrate how frontend applications can integrate with automation tools and AI systems using webhooks, without requiring a traditional backend server.

---

## 🏗️ Architecture Overview
The project follows a serverless, event-driven architecture:

1. User interacts with a web form hosted on GitHub Pages
2. JavaScript captures and validates user input
3. Form data is sent to an n8n webhook endpoint
4. n8n processes the data using AI logic
5. The generated astrology prediction is emailed to the user

This architecture avoids backend hosting and relies on automation workflows.

---

## 🔄 Frontend to n8n Data Flow Explanation
1. The user fills in details such as name, date of birth, place of birth, and area of focus.
2. On form submission, JavaScript collects the data and converts it into JSON format.
3. A POST request is sent using the `fetch()` API to an n8n webhook URL.
4. n8n receives the request and triggers an automated workflow.
5. The workflow processes the data and performs further actions such as AI prediction generation and email delivery.

Data transfer is done securely using HTTP POST requests.

---

## 🤖 AI Usage Explanation
AI is used to generate personalized astrology predictions based on the user’s birth details and selected life focus area.  
A structured prompt is passed to the AI model, instructing it to act as a professional astrologer and generate a positive, realistic, and user-friendly prediction.

The AI logic:
- Analyzes date of birth to infer personality traits
- Focuses prediction on the selected life area (career, health, relationship, finance)
- Generates human-like, easy-to-understand astrology insights
- Produces concise and meaningful output suitable for email delivery

---

## ⚠️ Known Limitations and Assumptions
- Exact astrological accuracy may be limited if the time of birth is not provided
- GitHub Pages does not support backend logic, so all processing depends on third-party automation tools
- Email delivery depends on the reliability of the n8n workflow and email service
- The astrology predictions are AI-generated and meant for informational purposes only
- Internet connection is required for webhook communication

---

## 🚀 Technologies Used
- HTML, CSS, JavaScript
- GitHub Pages (Hosting)
- n8n (Workflow Automation)
- Webhooks
- AI Language Model for prediction generation

---
## 📸 Screenshots

### 📝 User Input Form
This screen shows the main astrology form where users enter their personal and birth details such as name, date of birth, place of birth, focus area, and email address.

![User Input Form](screenshots/form.jpeg)

---

### 🔮 Prediction Submission Confirmation
After submitting the form, users receive a confirmation message indicating that their personalized astrology prediction has been successfully processed and sent via email.

![Prediction Confirmation](screenshots/result.png)

---

### 🔄 n8n Workflow Automation
This screenshot displays the n8n workflow that receives data from the frontend through a webhook, processes the astrology prediction using AI, and sends the result via email.

![n8n Workflow](screenshots/n8n-workflow.png)


## 📎 Conclusion
This project demonstrates how modern frontend applications can integrate AI-powered automation using webhooks and workflow tools like n8n. It showcases practical skills in frontend development, API integration, and AI prompt engineering without relying on traditional backend servers.
