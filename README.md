# request-dump

To get started, create a .env file in the project's "server" directory. Add a DB variable to this file, in the format of:

DB=<MONGODB_CONNECTION_URL>

To use with external services, I recommend installing ngrok on your machine. After starting your application (npm run dev in the server directory), you can start ngrok with the command: **ngrok http <SERVER_PORT_NUMBER>**.
