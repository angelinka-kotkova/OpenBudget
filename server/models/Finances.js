const mongoose = require('mongoose');

const FinanceSchema = new mongoose.Schema({
  regionCode: {
    type: String
  },
  incomes: [{
    year : {
      type: String
    },
    month: {
      type: String
    },
    budgetData : {
      type: Object
    }
  }],
  expenses: [{
    year : {
      type: String
    },
    month: {
      type: String
    },
    budgetData : {
      type: Object
    }
  }]
})

module.exports = mongoose.model('Finances', FinanceSchema);