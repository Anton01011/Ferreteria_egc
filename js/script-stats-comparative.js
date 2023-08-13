  // Gráfico de Tipo "Bar"
  Highcharts.chart('barChart', {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Comparativa de Ventas por Producto'
    },
    xAxis: {
      categories: ['Producto A', 'Producto B', 'Producto C', 'Producto D', 'Producto E'],
      title: {
        text: 'Productos'
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Cantidad Vendida'
      }
    },
    legend: {
      reversed: true
    },
    plotOptions: {
      series: {
        stacking: 'normal'
      }
    },
    series: [{
      name: 'Unidades Vendidas',
      data: [5, 10, 8, 12, 6]
    }]
  });
