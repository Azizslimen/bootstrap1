var textarea = document.getElementById("mytext");

function makeItbold() {

    if (textarea.style.fontWeight != "bold") {
        textarea.style.fontWeight = "bold";
    } else {
        textarea.style.fontWeight = "normal";

    }
}

function makeItitalic() {
    if (textarea.style.fontStyle != "italic") {
        textarea.style.fontStyle = "italic";
    } else {
        textarea.style.fontStyle = "normal";
    }
}

function makeItunderlined() {
    if (textarea.style.textDecoration != "underline") {
        textarea.style.textDecoration = "underline";
    } else {
        textarea.style.textDecoration = "none";
    }
}

function changesize() {
    var userfontsize = document.getElementById("sizeselect").value;
    textarea.style.fontSize = userfontsize;

}

function changefont() {
    var userfontfamily = document.getElementById("fontselect").value;
    textarea.style.fontFamily = userfontfamily;
}
$(".container").hover(function () {
    $("#" + this.id + " .btn").show();
}, function () {
    $("#" + this.id + " .btn").hide();

})

$(".btn").click(function () {
    $("#mymodal").modal()
})

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.navbar === "navbar") {
        x.navbar += " responsive";
    } else {
        x.navbar = "navbar";
    }
}