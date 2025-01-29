# Weather Forecast Application

A modern, responsive weather application that provides current weather conditions and hourly forecasts for any city worldwide.

## Features

- Real-time weather data from OpenWeatherMap API
- Current weather conditions including:
  - Temperature
  - Weather description
  - City name
- Hourly forecast displaying:
  - Time
  - Temperature
  - Weather conditions
- Responsive design that works on desktop and mobile devices
- Modern glass-morphism UI design
- Error handling for invalid city names

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- OpenWeatherMap API
- Live Server for development

## Setup and Installation

1. Clone the repository:
   ```bash
   git clone [your-repository-url]
   ```

2. Get an API key:
   - Sign up at [OpenWeatherMap](https://openweathermap.org/)
   - Generate an API key from your account dashboard
   - Replace the `apiKey` variable in `main.js` with your key

3. Open the project:
   - Use Live Server in VS Code
   - Or open `index.html` directly in a browser

## Usage

1. Enter a city name in the search box
2. Click the "Search" button or press Enter
3. View the current weather and forecast data
4. If an invalid city is entered, an error message will be displayed

## API Reference

This application uses the OpenWeatherMap API:
- Base URL: `https://api.openweathermap.org/data/2.5/forecast`
- Documentation: [OpenWeatherMap API Docs](https://openweathermap.org/api)

## Project Structure

```
weather-app/
│
├── index.html # Main HTML file
├── style.css # Styles and layout
├── main.js # JavaScript functionality
└── README.md # Project documentation
```

## License

This project is licensed under the MIT License.

## Acknowledgments

- Weather data provided by OpenWeatherMap
- Icons and design inspiration from modern weather applications 