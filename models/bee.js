var orm = require('../config/orm.js');

var bee = {
    all: function (cb) {
        orm.all('bees', function (res) {
            cb(res);
        });
    },

    create: function (cols, vals, cb) {
        orm.create('bees', cols, vals, function (res) {
            cb(res);
        });
    },

    update: function (condition, cb) {
        orm.update("bees", condition, function (res) {
            cb(res);
        });
    }
};

module.exports = bee;
// { landed: true }