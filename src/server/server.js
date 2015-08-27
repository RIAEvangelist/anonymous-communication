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
                
                //console.log(data);
                
                if(data.answer){
/*****************************************************\
 * this should be converted to a login test
 * it should test for a hash match in a dir
 * there should be minimal user data to keep 
 * full anonynimity.
 * 
 * the file with the has name should be loaded into
 * the user object. This socket should also be 
 * refrenced in that user object
 */
                    ws.comAs=data.answer;
                    return;
                }
                
                
                
/*****************************************************\
 * Should allow user to sign up adding username,
 * Password and other minimal data, all encrypted.
 * 
 * Once a user is signed up the user data should be
 * added to the user object and then written to disk.
 *
 * Should notify all users with permission which are
 * online that this user is now online.
 */
 
 /*****************************************************\
 * Should have an event that allows the user to
 * update their data
 * 
 * Should save data to user object and write data to
 * Disk
 */
 
 /*****************************************************\
 * Should have an event that allows the users to
 * fetch information on other users, but only
 * if the requesting user has permission from
 * the requested user
 * 
 */
 
 /*****************************************************\
 * Should have an event that allows the users to
 * give permission to other users to communicate
 * with them. This will also give both users 
 * permission to see eachothers data
 * 
 * Should also allow hiding of online status even if 
 * users have permission to see the status.
 * 
 */
 
 /*****************************************************\
 * Should have an event that logs a user off and
 * notifies those with permission that the user is 
 * offline
 * 
 */
                
                for(var i=0; i<wss.clients.length; i++){
                    
                    if(wss.clients[i].comAs!=data.to)
                        continue;
/*****************************************************\
 * Should use the object refrence for the user in the
 * user object
 * 
 */                        
                    wss.clients[i].send(
                        JSON.stringify(
                            data
                        )
                    );
                }
            }
        );
        
        ws.send(
            JSON.stringify(
                {
                    question:'who are you?'
                }
            )
        );
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