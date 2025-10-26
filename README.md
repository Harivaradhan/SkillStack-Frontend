🌟 SkillStack Tracker Frontend

This is the ReactJS frontend for the SkillStack Tracker project. It provides a user-friendly interface to manage your skills, connect with the Java backend, and visualize your progress.

🛠️ Tech Stack

ReactJS (v18+) ⚛️

Axios for API requests 🔌

CSS for styling 🎨

Optional: Custom modal forms for adding/editing skills 📝

📌 Prerequisites

Node.js & npm

Install Node.js v18+ from Node.js Official Site

npm comes bundled with Node.js

Backend Server Running

Make sure the SkillStack Backend is running at:

http://localhost:8080/SkillStack/


APIs should be reachable from frontend to avoid CORS issues 🌐

🏗️ Project Setup
1️⃣ Clone the Repository
git clone <your-frontend-repo-url>

2️⃣ Navigate to Project Folder
cd path/to/frontend

3️⃣ Install Dependencies
npm install

4️⃣ Run the App
npm start


This will start the development server at:

http://localhost:3000

🌈 Features

✅ View all skills in a clean table format

✅ Add new skill via modal form

✅ Edit existing skill inline

✅ Delete skills with confirmation prompt

✅ Dynamic UI updates after CRUD operations

✅ Mint green themed background with responsive design

⚡ Component Structure
SkillStackFrontend/
├─ src/
│   ├─ components/
│   │   ├─ AddSkillForm.js   # Modal form for adding skills
│   │   └─ SkillList.js      # Main table component
│   ├─ App.js                # Main app component
│   ├─ App.css               # Styling for layout
│   └─ index.js              # ReactDOM rendering
├─ package.json
└─ README.md

🔌 API Connection

Base URL: http://localhost:8080/SkillStack/

Endpoints:

GET /getAllSkills → Fetch all skills

POST /addSkill → Add a new skill

PUT /UpdateServlet → Update a skill

DELETE /DeleteServlet?id={id} → Delete a skill

💡 Tip: Make sure backend is running and accessible to see data in the table.
