const salesData = [
    {
      name: 'Prodcutos de albañilería',
      data: [120, 140, 180, 220, 280, 320, 340, 370, 410, 450]
    },
    {
      name: 'Productos de plomería',
      data: [50, 0, 80, 20, 100, 30, 50, 80, 280, 310]
    },
    {
      name: 'Productos electricos',
      data: [70, 90, 30, 10, 150, 70, 290, 40, 0, 10]
    }
  ];

  Highcharts.chart('container', {
    chart: {
      type: 'spline'
    },
    title: {
      text: 'Estadísticas de Ventas de Productos',
      align: 'center'
    },
    xAxis: {
      categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct']
    },
    yAxis: {
      title: {
        text: 'Ventas locales'
      }
    },
    legend: {
      layout: 'horizontal',
      align: 'center',
      verticalAlign: 'bottom'
    },
    plotOptions: {
      series: {
        marker: {
          enabled: true
        }
      }
    },
    series: salesData
  });


  