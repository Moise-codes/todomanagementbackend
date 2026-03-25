# 📝 To-Do Management API

A simple and efficient RESTful API built with Express.js for managing to-do tasks.
This project demonstrates core backend concepts like routing, CRUD operations, and JSON handling.

---

## 🚀 Features

* ✅ Get all todos
* ➕ Add a new todo
* ✏️ Update an existing todo
* ❌ Delete a todo
* ⚡ Lightweight and fast (no database, uses in-memory storage)

---

## 🛠️ Tech Stack

* **Backend:** Node.js + Express.js
* **Data Storage:** In-memory array
* **API Testing:** Postman / Thunder Client

---

## 📁 Project Structure

```bash
app.js
package.json
```

---

## ⚙️ Installation & Setup

1. Clone the repository:

```bash
git clone https://github.com/your-username/auth-api.git
cd auth-api
```

2. Install dependencies:

```bash
npm install
```

3. Run the server:

```bash
node app.js
```

4. Server will run on:

```
http://localhost:3000
```

---

## 📌 API Endpoints

### 🔹 Get All Todos

```http
GET /todo
```

---

### 🔹 Create Todo

```http
POST /todo
```

**Body:**

```json
{
  "title": "Learn Node.js",
  "completed": false
}
```

---

### 🔹 Update Todo

```http
PUT /todo/:id
```

**Body:**

```json
{
  "title": "Updated task",
  "completed": true
}
```

---

### 🔹 Delete Todo

```http
DELETE /todo/:id
```

---

## 📷 Sample Data

```json
[
  {
    "id": 1,
    "title": "Learn Express",
    "completed": false
  }
]
```

---

## ⚠️ Limitations

* Data is **not persistent** (resets when server restarts)
* No authentication implemented
* No database integration

---

## 💡 Future Improvements

* 🔐 Add authentication (JWT)
* 🗄️ Connect to a database (MongoDB / MySQL)
* 📦 Modularize project structure (routes, controllers)
* 🌐 Deploy API online

---

## 👨‍💻 Author

**Moise**
GitHub: https://github.com/Moise-codes

---

## ⭐ Support

If you like this project, give it a ⭐ and share it!
