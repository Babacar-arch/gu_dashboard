google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Année', 'Sortie'],
        ['2021', 1000],
        ['2022', 1170]
    ]);

    var options = {
        title: 'Courbe des sorties par Jour',
        curveType: 'function',
        legend: { position: 'bottom' }
    };

    var chart = new google.visualization.LineChart(document.getElementById('courbe_annee'));
    chart.draw(data, options);
}