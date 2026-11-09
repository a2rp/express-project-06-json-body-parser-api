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

app.use((error, req, res, next) => {
    if (error.type === "entity.parse.failed") {
        return res.status(400).json({
            error: {
                code: "INVALID_JSON",
                message: "Request body must contain valid JSON.",
            },
        });
    }

    next(error);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
