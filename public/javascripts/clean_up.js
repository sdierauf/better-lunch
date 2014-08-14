(function() {

    function init() {
        document.getElementById('DANGER').onclick = cleanLunches;
    }

    function cleanLunches() {
        document.getElementById('noooo').innerHTML = 'WHAT HAVE YOU DONE.';
        ajax('clean', handlePostClean, "POST", {'command': "obliterate"})
    }

    function ajax(query, functionName, method, payload) {
        var req = new XMLHttpRequest();
        req.open(method, '/' + query, true);
        req.onload = functionName;
        req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        req.send(JSON.stringify(payload));
    }

    function handlePostClean() {
        document.getElementById('noooo').innerHTML += "<br> WHAT HAVE YOU DOOOONNNEEE";
    }

    init();

})()