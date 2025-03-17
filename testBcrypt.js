const bcrypt = require("bcryptjs");

// ✅ Use the REAL password you entered during signup
const enteredPassword = "your_actual_password_here"; // Change this to what you typed during signup

// ✅ Copy the hashed password from MongoDB
const storedHashedPassword = "$2b$10$QholEBrsS03MZa15CyWcPeJQXF9gHpXwBCrR0jJUcsnoSczjnM2zi"; 

bcrypt.compare(enteredPassword, storedHashedPassword)
    .then(isMatch => {
        if (isMatch) {
            console.log("✅ Password matched successfully!");
        } else {
            console.log("❌ Password did NOT match!");
        }
    })
    .catch(err => console.error("❌ Bcrypt error:", err));
