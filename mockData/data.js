module.exports = function(){
    var faker = require("faker");
    var chance = require('chance').Chance();
    var _ = require("lodash");
    return {
        data: _.times(50, function (n) {
            return {
                id: n,
                name: faker.name.findName(),
                avatar: faker.internet.avatar()
            };
        }),
        card: _.times(50, function (n) {
            return {
                id: n,
                card: faker.helpers.createCard()
            };
        })
    };
};