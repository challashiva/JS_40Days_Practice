console.log("Day 16");

const print = function() {
    const name = document.getElementById('name').value;

    const wishMsg = document.getElementById('txtArea').value;

    const message = 'Hello '
                    + name 
                    + ', Your wish '
                    + wishMsg
                    + ' may come true!';
    
    document.getElementById('output').innerHTML =
        '<span>'+message+'</span>'
}
