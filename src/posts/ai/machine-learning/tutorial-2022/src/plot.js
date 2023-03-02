// 需要绘制的函数曲线
/**
 * @param {number} x
 */
function func(x) {
  return (x - 1) ** 2;
}
// 产生数据
function generateData() {
  let data = [];
  for (let i = -4; i <= 6; i += 0.05) {
    data.push([
      parseFloat(i.toFixed(5)),
      parseFloat(func(i).toFixed(5))
    ]);
  }
  return data;
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
    max: 20,
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
      data: generateData()
    }
  ]
};

console.log(JSON.stringify(option));
