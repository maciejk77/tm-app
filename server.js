var express = require('express');
var app = express();
var data = require('./src/data/data');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// fetch complete JSON data
app.get('/', function (req, res) {
  res.send(data);
})

// fetch customers data only
app.get('/customers', function (req, res) {
  res.send(data.customers);
})

// fetch cards data only
app.get('/cards', function (req, res) {
  res.send(data.cards);
})

// fetch customer data as per last name given
app.get('/customers/:customerLastName', function(req, res) {
  data.customers.map(function(key, value) {
    if(data.customers[value].last_name.toLowerCase() === req.params.customerLastName.toLowerCase()) {
      res.send(data.customers[value]);
    }
  });
});

// fetch card data as per card name given
app.get('/cards/:cardName', function(req, res) {
  data.cards.map(function(key, value) {
    if(data.cards[value].name.toLowerCase() === req.params.cardName.toLowerCase()) {
      res.send(data.cards[value]);
    }
  });
});

app.listen(3000, function () {
  console.log('App listening on port 3000!')
})