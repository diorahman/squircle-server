var locomotive = require('locomotive')
  , Controller = locomotive.Controller;

var PagesController = new Controller();

PagesController.main = function() {
  this.title = 'Locomotive'
  this.render();
}


// here.net 
// id: 4rVgVrLbPNQQf3hvoLuL
// token: Xpw61XtO7UI1_9K9RM8B6w

module.exports = PagesController;
