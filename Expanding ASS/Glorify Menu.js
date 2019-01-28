var Menu = {
    el: {
        menu: $(".menu"),
        menuTop: $(".menu-top"),
        menuClose: $(".menu-close"),
        menuMiddle: $(".menu-middle"),
        menuBottom: $(".menu-bottom"),
        menuText: $(".menu-text")
    },

    init: function() {
        Menu.bindUIactions();
    },

    bindUIactions: function() {
        Menu.el.menu.on("click", function(event) {
            Menu.activateMenu(event);
            event.preventDefault();
        });
    },

    activateMenu: function() {
        Menu.el.menuTop.toggleClass("menu-top-expand expand");
        Menu.el.menuMiddle.toggleClass("menu-middle-expand expand");
        Menu.el.menuBottom.toggleClass("menu-bottom-expand expand");
        Menu.el.menuText.toggleClass("menu-text-expand");
        Menu.el.menuClose.toggleClass("menu-close-visible");
    }
};

//Stop menu item click closing the menu
$(".menu .menu-global").click(function(e) {
    e.stopPropagation();
});

Menu.init();
