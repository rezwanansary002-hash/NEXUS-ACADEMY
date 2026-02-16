# NEXUS ACADEMY

A premium tutoring platform website with a "Midnight Gold" theme. Features a landing page, student portal, and teacher/admin dashboard.

## 🚀 How to Use

### 1. Landing Page (`index.html`)
- Showcases courses (Maths, Science, English).
- "Enroll Now" opens a payment overlay with QR code.
- "Student Portal" button for students to login/register.
- "Teacher Login" button for admin access.

### 2. Student Portal (`student.html`)
- **Register:** Students sign up with Name + WhatsApp Number + Subject.
- **Login:** Students log in with the same details.
- **Dashboard:**
  - **Go Live:** Join the active Google Meet/Zoom class.
  - **Homework:** View and submit answers to homework tasks.
  - **Notes:** View PDF notes and reply to teacher notes.

### 3. Teacher/Admin Dashboard (`admin.html`)
- **Login:** Access via `teacher.html` (Password: `rezwan@321`).
- **Manage Students:** View enrolled students, remove them.
- **Go Live:** Paste and save your class link (updates for all students).
- **Manage Content:** Add/Remove Homework and Note Links.
- **Inbox:** View student submissions and replies.
- **Uploads:** Temporarily upload PDF files for the current session.

## 🛠 Deployment

This is a **static website** that uses `localStorage` for data persistence. It requires no backend server for basic demonstration or single-device usage.

### Hosting Options
You can host this for free on:
- **Netlify:** Drag and drop the project folder.
- **GitHub Pages:** Push to GitHub and enable Pages.
- **Vercel:** Import from GitHub.

### ⚠️ Important Note
Since data is stored in the browser's `localStorage`:
- **Students must use the same device/browser** to see their registration.
- **Admin updates (Homework/Notes) are stored on the Admin's device.** To make this work across different devices (i.e., real-world usage where students are on their own phones), you will need to connect a real backend (like Firebase, Supabase, or a Node.js server).

## 📂 Project Structure
- `index.html` - Home page
- `student.html` - Student interface
- `teacher.html` - Teacher login page
- `admin.html` - Admin control panel
- `styles.css` - Global "Midnight Gold" styles
- `script.js` - Logic for the landing page
- `qr.png` - Payment QR code (fallback)
