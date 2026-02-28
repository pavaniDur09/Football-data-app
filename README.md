# Football Data Collection Application
A full-stack MERN (MongoDB, Express.js, React, Node.js) web application designed to store, manage, and analyse football team data. The application provides a user-friendly interface for performing CRUD operations and viewing statistical insights.

## Project Overview
This application allows users to manage football team records through a React-based interface while a Node.js and Express backend handles server logic and RESTful API communication. Football data is stored in MongoDB and initially imported from a CSV dataset.
The system demonstrates full-stack development principles including database design, API development, and responsive front-end integration.

## Features
- Add new football teams to the database  
- Update existing team records  
- Delete team data  
- View all teams in a structured table  
- Retrieve team statistics by year  
- Display top teams based on wins  
- Calculate and display average goals  
- Filter teams based on performance criteria  

## 🛠 Technologies Used

### Frontend
- React.js
- React Router
- Axios
- HTML5 & CSS3

### Backend
- Node.js
- Express.js
- RESTful API

### Database
- MongoDB
- Mongoose

## How It Works
1. Football data is imported from a CSV file into MongoDB.
2. The backend server connects to the database and exposes REST API endpoints.
3. The React frontend communicates with the backend using HTTP requests.
4. Users interact with the interface to perform CRUD operations and view statistics.

## Project Structure
### 1️⃣ Clone the repository
git clone https://github.com/pavaniDur09/Football-data-app.git

### 2️⃣ Setup Backend
cd backend
npm install
npm start

### 3️⃣ Setup Frontend
cd frontend
npm install
npm start

### 4️⃣ Database Setup
Ensure MongoDB is running locally:
mongodb://localhost:27017/footballDB


## API Functionality
The REST API supports:
- **GET** – Retrieve team data and statistics  
- **POST** – Add or update team records  
- **DELETE** – Remove team records  
- **Custom Queries** – Filter teams, calculate statistics, and performance insights  

## Testing
Run the application and use the interface to:
- add and update teams  
- view statistics  
- test filters and queries
- 
## Learning Outcomes
This project demonstrates:

- Full-stack MERN development  
- REST API design and integration  
- Database modelling and querying  
- Frontend-backend communication  
- Data visualisation and user interaction  
- Debugging and application testing  

## Future Improvements
- Deploy application to cloud hosting  
- Add authentication and user accounts  
- Improve UI styling and accessibility  
- Implement real-time data updates  
