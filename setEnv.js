// setEnv.js
// Only set these if they are not already provided by the hosting environment (like Render)
if (!process.env.MONGO_URI) process.env.MONGO_URI = "mongodb+srv://dontechiel_db_user:Adedeji123@cluster0.yplboo3.mongodb.net/mallhub?retryWrites=true&w=majority";
if (!process.env.JWT_SECRET) process.env.JWT_SECRET = "my_super_secret_key_change_this_to_something_random_123456789!@#";
if (!process.env.NODE_ENV) process.env.NODE_ENV = "development";
if (!process.env.EMAIL_USER) process.env.EMAIL_USER = "dontechiel@gmail.com";
if (!process.env.EMAIL_PASS) process.env.EMAIL_PASS = "lfwczhfiymxgdcdp";
if (!process.env.ADMIN_EMAIL) process.env.ADMIN_EMAIL = "dontechiel@gmail.com";
if (!process.env.FRONTEND_URL) process.env.FRONTEND_URL = "http://localhost:3000";

// REMOVE the PORT line completely! Let Render handle it automatically.