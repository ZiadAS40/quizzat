# Quizzat

## Description
Quizzat is an open-source web application designed to help students manage their learning journey. Powered by AI, it provides personalized learning recommendations, tracks progress, and generates tailored quizzes to enhance knowledge retention.

## Features
- **AI-Powered Learning Suggestions**: Receive personalized study recommendations based on your progress and performance.
- **Progress Tracking**: Monitor your learning journey with detailed analytics.
- **Tailored Quizzes**: Generate quizzes customized to your learning needs.
- **User-Friendly Interface**: Intuitive design for seamless navigation.
- **Secure Authentication**: User data is protected with secure login mechanisms.

## Tech Stack
- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Environment Management**: dotenv
- **Other Tools**: bcrypt, JWT, Axios

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/ZiadAS40/quizzat.git
    cd quizzat
    ```
2. Install dependencies:
    ```bash
    cd backend
    npm install
    cd fronend
    npm install
    cd ..
    ```
3. Set up the environment variables (see below).
4. Start the development server:
    ```bash
    npm run dev
    ```

## Environment Variables
Create a `.env` file in the root directory and add the following:
- `MONGO_URI`: MongoDB connection string
- `JWT_SECRET`: Secret key for JSON Web Tokens
- `PORT`: Port number for the server (default: 5000)
- `REACT_APP_API_URL`: Base URL for the API (frontend)

## API Endpoints
Here are some example endpoints:
- **GET /api/users**: Fetch all users
- **POST /api/auth/login**: Authenticate a user
- **GET /api/quizzes**: Retrieve quizzes
- **POST /api/quizzes**: Create a new quiz

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch:
    ```bash
    git checkout -b feature-name
    ```
3. Commit your changes:
    ```bash
    git commit -m "Add feature-name"
    ```
4. Push to your branch:
    ```bash
    git push origin feature-name
    ```
5. Open a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements
- [OpenAI](https://openai.com) for inspiration on AI-powered features.
- [React](https://reactjs.org) for the frontend framework.
- [MongoDB](https://www.mongodb.com) for the database solution.
- [Express](https://expressjs.com) for the backend framework.
