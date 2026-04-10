# 📘 Examination Module

## 🚀 Tech Stack

### Frontend
- React.js  
- Redux (if used)  
- HTML5, CSS3, JavaScript  

### Backend
- Node.js  
- Express.js  

### Database
- MongoDB (MongoDB Atlas / Local)

---

## ⚙️ Steps to Run the Project

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/ramubgithub/Examination-Module.git
cd Examination-Module


2️⃣ Setup Backend
cd backend
npm install

Create .env file
PORT=5000
MONGO_URI=your_mongodb_connection_string


Run backend
npm start


3️⃣ Setup Frontend
cd ../frontend
npm install
npm start

Frontend runs on: http://localhost:3000

Backend runs on: http://localhost:5000

🔗 API Endpoints
🧑 User APIs
Method	Endpoint	Description
POST	/api/users/register	Register new user
POST	/api/users/login	Login user
📝 Exam APIs
Method	Endpoint	Description
GET	/api/exams	Get all exams
POST	/api/exams	Create exam
GET	/api/exams/:id	Get exam by ID
PUT	/api/exams/:id	Update exam
DELETE	/api/exams/:id	Delete exam


📊 Result APIs
Method	Endpoint	Description
POST	/api/results	Submit result
GET	/api/results/:userId	Get user results


📁 Project Structure
Examination-Module/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   └── server.js
│
├── frontend/
│   ├── src/
│   └── public/
│
└── README.md