console.log('Loaded!');

/*var button=document.getElementById("counter");
var counter=0;
button.onclick = function () {
    counter = counter + 1;
    var span = document.getElementById("count");
               span.innerHTML = counter.toString();
};
*/

var button = document.getElementById('counter');
button.onclick = function () {
    //making request object
    var request = new XMLHttpRequest();
    // capture response 
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            // take action
            if (request.status === 200){
               var counter = request.responseText;
               var span = document.getElementById('count');
               span.innerHTML = counter.toString();
            }
        }
        //
    };
    
    //make the request
    request.open('GET', 'http://pveleneni.imad.hasura-app.io/counter', true);
    request.send(null);
};