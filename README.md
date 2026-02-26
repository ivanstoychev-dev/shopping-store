# 🛍️ Shopping Store App

A modern, responsive **e-commerce frontend** built with **React, TailwindCSS, Material UI, and Redux Toolkit**.  
This app features products like **watches, bags, and shoes**, with dynamic pricing, ratings, filtering, and sorting.

---

## 🚀 Features

### 🛒 Product Listing

- Products generated dynamically via a script.
- Each product includes:
  - **Name**
  - **Category** (watches, bags, shoes)
  - **Price & Discounted Price**
  - **Description**
  - **Rating**
  - **Image**

### 🎯 Filtering

- **Price Range Slider** (dynamic)
- **Color Selection** (checkboxes)
- Filters update products in real-time

### 🔀 Sorting

- Alphabetically: **A → Z** / **Z → A**
- Price: **Low → High** / **High → Low**

### 🌟 Rating Component

- Dynamic star ratings using **Material UI icons**

### 💻 Responsive Layout

- **Hero Section** with a background image
- **Sticky Header** with scroll-to-section buttons
- **Filters Drawer**
  - Permanent on desktop
  - Temporary / toggleable on mobile

---

## 🛠️ Tech Stack

| Layer            | Technology                                        |
| ---------------- | ------------------------------------------------- |
| Frontend         | React (Functional Components + Hooks)             |
| Styling          | TailwindCSS + Material UI                         |
| State Management | Redux Toolkit                                     |
| Icons            | Material UI Icons                                 |
| Layout           | Tailwind Flex/Grid + MUI Drawer                   |
| Random Data      | Script to generate products with ratings & images |

---

## 💡 Usage

### 1️⃣ Install dependencies

```bash
npm install
# or
yarn install

```

## Generate new items

```bash
npm run generate:products
```
