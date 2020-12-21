document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    document.getElementById('message').innerHTML = 'Welcome To Cross Platform App Development';
}
document .addEventListener('searchbutton', onSearchButton, false);

function onSearchButton(){
    console.log('This is search button');
}
