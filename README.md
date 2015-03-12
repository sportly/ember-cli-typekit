# ember-cli-typekit

This ember-cli addon injects typekit into index.html. More info on typekit at http://www.typekit.com

## Installation

```
npm install --save-dev ember-cli-typekit
```

# Configuration

This plugin uses the ember-cli project's configuration as defined in `config/environment.js`.

Add your typekit kitId to `config/environment.js` and you're good to go. A couple more params below

```js
// environment.js

    ENV.typekit: {
        kitId: 'xxxxxx'
    }
```


### Configuration Parameters

* `kitId` (Default: `null`): The typekit kitId.
* `sync` (Default: `false`): Inject the sync script instead of the default async script.
* `timeout` (Default: `3000`): The default typekit timeout used when loading the async version. Param passed straight to typekit.
