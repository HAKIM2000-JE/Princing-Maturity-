const config = {
  type: 'line',
  data: data,
  options= {
    responsive: true,
    plugins: {
      tooltip: {
        mode: 'index',
        intersect: false
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart'
      }
    },
    hover: {
      mode: 'index',
      intersec: false
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Month'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Value'
        },
        min: 0,
        max: 100,
        ticks: {
          // forces step size to be 50 units
          stepSize: 50
        }
      }
    }
  },
};


const choices = ['>80% B2B','80%B2B / 20%B2C','70%B2B / 30%B2C' , '60%B2B / 40%B2C' , '50%B2B / 50%B2C' , '40%B2B / 60%B2C',
                          '30%B2B / 70%B2C', '20%B2B / 80%B2C' , '10% B2B / 90%B2C','100% B2C' , 'I dont know ']
                          const choices = ['>200 pricelists','101-200 pricelists' , '101-200 pricelists' ,'31-50 pricelists' , '16-30 pricelists' , '11-15 pricelists' , '6-10 pricelists' ,'3-5 pricelists' ,'2 price lists' , 'I DONT KNOW']