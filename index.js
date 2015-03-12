/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-typekit',

  contentFor: function(type, config) {
    if (type === 'head-footer') {

      if (config.typekit.sync === true) {
          return '<script src="//use.typekit.net/' + config.typekit.kitId + '.js"></script>' +
                 '<script>try{Typekit.load();}catch(e){}</script>';
      }

      return '<script type="text/javascript">' +
                  '(function(d) {' +
                    'var config = {' +
                      'kitId: \'' + config.typekit.kitId + '\',' +
                      'scriptTimeout: ' + config.typekit.timeout +
                    '},' +
                    'h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(' +
                '/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement(' +
                '"script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";' +
                'tk.src=\'//use.typekit.net/\'+config.kitId+\'.js\';tk.async=true;tk.onload=tk.onreadyst' +
                'atechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;' +
                'f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)' +
                  '})(document);' +
                '</script>';
    }
  }
};
