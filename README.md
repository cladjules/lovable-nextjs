# 🚀 Noxtable - Lovable to Next.js Migration Tool

<div align="center">

**Seamlessly convert your Lovable (Vite) applications to Next.js with modern App Router architecture**

[![Node.js Version](https://img.shields.io/badge/node-%3E%3D%2022.0.0-brightgreen.svg)](https://nodejs.org/)
[![Next.js](https://img.shields.io/badge/Next.js-15-black.svg)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue.svg)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-06B6D4.svg)](https://tailwindcss.com/)

[🎯 **Live Demo**](https://noxtable.cladjules.com) | [📖 **Documentation**](#-quick-start) | [🚀 **Get Started**](#-quick-start)

</div>

---

## ✨ Features

- 🔄 **Zero-Risk Migration** - Your original Lovable files remain untouched
- 🏗️ **Modern Architecture** - Converts to Next.js 15 App Router with React 19
- 🎨 **Tailwind 4 Support** - Full compatibility with the latest Tailwind CSS
- 📁 **Clean Output** - Generates a standalone `nextjs` folder ready for deployment
- ⚡ **Fast Setup** - One command to migrate your entire application

## 🎯 Overview

This tool bridges the gap between Lovable's rapid prototyping environment and Next.js production deployments. Instead of manual migration, `lovable-nextjs` automatically transforms your Lovable application structure to work seamlessly with Next.js App Router architecture.

### How It Works

1. **Analyzes** your Lovable project structure
2. **Transforms** components and routes to Next.js patterns
3. **Generates** a production-ready Next.js application
4. **Preserves** your original codebase for continued Lovable development

## 📋 Prerequisites

Before you begin, ensure your development environment meets these requirements:

| Requirement      | Version    | Installation Guide                      |
| ---------------- | ---------- | --------------------------------------- |
| **Node.js**      | `≥ 22.0.0` | [Download Node.js](https://nodejs.org/) |
| **React**        | `19.x`     | Ask Lovable to upgrade your project     |
| **Tailwind CSS** | `4.x`      | Ask Lovable to upgrade your project     |

> **💡 Pro Tip**: Ask Lovable AI to handle the React 19 and Tailwind 4 upgrades for you - it knows exactly how to update dependencies safely!

### Platform Support

- ✅ **macOS** - Full support
- ✅ **Linux** - Full support
- ⚠️ **Windows** - Not currently supported (shell script dependency)

_Cross-platform Script support is planned based on community interest._

## 🚀 Quick Start

### 1. Setup Migration Tool

Copy the migration tool to your Lovable project:

```bash
# Navigate to your Lovable project root
cd your-lovable-project

# Copy the noxtable folder to your project
# (Download and extract from this repository)

# Add to .gitignore to keep your repo clean
echo "noxtable/" >> .gitignore
```

### 2. Install Dependencies

```bash
cd noxtable
npm install
```

### 3. Run Migration

```bash
npm run setup
```

### 4. Launch Your Next.js App

```bash
cd ../nextjs
npm run dev
```

🎉 **That's it!** Your Lovable app is now running on Next.js at `http://localhost:3000`

## 📦 Deployment

Your generated Next.js application is deployment-ready:

### Vercel (Recommended)

1. Connect your repository to Vercel
2. Set the **Root Directory** to `nextjs`
3. Deploy with zero configuration

### Other Platforms

```bash
cd nextjs
npm run build  # Creates optimized production build
npm start      # Starts production server
```

## 🗂️ Project Structure

After migration, your project will have this structure:

```
your-lovable-project/
├── src/                    # Your original Lovable files (unchanged)
├── noxtable/              # Migration tool (add to .gitignore)
└── nextjs/                # Generated Next.js application
    ├── src/app/           # App Router pages and layouts
    ├── client/            # Transformed lovable components
    ├── public/           # Static assets
    └── package.json      # Merged Lovable and Next.js dependencies
```

## 🤝 Contributing

We welcome contributions! Here are some ways to get involved:

- 🐛 **Submit an issue here** by creating an [issue](https://github.com/cladjules/lovable-nextjs/issues)
- 💡 **Request features** - upvoted issues get priority
- 📝 **Improve documentation**
- 🔧 **Submit pull requests**

### Roadmap

- [ ] Cross-platform scripts compatibility
- [ ] Next.js Page Router support
- [ ] Lovable Cloud API Conversion

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">

**Made with ❤️ for the Lovable community**

[Report Bug](https://github.com/cladjules/lovable-nextjs/issues) • [Request Feature](https://github.com/cladjules/lovable-nextjs/issues) • [Documentation](https://github.com/cladjules/lovable-nextjs)

</div>
