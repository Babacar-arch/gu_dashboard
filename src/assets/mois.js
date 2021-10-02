google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Mois', 'Sortie'],
        ['janvier', 1000],
        ['Février', 1000],
        ['Mars', 1170],
        ['Avril', 660],
        ['Mai', 1030],
        ['Juin', 1030],
        ['Juillet', 1030],
        ['Août', 1030],
        ['Septembre', 1030],
        ['Octobre', 1030],
        ['Novembre', 1030],
        ['Décembre', 1030]
    ]);

    var options = {
        title: 'Courbe des sorties par Jour',
        curveType: 'function',
        legend: { position: 'bottom' }
    };

    var chart = new google.visualization.LineChart(document.getElementById('courbe_mois'));
    chart.draw(data, options);

}