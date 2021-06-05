const { Router } = require(`express`);
const router = Router();

router.get(`/`, (req, res) => {
    res.sendFile(__dirname + `/lol.txt`);
});

module.exports = router;
