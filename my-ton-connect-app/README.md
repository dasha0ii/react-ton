# My TON Connect App

This project is a React application that integrates with TON (The Open Network) using the TON Connect protocol. It provides a simple interface for users to connect their wallets and interact with TON-based applications.

## Project Structure

```
my-ton-connect-app
├── src
│   ├── components
│   │   └── TonConnectButton.tsx
│   ├── App.tsx
│   ├── index.tsx
│   └── types
│       └── index.ts
├── public
│   └── index.html
├── package.json
├── tsconfig.json
└── README.md
```

## Installation

To get started with the project, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/my-ton-connect-app.git
   ```

2. Navigate to the project directory:
   ```
   cd my-ton-connect-app
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Running the Application

To run the application in development mode, use the following command:

```
npm start
```

This will start the development server and open the application in your default web browser.

## Building for Production

To create a production build of the application, run:

```
npm run build
```

This will generate optimized static files in the `build` directory.

## Usage

The main component of the application is `App.tsx`, which includes routing and displays the `TonConnectButton` component. The `TonConnectButton` allows users to connect their TON wallets.

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.