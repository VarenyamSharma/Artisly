# 🎨 Artisly

**Artisly** is a modern web application designed to connect talented artists with potential clients. It enables artists to showcase their portfolios, manage their profiles, and receive bookings through an intuitive interface.

## 🚀 Features

- **Artist Onboarding** – Artists can create detailed profiles, upload portfolios, and describe their services.
- **Artist Listing** – Clients can browse and filter a list of available artists based on category and location.
- **Theme Toggle** – Supports light and dark modes for a customizable user experience.
- **Planned Features** – Booking and messaging functionalities (not yet implemented).

## 🛠️ Tech Stack

### Frontend

- React with TypeScript
- Tailwind CSS for styling
- React Router DOM – Client-side routing
- React Hook Form + Yup – Form handling and validation
- Embla Carousel – Smooth image carousels
- Lucide React – Icon library

## 📁 Project Structure

src/
├── components/ # Reusable UI components
├── pages/ # Route-level components
├── sections/ # Homepage and reusable layout sections
├── types/ # TypeScript interfaces and types
├── utils/ # Helper functions and constants
public/ # Static files (images, favicon, etc.)

## 📌 Notable Components

- `ArtistOnboard`: Manages artist onboarding forms and validation.
- `ArtistListing`: Renders a list of artists with filtering and sorting.
- `HeroSection`: Displays the homepage hero section.
- `ThemeToggle`: Toggles between light and dark themes.

## 📄 Pages

- `/`: Homepage with hero banner and categories.
- `/artist-listing`: Browse and search artists.
- `/artist-onboard`: Artist profile creation.
- `/manager-dashboard`: Manager dashboard (not implemented).

## ⚙️ Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/VarenyamSharma/Artisly-.git
   cd Artisly-

   ```

2. **Install Dependencies**
   npm install

   # or

   yarn install

3. **Start the development server**
   npm start

    # or

    yarn start
    Open your browser and navigate to: http://localhost:3000


