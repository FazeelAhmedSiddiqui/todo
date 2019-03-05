var path = require('path');

var app = require(path.resolve(__dirname, '../server/server'));
var ds = app.datasources.accountDS;
ds.automigrate('account', function(err) {
  if (err) throw err;

  var accounts = [
    {
      title: "Task given 1",
      discription: "this a discription from loopback api"
    },
    {
      title: 'task given 2',
      discription: 'this is also coming from loopback'
    },
  ];
  var count = accounts.length;
  accounts.forEach(function(account) {
    app.models.Account.create(account, function(err, model) {
      if (err) throw err;

      console.log('Created:', model);

      count--;
      if (count === 0)
        ds.disconnect();
    });
  });
});