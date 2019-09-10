let echarts = require('echarts/lib/echarts') ;
let contrastColor = '#eee' ;
let axisCommon = function () {
    return {
        axisLine: {
            lineStyle: {
                color: contrastColor
            }
        },
        axisTick: {
            show: false ,
            lineStyle: {
                color: contrastColor
            }
        },
        axisLabel: {
            textStyle: {
                color: contrastColor
            }
        },
        splitLine: {
            lineStyle: {
                color: '#424451'
            }
        },
        splitArea: {
            areaStyle: {
                color: contrastColor
            }
        }
    } ;
} ;

let colorPalette = [
    "#85cdc1" ,
    "#fb9b9b" ,
    "#b59bfb" ,
    "#ffe5b0" ,
    "#ea7e53" 
];
let theme = {
    color: colorPalette ,
    backgroundColor: 'rgb(34,36,50)' ,
    tooltip: {
        axisPointer: {
            lineStyle: {
                color: contrastColor
            },
            crossStyle: {
                color: contrastColor
            }
        }
    },
    legend: {
        show: false ,
        textStyle: {
            color: contrastColor
        }
    },
    textStyle: {
        color: contrastColor
    },
    title: {
        textStyle: {
            color: '#B3B8C7' ,
            fontSize: 12 
        } ,
        padding: [
            14,  // 上
            0 , // 右
            0 ,  // 下
            10 // 左
        ]
    },
    grid: {
        top: 50 ,
        left: 10 ,
        right: 10 ,
        bottom: 10 ,
        containLabel: true
    } ,
    toolbox: {
        iconStyle: {
            normal: {
                borderColor: contrastColor
            }
        } ,
        saveAsImage: {
            show: false 
        }
    },
    dataZoom: {
        textStyle: {
            color: contrastColor
        }
    },
    timeline: {
        lineStyle: {
            color: contrastColor
        },
        itemStyle: {
            normal: {
                color: colorPalette[1]
            }
        },
        label: {
            normal: {
                textStyle: {
                    color: contrastColor
                }
            }
        },
        controlStyle: {
            normal: {
                color: contrastColor,
                borderColor: contrastColor
            }
        }
    },
    yAxis: {
        axisLine: { 
            show: false 
        } ,
        axisTick: {
            show: false 
        }
    } ,
    timeAxis: axisCommon(),
    logAxis: axisCommon(),
    valueAxis: axisCommon(),
    categoryAxis: axisCommon(),

    line: {
        symbol: 'circle'
    },
    graph: {
        color: colorPalette
    },
    gauge: {
        title: {
            textStyle: {
                color: contrastColor
            }
        }
    },
    candlestick: {
        itemStyle: {
            normal: {
                color: '#FD1050',
                color0: '#0CF49B',
                borderColor: '#FD1050',
                borderColor0: '#0CF49B'
            }
        }
    }
};
theme.categoryAxis.splitLine.show = false;
echarts.registerTheme('dark', theme);