#🌸 Flower Class Prediction Web Application using Machine Learning

A web-based flower classification application that leverages machine learning to predict the species of flowers based on their physical features. This project utilizes a React frontend (MERN stack) for dynamic interaction and a Python backend powered by machine learning algorithms to make accurate predictions using the Iris dataset.

------------------------------------------------------------------------------------------------

##📋 Table of Contents

Project Overview
Features
Tech Stack
Installation
Usage
How It Works
Future Enhancements
Contributions

------------------------------------------------------------------------------------------------

##📖 Project Overview

The Flower Class Prediction application is a full-stack machine learning web app that predicts the class of a flower based on its physical attributes. Users input the flower's measurements into the React frontend, and the backend uses a trained Decision Tree model to classify the flower.

###Key Components:

Frontend: Built with React.js for a seamless, dynamic user experience.
Backend: Utilizes Node.js and Express to manage API requests, with Python running the machine learning model.
Machine Learning: Scikit-learn's Decision Tree classifier is used to classify the flowers based on the Iris dataset.

------------------------------------------------------------------------------------------------

##✨ Features

User-Friendly Interface: Simple form to input flower measurements and view prediction results.
Fast Predictions: Instant flower classification based on input features.
Accurate Machine Learning Model: Uses a Decision Tree classifier trained on the Iris dataset.
Interactive UI: Built using React for a smooth, responsive user experience.

------------------------------------------------------------------------------------------------

##🛠️ Tech Stack

###Frontend:
React.js for building the user interface.
HTML5, CSS3 for structure and styling.
Axios for making API calls to the backend.
###Backend:
Node.js with Express.js for managing server-side logic and routing.
Python for executing the machine learning model.
###Machine Learning:
Scikit-learn for building the Decision Tree classifier.
pandas and NumPy for data handling and manipulation.

------------------------------------------------------------------------------------------------

##🚀 Installation

###1. Clone the repository:
git clone https://github.com/your-username/flower-class-prediction.git
cd flower-class-prediction

###2. Install dependencies:
For the frontend:
cd frontend
npm install
npm start
For the backend:
cd backend
npm install
node server.js

------------------------------------------------------------------------------------------------

##🖥️ Usage

After installation, open the frontend app in your browser at http://localhost:3000 to interact with the flower classification form.
Start the backend server by running the command node server.js in the backend folder. The backend will be available at http://localhost:5000.
Input the flower's features into the frontend form, and the backend will provide the predicted flower species.

------------------------------------------------------------------------------------------------

##🔧 How It Works

###Frontend: The user inputs the physical measurements of a flower into the React form (sepal length, sepal width, petal length, and petal width).
###Backend: The backend receives the input and sends it to the Python script via an API call. The Python script makes a prediction using the pre-trained Decision Tree classifier and returns the predicted class of the flower.
###Machine Learning: The Decision Tree model, trained on the Iris dataset, uses the input features to predict one of the three Iris flower classes: Setosa, Versicolor, or Virginica.


