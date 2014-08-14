(function() {

    function init() {
        document.getElementById('addlunch').onclick = submitLunch;
    }

    function submitLunch() {
        console.log('wahoooooooo!');
        var lunchName = document.getElementById('inputName');
        var lunchMenu = document.getElementById('inputMenu');
        if (validateForm([lunchName, lunchMenu])) {
            var payload = {
                title: lunchName.value,
                menu: lunchMenu.value.split('\n')
            }
            ajax('add', handleAddLunch, "POST", payload);
        }
    }

    function validateInput(input) {
        if (input.value.length > 0) {
            input.parentNode.classList.remove('has-error');
            return true;
        } else {
            if (!input.parentNode.classList.contains('has-error')) {
                input.parentNode.classList.add('has-error');
            }
            return false;
        }
    }

    function validateForm(inputs) {
        var validInputs = 0;
        for (var i = 0; i < inputs.length; i++) {
            if (validateInput(inputs[i])) {
                validInputs++;
            }
        }
        return validInputs == inputs.length;
    }

    function handleAddLunch() {
        console.log('lunch added!');
        window.location = '/';
    }

    function ajax(query, functionName, method, payload) {
        var req = new XMLHttpRequest();
        req.open(method, '/' + query, true);
        req.onload = functionName;
        req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        req.send(JSON.stringify(payload));
    }

    init()

})()