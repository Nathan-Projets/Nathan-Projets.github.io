window.onload = function () {
    // Script for Service Worker 
    window.addEventListener('load', () => {
        registerSW();

        var cors_api_url = 'https://cors-anywhere.herokuapp.com/';
        var url = 'https://planning.univ-rennes1.fr/jsp/custom/modules/plannings/9EYlGR3a.shu'
        var options = {

        }

        fetch(cors_api_url + url).then(function (response) {
            return response.text();
        }).then(function (text) {

            //console.log(text);
            var jCalData = ICAL.parse(text);
            let result = []
            let events = jCalData[1][2];
            events.forEach(e => result.push(flattenEvent(e)));
            console.log(events);
            /*
            var vcalendar = new ICAL.Component(jCalData);
            if(Array.isArray(vcalendar)) {
              console.log("         It's an array! ");
            }else{
              console.log(vcalendar);
              console.log(ICAL.stringify(vcalendar));
            }
            var componentArray = vcalendar.getAllSubcomponents();
            componentArray.foreach((item,index,array)=>{console.log(">>>" + index);});
            */


            //var vevent = vcalendar.getFirstSubcomponent('vevent');
            //var summary = vevent.getFirstPropertyValue('summary');
            //console.log('Summary: ' + summary);
        });
    });

    function flattenEvent(e) {
        let event = {};
        for (let i = 0; i < e[1].length; i++) {
            let prop = e[1][i];
            event[prop[0]] = prop[3];
            //console.log('e',prop);
        }
        return event;
    }

    // Register the Service Worker 
    async function registerSW() {
        if ('serviceWorker' in navigator) {
            try {
                await navigator
                    .serviceWorker
                    .register('serviceworker.js');
            } catch (e) {
                console.log('SW registration failed');
            }
        }
    }

}