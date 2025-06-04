# Indian Atlas 🇮🇳

**Indian Atlas** is an open-source project providing structured data of Indian states and their cities. The goal is to offer a developer-friendly dataset that can be used for applications like dropdowns, location pickers, maps, and more.

![GitHub repo size](https://img.shields.io/github/repo-size/vipinwap07/indian-atlas)
![GitHub stars](https://img.shields.io/github/stars/vipinwap07/indian-atlas?style=social)
![License](https://img.shields.io/github/license/vipinwap07/indian-atlas)

---

## 🔗 Live Website

🌐 **[https://vipinwap07.github.io/indian-atlas](https://vipinwap07.github.io/indian-atlas)**  
Hosted via GitHub Pages using [Next.js 14](https://nextjs.org/).

---

## 📁 Project Structure

```
indian-atlas/
├── public/
│   └── data/
│       └── states-cities.json    # JSON file of states and cities
├── app/
│   └── page.tsx / page.jsx       # Home page (static UI)
├── next.config.js                # Static export config
└── README.md                     # This file
```

---

## 📦 Data Format

### `states-cities.json`

```json
[
  {
    "state": "Maharashtra",
    "code": "MH",
    "cities": ["Mumbai", "Pune", "Nagpur"]
  },
  {
    "state": "Karnataka",
    "code": "KA",
    "cities": ["Bengaluru", "Mysuru"]
  }
]
```

> More data will be added over time or contributed by the community.

---

## 🚀 Getting Started (Locally)

1. **Clone this repo**

   ```bash
   git clone https://github.com/vipinwap07/indian-atlas.git
   cd indian-atlas
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start local dev server**

   ```bash
   npm run dev
   ```

4. **Export static site**
   ```bash
   npm run deploy
   ```

---

## 📚 Use Cases

- Country/state/city dropdowns
- Mapping/location-based services
- Educational and demographic apps
- Public open-data references

---

## 🤝 Contributing

Want to help? Here's how:

- Add new states or cities to the dataset
- Fix typos or inconsistencies
- Improve the UI/UX
- Translate or localize state names

Feel free to fork and open a pull request!

---

## 📄 License

MIT © [Vipin Kumar](https://github.com/vipinwap07) — Free to use and modify.
