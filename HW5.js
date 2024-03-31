$(function() {
    fAlternateRow();
    $("#even, #odd").change(fAlternateRow);
    $(".delete").click(fDeleteRow).mouseover(fMousePointer);
});

function fDeleteRow() {
    console.log("testing...");
    let tr = $(this).closest("tr");
    
    tr.fadeOut(2000, function() {
        tr.remove("tr");
        fAlternateRow();
    });
}

function fMousePointer() {
    console.log("testing...");
    $(this).css('cursor', 'pointer');
}

function fAlternateRow() {
    console.log("testing...");
    $("tr:even").css("background-color",  $(".even").val());
    $("tr:odd").css("background-color",  $(".odd").val());
}