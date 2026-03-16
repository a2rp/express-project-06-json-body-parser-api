const express = require("express");

const app = express();
const PORT = 1198;

app.use(express.json());

const userRoute = require("./src/routes/user.route");

app.use("/users", userRoute);

app.get("/", (req, res) => {
    res.json({
        message: "JSON Body Parser API is running",
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
