console.log('Loaded!');

//changing text in the index 

var element = document.getElementById("main-text");

element.innerHTML = 'New Value';

//move the image

var img = document.getElementById("madi");
var marginLeft =0;
function moveRight() {
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function () {
    var interval = setInterval(moveRight, 50);
};



var button = document.getElementByID('counter');
button.onClick = function () {
    //making request object
    var request = XMLHttpRequest();
    // capture response 
    request.onReadyStateChange = function () {
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