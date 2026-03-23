document.addEventListener("DOMContentLoaded", function() {
    const username = "SourisCG";
    const calendarHost = document.querySelector(".card.github .calendar");

    if (!calendarHost) {
        return;
    }

    // Heatmap dinamico diario de GitHub con layout estable para responsive.
    const heatmapUrl = "https://ghchart.rshah.org/BC13FE/" + encodeURIComponent(username);
    calendarHost.innerHTML =
        '<img class="gh-heatmap" src="' + heatmapUrl + '" alt="Contribuciones de GitHub de ' + username + '" loading="lazy" referrerpolicy="no-referrer">';
});