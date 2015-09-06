(
    function(){
        var moduleName='encrypt';
        
        app.data.salt='3BB2EC019C627B945225DEBAD71A01B6785AE84C95A70EB132882FF8C0A59A55'
        app.data.iv = "12345578001222567890123455789012";

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
        
        function encrypt(data,callback){
            if(!callback)
                return;
            
            var encrypted=CryptoJS.AES.encrypt(
                data, 
                app.data.key, 
                {
                    iv: CryptoJS.enc.Hex.parse(app.data.iv)
                }
            ).ciphertext.toString(CryptoJS.enc.Base64);
            
            callback(
                encrypted
            );
        }
        
        app.on(
            'encrypt',
            encrypt
        );
        
        exports(moduleName,render);    
    }
)();