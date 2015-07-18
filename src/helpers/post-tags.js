module.exports = function(param) {
  var str = '';

  param.split(' ').forEach(function(category) {
    str += '<span class="vclToken"><span class="vclTokenLabel">'
    + '<i class="fa fa-tag"></i> ' + category + '</span></span>';
  });

  return str;
};
