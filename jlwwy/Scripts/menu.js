function showPanel(index) {
    $("#menu ul").slideUp(200).eq(index).slideDown(200);
}

$(function() {
    showPanel(0);
    $("#menu h2").each(function(i) {
        $(this).click(function() {
            showPanel(i);
        });
    });
});



