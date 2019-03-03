$(".main_image").children().first().attr('src', $('.thumbnails').children().first().attr('src'));
function changeMain(elem) {
    $('img.selected').removeClass('selected');
    $(".main_image").children().first().attr('src', $(elem).attr('src'));
    $(elem).addClass('selected');
}