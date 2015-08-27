// Load native UI library
var gui = require('nw.gui'); //or global.window.nwDispatcher.requireNwGui() (see https://github.com/rogerwang/node-webkit/issues/707)

// Get the current window
var win = gui.Window.get();

win.showDevTools();

(
    function(){
        var moduleName='header';
        
        function render(el){
            el.addEventListener(
                'click',
                function(e) {
                    switch(e.target.id){
                        case 'size' :
                            win.toggleFullscreen();
                            break;
                        case 'close' :
                            win.close();
                            break;
                    }
                }
            )
        }
        
        
        exports(moduleName,render);    
    }
)();