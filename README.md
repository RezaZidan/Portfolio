# 🎨 Personal Portfolio Website

A modern, responsive personal portfolio website built with **React**, **TypeScript**, and **Tailwind CSS**.  
Designed to showcase projects, experience, skills, and achievements with a clean UI and dark/light theme support.

---

## ✨ Features

- ⚡ **Modern UI** with Tailwind CSS
- 🌗 **Dark / Light Theme Toggle** (persistent via localStorage)
- 📁 **Projects Showcase** with detail pages
- 📊 **Dashboard** powered by GitHub API
- 🏆 **Achievements & Certifications**
- 💼 **Experience Timeline** (Work, Education, Organizations)
- 🧠 **Skills Visualization**
- 🖼️ Interactive image stacks & animations
- 📱 **Fully Responsive**
- 🔍 Search & filter (Achievements)
- 🎯 Clean, maintainable component structure

---

## 🛠️ Tech Stack

- **Frontend**

  - React
  - TypeScript
  - React Router DOM
  - Tailwind CSS
  - Lucide Icons

- **Data & Utilities**
  - GitHub REST API
  - Local static data (projects, skills, achievements)

---

## 📂 Project Structure

src/
├── assets/ # Images & static assets
├── components/ # Reusable UI components
├── data/ # Static data (projects, skills, etc.)
├── pages/ # Application pages
│ ├── Home.tsx
│ ├── About.tsx
│ ├── Experience.tsx
│ ├── Projects.tsx
│ ├── ProjectDetail.tsx
│ ├── Achievements.tsx
│ ├── Dashboard.tsx
│ └── Contact.tsx
├── layouts/ # Layout components
├── App.tsx
└── main.tsx

yaml
Salin kode

---

## 🚀 Getting Started

### 1️⃣ Clone Repository

```bash
git clone https://github.com/rezazidan/portfolio.git
cd portfolio
2️⃣ Install Dependencies
bash
Salin kode
npm install
3️⃣ Run Development Server
bash
Salin kode
npm run dev
Open:
👉 http://localhost:5173

🏗️ Build for Production
bash
Salin kode
npm run build
Preview build:

bash
Salin kode
npm run preview
🌗 Theme System
Default: Dark mode

Toggle available in sidebar

Theme is saved in localStorage

Uses Tailwind dark: variant

📊 GitHub Dashboard
The Dashboard page fetches public repository data using:

bash
Salin kode
https://api.github.com/users/<username>/repos
Displayed data:

Repository name

Description

Language

Stars

Last updated date

Yearly activity heatmap

🎨 Design System
Color rules used consistently across the app:

vbnet
Salin kode
Title:
text-zinc-900 dark:text-zinc-100

Body:
text-zinc-600 dark:text-zinc-400

Card:
bg-white dark:bg-zinc-900
border-zinc-200 dark:border-zinc-800
📌 Customization
To customize content:

Update files inside src/data/

Replace profile image in src/assets/

Update GitHub username in Dashboard.tsx

📄 License
This project is licensed under the MIT License.
You are free to use, modify, and distribute it.

🙌 Author
Reza Zidan Hanafi
Full-Stack Developer
```
