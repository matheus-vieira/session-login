$(document).ready(function () {
    var $name = $("#name"),
        $email = $("#email"),
        $password = $("#password");

    $("form").submit(function (ev) {
        try {
            var user = new User({
                name: $name.val(),
                email: $email.val(),
                password: $password.val()
            });
            user.save();
        } catch (error) {
            ev.preventDefault();
        }
    });
});