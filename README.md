# Weather app

Simple weather forecast web application

## Usage

1. Install dependencies and build

```sh
yarn && yarn build
```

2. Make sure you have `serve` package being installed globally

```sh
yarn global add serve
```

3. Launch the server

```sh
serve -s build
```

4. Open the app in browser

http://localhost:[port]/?api-key=[OpenWeather API key]

The app requires an OpenWeather API key. You can get one [here](https://openweathermap.org/price).
