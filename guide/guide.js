$(document).ready(function () {
    //adding event listeners
    $('#createUserSubmit').bind('click', checkIfUserExists);
    $('#getUserSubmit').bind('click', showExistingUsers);
});

users = []; //internal array of users



checkIfUserExists = function () {
    var owner = $('#owner').val();
    var userName = $('#username').val();
    $.ajax({
        type: "POST",
        url: "https://itc-colors.appspot.com/add_user",
        data: {
            owner: owner,
            username: userName
        },
        dataType: "json",
        success: function (responsemsg) {
            if (responsemsg.msg) {
                console.log("worked!")
                console.log(responsemsg)

            }
        },
        error: function (msg) {
            console.log("error");
        },
    });
};


showExistingUsers = function () {
    $.ajax({
        type: "GET",
        url: "https://itc-colors.appspot.com/users",
        data: {
            owner: $('#owner').val()
        },
        dataType: "json",
        success: function (responsemsg) {
            console.log(responsemsg)
        },
        error: function (msg) {
            console.log("error");
        },
    });
};