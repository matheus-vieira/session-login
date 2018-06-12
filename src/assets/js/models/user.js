function User(o) {
    var mSelf = this;
    o = o || {};

    mSelf.name = o.name || "";

    Object.defineProperty(mSelf, 'email', {
        enumerable: true,   // não enumerável
        get: function () { return o.email; }
    });

    mSelf.password = o.password || "";

    mSelf.save = function () {
        ManageUsers.save(mSelf);
    }
}