import React, { useState } from "react";
import axios from "axios";

function App() {
  const [inputs, setInputs] = useState({
    sepalLength: "",
    sepalWidth: "",
    petalLength: "",
    petalWidth: "",
  });
  const [prediction, setPrediction] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:5000/predict", {
        features: Object.values(inputs).map(Number),
      });
      setPrediction(response.data.prediction);
    } catch (error) {
      console.error("Error fetching prediction:", error);
    }
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "20px",
        border: "3px solid #ccc",
        borderRadius: "8px",
        margin: "20px auto",
        maxWidth: "800px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#4CAF50" }}>Flower Class Predictor</h1>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {/* Form Section */}
        <form
          onSubmit={handleSubmit}
          style={{
            flex: 1,
            marginRight: "20px",
            padding: "20px",
            border: "2px solid #ccc",
            borderRadius: "8px",
            backgroundColor: "#fff",
          }}
        >
          <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Enter Features</h2>
          <div style={{ marginBottom: "20px" }}>
            <label
              style={{
                display: "block",
                fontWeight: "bold",
                marginBottom: "5px",
                fontSize: "16px",
                color: "#333",
              }}
            >
              Sepal Length:
            </label>
            <input
              type="number"
              step="0.1"
              name="sepalLength"
              value={inputs.sepalLength}
              onChange={handleInputChange}
              required
              style={{
                width: "100%",
                padding: "12px",
                border: "2px solid #ccc",
                borderRadius: "8px",
                boxSizing: "border-box",
                fontSize: "16px",
                transition: "border-color 0.3s ease-in-out",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#4CAF50")}
              onBlur={(e) => (e.target.style.borderColor = "#ccc")}
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label
              style={{
                display: "block",
                fontWeight: "bold",
                marginBottom: "5px",
                fontSize: "16px",
                color: "#333",
              }}
            >
              Sepal Width:
            </label>
            <input
              type="number"
              step="0.1"
              name="sepalWidth"
              value={inputs.sepalWidth}
              onChange={handleInputChange}
              required
              style={{
                width: "100%",
                padding: "12px",
                border: "2px solid #ccc",
                borderRadius: "8px",
                boxSizing: "border-box",
                fontSize: "16px",
                transition: "border-color 0.3s ease-in-out",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#4CAF50")}
              onBlur={(e) => (e.target.style.borderColor = "#ccc")}
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label
              style={{
                display: "block",
                fontWeight: "bold",
                marginBottom: "5px",
                fontSize: "16px",
                color: "#333",
              }}
            >
              Petal Length:
            </label>
            <input
              type="number"
              step="0.1"
              name="petalLength"
              value={inputs.petalLength}
              onChange={handleInputChange}
              required
              style={{
                width: "100%",
                padding: "12px",
                border: "2px solid #ccc",
                borderRadius: "8px",
                boxSizing: "border-box",
                fontSize: "16px",
                transition: "border-color 0.3s ease-in-out",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#4CAF50")}
              onBlur={(e) => (e.target.style.borderColor = "#ccc")}
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label
              style={{
                display: "block",
                fontWeight: "bold",
                marginBottom: "5px",
                fontSize: "16px",
                color: "#333",
              }}
            >
              Petal Width:
            </label>
            <input
              type="number"
              step="0.1"
              name="petalWidth"
              value={inputs.petalWidth}
              onChange={handleInputChange}
              required
              style={{
                width: "100%",
                padding: "12px",
                border: "2px solid #ccc",
                borderRadius: "8px",
                boxSizing: "border-box",
                fontSize: "16px",
                transition: "border-color 0.3s ease-in-out",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#4CAF50")}
              onBlur={(e) => (e.target.style.borderColor = "#ccc")}
            />
          </div>
          <button
            type="submit"
            style={{
              backgroundColor: "#4CAF50",
              color: "white",
              padding: "12px 20px",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              width: "100%",
              fontSize: "16px",
              transition: "background-color 0.3s ease-in-out",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#45a049")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#4CAF50")}
          >
            Predict
          </button>
        </form>

        {/* Output Section */}
        <div
          style={{
            flex: 1,
            padding: "20px",
            border: "2px solid #ccc",
            borderRadius: "8px",
            backgroundColor: "#fff",
          }}
        >
          <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Prediction Result</h2>
          {prediction ? (
            <div
              style={{
                textAlign: "center",
                padding: "20px",
                border: "2px solid #4CAF50",
                borderRadius: "8px",
                backgroundColor: "#e7ffe7",
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              Predicted Flower Class: <br />
              <span style={{ color: "#4CAF50", fontSize: "20px" }}>{prediction}</span>
            </div>
          ) : (
            <p style={{ textAlign: "center", color: "#666" }}>
              Enter flower features and click "Predict" to see the result.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
