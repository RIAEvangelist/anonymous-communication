chrome.app.runtime.onLaunched.addListener(
    function() {
        var screenWidth = screen.availWidth;
        var screenHeight = screen.availHeight;
        var width = 500;
        var height = 500;
        
        chrome.app.window.create(
            'index.html', 
            {
                bounds: {
                    width: width,
                    height: height,
                    left: Math.round((screenWidth/2)-(width/2)),
                    top: Math.round((screenHeight/2)-(height/2))
                },
                minWidth: width-50,
                minHeight: height,
                frame       : 'none'
            }
        );
    }
);
