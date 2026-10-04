# Insightly - AI Dashboard & Analytics

**Insightly** is a modern, responsive web dashboard for data visualization, analytics, and AI-powered insights. Built with React 19, Vite, and Tailwind CSS, it provides a sleek interface for monitoring metrics, analyzing data, and generating AI-driven reports.

![Insightly Screenshot](public/dashboard.png)

## 🌟 Features

- **Real-time Data Visualization**: Interactive charts and graphs using Chart.js & ApexCharts
- **AI-Powered Insights**: Integrated with OpenAI/Anthropic for automated analysis
- **Responsive Design**: Fully works on mobile, tablet, and desktop
- **Dark/Light Mode**: Automatic theme detection with system preference
- **Customizable Widgets**: Drag-and-drop dashboard builder
- **Authentication**: Secure login with JWT and OAuth support
- **Data Export**: CSV, PDF, and JSON export capabilities
- **Plugin System**: Extensible architecture for adding custom modules

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | React 19 + Vite 6 |
| **Styling** | Tailwind CSS 4 |
| **Icons** | Lucide React |
| **Charts** | Chart.js 4 / ApexCharts |
| **State Management** | React Context + Zustand |
| **Routing** | React Router DOM |
| **HTTP Client** | Axios |
| **Build Tool** | Vite |

## 📦 Installation

### Prerequisites

- Node.js 22+ (LTS)
- npm or yarn or pnpm

### Quick Start

```bash
# Clone the repository
git clone https://github.com/kamalesh404/insightly.git
cd insightly

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:5173 in your browser
```

### Build for Production

```bash
npm run build
# Preview production build
npm run preview
```

## 📁 Project Structure

```
insightly/
├── public/           # Static assets (images, favicons)
├── src/
│   ├── assets/       # Images, SVGs, fonts
│   ├── components/   # Reusable UI components
│   ├── pages/        # Page components
│   ├── hooks/        # Custom React hooks
│   ├── stores/       # Global state management
│   ├── lib/          # Utility functions
│   └── main.jsx      # Entry point
├── index.html        # HTML template
├── vite.config.js    # Vite configuration
├── tailwind.config.js # Tailwind configuration
└── package.json      # Dependencies
```

## 🎨 Customization

### Tailwind Theme

Edit `tailwind.config.js` to customize colors, fonts, and breakpoints:

```js
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Your custom colors
      },
      fontFamily: {
        // Your custom fonts
      },
    },
  },
  plugins: [],
}
```

### Adding New Pages

Create a new component in `src/pages/` and add routing in `src/main.jsx`.

## 🚀 Deployment

### Vercel

```bash
npm run build
# Deploy to Vercel
vercel
```

### Netlify

```bash
npm run build
# Deploy to Netlify
netlify deploy --prod
```

### Docker

```bash
# Build Docker image
docker build -t insightly .

# Run container
docker run -p 3000:3000 insightly
```

## 📊 API Integration

Insightly can connect to various data sources:

```js
// Example: Connect to PostgreSQL database
import axios from "axios";

const fetchData = async () => {
  const response = await axios.get("/api/data", {
    params: { timeRange: "24h" },
  });
  return response.data;
};
```

## 🤝 Contributing

We love! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📜 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

- **GitHub**: [@kamalesh404](https://github.com/kamalesh404)
- **Project**: [insightly](https://github.com/kamalesh404/insightly)
- **Email**: contact@insightly.dev

---

⭐️ **Star this repository** if you find it useful!