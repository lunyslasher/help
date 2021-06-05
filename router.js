const { Router } = require(`express`);
const router = Router();

router.get(`/`, (req, res) => {
//	res.json('lol')  
  res.sendFile(__dirname + `/lol.txt`);
});

module.exports = router;
