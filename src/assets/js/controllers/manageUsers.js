const ManageUsers = (function () {
    // tenta pegar a lista de usuários, senão cria um objeto
    var users = [];
    var userStorage = localStorage.getItem("users");

    // se for uma string transforma em array
    if (!(userStorage instanceof Array))
        JSON.parse(userStorage).forEach(u => users.push(new User(u)));

    const find = (predicate) =>
        typeof (predicate) === "function" && users.find(predicate);

    const save = (user) => {
        let u = find(u => u.email === user.email);
        // se achou seta as propriedades
        if (u) {
            Object.assign(u, user);
        } else {
            // se não achou adicionar o usuário
            users.push(user);
        }
        localStorage.setItem("users", JSON.stringify(users));
    }

    const login = (email, password) => {
        var user = find(u => u.email === email && u.password === password);

        if (!user) return false;

        sessionStorage.setItem("user", JSON.stringify(user))
        return true;
    }

    const logged = () => {
        var user = sessionStorage.getItem("user");

        if (!user) window.location.href = "Login/index.html";

        return new User(JSON.parse(user));
    }

    const logout = () => {
        sessionStorage.removeItem("user");
        window.location.href = "index.html";
    }

    return {
        getAll: () => users,
        find: find,
        save: save,
        login: login,
        logged: logged,
        logout: logout
    }
})();