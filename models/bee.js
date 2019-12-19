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
    }
};

module.exports = bee;