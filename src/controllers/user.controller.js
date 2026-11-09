const createUser = (req, res) => {
    const body = req.body;

    const validName =
        typeof body?.name === "string" &&
        body.name.trim().length > 0 &&
        body.name.trim().length <= 100;
    const validAge =
        Number.isInteger(body?.age) && body.age >= 0 && body.age <= 120;
    const validCity =
        typeof body?.city === "string" &&
        body.city.trim().length > 0 &&
        body.city.trim().length <= 100;

    if (!validName || !validAge || !validCity) {
        return res.status(400).json({
            error: {
                code: "INVALID_USER_BODY",
                message:
                    "Send a JSON object with a name and city (1-100 characters) and an integer age from 0 to 120.",
            },
        });
    }

    res.status(201).json({
        message: "User created successfully",
        receivedData: {
            name: body.name.trim(),
            age: body.age,
            city: body.city.trim(),
        },
    });
};

module.exports = {
    createUser,
};
