import numpy as np
from sklearn.model_selection import train_test_split
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense

def load_and_prepare_data(file_path):
    """
    Load and prepare the data from a file.
    
    Args:
        file_path (str): The path to the file containing the dataset.
        
    Returns:
        X (numpy array): Features of the dataset.
        y (numpy array): Target variable of the dataset.
    """
    # Read the data
    with open(file_path, 'r') as file:
        lines = file.readlines()
    
    # Convert lines to a list and split into training and testing sets
    X, y = [], []
    for line in lines:
        elements = [element.strip() for element in line.split()]
        if len(elements) >= 2:  # Assuming the dataset has at least two columns
            x1, x2 = map(float, elements[0].split())
            y1 = float(elements[1])
            X.append([x1, x2])  # Add a row of 0s for training data
            y.append(y1)
        else:
            print("Warning: Missing or invalid entry in the file.")
    
    # Reshape and prepare the dataset
    X = np.array(X).reshape(-1, 2)
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    
    return X_train, y_train, X_test, y_test

def build_model():
    """
    Build a simple neural network model for regression.
    """
    model = Sequential()
    model.add(Dense(64, activation='relu', input_dim=2))
    model.add(Dense(10, activation='linear'))  # Output layer with 10 units
    model.compile(optimizer='adam', loss='mean_squared_error')
    
    return model

def main():
    file_path = "math_data.txt"  # Adjust this path to the correct file containing your dataset
    X_train, y_train, X_test, y_test = load_and_prepare_data(file_path)
    model = build_model()
    history = model.fit(X_train, y_train, validation_data=(X_test, y_test), epochs=50)

if __name__ == "__main__":
    main()
