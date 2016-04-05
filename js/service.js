angular.module('myService', [])

.factory('foo', function() {
  var thisIsPrivate = "Private";
  function getPrivate() {
    return thisIsPrivate;
  }

  return {
    variable: "This is public",
    getPrivate: getPrivate
  };
})

.factory('bar', function() {
  return 2 * 2;
});