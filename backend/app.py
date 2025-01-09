from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib

# Load the trained model
model = joblib.load('flower_model.joblib')

# Initialize Flask app
app = Flask(__name__)
CORS(app)  # Enable Cross-Origin Resource Sharing for React

# Define the prediction endpoint
@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.json
        features = data['features']  # Expecting a list of features
        prediction = model.predict([features])
        predicted_class = ['setosa', 'versicolor', 'virginica'][prediction[0]]
        return jsonify({'prediction': predicted_class})
    except Exception as e:
        return jsonify({'error': str(e)})

# Run the app
if __name__ == '__main__':
    app.run(debug=True, port=5000)
