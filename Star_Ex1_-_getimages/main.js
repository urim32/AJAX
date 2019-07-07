$.ajax({

    type: "GET",
    url: "http://itc-colors.appspot.com/get_images",
    success: function (response) {
        let res = JSON.parse(response);
        for (let i = 0; i < res.length; i++) {
            let imgCreate = $("<img>");
            imgCreate.attr("src", res[i]);
            $("body").append(imgCreate);


        }
        console.log(res);
    },
});