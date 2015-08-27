(
    function(){
        var moduleName='decrypt';
        
        function render(el){
            el.addEventListener(
                'click',
                function(e){
                    switch(e.target.id){
                        case 'decryptNow' :
                            app.trigger(
                                'decrypt',
                                document.getElementById('decryptText').value,
                                document.getElementById('decryptCipher').value,
                                function(data){
                                    document.getElementById('decryptText').value=data;
                                }
                            );
                            break;
                        case 'decryptCipherShow' :
                            showCipher();
                            break;
                        default :
                            return;
                    }
                }
            )
        }
        
        function showCipher(){
            var cipher=document.getElementById('decryptCipher');
            
            if(cipher.getAttribute('type')=='password'){
                cipher.setAttribute('type','text')
                return;
            }
            
            cipher.setAttribute('type','password');
        }
        
        function decrypt(data,cipher,callback){
            if(!callback)
                return;
                
            
            callback(
                CryptoJS.AES.decrypt(
                    data, 
                    cipher
                ).toString(CryptoJS.enc.Utf8)
            );
        }
        
        app.on(
            'decrypt',
            decrypt
        );
        
        exports(moduleName,render);    
    }
)();