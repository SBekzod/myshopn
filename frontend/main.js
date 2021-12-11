console.log("FRONT END EXECUTED");
import moment from "moment";
// import $ from "jquery";
$(function() {
    $("#singin").on("click", () => {
        console.log("click");
        // window.open("google.com.")
        OpenPopupCenter("/contact", "my shop", 1000, 600);

        $("#library").on("click", () => {
            console.log("click");
            OpenPopupCenter("/home", "", 1300, 2000)
        });
    });


    $("#submit").on("click", () => {
        console.log("click");
        const username = $("#username").val();
        const password = $("#password").val();

        const age = $("#age").val();
        const adress = $("#adess").val();
        const place = $("#place").val();


        const params = {
            username: username,
            password: password,
            age: age,
            adress: adress,
            place: place


        }
        console.log(params)
        $.post(
            "/call-me",
            params,
            (data) => {
                console.log("data :", data);
                window.opener.location.reload();
                window.close();
            },
            "JSON"
        ).fail((err) => {
            console.log("ERROR ::: ", err);
        });
    });




});






















function OpenPopupCenter(pageURL, title, w, h) {
    let left = Math.round(screen.width / 2 - w / 2);
    let top = Math.round(screen.height / 2 - h / 2);
    window.open(
        pageURL,
        title,
        "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" +
        w +
        ", height=" +
        h +
        ", top=" +
        top +
        ", left=" +
        left
    );
}