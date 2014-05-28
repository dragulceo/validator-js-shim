validator-js shim
=================

About
-----

Contains a shim so that [validator-js](https://github.com/chriso/validator.js) can be loaded 
in an ember app built with ember_cli via es6 

`import validator from 'validator-js'`

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


