$(document).ready(function () {
    var $email = $("#email"),
        $password = $("#password");

    $("form").submit(function (ev) {
        if (!ManageUsers.login($email.val(), $password.val()))
            ev.preventDefault();
    });
});