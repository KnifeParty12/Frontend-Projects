$(document).ready(function() {
    $(".container").click(function() {
        $(".stick").toggleClass(function () {
            return $(this).is('.open, .close') ? 'open close' : 'open';
        });
    });
});
