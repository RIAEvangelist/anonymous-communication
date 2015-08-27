(
    function(){
        var moduleName='encrypt';
        
        function render(el){
            el.addEventListener(
                'click',
                function(e){
                    switch(e.target.id){
                        case 'encryptNow' :
                            app.trigger(
                                'encrypt',
                                document.getElementById('encryptText').value,
                                document.getElementById('encryptCipher').value,
                                function(data){
                                    document.getElementById('encryptText').value=data;
                                }
                            );
                            break;
                        case 'encryptCipherShow' :
                            showCipher();
                            break;
                        default :
                            return;
                    }
                }
            )
        }
        
        function showCipher(){
            var cipher=document.getElementById('encryptCipher');
            
            if(cipher.getAttribute('type')=='password'){
                cipher.setAttribute('type','text')
                return;
            }
            
            cipher.setAttribute('type','password');
        }
        
        function encrypt(data,cipher,callback){
            if(!callback)
                return;
                
            
            callback(
                CryptoJS.AES.encrypt(
                    data, 
                    cipher
                ).toString()
            );
        }
        
        app.on(
            'encrypt',
            encrypt
        );
        
        exports(moduleName,render);    
    }
)();