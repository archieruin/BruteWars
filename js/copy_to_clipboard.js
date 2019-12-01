function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();

    $('#success_copy').animate({bottom: '-5px'}, 0);
    $('#success_copy').animate({opacity: 1, bottom: '10px'}, 400);
    $('#success_copy').animate({opacity: 0, bottom: '12px'}, 400);
    $('#success_copy').animate({bottom: '10px'}, 0);
}