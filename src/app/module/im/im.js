(
    function(){
        var moduleName='im';
        
        function render(el){
            chrome.identity.getProfileUserInfo(
                getUser    
            )
            
            el.addEventListener(
                'click',
                function(e){
                    switch(e.target.id){
                        case 'getKeys' :
                            
                            break;
                        case 'generatePEM' :
                            
                            break;
                        case 'generatePUB' :
                            
                            break;
                        case 'IMCipherShow' :
                            showCipher();
                            break;
                        default :
                            return;
                    }
                }
            )
        }
        
        function getUser(data){
            if(!data.id){
                app.trigger(
                    'error',
                    'user not logged in'
                );
                
                return;
            }
            
            app.data.user.id=data.id;
        }
        
        function createIM(){
            
        }
        
        function retrySocket(){
            if(app.data.socket)
                if(app.data.socket.readyState==1)
                    return;
                
            app.data.socket = new WebSocket("ws://anon.diginow.it:11506");
            app.data.socket.onmessage=socketMessage;
            app.data.socket.onclose=function(){
                    document.getElementById('error').classList.remove('hidden');
                    setTimeout(
                        retrySocket,
                        1500
                    );
                }
        }
        
        function socketMessage(message){
            try{
                var data=JSON.parse(
                    message.data
                );
            }catch(err){
                return;
            }
            
            document.getElementById('error').classList.add('hidden');
            
            if(!data.data)
                return;
            
            
        }
        
        function showCipher(){
            var cipher=document.getElementById('IMCipher');
            
            if(cipher.getAttribute('type')=='password'){
                cipher.setAttribute('type','text')
                return;
            }
            
            cipher.setAttribute('type','password');
        }
        
        exports(moduleName,render);    
    }
)();