/**
 * 需要绘制的函数
 * @param {number} x
 */
export function func(x) {
  return (x - 1) ** 2
}

class FunctionPlot {
  constructor(func, start = -5.0, end = 5.0, span = 0.05) {
    this.func = func
    this.start = start
    this.end = end
    this.span = span
    this.data = this.generateData()
  }

  generateData() {
    const data = []
    for (let i = this.start; i <= this.end; i += this.span) {
      data.push([
        Number.parseFloat(i.toFixed(5)),
        Number.parseFloat(this.func(i).toFixed(5)),
      ])
    }
    return data
  }
}

const option = {
  // 数据集
  series: [
    {
      // 是否裁剪超出坐标系部分的图形
      clip: true,
      // 数据
      data: new FunctionPlot(x => -0.5 * Math.cos(10 * x) + 0.3 * Math.sin(2 * x) - x + 5, 0).generateData(),
      // 显示数据点标记
      showSymbol: false,
      type: 'line',
    },
    {
      // 是否裁剪超出坐标系部分的图形
      clip: true,
      // 数据
      data: new FunctionPlot(x => -x + 5, 0).generateData(),
      // 显示数据点标记
      showSymbol: false,
      type: 'line',
    },
  ],
  tooltip: {
    axisPointer: {
      type: 'cross',
    },
    trigger: 'axis',
  },
  xAxis: {
    minorSplitLine: {
      show: true,
    },
    minorTick: {
      show: true,
    },
    name: 'x',
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

  yAxis: {
    max: 5,
    min: -1,
    minorSplitLine: {
      show: true,
    },
    minorTick: {
      show: true,
    },
    name: 'J(w)',
  },
}

console.log(JSON.stringify(option))
