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

🌤️ Weather App

A simple and responsive **React** application that fetches and displays real-time weather data for multiple cities using the [Open-Meteo API](https://open-meteo.com/). Users can search for any city and view details like temperature, wind speed, and a human-readable weather description.


## Setup Instructions

1. Create a new React app:
```bash
npx create-react-app weather-app
cd weather-app
```

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

3. **🛠️ Tech Stack**

- Frontend: React, CSS
- API: [Open-Meteo API](https://open-meteo.com/)
- Tools Used: Visual Studio Code, GitHub, Cursor

4. **Code Organization**:
   - Split code into proper React project file structure
   - Added comments for better code readability
