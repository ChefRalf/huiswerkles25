$(document).ready(function() {
    $("#animateButton").click(function() {
        $("#content").animate({ fontSize: "24px", opacity: 0.5 }, 1000, function() {
            $("#content").animate({ fontSize: "16px", opacity: 1 }, 1000);
        });
    });
});
