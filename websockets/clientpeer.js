
        // create a socket connection
        // listen on messages emited by server peer
 
       var socket;

        function CalledOnload(){
            socket = io.connect();
            socket.on('messageForClientPeer1',(data)=>{
                console.log(data);
            })
        }

        function SendMessage(){
            var msg = document.getElementById('texMessage').value;
            socket.emit('messageFromClientPeer1',msg);
        }