const qs = require('querystringify');

const middleware = (req, res, next) => {
  let mess = '';
  req.on('data', (val) => {
    mess += val;
  });
  req.on('end', () => {
    req.body = qs.parse(mess);
    next();
  });
};

module.exports = middleware;

