# NFT Dashboard - README

## Overview
This is an NFT dashboard web application built using **Next.js v15**, **Chakra UI**, **TypeScript**, **React Icons**, and **Chart.js**. The application provides an interactive and visually appealing interface for users to explore NFT collections and track various statistics.

## Technologies Used
- **Next.js v15**: Server-side rendering and static site generation for a fast and optimized application.
- **Chakra UI**: A modular and accessible component library for designing a sleek UI.
- **TypeScript**: Enhancing code maintainability and type safety.
- **React Icons**: Providing scalable vector icons for UI elements.
- **Chart.js**: Visualizing NFT statistics with dynamic and interactive charts.

## Installation
To set up and run this project locally, follow these steps:

### Prerequisites
Ensure you have **Node.js** and **npm** or **yarn** installed.

### Steps
1. **Clone the repository**
   ```sh
   git clone https://github.com/akareagwom/nft-market
   cd nft-market
   ```

2. **Install dependencies**
   ```sh
   npm install   # or yarn install
   ```

3. **Run the development server**
   ```sh
   npm run dev   # or yarn dev
   ```
   The application will be available at `http://localhost:3000`.

4. **Go live**
`https://nftmarkettask.netlify.app/`

## Project Structure
```
📂 nft-market
├── 📂 components  # Reusable UI components
├── 📂 pages       # Next.js pages
├── 📂 public      # Static assets
├── 📂 styles      # Global styles
├── 📂 utils       # Helper functions
├── package.json  # Project dependencies
└── tsconfig.json  # TypeScript configuration
```

## Key Features & Implementation

### 1. **Next.js for Server-Side Rendering (SSR)**
- Used `getServerSideProps` for fetching real-time NFT data.
- Implemented dynamic routing for NFT details pages.

### 2. **Chakra UI for Styling**
- Created a dark-themed interface with Chakra UI’s `extendTheme`.
- Used Chakra's Grid and Flexbox utilities for responsive layouts.

### 3. **TypeScript for Type Safety**
- Defined TypeScript interfaces for NFT data structures.
- Used TypeScript generics in utility functions.

### 4. **React Icons for Enhanced UI**
- Integrated icons for buttons, menus, and status indicators.
- Used `AiFillHeart` (from Ant Design icons) for favoriting NFTs.

### 5. **Chart.js for Data Visualization**
- Displayed NFT trends using `react-chartjs-2`.
- Used line charts for price trends and bar charts for sales distribution.

## Deployment
To deploy the project, follow these steps:
```sh
npm run build   # or yarn build
npm run start   # or yarn start
```
The production build will be available on `http://localhost:3000`.

## Contribution
If you’d like to contribute:
1. Fork the repository.
2. Create a new branch (`feature-branch`).
3. Make your changes and commit them.
4. Push to your fork and submit a pull request.

## License
This project is licensed under the MIT License.

---
Feel free to modify this documentation as needed!

