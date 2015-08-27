var WebSocketServer = require('ws').Server, 
    wss = new WebSocketServer(
        {
            port: 11505
        }
    ),
    user={};
    
wss.on(
    'connection', 
    function(ws) {
        //console.log('someone connected')
        ws.on(
            'message', 
            function(message) {
                try{
                    var data=JSON.parse(
                        message
                    );
                }catch(err){
                    return;
                }
                
                if(!data.type){
                    return;
                }
                
                events.trigger(
                    data.type,
                    data.data,
                    ws
                );
            }
        );
    }
);

events.on(
    'start',
    function(data,ws){
        //generate cypher token used to encrypt/decrypt data
    }
);

events.on(
    'validate',
    function(data,ws){
        //AES decrypt based upon start cipher and match hash
    }
);

events.on(
    'doesUserExist',
    function(userName,callback){
        fs.readFile(
            'data/'+userName+'.json', 
            {
                encoding:'utf8'
            },
            function (err, data) {
                if(err)
                    event.error='Error Reading File';
                    
                
                ipc.log('Dispatching Websocket Event'.debug, event);
                
                broadcast(event);
                
                if(app.data.steps)
                    return;
                    
                app.data.steps=JSON.parse(data);
            }
        );
    }
);