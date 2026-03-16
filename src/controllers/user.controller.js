const createUser = (req, res) => {
    const { name, age, city } = req.body;

    res.status(201).json({
        message: "User created successfully",
        receivedData: {
            name,
            age,
            city,
        },
    });
};

module.exports = {
    createUser,
};
