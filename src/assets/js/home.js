$(document).ready(function () {
    var $login = $("#login");
    var user = ManageUsers.logged();
    $login.html(user.name);

    $("#logout").click(ManageUsers.logout);
});