var extend = function( obj, extObj ) {
  obj = obj || {};
  if (arguments.length > 2) {
    for (var a = 1; a < arguments.length; a++) {
      extend(obj, arguments[a]);
    }
  } else {
    for (var i in extObj) {
      obj[i] = extObj[i];
    }
  }
  return obj;
};
