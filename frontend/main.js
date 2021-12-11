console.log("FRONT END EXECUTED");
import moment from "moment";
// import $ from "jquery";
$(function () {
  $("#singin").on("click", () => {
    console.log("click");
    // window.open("google.com.")
    OpenPopupCenter("/create", "my shop", 1000, 600);

    $("#library").on("click", () => {
      console.log("click");
      OpenPopupCenter("/home", "", 1300, 2000);
    });
  });

  $("#submit").on("click", () => {
    console.log("click");
    const username = $("#username").val();
    const profession = $("#profession").val();
    const age = $("#age").val();
    const adress = $("#adress").val();
    const password = $("#password").val();

    const params = {
      name: username,
      profession: profession,
      age: age,
      address: adress,
      password: password,
    };
    console.log(params);
    $.post(
      "/signUp",
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
