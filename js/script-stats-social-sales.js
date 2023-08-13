// Contenido del archivo script-stats-social-sales.js
const socialSalesData = {
    ranges: [
      [13.7, 25.6],
      [13.3, 21.8],
      [11.2, 19.9],
      // ... (agrega aquí el resto de los rangos)
    ],
    averages: [
      18.1,
      17.1,
      15.2,
      // ... (agrega aquí el resto de las medias)
    ]
  };
  
  Highcharts.chart('socialSalesChart', {
    chart: {
      type: 'arearange',
    },
    title: {
      text: 'Ventas con Ayuda de Redes Sociales',
    },
    xAxis: {
      type: 'datetime',
      accessibility: {
        rangeDescription: 'Rango: Jul 1st 2022 to Jul 31st 2022.',
      },
    },
    yAxis: {
      title: {
        text: 'Cantidad Vendida',
      },
    },
    tooltip: {
      crosshairs: true,
      shared: true,
      valueSuffix: ' Unidades',
    },
    plotOptions: {
      series: {
        pointStart: Date.UTC(2022, 6, 1),
        pointIntervalUnit: 'day',
      },
    },
    series: [
      {
        name: 'Ventas con Ayuda de Redes Sociales',
        data: socialSalesData.ranges,
        zIndex: 1,
        marker: {
          fillColor: 'white',
          lineWidth: 2,
          lineColor: Highcharts.getOptions().colors[0],
        },
      },
      {
        name: 'Rango',
        data: socialSalesData.ranges,
        lineWidth: 0,
        linkedTo: ':previous',
        color: Highcharts.getOptions().colors[0],
        fillOpacity: 0.3,
        zIndex: 0,
        marker: {
          enabled: false,
        },
      },
    ],
  });
  