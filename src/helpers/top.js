module.exports = function(context, options) {
  var ret = '';

  for (var i = 0, j = 6; i < j; i++) {
    if (context[i]) {
      ret = ret + options.fn(context[i]);
    }
  }

  return ret;
};
