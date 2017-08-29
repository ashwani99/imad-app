console.log('Loaded!');


var btn = document.getElementById('counter');
btn.onlick = function() {
    
    
    counter = counter + 1;
    var count = document.getElementById('count');
    count.innerHTML = count.toString();
};