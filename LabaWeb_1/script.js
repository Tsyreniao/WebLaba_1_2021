$(document).ready(function () {
    $.get("https://www.breakingbadapi.com/api/characters", function(response) {
        console.log(response);
    })
});