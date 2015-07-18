function getRandom(arr, n) {
  var result = new Array(n),
      len = arr.length,
      taken = new Array(len);

  if (n > len) {
    throw new RangeError('getRandom: more elements taken than available');
  }

  while (n--) {
    var x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len;
  }

  return result;
}

module.exports = function(options) {
  var posts = options.hash.posts;
  var current = options.hash.current;

  var others = getRandom(posts.filter(function(item) {
    return item.url !== current.url;
  }), 4);

  var start = '<div class="more-posts"><hr><h2>More Posts</h2> <ul>';
  others.forEach(function(item) {
    start += '<li><a href="' + item.full_url + '">' + item.title + '</a></li>';
  });
  return start + '</ul></div>';
};
