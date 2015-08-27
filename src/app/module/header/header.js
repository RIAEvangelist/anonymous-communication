(
    function(){
        var moduleName='header';
        
        function render(el){
            el.addEventListener(
                'click',
                function(e) {
                    switch(e.target.id){
                        case 'encrypt' :
                        case 'decrypt' :
                            navigate(e.target.id);
                            break;
                        case 'dm' :
                            openDM();
                            break;
                        case 'im' :
                            openIM();
                            break;
                        case 'size' :
                            toggleFullscreen();
                            break;
                        case 'close' :
                            chrome.app.window.current().close();
                            break;
                    }
                }
            )
        }
        
        function navigate(screen){
            var screens=document.querySelectorAll('.screen');
            
            for(var i=0; i<screens.length; i++){
                screens[i].classList.add('hidden');
                if(screens[i].getAttribute('data-moduletype')!=screen)
                    continue;
                    
                screens[i].classList.remove('hidden');
            }
        }
        
        function toggleFullscreen(){
            if(!chrome.app.window.current().isFullscreen()){
                chrome.app.window.current().fullscreen();
                return;
            }
            
            chrome.app.window.current().restore();
        }
        
        function openDM(){
            var screenWidth = screen.availWidth;
            var screenHeight = screen.availHeight;
            var width = 500;
            var height = 500;
            
            chrome.app.window.create(
                'dm.html', 
                {
                    bounds: {
                        width: width,
                        height: height,
                        left: Math.round((screenWidth/2)-(width/2))+Math.round(Math.random()*30),
                        top: Math.round((screenHeight/2)-(height/2))+Math.round(Math.random()*30)
                    },
                    minWidth: width-150,
                    minHeight: height,
                    'frame' : 'none'
                }
            );
        }
        
        function openIM(){
            var screenWidth = screen.availWidth;
            var screenHeight = screen.availHeight;
            var width = 500;
            var height = 500;
            
            chrome.app.window.create(
                'im.html', 
                {
                    bounds: {
                        width: width,
                        height: height,
                        left: Math.round((screenWidth/2)-(width/2))+Math.round(Math.random()*30),
                        top: Math.round((screenHeight/2)-(height/2))+Math.round(Math.random()*30)
                    },
                    minWidth: width-150,
                    minHeight: height,
                    'frame' : 'none'
                }
            );
        }
        
        
        exports(moduleName,render);    
    }
)();