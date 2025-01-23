export default function() {
    if (process.client) {
        if (localStorage.getItem("loggedIn") === "true") {
            console.log("User is logged in");

            window.location.href = "/";
        } else {
            console.log("User is not logged in");
        }
    } else {
        console.log("This is running on the server, localStorage is not available.");
    }
}
