validator-js shim
=================

About
-----

Contains a shim so that it can be loaded by ember_cli 

Instalation
-----------

```
bower install validator-js
bower install dragulceo/validator-js-shim
```

Add this to `Brocfile.js` file:

```
app.import('vendor/validator-js/validator.js');
app.import('vendor/validator-js-shim/validator-amd.js', {
  'validator-js': [
    'default'
  ]
});
```


