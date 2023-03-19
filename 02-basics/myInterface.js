var vishal = {
    dbId: 22, email: "vishal1@gmail.com",
    role: "admin",
    userId: 121,
    githubToken: "github",
    startTrial: function () { return " hello "; },
    //* parameter name can be different from the thing provided in definition of User
    getCoupon: function (name, off) { return 10; }
};
vishal.email = "hello@gmail.com";
// vishal.dbId = 21
