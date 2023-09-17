function live() {
    var time = setInterval(function() {
        $("#showTime").text(dayjs());
    }, 100);
}

live();