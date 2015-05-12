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
        var lunchMenu = document.createElement('div');
        for (var i = 0; i < menu.length; i++) {
            var p = document.createElement('p');
            p.innerHTML = menu[i];
            lunchMenu.appendChild(p);
        }
        return lunchMenu;
    }

    function escapeHtml(text) {
        var map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
        };

        return text.replace(/[&<>"']/g, function(m) { return map[m]; });
        
}

    init();

})();