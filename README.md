# Overview

This app comes with two pieces:

- A React frontend that displays incoming HTTP requests
- A Node/Express backend that handles the incoming HTTP requests

# Setup

1. Download
2. Run `npm install` in both client and server folders
3. Add a `.env` file to the server folder, and add two properties: PORT (which
   should be 5000 unless you'd like to change some other settings), and DB
   (which needs to be a MongoDB URL to a MongoDB Atlas database).
4. Start the app by running `npm run dev` inside the server folder.
5. To use with external services, I recommend installing ngrok on your machine. After starting your application (npm run dev in the server directory), you can start ngrok with the command: **ngrok http <SERVER_PORT_NUMBER>**.  This will give you an external IP address you can send requests to, and those requests will show up in this app.

