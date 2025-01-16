# Full-Stack Food Delivery Website  

## 📜 Project Description  
This project is a full-stack food delivery website built using the MERN stack. It allows users to browse food items, add them to their cart, proceed to checkout, and track their orders. The system includes secure user authentication, past order management, and a seamless, responsive interface.

### Key Features:  
- **Single-Page Application (SPA)**: Built with React, allowing for dynamic, seamless navigation without page reloads.  
- **User Authentication**: Secure login and registration system using JWT tokens and bcrypt.js for hashing passwords.  
- **Order Management**: Users can view and track past and current orders.  
- **Responsive Interface**: An intuitive UI for easy browsing and order tracking, optimized for both mobile and desktop devices.  
- **Login Required for Cart and Orders**: You must log in to view your cart and past orders.  
- **Password Protection**: All user passwords are securely hashed using bcrypt.js to ensure privacy.

---

## 🚀 Getting Started  

### 🛠 Prerequisites  
Make sure you have the following installed:  
- Node.js (v14 or higher)  
- MongoDB

### 🛠 Make sure you have a .env file
- JWT_SECRET=your_secret_key
- MONGO_URI=your_mongo_db_connection_string


### 📥 Installation  
1. Clone the repository:  
   ```bash
   git clone https://github.com/yourusername/food-delivery-website.git
   cd food-delivery-website
2. Start frontend:  
   ```bash
   cd food-app
   npm start
2. Start backend:  
   ```bash
   cd food-app/backend
   nodemon ./index.js
### IMP things to note:  
- My cart and My orders will display only after u login.  
- You cannot add items in cart if u are not logged in.
- Please be patient after u click submit 

