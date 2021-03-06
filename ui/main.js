console.log('Loaded!');


var button = document.getElementById("counter");

button.onclick = function() {
    console.log('Clicked');
    
    // Create a request object
    var request = new XMLHttpRequest();
    
    // Capture the response and store it in a variable
    request.onreadystatechange = function() {
        if (request.readyState === XMLHttpRequest.DONE) {
            // Take some action
            if(request.status === 200) {
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }    
        // Not done yet
    };
    
    // Make the request
    request.open('GET', 'http://ashwani2879.imad.hasura-app.io/counter', true);
    request.send(null);
};

// Submit name
var nameInput = document.getElementById('name');
var name = nameInput.value;
var submitButton = document.getElementById('submit_btn');

submitButton.onclick = function() {
    // Should make a request to the server and send the name
    // Capture a list of names and render the list
    
    var names = ['name1', 'name2', 'name3'];
    var list = '';
    for (var i = 0; i < names.length; i++) {
        list += '<li>' + names[i] + '</li>';
    }
    var ul = document.getElementById('namelist');
    ul.innerHTML = list;
};