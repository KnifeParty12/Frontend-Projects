$(".select__label").click(function() {
    $(".select__label").removeClass("select__label--active");
    $(this).addClass("select__label--active");
});
$("#js-usr-new").click(function() {
    $(".wrap, .pointer, .ui-button, .ui-elem-pass, .ui-elem-rpass")
        .removeClass("--rtn --rst")
        .addClass("--new");
    $("#js-btn").html("Sign Up");
});
$("#js-usr-rtn").click(function() {
    $(".wrap, .pointer, .ui-button, .ui-elem-pass, .ui-elem-rpass")
        .removeClass("--new --rst")
        .addClass("--rtn");
    $("#js-btn").html("Sign In");
});
$("#js-usr-rst").click(function() {
    $(".wrap, .pointer, .ui-button, .ui-elem-pass, .ui-elem-rpass")
        .removeClass("--rtn --new")
        .addClass("--rst");
    $("#js-btn").html("Reset Password");
});
