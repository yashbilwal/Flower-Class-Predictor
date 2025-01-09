# Import required libraries
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier
from sklearn.metrics import accuracy_score
import joblib
import pandas as pd

# Step 1: Load the Iris dataset
iris = load_iris()

# Convert the dataset to a Pandas DataFrame
data = pd.DataFrame(data=iris.data, columns=iris.feature_names)
data['target'] = iris.target
data['class'] = data['target'].apply(lambda x: iris.target_names[x])

# Display the first few rows of the dataset (optional)
print("First 5 rows of the dataset:")
print(data.head())

# Step 2: Split the data into features (X) and target (y)
X = data[iris.feature_names]  # Features
y = data['target']  # Target variable

# Split the data into training and testing sets (80% train, 20% test)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Step 3: Train the Decision Tree Classifier
clf = DecisionTreeClassifier()
clf.fit(X_train, y_train)

# Step 4: Test the model and calculate accuracy
y_pred = clf.predict(X_test)
accuracy = accuracy_score(y_test, y_pred)
print(f"Model Accuracy: {accuracy * 100:.2f}%")

# Step 5: Save the trained model to a file
joblib.dump(clf, 'flower_model.joblib')
print("Model saved as 'flower_model.joblib'")

# Step 6: Test the saved model with a custom input
# Load the model
model = joblib.load('flower_model.joblib')

# Test with a sample input
sample = [[5.1, 3.5, 1.4, 0.2]]  # Example input: Sepal Length, Sepal Width, Petal Length, Petal Width
prediction = model.predict(sample)
predicted_class = iris.target_names[prediction[0]]

print(f"Predicted Flower Class for input {sample}: {predicted_class}")
