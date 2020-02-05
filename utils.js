module.exports.getData = (context, req) => {
    // console.log('getData ###### ', context, req);
    console.log('getData ###### ', req.query.maxResultSize);
    // const {
    //     query,
    //     body
    // } = req;
    // if (query && query[param]) {
    //     return query[param];
    // }
    // if (body && body[param]) {
    //     return body[param];
    // }
    return "aaaa";
};

// module.exports.getQueryOrBodyParam = (req, param) => {
//     const { query, body } = req;
//     if (query && query[param]) {
//       return query[param];
//     }
//     if (body && body[param]) {
//       return body[param];
//     }
//   };