
function sendMessage(){
 const input=document.getElementById('userInput');
 const msg=input.value.trim();
 if(!msg) return;

 const messages=document.getElementById('messages');
 messages.innerHTML += '<p><b>You:</b> '+msg+'</p>';

 let reply='I can help with back extension machines, technique, workouts, and buying advice.';

 if(msg.toLowerCase().includes('beginner'))
   reply='Beginners usually do well with a 45-degree back extension bench.';

 messages.innerHTML += '<p><b>BackBot:</b> '+reply+'</p>';
 input.value='';
}
