var orm = require('../config/orm.js');

var bee = {
    all: function (cb) {
        orm.all('bees', function (res) {
            cb(res);
        });
    },



    update: function (id, cb) {
        var condition = 'id=' + id;
        orm.update('bees', {
            landed: true
        }, condition, cb);

    },

    create: function () {
        orm.create('bees', cols, vals, function (res) {
            cb(res);
        });

    }


};




module.exports = bee;