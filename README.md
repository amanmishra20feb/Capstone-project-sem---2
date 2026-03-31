# 💼 Job Finder

A modern, responsive job search website built using **plain HTML, CSS, and JavaScript** — no frameworks used. This is a college project designed to be beginner-friendly and easy to explain.

---

## 📖 Project Description

**Job Finder** is a web application where users can:
- Search for jobs by keyword and location
- Filter jobs by type (Full Time, Part Time, Contract)
- View detailed job descriptions in a popup modal
- Apply for jobs via external links

The website fetches real job data from an API and displays it dynamically using JavaScript DOM manipulation.

---

## ✨ Features

- 🔍 **Search** — Search jobs by title, company, or keyword
- 📍 **Location Filter** — Filter by job location
- 🏷️ **Type Filters** — Full Time, Part Time, Contract, Other
- 📋 **Job Cards** — Beautiful cards with company info, type badge, and description
- 📝 **Job Details Modal** — Click "View Details" to see full job info
- 📱 **Responsive Design** — Works on mobile, tablet, and desktop
- ⏳ **Loading Spinner** — Shows while jobs are being fetched
- ⚠️ **Error Handling** — Fallback data if API fails
- 🔎 **No Results Message** — When search has no matches
- 📬 **Contact Form** — With frontend validation
- 🎨 **Modern UI** — Shadows, gradients, hover effects, smooth animations

---

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| HTML5 | Page structure and content |
| CSS3 | Styling, layout, animations |
| JavaScript (ES6) | API calls, DOM manipulation, interactivity |
| Google Fonts | Poppins font family |

---

## 🌐 API Used

**Remotive API** — [https://remotive.com/api/remote-jobs](https://remotive.com/api/remote-jobs)

- Free to use, no API key required
- Returns real remote job listings
- If the API fails or has CORS issues, the app uses built-in **fallback sample data**

---

## 🚀 How to Run the Project

1. **Download** or clone this project folder
2. Make sure you have these files in the same folder:
   - `index.html`
   - `script.js`
3. **Open `index.html`** in any modern web browser (Chrome, Firefox, Edge)
4. That's it! The website will load and fetch jobs automatically

> 💡 No server setup, no npm install, no build tools needed. Just open and use!

---

## 📁 File Structure

```
Job-Finder/
├── index.html      # Main HTML file with embedded CSS
├── script.js       # JavaScript logic (API, search, filter, validation)
└── README.md       # Project documentation
```

---

## 🔮 Future Improvements

- Add dark mode toggle
- Implement pagination for large job lists
- Save favorite jobs using localStorage
- Add sorting (by date, salary, company)
- Add user authentication and profile
- Connect to multiple job APIs for more listings
- Deploy on GitHub Pages or Netlify

---

## 👤 Author

Made with ❤️ as a college project.

---

## 📄 License

This project is open source and free to use for educational purposes.
