const Finances = require('../../models/Finances');

module.exports = (app) => {
  app.get('/api/incomes/:cityKey', (req, res) => {
     const cityKey = req.params.cityKey
     Finances.find ({ regionCode: cityKey  })
         .exec()
         .then(data => res.json(data)).catch(err => console.log(err))
 	})
};
