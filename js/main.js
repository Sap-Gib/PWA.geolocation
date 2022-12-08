window.addEventListener("DOMContentLoaded", function () {

    document.getElementById("find-me").addEventListener("click", geoFindMe);


    document.getElementById("shareBtn").addEventListener("click", share);


})


/*function geoFindMe() {*/
    function geoFindMe() {

        const status = document.querySelector('#status');
        const mapLink = document.querySelector('#map-link');

        mapLink.href = '';
        mapLink.textContent = '';

        function success(position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            const iframe = document.querySelector('#iframe');
           


            status.textContent = '';
            mapLink.href = `https://maps.google.com/?q=${latitude},${longitude}`;
            mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
            iframe.src = `https://maps.google.com/?output=embed&q=${latitude},${longitude}`
            iframe.classList.remove("d-none")
        }

        function error() {
            status.textContent = 'Unable to retrieve your location';
        }

        if (!navigator.geolocation) {
            status.textContent = 'Geolocation is not supported by your browser';
        } else {
            status.textContent = 'מאתר את מיקומך';
            navigator.geolocation.getCurrentPosition(success, error);
        }
    }
//document.querySelector('#find-me').addEventListener('click', geoFindMe);

//}





function share() {

    const shareData = {
        title: 'MDN',
        text: 'Learn web development on MDN!',
        url: 'https://maps.google.com/?q=${latitude},${longitude}`'
    }
    
    const btn = document.querySelector('#shareBtn');
    //const resultPara = document.querySelector('.result');

    // Share must be triggered by "user activation"
    btn.addEventListener('click', async () => {
        try {
            await navigator.share(shareData);
        //    resultPara.textContent = 'MDN shared successfully';
        } catch (err) {
        //    resultPara.textContent = `Error: ${err}`;
        }
    });

}