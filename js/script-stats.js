const salesData = [
    {
      name: 'Prodcutos de albañilería',
      data: [120, 140, 180, 220, 280, 320, 340, 370, 410, 450]
    },
    {
      name: 'Productos de plomería',
      data: [50, 60, 80, 110, 150, 190, 220, 250, 280, 310]
    },
    {
      name: 'Productos electricos',
      data: [70, 90, 110, 130, 150, 170, 190, 210, 230, 250]
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
        text: ''
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