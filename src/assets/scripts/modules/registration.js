var btn = document.querySelector(".button"),
    closeReg = document.querySelector(".registration__close"),
    regForm = document.querySelector(".registration"),
    iFrame = document.querySelector(".registration__frame");
    
var changePosition = function() {
        var framePosition = iFrame.getBoundingClientRect(),
            top = framePosition.top,
            right = framePosition.left;

        closeReg.style.top = top + "px";
        closeReg.style.right = right + "px";
    };

btn.addEventListener("click", function(e) {
    e.preventDefault;
    regForm.style.display = "block";

    changePosition();
});

regForm.addEventListener("click", function(e) {
    e.preventDefault;
    regForm.style.display = "none";
});

window.onresize = function() {
    changePosition();
};
