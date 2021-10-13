const getNavigation = (loggedIn, user) => {
    const authlinks = [{
        title: "Home",
        link: "/"
    },
    {
        title: "Logout",
        link: "/logout"
    }]

    const guestlinks = [{
        title: "Login",
        link: "/login"
    },
    {
        title: "Register",
        link: "/register"
    }
    ]

    return loggedIn ? authlinks : guestlinks
}
export default getNavigation