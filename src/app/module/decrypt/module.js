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
        
        function decrypt(data,callback){
            if(!callback)
                return;
            
            var decrypted=CryptoJS.AES.decrypt(
                data, 
                app.data.key, 
                {
                    iv: CryptoJS.enc.Hex.parse(app.data.iv)
                }
            ).toString(CryptoJS.enc.Utf8);
            
            callback(decrypted);
        }
        
        app.on(
            'decrypt',
            decrypt
        );
        
        exports(moduleName,render);    
    }
)();