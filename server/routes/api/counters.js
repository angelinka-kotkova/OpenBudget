const Finances = require('../../models/Finances');

module.exports = (app) => {
  app.post('/api/incomes', (req, res, next) => {
  	console.log(req.body.cityKey)
  	var cityKey = ""+ req.body.cityKey;
    Finances.find({regionCode: cityKey})
      .exec()
      .then((Finances) => res.json(Finances))
      .catch((err) => next(err));
  });
};
