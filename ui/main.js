console.log('Loaded!');


var btn = document.getElementById('counter');
btn.onlick = function() {
    
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
    
    counter = counter + 1;
    var count = document.getElementById('count');
    count.innerHTML = count.toString();
};