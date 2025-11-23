# Ayala's Cybersecurity Web Portfolio (Dashboard Theme)

## 🌟 Overview

This is the official repository for my personal portfolio website, designed to showcase my dual expertise as a **Front-End Developer** and a **Cybersecurity Enthusiast**.

Built with a unique, responsive **dashboard theme**, the site provides a comprehensive, interactive overview of my technical projects, skills, and professional certifications.

The primary goal is to demonstrate proficiency in creating modern, scalable web solutions while emphasizing the critical importance of **secure coding practices** and **threat analysis** in modern development.

---

## 🚀 Live Demo & Contact

| Detail | Link |
| :--- | :--- |
| **🌐 Live Website** | [https://ranseraya.github.io/portfolio-Ayala/](https://ranseraya.github.io/portfolio-Ayala/) |
| **🔗 LinkedIn** | [Connect with me on LinkedIn](https://linkedin.com/in/ranseraya) |
| **📧 Email** | ayalarahanda0@gmail.com |
| **📜 License** | MIT License |

---

## 💻 Technology Stack

This project is built using a modern, efficient, and robust set of technologies:

| Kategori | Teknologi | Tujuan |
| :--- | :--- | :--- |
| **Framework** | Next.js 15.3+ (App Router) | Static export, optimized performance, and server component capabilities. |
| **Styling** | Tailwind CSS (v4) | Utility-first, rapid UI development. |
| **UI Components** | Shadcn/ui | Accessible, highly customizable UI components. |
| **Theming** | Next-themes | Seamless dark/light mode switching. |
| **Forms** | Web3Forms | Secure contact form submission handling. |
| **Deployment** | GitHub Pages (Static Export) | Global availability and free hosting. |

---

## 🛠️ Key Features and Expertise Demonstrated

The portfolio is structured to highlight specific areas of expertise:

### 1. Dashboard (The Core)
* **Dynamic Typing Effect:** Uses `TypingEffect` component to dynamically present the dual role: "Front-End Developer" and "Cybersecurity Enthusiast".
* **Expertise Metrics:** Highlights experience across Projects, Certifications, Awards, and Years.
* **Aesthetic:** Utilizes custom CSS for a **glassmorph** effect with a green/cyber glow, enhancing the security theme.

### 2. Projects (Practical Experience)
The project section showcases diverse skills from coding to security solutions:
* **Cybersecurity Tools:** Includes projects like **Threat Intelligence Tool** (Python) and **Network Scanner** (C++/Sockets).
* **Full Stack & Frontend:** Demonstrates development of **E-commerce Platform** (Next.js, Node.js, MongoDB) and **News Portal**.
* **Filtering:** Implements a dynamic tag-based filtering system using React `useState` to navigate projects by category (Full Stack, Frontend, Cybersecurity).

### 3. Certifications (Validation)
Features key professional certifications:
* **IBM Cybersecurity Analyst**
* **Google Cybersecurity**
* **META Front-End Developer**
* **Backend & Cloud (Dicoding/GDSC)**
* Demonstrates skills ranging from web vulnerabilities (XSS, SQLi) to network security and modern React development.

### 4. Tools & Skills
* **Detailed Skill Metrics:** Uses custom `CircularProgress` components to visualize proficiency level and years of experience across technologies.
* **Key Skills:** Includes technologies like **Next.js, React, Tailwind, PHP, Node.js, MySQL, MongoDB, Kali/Parrot Linux, and Git**.

---

## ⚙️ Development & Setup

### Requirements
* Node.js (LTS version, v20+)
* npm or Yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/ranseraya/portfolio-Ayala.git](https://github.com/ranseraya/portfolio-Ayala.git)
    cd portfolio-Ayala
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or yarn install
    ```

### Running Locally

1.  **Start the development server:**
    ```bash
    npm run dev
    ```
    (Runs on `http://localhost:3000`)

### Building for Production (Static Export)

This command prepares the site for deployment to static hosts like GitHub Pages, generating files in the `out/` directory.

```bash
# This command runs: next build && next export
npm run build