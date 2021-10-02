google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Jour', 'Sortie'],
        ['Lundi', 1000],
        ['Mardi', 1170],
        ['Mercredi', 660],
        ['Jeudi', 1030],
        ['Vendredi', 1030],
        ['Samedi', 1030],
        ['Dimanche', 1030]
    ]);

    var options = {
        title: 'Courbe des sorties par Jour',
        curveType: 'function',
        legend: { position: 'bottom' }
    };

    var chart = new google.visualization.LineChart(document.getElementById('courbe_jour'));
    chart.draw(data, options);

}