# Project Structure

```
weather-app/
├── public/
│   └── index.html     # HTML template
└── src/
    ├── App.js         # Main React component
    ├── App.css        # Component styling
    └── index.js       # Entry point
```

# 🌤️ Weather App

A simple and responsive **React** application that fetches and displays real-time weather data for multiple cities using the [Open-Meteo API](https://open-meteo.com/). Users can search for any city and view details like temperature, wind speed, and a human-readable weather description.

## 📸 Demo

![Screenshot 1](./screenshots/screenshot1.png)  
![Screenshot 2](./screenshots/screenshot2.png)

> You can also view a short demo video [here](https://drive.google.com/your-demo-link).

## 🚀 Features

- 🔍 **City Search** – Enter a city name to get live weather data.
- 📊 **Current Weather Info** – View temperature, wind speed, and weather status.
- ➕ **Multiple Cities** – Add and track weather for multiple cities in one session.
- ⚠️ **Error Handling** – Informs users when the city is not found or input is empty.
- 🧠 **Readable Descriptions** – Weather codes are converted to descriptive terms.
- 💡 **AI-Assisted Development** – Built with assistance from ChatGPT for code debugging and optimization.



## 🛠️ Tech Stack

- **Frontend**: React, CSS
- **API**: [Open-Meteo API](https://open-meteo.com/)
- **Tools Used**: Visual Studio Code, GitHub, ChatGPT



## 📦 Getting Started

### Prerequisites

- Node.js and npm installed

### Installation

````bash
git clone https://github.com/your-username/weather-app.git
cd weather-app
npm install
npm start



## Setup Instructions

1. Create a new React app:
```bash
npx create-react-app weather-app
cd weather-app
````

2. Replace the files in your project with the ones provided:

   - Replace `src/App.js` with the App.js file
   - Replace `src/App.css` with the App.css file
   - Replace `src/index.js` with the index.js file
   - Replace `public/index.html` with the index.html file

3. Start the development server:

```bash
npm start
```

Your app should now be running on [http://localhost:3000](http://localhost:3000)

## Bug Fixes and Improvements

1. **Fixed API Calls**:

   - Updated the Open-Meteo API endpoint from `current_weather` to `current`
   - Adjusted property paths to match the updated API response structure

2. **Added Features**:

   - Loading state indicator
   - Weather code translation to human-readable descriptions
   - Keyboard support (Enter key)
   - Input validation
   - Improved error handling
   - Updated styling with disabled button state

3. **Code Organization**:
   - Split code into proper React project file structure
   - Added comments for better code readability
