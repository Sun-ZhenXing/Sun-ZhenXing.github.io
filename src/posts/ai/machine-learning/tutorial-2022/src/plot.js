/**
 * 需要绘制的函数
 * @param {number} x
 */
function func(x) {
  return (x - 1) ** 2;
}

class FunctionPlot {
  constructor(func, start = -5.0, end = 5.0, span = 0.05) {
    this.func = func;
    this.start = start;
    this.end = end;
    this.span = span;
    this.data = this.generateData();
  }

  generateData() {
    const data = [];
    for (let i = this.start; i <= this.end; i += this.span) {
      data.push([
        parseFloat(i.toFixed(5)),
        parseFloat(this.func(i).toFixed(5))
      ]);
    }
    return data;
  }
}

const option = {
  xAxis: {
    name: 'x',
    minorTick: {
      show: true
    },
    minorSplitLine: {
      show: true
    }
  },
  yAxis: {
    name: 'J(w)',
    min: -1,
    max: 5,
    minorTick: {
      show: true
    },
    minorSplitLine: {
      show: true
    }
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "cross"
    }
  },

  // 缩放
  // dataZoom: [
  //   {
  //     show: true,
  //     type: 'inside',
  //     filterMode: 'none',
  //     xAxisIndex: [0],
  //     startValue: -4,
  //     endValue: 4
  //   },
  //   {
  //     show: true,
  //     type: 'inside',
  //     filterMode: 'none',
  //     yAxisIndex: [0],
  //     startValue: -20,
  //     endValue: 20
  //   }
  // ],

  // 数据集
  series: [
    {
      type: 'line',
      // 显示数据点标记
      showSymbol: false,
      // 是否裁剪超出坐标系部分的图形
      clip: true,
      // 数据
      data: new FunctionPlot(x => - 0.5 * Math.cos(10 * x) + 0.3 * Math.sin(2 * x) - x + 5, 0).generateData()
    },
    {
      type: 'line',
      // 显示数据点标记
      showSymbol: false,
      // 是否裁剪超出坐标系部分的图形
      clip: true,
      // 数据
      data: new FunctionPlot(x => - x + 5, 0).generateData()
    }
  ]
};

console.log(JSON.stringify(option));
