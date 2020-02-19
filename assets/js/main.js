$(function() {
    let levelbar = $('.level-bar-inner');
    levelbar.css('width', '0');
    GitHubCalendar("#github-graph", "Wilders", {
        responsive: true
    });
    GitHubActivity.feed({
        username: "Wilders",
        selector: "#ghfeed"
    });
    levelbar.each(function() {
        let itemWidth = $(this).data('level');
        $(this).animate({
            width: itemWidth
        }, 2500);
    });
});