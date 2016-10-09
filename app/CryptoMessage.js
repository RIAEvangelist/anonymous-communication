const crypto = require('crypto');
const Events = require('event-pubsub');

class CryptoMessage extends Events{
    constructor(){

    }

    get cipher(){
        return undefined;
    }

    get decipher(){
        return undefined;
    }

    get id(){
        return undefined;
    }

    set id(from,to){
        const now=new Date();
        this._id=encrypt(
            from+to
        );
    }

    set cipher(string='!~stupid~Shared~Password~For~All~!'){
        this._cipher=crypto.createCipher('aes1024', string);
        this._encrypted='';

        return true;
    }

    set decipher(string='!~stupid~Shared~Password~For~All~!'){
        const decipher = crypto.createDecipher('aes1024', string);

        return true;
    }

    encrypt(message=''){
        const encrypted = cipher.update(message, 'utf8', 'hex');
        encrypted += cipher.final('hex');
        return encrypted;
    }

    decrypt(message=''){
        const decrypted = decipher.update(message, 'utf8', 'hex');
        decrypted += decipher.final('hex');
        return decrypted;
    }

    send(message=''){
        const encrypted = this.encrypt(message);
        console.log(encrypted);
    }

    recieve(message=''){
        const decrypted = this.decrypt(message)
        console.log(decrypted);
    }
}
