$(document).ready(function() {
    $("#animateButton").click(function() {
        $("#content").animate({ fontSize: "32px", opacity: 0.5 }, 1000, function() {
            $("#content").animate({ fontSize: "8px", opacity: 1 }, 1000);
        });
    });
});
