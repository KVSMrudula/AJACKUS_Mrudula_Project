# 🧑‍💼 Employee Directory — Frontend UI Assignment

A fully responsive, modular, and interactive employee directory built with **HTML**, **CSS**, and **JavaScript** (Freemarker optional). This app demonstrates a clean front-end architecture with filtering, sorting, searching, validation, and pagination — all using in-memory data only.

---

## 📌 Objective

To develop a responsive Employee Directory web interface that simulates full CRUD operations using **vanilla JavaScript**, styled with CSS, and rendered using HTML. It reflects key modern frontend principles including modularity, accessibility, responsiveness, and clean separation of concerns.

---

## 🎯 Features & Implementation

### 🗂 Dashboard Page
- Grid layout displaying:
  - ✅ Employee ID
  - ✅ First Name / Last Name
  - ✅ Email
  - ✅ Department
  - ✅ Role
- Each entry includes:
  - ✏️ Edit button
  - 🗑️ Delete button
- Pagination control:
  - 10 / 25 / 50 per page
  - Page numbers with active page highlighting

### 🧾 Add / Edit Employee Form
- Modal form UI
- Fields:
  - First Name, Last Name, Email, Department, Role
- Client-side validation:
  - Required field checks
  - Email format validation
- Reusable form for both **Add** and **Edit** operations

### 🔍 Filter / Search / Sort
- Filter sidebar with:
  - First Name
  - Department
  - Role
- Global search bar:
  - Real-time search by name or email
- Sorting dropdown:
  - By First Name, Last Name, Department, Role

### 📱 Responsive Design
- Built mobile-first using CSS Grid & Flexbox
- Optimized for desktop, tablet, and smartphone layouts
- Modal and filter components adapt to viewport size

### 📦 Data Handling
- Uses local JavaScript array as in-memory database
- Persists data using `localStorage` (simulates backend)
- Each record includes a unique ID (`crypto.randomUUID()`)

### 🧪 Validation & Error Handling
- Live form validation (required fields, email format)
- UI feedback on invalid input
- Safe handling of edits/deletes
- Empty state handling with graceful fallbacks

---

## 📁 Project Structure

├── index.html
├── assets/
│ ├── css/
│ │ └── styles.css # Layout, media queries, UI styling
│ └── js/
│ ├── main.js # App logic: filters, search, pagination
│ ├── ui.js # DOM rendering logic, events
│ └── data.js # Local data store, seeded with 25+ employees

---

## 🚀 Setup & Run Instructions

### ✅ Option 1: Open Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/employee-directory-ui.git
   cd employee-directory-ui
2.Open index.html in any modern browser — no server or build needed.

### ✅ Option 2: Host via GitHub Pages
     1.  Push to GitHub

    2.   Enable Pages under project settings

    3.   See the live demo 
