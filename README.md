# Luxury Life Adverts

Luxury Life Adverts is a full-stack web application designed to manage user authentication, WhatsApp balance, and other user-related data. The frontend is built with React, and the backend is developed using Flask and MySQL.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [License](#license)

## Features

- User Registration
- User Login and Logout
- Fetch and display WhatsApp balance
- Withdraw from WhatsApp balance
- Dynamic and responsive frontend

## Prerequisites

- Node.js and npm
- Python 3
- MySQL

## Installation

### Backend Setup

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/luxury-life-adverts.git
    cd luxury-life-adverts/backend
    ```

2. **Create and activate a virtual environment**:
    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
    ```

3. **Install dependencies**:
    ```bash
    pip install Flask Flask-MySQLdb flask-cors
    ```

4. **Create a MySQL database and table**:
    ```sql
    CREATE DATABASE luxury_life_adverts;

    USE luxury_life_adverts;

    CREATE TABLE users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(50) NOT NULL,
        email VARCHAR(100) NOT NULL,
        password VARCHAR(100) NOT NULL,
        whatsapp_balance DECIMAL(10, 2) DEFAULT 0.00
    );
    ```

5. **Set up environment variables** (create a `.env` file in the `backend` directory):
    ```plaintext
    SECRET_KEY=your_secret_key
    MYSQL_HOST=localhost
    MYSQL_USER=your_mysql_username
    MYSQL_PASSWORD=your_mysql_password
    MYSQL_DB=luxury_life_adverts
    ```

6. **Run the Flask app**:
    ```bash
    python app.py
    ```

### Frontend Setup

1. **Navigate to the frontend directory**:
    ```bash
    cd ../frontend
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Run the React app**:
    ```bash
    npm start
    ```

## Usage

1. **Access the application**:
   Open your web browser and navigate to `http://localhost:3000`.

2. **Register a new user**:
   Use the registration form to create a new account.

3. **Login**:
   Use the login form to access your account.

4. **View WhatsApp balance**:
   Navigate to the WhatsApp balance section to view your balance and transaction history.

5. **Withdraw from WhatsApp balance**:
   Use the withdraw form to withdraw funds from your WhatsApp balance.

## API Endpoints

### Authentication

- **POST /auth/register**: Register a new user.
- **POST /auth/login**: Login a user.
- **POST /auth/logout**: Logout a user.

### User Data

- **GET /user/whatsapp-balance**: Get the current WhatsApp balance.
- **POST /user/withdraw**: Withdraw from the WhatsApp balance.

## Project Structure

```plaintext
luxury-life-adverts/
├── backend/
│   ├── app.py
│   ├── config.py
│   ├── models.py
│   ├── routes/
│   │   ├── __init__.py
│   │   ├── auth.py
│   │   ├── user.py
│   ├── static/
│   ├── templates/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── api/
│   │   │   ├── axios.js
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── Navbar.js
│   │   │   ├── Navbar.css
│   │   │   ├── Sidebar.js
│   │   │   ├── Sidebar.css
│   │   │   ├── Dashboard.js
│   │   │   ├── Dashboard.css
│   │   │   ├── LoginPage.js
│   │   │   ├── LoginPage.css
│   │   │   ├── LogoutButton.js
│   │   │   ├── Notification.js
│   │   │   ├── WhatsappBalance.js
│   │   │   ├── TotalWhatsappWithdrawn.js
│   │   │   ├── CurrentPackage.js
│   │   │   ├── YourCashback.js
│   │   │   ├── DepositBalance.js
│   │   │   ├── AccountBalance.js
│   │   │   ├── TotalWithdrawal.js
│   │   │   ├── InvestedProfit.js
│   │   │   ├── Contact.js
│   │   ├── utils/
│   │   │   ├── getGreeting.js
│   │   ├── App.js
│   │   ├── index.js
│   ├── package.json
│   ├── README.md
