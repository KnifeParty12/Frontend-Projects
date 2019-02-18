toggle = document.querySelectorAll(".toggle")[0];
nav = document.querySelectorAll("nav")[0];
toggle_open_text = 'Hawty';
toggle_close_text = 'Please';

toggle.addEventListener('click', function() {
    nav.classList.toggle('open');

    if (nav.classList.contains('open')) {
        toggle.innerHTML = toggle_close_text;
    } else {
        toggle.innerHTML = toggle_open_text;
    }
}, false);

setTimeout(function(){
    nav.classList.toggle('open');
}, 800);
