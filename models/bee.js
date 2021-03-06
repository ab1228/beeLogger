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

    create: function (name, cb) {
        orm.create('bees', ['name', 'landed'],
            [
                name, false
            ],
            cb
        );

    },


};




module.exports = bee;