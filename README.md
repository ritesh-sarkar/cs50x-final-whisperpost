# WhisperPost 💬 — Anonymous Messaging Web App

> Final Project for **CS50x 2024**
> Developed by: **Ritesh Sarkar Showharda**
> edX Username: `ritesh_468`
> GitHub Username: [`ritesh-sarkar`](https://github.com/ritesh-sarkar)
> Location: Chandpur, Chattogram, Bangladesh
> Submitted on: July 30, 2025

---

## 📽️ Project Video Demo

Watch the full project explanation video on YouTube:
[https://youtu.be/NkarbV5lBfY](https://youtu.be/NkarbV5lBfY)

---

## 🧠 About the Project

**WhisperPost** is a full-stack **anonymous messaging platform** where users can:
- Create an account with secure email verification
- Receive anonymous messages via a unique dashboard
- React to messages with a heart ❤️
- Take screenshots of messages
- Delete messages if unwanted

It focuses on **privacy**, **simplicity**, and an **intuitive UI**, following modern web development practices.

---

## 🔧 Technologies Used

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: Tailwind CSS
- **Database**: MongoDB (with Mongoose)
- **Authentication**: Custom credentials-based system with email verification
- **Frontend Animations**: Framer Motion

---

## ✨ Features

- ✅ **User Registration with Email Verification**
- ✅ **Form validation** with Zod and Regex
- ✅ **Custom Dashboard** with real-time anonymous message feed
- ✅ **Read, Love, Screenshot, Delete** functionalities for messages
- ✅ **Responsive Design** for all devices
- ✅ **Secure JWT-based auth via HTTP-only cookies**
- ✅ **Forgot Password**

---

## 📁 Folder Structure

/app          # Next.js App Router files and pages
/app/components   # React components used across the app
/lib          # Utilities and helper functions (e.g., database connection, auth helpers)
/models       # Mongoose models and schemas
/pages/api    # API routes for authentication, messages, etc.
/public       # Public assets like robots.txt, sitemap.xml, images


---

## 🖼️ Screenshots (See video for live demo)

- Signup and login interface
- Secure email verification system
- Personalized user dashboard
- Anonymous message display with interaction options

---

## 🚀 How to Run Locally

1.  Clone the repository:
    ```bash
    git clone [https://github.com/ritesh-sarkar/whisperpost.git](https://github.com/ritesh-sarkar/whisperpost.git)
    cd whisperpost
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Create a `.env` file in the root directory and add your environment variables (see `.env.example`):
    ```env
    DB_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    NEXT_SECRET=your_next_auth_secret
    NEXT_AUTH_URL=http://localhost:3000
    NEXT_PUBLIC_BASE_URL=http://localhost:3000
    SMTP_HOST=your_smtp_host
    SMTP_PORT=your_smtp_port
    SMTP_USER=your_smtp_user
    SMTP_PASSWORD=your_smtp_password
    ```
    **Important**: Never commit your `.env` file to public repositories. Keep credentials private.

4.  Run the development server:
    ```bash
    npm run dev
    ```
5.  Open `http://localhost:3000` in your browser.

⚠️ **Notes**

* This project includes `robots.txt` and `sitemap.xml` in `/public` to help with SEO and web crawlers.
* If you don’t have SMTP credentials for email verification, you can use [Ethereal Email](https://ethereal.email/) for testing.
* JWT tokens are stored securely with HTTP-only cookies for enhanced security.

---

## 📬 Contact

For questions or collaboration, please contact me via Facebook or email.

Email: `riteshsarkar2006@gmail.com`
Facebook: `https://www.facebook.com/riteshsarkar15/`

Thank you for reviewing my project!