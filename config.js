/* MagicMirror² Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 *
 * You can use environment variables using a `config.js.template` file instead of `config.js`
 * which will be converted to `config.js` while starting. For more information
 * see https://docs.magicmirror.builders/configuration/introduction.html#enviromnent-variables
 */
let config = {
        address: "0.0.0.0",     // Address to listen on, can be:
                                                        // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
                                                        // - another specific IPv4/6 to listen on a specific interface
                                                        // - "0.0.0.0", "::" to listen on any interface
                                                        // Default, when address config is left out or empty, is "localhost"
        port: 8080,
        basePath: "/",                  // The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
                                                        // you must set the sub path here. basePath must end with a /
        ipWhitelist: [],        // Set [] to allow all IP addresses
                                                                                                                        // or add a specific IPv4 of 192.168.1.5 :
                                                                                                                        // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
                                                                                                                        // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
                                                                                                                        // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

        useHttps: false,                // Support HTTPS or not, default "false" will use HTTP
        httpsPrivateKey: "",    // HTTPS private key path, only require when useHttps is true
        httpsCertificate: "",   // HTTPS Certificate path, only require when useHttps is true

        language: "en",
        locale: "en-US",
        logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
        timeFormat: 24,
        units: "imperial",

        modules: [
                {
                        module: "alert",
                },
                {
                        module: "updatenotification",
                        position: "top_bar"
                },
                {
                        module: "clock",
                        position: "top_right",
                        config: {
                        clockBold: true,
                        lat: "36.704609",
                        long: "-76.255157",
                        showSunTimes: true,
                        showMoonTimes: true,
                        timezone: "America/New_York",
                                }
                },
                {
                        module: "calendar",
                        header: "Test",
                        //position: "bottom_right",
                        config: {
                                calendars: [
                                        {
                                                symbol: "calendar-check",
                                                //url: "UNCOMMENT AND ENTER CALENDAR ADDRESS HERE",
                                                color: "#4860AE",
                                                name: "My Calendar",
                                                symbol: "calendar",
                                        }
                                ]
                        }
                },

                {
                        module: "weather",
                        //position: "bottom_left",
                        header: "New London, CT",
                        config: {
                                weatherProvider: "pirateweather",
                                type: "forecast",
                                apiBase: 'https://api.pirateweather.net',
                                weatherEndpoint: '/forecast',
                                apiKey: '8tLojsGfjU42O0zyKp3Yp5gVcs4TDkrE3BbLxxf0',
                                lat:41.3557,
                                lon: -72.0995,
                                //locationID: "5128581", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
                                //apiKey: "YOUR_OPENWEATHER_API_KEY"
                        }
                },



                            {
                        module: "weather",
                        //position: "bottom_left",
                        header: "Charleston, SC",
                        config: {
                                weatherProvider: "pirateweather",
                                units: "imperial",
                                type: "forecast",
                                apiBase: 'https://api.pirateweather.net',
                                weatherEndpoint: '/forecast',
                                apiKey: '8tLojsGfjU42O0zyKp3Yp5gVcs4TDkrE3BbLxxf0',
                                lat:32.7765,
                                lon: -79.9311,
                                //locationID: "5128581", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
                                //apiKey: "YOUR_OPENWEATHER_API_KEY"
                        }


                },

                {
                        module: "newsfeed",
                        position: "bottom_right",
                        config: {
                                feeds: [
                                        {
                                                title: "New York Times",
                                                url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
                                        }
                                ],
                                showSourceTitle: true,
                                showPublishDate: true,
                                broadcastNewsFeeds: true,
                                broadcastNewsUpdates: true
                        }
                },
                {
                module: "MMM-mmpm"
                },


                 {
                        module: "MMM-MonthlyCalendar",
                        position: "top_center",
                        tableClass: "large",
                        config: { // See "Configuration options" for more information.
                        mode: "fourWeeks",
                        wrapTitles: true,
                }
                },




{
    module: "MMM-Wallpaper",
    position: "fullscreen_below",
    config: { // See "Configuration options" for more information.
      source: "/r/earthporn",
      slideInterval: 60 * 1000 // Change slides every minute

  }
},




{
  module: "MMM-DarkSkyForecast",
  header: "Charleston, SC",
  position: "bottom_left",
  classes: "default everyone",
  disabled: false,
  config: {
    apikey: "8tLojsGfjU42O0zyKp3Yp5gVcs4TDkrE3BbLxxf0",
    latitude: "32.7765",
    longitude: "-79.9311",
    iconset: "4c",
    concise: true,
    forecastLayout: "table",
    units: "us",
    maxDailiesToShow: 5,
    useAnimatedIcons: true,
    animateMainIconOnly: false,
  }
},



{
        module: "MMM-Jast",
        position: "bottom_bar",
        config: {
                currencyStyle: "code", // One of ["code", "symbol", "name"]
                fadeSpeedInSeconds: 30,
                lastUpdateFormat: "HH:mm",
                maxChangeAge: 1 * 24 * 60 * 60 * 1000,
                maxWidth: "100%",
                numberDecimalsPercentages: 1,
                numberDecimalsValues: 2,
                scroll: "horizontal", // One of ["none", "vertical", "horizontal"]
                showColors: true,
                showCurrency: true,
                showChangePercent: true,
                showChangeValue: false,
                showChangeValueCurrency: false,
                showHiddenStocks: false,
                showLastUpdate: false,
                showPortfolioValue: false,
                showPortfolioGrowthPercent: false,
                showPortfolioGrowth: false,
                updateIntervalInSeconds: 300,
                useGrouping: false,
                virtualHorizontalMultiplier: 2,
                stocks: [
                        { name: "NVIDIA", symbol: "NVDA", quantity: 1 },
                        { name: "SAP", symbol: "SAP.DE", quantity: 15 },
                        { name: "Henkel", symbol: "HEN3.DE", hidden: true },
                        { name: "Alibaba", symbol: "BABA"}
                ]
        }
},



{
    module: 'MMM-Remote-Control',
    // uncomment the following line to show the URL of the remote control on the mirror
    // position: 'bottom_left',
    // you can hide this module afterwards from the remote control itself
    config: {
        customCommand: {},  // Optional, See "Using Custom Commands" below
        showModuleApiMenu: true, // Optional, Enable the Module Controls menu
        secureEndpoints: true, // Optional, See API/README.md
        // uncomment any of the lines below if you're gonna use it
        // customMenu: "custom_menu.json", // Optional, See "Custom Menu Items" below
        // apiKey: "", // Optional, See API/README.md for details
        // classes: {} // Optional, See "Custom Classes" below
    }
},


  /*{
    module: "MMM-OpenWeatherForecast",
    position: "top_right",
    header: "Forecast",
    config: {
      apikey: "a1b2c3d4e5f6g7h8j9k0", //only string here
      latitude: 51.490230,            //number works here
      longitude: "-0.258810"          //so does a string
    }
  },
*/





        ]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
