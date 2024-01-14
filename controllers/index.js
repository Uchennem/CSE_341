const jackRoute = (req, res) => {
    res.send("Jack")
};

const sparrowRoute = (req, res) => {
    res.send("Sparrow")
};

module.exports = {
    jackRoute, sparrowRoute
};