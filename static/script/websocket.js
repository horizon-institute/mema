
            var ws = new WebSocket("ws://localhost:8000/ws");
            ws.onmessage = function(event) {
                var messages = document.getElementById('messages')
                // var message = document.createElement('li')
                //var content = document.createTextNode(event.data)
                document.getElementById('messages').innerHTML = event.data
                // message.appendChild(content)
                // messages.appendChild(message)
            };
            function sendMessage(event) {
               // var input = document.getElementById("messageText")
               // ws.send(input.value)
               // input.value = ''
              if  (ws.readyState == 1) {
                ws.send('wakeup')
              } else { 
                event.preventDefault()
              }  
            }
           setInterval(sendMessage, 30000); 
            
            
            
