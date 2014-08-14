(function() {

    function init() {
        console.log('wahoo! js');
        ajax('lunches', handleLunches, "GET");
    }

    function ajax(query, functionName, method) {
        var req = new XMLHttpRequest();
        req.onload = functionName;
        req.open(method, document.URL + query, true);
        req.send();
    }

    function handleLunches() {
        var lunches = JSON.parse(this.responseText).lunches.reverse();
        var lunchesDiv = document.querySelector('.lunches');
        for (var i = 0; i < lunches.length; i++) {
            lunchesDiv.appendChild(buildALunch(lunches[i]));
        }
    }

    function buildALunch(lunch) {
        var lunchDiv = document.createElement('div');
        var lunchTitle = document.createElement('h3');
        var lunchMenu = buildLunchMenu(lunch.menu);
        lunchTitle.innerHTML = lunch.title;
        lunchDiv.appendChild(lunchTitle);
        lunchDiv.appendChild(lunchMenu);
        return lunchDiv;
    }

    function buildLunchMenu(menu) {
        var lunchMenu = document.createElement('ul');
        for (var i = 0; i < menu.length; i++) {
            var li = document.createElement('li');
            li.innerHTML = menu[i];
            lunchMenu.appendChild(li);
        }
        return lunchMenu;
    }

    init();

})();