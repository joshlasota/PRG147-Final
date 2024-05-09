$(document).ready(function() {
    // Display TV shows
    const tvShows = [
        { "Name": "Stranger Things", "Main Character": "Eleven", "Network": "Netflix", "Start Date": "July 15, 2016" },
        { "Name": "Breaking Bad", "Main Character": "Walter White", "Network": "AMC", "Start Date": "January 20, 2008" },
        { "Name": "Game of Thrones", "Main Character": "Jon Snow", "Network": "HBO", "Start Date": "April 17, 2011" },
        { "Name": "The Mandalorian", "Main Character": "Din Djarin", "Network": "Disney+", "Start Date": "November 12, 2019" },
        { "Name": "The Crown", "Main Character": "Queen Elizabeth II", "Network": "Netflix", "Start Date": "November 4, 2016" }
    ];
    tvShows.forEach(show => {
        $('#show-list').append(`<div><strong>${show.Name}</strong> featuring ${show['Main Character']} on ${show.Network} since ${show['Start Date']}</div>`);
    });

    // Animate div
    $('#animated-div').animate({left: '50%'}, 'slow');

    // AJAX content load
    $('#load-content').click(function() {
        $.ajax({
            url: 'content.txt',
            success: function(data) {
                $('#content-display').html(data);
            },
            error: function(xhr, status, error) {
                $('#content-display').html('<p>Error loading the content. Please check your server settings. Error: ' + error + '</p>');
            }
        });
    });
});
