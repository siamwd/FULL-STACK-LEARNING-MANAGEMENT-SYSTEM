# 🎓 Full Stack Learning Management System (LMS)

A modern **Full Stack Learning Management System (LMS)** built with **Django REST Framework** and **React (Vite)**. This project provides authentication, teacher management, course APIs, and a responsive frontend designed for scalability and real-world deployment.

---

<p align="center">

![Django](https://img.shields.io/badge/Django-REST_Framework-092E20?style=for-the-badge\&logo=django)
![React](https://img.shields.io/badge/React-Vite-61DAFB?style=for-the-badge\&logo=react)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=for-the-badge\&logo=javascript)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

</p>

---

# 📌 Features

* 🔐 JWT Authentication
* 👨‍🏫 Teacher Management
* 📚 Course & Student APIs
* 🌐 RESTful API Architecture
* ⚡ Fast React + Vite Frontend
* 🎨 Responsive User Interface
* 🔄 CRUD Operations
* 🔒 Environment Variable Support
* 🚀 Ready for Cloud Deployment

---

# 📂 Project Structure

```
Full-Stack-LMS/
│
├── backend_lms/
│   └── auth_project/
│       ├── auth_app/
│       ├── manage.py
│       ├── requirements.txt
│       └── ...
│
├── frontend_lms/
│   └── lms-project/
│       ├── src/
│       ├── public/
│       ├── package.json
│       └── ...
│
└── README.md
```

---

# 🛠 Tech Stack

| Frontend | Backend               | Database            |
| -------- | --------------------- | ------------------- |
| React.js | Django REST Framework | SQLite / PostgreSQL |
| Vite     | Python                | MySQL (Optional)    |
| Axios    | JWT Authentication    |                     |

---

# 🚀 Getting Started

## Prerequisites

Make sure you have installed:

* Python 3.10+
* Node.js 16+
* npm
* Git

---

# 📥 Clone Repository

```bash
git clone https://github.com/your-username/full-stack-lms.git

cd Full-Stack-LMS
```

---

# ⚙ Backend Setup

Navigate to the backend directory:

```bash
cd backend_lms/auth_project
```

## Create Virtual Environment

### Windows

```bash
python -m venv venv

venv\Scripts\activate
```

### Linux / Mac

```bash
python3 -m venv venv

source venv/bin/activate
```

---

## Install Dependencies

```bash
pip install -r requirements.txt
```

---

## Configure Environment Variables

Create a `.env` file:

```
DJANGO_SECRET_KEY=your_secret_key

DATABASE_URL=your_database_url

DEBUG=True
```

---

## Run Database Migration

```bash
python manage.py migrate
```

---

## Start Django Server

```bash
python manage.py runserver
```

Backend will be available at:

```
http://127.0.0.1:8000/
```

---

# 💻 Frontend Setup

Navigate to frontend:

```bash
cd ../../frontend_lms/lms-project
```

Install packages:

```bash
npm install
```

Create a `.env` file:

```
VITE_API_BACKEND_URL=http://127.0.0.1:8000/api
```

Run development server:

```bash
npm run dev
```

Frontend will be available at:

```
http://localhost:5173/
```

---

# 🔗 API Integration

Example Axios configuration:

```javascript
const backend_url =
    import.meta.env.VITE_API_BACKEND_URL;
```

---

# 📸 Screenshots

```
Home Page

Login Page

Dashboard

Teacher Management

Course List
```

*(Add screenshots here for a more attractive repository.)*

---

# 🧪 Running Tests

### Backend

```bash
python manage.py test
```

### Frontend

```bash
npm test
```

(if configured)

---

# 🌍 Deployment

## Backend

Supported platforms:

* Render
* Railway
* DigitalOcean App Platform
* Heroku

Remember to:

* Set Environment Variables
* Configure Static Files
* Enable HTTPS

---

## Frontend

Build production files:

```bash
npm run build
```

Deploy to:

* Vercel
* Netlify
* Firebase Hosting

---

# 🔒 Git Ignore

Recommended `.gitignore`

```
venv/
node_modules/
.env
*.sqlite3
.vscode/
.DS_Store
dist/
__pycache__/
```

---

# 🤝 Contributing

Contributions are always welcome.

1. Fork the repository

2. Create your feature branch

```bash
git checkout -b feature/new-feature
```

3. Commit your changes

```bash
git commit -m "Add new feature"
```

4. Push to GitHub

```bash
git push origin feature/new-feature
```

5. Open a Pull Request

---

# 📈 Future Improvements

* Student Dashboard

* Course Enrollment

* Assignment Submission

* Quiz System

* Video Lectures

* Attendance Management

* Admin Analytics

* Payment Integration

---

# 👨‍💻 Author

**Mahfuj**

Full Stack Developer

Python • Django • React • REST API

GitHub:

```
https://github.com/your-username
```

LinkedIn:

```
https://linkedin.com/in/your-profile
```

---

# 📄 License

This project is licensed under the **MIT License**.

Feel free to use, modify, and distribute this project for learning and development purposes.

---

<p align="center">

⭐ If you found this project helpful, consider giving it a **Star** on GitHub!

Made with ❤️ using Django & React

</p>
