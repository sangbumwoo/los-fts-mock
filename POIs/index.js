const fakeDataService = require('../fakeDataService');
module.exports = async function (context, req) {
    const data = fakeDataService.getData(context, req);
    context.res = {
        body: data
    }
};