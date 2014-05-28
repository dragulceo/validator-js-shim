(function() {
/* global define, validator */
define('validator-js', [], function() {
  "use strict";

  return {
    'default': window.validator || window.module.exports
  };
});
})();
