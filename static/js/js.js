var basepath = "http://127.0.0.1:5005/"

$(window).load(function(){
             $(".loading").fadeOut()
            })  
			
/****/
/****/
$(document).ready(function(){
	var whei=$(window).width()
	$("html").css({fontSize:whei/20})
	$(window).resize(function(){
		var whei=$(window).width()
	 $("html").css({fontSize:whei/20})
});
	});

 $(function () {
   echarts_1();
   echarts_2();
   echarts_3();
   echarts_4();
   echarts_5();
   echarts_6();
   echarts_7();
   echarts_8();
   echarts_9();
   echarts_10();
   echarts_11();
   echarts_12();
   echarts_13();
   echarts_14();
   setInterval(function() {
        echarts_1();
        echarts_2();
        echarts_3();
        echarts_4();
        echarts_5();
        echarts_6();
        echarts_7();
        echarts_8();
        echarts_9();
        echarts_10();
        echarts_14();
    }, 500);
 });
 function echarts_1() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart1'));
        $.ajax({
          type: "GET",
          url:"velocity/xvelocity", //后端请求
          dataType: "json",
           success: function (res) {
            xdata = res['xvelocity']
              option = {
                        series: [
                          {
                            type: 'gauge',
                                min: -10,
                                max: 10,
                            axisLine: {
                              lineStyle: {
                                width: 4,
                                color: [
                                  [0.3, '#16c8df'],
                                  [0.7, '#00a2ff'],
                                  [1, '#16c8df']
                                ]
                              }
                            },
                            pointer: {
                              itemStyle: {
                                color: 'auto'
                              }
                            },
                            axisTick: {
                              distance: -0,
                              length: 3,
                              lineStyle: {
                                color: '#16c8df',
                                width: 1
                              }
                            },
                            splitLine: {
                              distance: -0,
                              length: 4,
                              lineStyle: {
                                color: '#0ce2fe',
                                width: 1
                              }
                            },
                            axisLabel: {
                              color: 'auto',
                              distance: 5,
                              fontSize: 9
                            },
                            detail: {
                              valueAnimation: true,
                              formatter: '{value} m/s',
                              color: 'auto',
                              fontSize: 10
                            },
                            data: [
                              {
                                value: xdata
                              }
                            ]
                          }
                        ]
                      };
              myChart.setOption(option);
           }
        });


   // // 使用刚指定的配置项和数据显示图表。
   //      window.addEventListener("resize",function(){
   //          myChart.resize();
   //      });
    }

	 function echarts_2() {
 		var myChart = echarts.init(document.getElementById('echart2'));
         $.ajax({
          type: "GET",
          url:"mpu6050/mpu_gyro_xdata", //后端请求
          dataType: "json",
           success: function (res) {
             xdata = res['mpu_gyro_xdata']
             option = {
                series: [
                  {
                    type: 'gauge',
                        min: -10,
                        max: 10,
                    axisLine: {
                      lineStyle: {
                        width: 4,
                        color: [
                          [0.3, '#16c8df'],
                          [0.7, '#00a2ff'],
                          [1, '#16c8df']
                        ]
                      }
                    },
                    pointer: {
                      itemStyle: {
                        color: 'auto',
                      }
                    },
                    axisTick: {
                      distance: -0,
                      length: 3,
                      lineStyle: {
                        color: '#16c8df',
                        width: 1
                      }
                    },
                    splitLine: {
                      distance: -0,
                      length: 4,
                      lineStyle: {
                        color: '#0ce2fe',
                        width: 1
                      }
                    },
                    axisLabel: {
                      color: 'auto',
                      distance: 5,
                      fontSize: 9
                    },
                    detail: {
                      valueAnimation: true,
                      formatter: '{value} m/s',
                      color: 'auto',
                      fontSize: 10
                    },
                    data: [
                      {
                        value: xdata
                      }
                    ]
                  }
                ]
              };


             myChart.setOption(option);
           }
           });

 		// 使用刚指定的配置项和数据显示图表。

 		// window.addEventListener("resize", function () {
 		// 	myChart.resize();
 		// });
 	}



function echarts_3() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart3'));
        $.ajax({
          type: "GET",
          url: "velocity/yvelocity", //后端请求
          dataType: "json",
          success: function (res) {
            ydata = res['yvelocity'];
            option = {
              series: [
                {
                  type: 'gauge',
                      min: -10,
                      max: 10,
                  axisLine: {
                    lineStyle: {
                      width: 4,
                      color: [
                        [0.3, '#16c8df'],
                        [0.7, '#00a2ff'],
                        [1, '#16c8df']
                      ]
                    }
                  },
                  pointer: {
                    itemStyle: {
                      color: 'auto',
                    }
                  },
                  axisTick: {
                    distance: -0,
                    length: 3,
                    lineStyle: {
                      color: '#16c8df',
                      width: 1
                    }
                  },
                  splitLine: {
                    distance: -0,
                    length: 4,
                    lineStyle: {
                      color: '#0ce2fe',
                      width: 1
                    }
                  },
                  axisLabel: {
                    color: 'auto',
                    distance: 5,
                    fontSize: 9
                  },
                  detail: {
                    valueAnimation: true,
                    formatter: '{value} m/s',
                    color: 'auto',
                    fontSize: 10
                  },
                  data: [
                    {
                      value: ydata
                    }
                  ]
                }
              ]
            };
            myChart.setOption(option);
          }
        });

        // window.addEventListener("resize",function(){
        //     myChart.resize();
        // });
    }



	function echarts_4() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart4'));
        $.ajax({
          type: "GET",
          url: "mpu6050/mpu_gyro_ydata", //后端请求
          dataType: "json",
          success: function (res) {
            ydata = res['mpu_gyro_ydata'];
            option = {
              series: [
                {
                  type: 'gauge',
                      min: -10,
                      max: 10,
                  axisLine: {
                    lineStyle: {
                      width: 4,
                      color: [
                        [0.3, '#16c8df'],
                        [0.7, '#00a2ff'],
                        [1, '#16c8df']
                      ]
                    }
                  },
                  pointer: {
                    itemStyle: {
                      color: 'auto',
                    }
                  },
                  axisTick: {
                    distance: -0,
                    length: 3,
                    lineStyle: {
                      color: '#16c8df',
                      width: 1
                    }
                  },
                  splitLine: {
                    distance: -0,
                    length: 4,
                    lineStyle: {
                      color: '#0ce2fe',
                      width: 1
                    }
                  },
                  axisLabel: {
                    color: 'auto',
                    distance: 5,
                    fontSize: 9
                  },
                  detail: {
                    valueAnimation: true,
                    formatter: '{value} m/s',
                    color: 'auto',
                    fontSize: 10
                  },
                  data: [
                    {
                      value: ydata
                    }
                  ]
                }
              ]
            };
             myChart.setOption(option);
          }
        });

        // 使用刚指定的配置项和数据显示图表。

        // window.addEventListener("resize",function(){
        //     myChart.resize();
        // });
    }
	



function echarts_5() {
 // 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('echart5'));

$.ajax({
  type: "GET",
  url: "velocity/zvelocity", //后端请求
  dataType: "json",
  success: function (res) {
    zdata = res['zvelocity'];
    option = {
        series: [
          {
            type: 'gauge',
                min: -10,
                max: 10,
            axisLine: {
              lineStyle: {
                width: 4,
                color: [
                  [0.3, '#16c8df'],
                  [0.7, '#00a2ff'],
                  [1, '#16c8df']
                ]
              }
            },
            pointer: {
              itemStyle: {
                color: 'auto',
              }
            },
            axisTick: {
              distance: -0,
              length: 3,
              lineStyle: {
                color: '#16c8df',
                width: 1
              }
            },
            splitLine: {
              distance: -0,
              length: 4,
              lineStyle: {
                color: '#0ce2fe',
                width: 1
              }
            },
            axisLabel: {
              color: 'auto',
              distance: 5,
              fontSize: 9
            },
            detail: {
              valueAnimation: true,
              formatter: '{value} m/s',
              color: 'auto',
              fontSize: 10
            },
            data: [
              {
                value: zdata
              }
            ]
          }
        ]
      };
    myChart.setOption(option);
  }
});
    // 使用刚指定的配置项和数据显示图表。
    //
    // window.addEventListener("resize",function(){
    //     myChart.resize();
    // });
}
	
function echarts_6() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart6'));
        $.ajax({
          type: "GET",
          url: "mpu6050/mpu_gyro_zdata", //后端请求
          dataType: "json",
          success: function (res) {
            zdata = res['mpu_gyro_zdata'];
            option = {
                series: [
                  {
                    type: 'gauge',
                        min: -10,
                        max: 10,
                    axisLine: {
                      lineStyle: {
                        width: 4,
                        color: [
                          [0.3, '#16c8df'],
                          [0.7, '#00a2ff'],
                          [1, '#16c8df']
                        ]
                      }
                    },
                    pointer: {
                      itemStyle: {
                        color: 'auto',
                      }
                    },
                    axisTick: {
                      distance: -0,
                      length: 3,
                      lineStyle: {
                        color: '#16c8df',
                        width: 1
                      }
                    },
                    splitLine: {
                      distance: -0,
                      length: 4,
                      lineStyle: {
                        color: '#0ce2fe',
                        width: 1
                      }
                    },
                    axisLabel: {
                      color: 'auto',
                      distance: 5,
                      fontSize: 9
                    },
                    detail: {
                      valueAnimation: true,
                      formatter: '{value} m/s',
                      color: 'auto',
                      fontSize: 10
                    },
                    data: [
                      {
                        value: zdata
                      }
                    ]
                  }
                ]
              };
            myChart.setOption(option);
          }
        });

        // 使用刚指定的配置项和数据显示图表。

        // window.addEventListener("resize",function(){
        //     myChart.resize();
        // });
    }
	
	
function echarts_7() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart7'));
        $.ajax({
          type: "GET",
          url: "velocity/allSpeed", //后端请求
          dataType: "json",
          success: function (res) {
            alldata = res['allSpeed'];
            option = {
              series: [
                {
                  type: 'gauge',
                      min: -10,
                      max: 10,
                  axisLine: {
                    lineStyle: {
                      width: 4,
                      color: [
                        [0.3, '#16c8df'],
                        [0.7, '#00a2ff'],
                        [1, '#16c8df']
                      ]
                    }
                  },
                  pointer: {
                    itemStyle: {
                      color: 'auto',
                    }
                  },
                  axisTick: {
                    distance: -0,
                    length: 3,
                    lineStyle: {
                      color: '#16c8df',
                      width: 1
                    }
                  },
                  splitLine: {
                    distance: -0,
                    length: 4,
                    lineStyle: {
                      color: '#0ce2fe',
                      width: 1
                    }
                  },
                  axisLabel: {
                    color: 'auto',
                    distance: 5,
                    fontSize: 9
                  },
                  detail: {
                    valueAnimation: true,
                    formatter: '{value} m/s',
                    color: 'auto',
                    fontSize: 10
                  },
                  data: [
                    {
                      value: alldata
                    }
                  ]
                }
              ]
            };
             myChart.setOption(option);
          }
        });

        // 使用刚指定的配置项和数据显示图表。
        //
        // window.addEventListener("resize",function(){
        //     myChart.resize();
        // });
    }
function echarts_8() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('echart8'));
  var option = {
        title: {
          x: "center",
          top: 0,
          /*text: "航向模拟",*/
          textStyle: {
            fontWeight: "normal",
            fontSize: 14,
            color: "#333",
          },
        },
        series: [
          {
            type: "gauge",
            radius: "90%",
            splitNumber: 1,
            min: 0,
            max: 360,
            startAngle: 90,
            endAngle: 449.9,
            axisLine: {
              show: false,
              lineStyle: {
                width: 2,
                shadowBlur: 0,
                color: [[1, "#8f8f8f"]],
              },
            },
            axisTick: {
              show: true,
              lineStyle: {
                color: "#666",
                width: 5,
              },
              length: "-6%",
              splitNumber: 8,
            },
            splitLine: {
              show: true,
              length: 10,
              lineStyle: {
                color: "#000",
              },
            },
            axisLabel: {
              show: false,
            },
            detail: {
              show: false,
            },
          },
          {
            name: "",
            type: "gauge",
            min: 0,
            max: 360,
            startAngle: 90,
            endAngle: -269.9999,
            radius: "70%",
            splitNumber: 12,
            axisLine: {
              lineStyle: {
                width: 5,
                shadowBlur: 0,
                color: [
                  [0.25, "#00fff0"],
                  [0.5, "#1b7ef2"],
                  [0.75, "#00fff0"],
                  [1, "#1b7ef2"],
                ],
              },
            },
            axisTick: {
              show: true,
              splitNumber: 6,
            },
            splitLine: {
              length: 25,
              lineStyle: {
                width: 2,
              },
            },
            axisLabel: {
              formatter: function (e) {
                switch (e + "") {
                  case "0":
                    return "北";
                  case "45":
                    return "东北";
                  case "135":
                    return "东南";
                  case "225":
                    return "西南";
                  case "315":
                    return "西北";
                  case "45":
                    return "东北";
                  case "360":
                    return "北";
                  case "180":
                    return "南";
                  case "90":
                    return "东";
                  case "270":
                    return "西";
                  default:
                    return e;
                }
              },
              distance: -28,
              textStyle: {
                fontSize: 5,
                color: "#ccc",
                fontWeight: "",
              },
            },
            pointer: {
              show: true,
              length: "60%",
              width: 5,
            },
            detail: {
              formatter: function (param) {
                var level = "";
                if (param > 0 && param < 90) {
                  level = "东北";
                } else if (param > 90 && param < 180) {
                  level = "东南";
                } else if (param > 180 && param < 270) {
                  level = "西南";
                } else if (param > 270 && param < 360) {
                  level = "西北";
                } else if (param == 360) {
                  level = "正北";
                } else if (param == 270) {
                  level = "正西";
                } else if (param == 90) {
                  level = "正东";
                } else if (param == 180) {
                  level = "正南";
                }
                return "当前风向:" + level + "(" + param + "°)";
              },
              offsetCenter: [0, 140],
              textStyle: {
                fontSize: 14,
              },
            },
            data: [270],
          },
        ],
      };
  $.ajax({
    type: "GET",
    url: "attitude/heading", //后端请求
    dataType: "json",
    success: function (res) {
      head = res['heading'];
      option.series[1].data[0] = head;
      myChart.setOption(option, true);
    }
  });

}
// setInterval(function () {
//   var datavalue = (Math.random() * 360).toFixed(0);
//   option.series[1].data[0] = datavalue;
//   myChart.setOption(option, true);
// }, 1000);
//
// window,
//   (onresie = function () {
//     myChart.resize();
//   });
//
//         // 使用刚指定的配置项和数据显示图表。
//         myChart.setOption(option);
//         window.addEventListener("resize",function(){
//             myChart.resize();
//         });
//     }
//
function echarts_9() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart9'));
        $.ajax({
          type: "GET",
          url: "velocity/airspeed", //后端请求
          dataType: "json",
          success: function (res) {
            airdata = res['airspeed'];
            option = {
              series: [
                {
                  type: 'gauge',
                      min: -10,
                      max: 10,
                  axisLine: {
                    lineStyle: {
                      width: 4,
                      color: [
                        [0.3, '#16c8df'],
                        [0.7, '#00a2ff'],
                        [1, '#16c8df']
                      ]
                    }
                  },
                  pointer: {
                    itemStyle: {
                      color: 'auto',
                    }
                  },
                  axisTick: {
                    distance: -0,
                    length: 3,
                    lineStyle: {
                      color: '#16c8df',
                      width: 1
                    }
                  },
                  splitLine: {
                    distance: -0,
                    length: 4,
                    lineStyle: {
                      color: '#0ce2fe',
                      width: 1
                    }
                  },
                  axisLabel: {
                    color: 'auto',
                    distance: 5,
                    fontSize: 9
                  },
                  detail: {
                    valueAnimation: true,
                    formatter: '{value} m/s',
                    color: 'auto',
                    fontSize: 10
                  },
                  data: [
                    {
                      value: airdata
                    }
                  ]
                }
              ]
            };
            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
          }
        });

    }	

function echarts_10() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart10'));
        $.ajax({
          type: "GET",
          url: "velocity/groundspeed", //后端请求
          dataType: "json",
          success: function (res) {
            grounddata = res['groundspeed'];

            option = {
              series: [
                {
                  type: 'gauge',
                      min: -10,
                      max: 10,
                  axisLine: {
                    lineStyle: {
                      width: 4,
                      color: [
                        [0.3, '#16c8df'],
                        [0.7, '#00a2ff'],
                        [1, '#16c8df']
                      ]
                    }
                  },
                  pointer: {
                    itemStyle: {
                      color: 'auto',
                    }
                  },
                  axisTick: {
                    distance: -0,
                    length: 3,
                    lineStyle: {
                      color: '#16c8df',
                      width: 1
                    }
                  },
                  splitLine: {
                    distance: -0,
                    length: 4,
                    lineStyle: {
                      color: '#0ce2fe',
                      width: 1
                    }
                  },
                  axisLabel: {
                    color: 'auto',
                    distance: 5,
                    fontSize: 9
                  },
                  detail: {
                    valueAnimation: true,
                    formatter: '{value} m/s',
                    color: 'auto',
                    fontSize: 10
                  },
                  data: [
                    {
                      value: grounddata
                    }
                  ]
                }
              ]
            };
            myChart.setOption(option);
          }
        });

        // 使用刚指定的配置项和数据显示图表。

    }
	
function echarts_11() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart11'));
option = {
  //  backgroundColor: '#00265f',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['vx', 'vy', 'vz'],
		top:'5%',
        textStyle: {
            color: "#fff",
		    fontSize: '12',

        },
 
        itemGap: 35
    },
    grid: {
        left: '0%',
		top:'40px',
        right: '0%',
        bottom: '0',
       containLabel: true
    },
    xAxis: [{
        type: 'category',
      		data: ['10:00', '12:00', '14:00', '16:00', '18:00', '20:00'],
        axisLine: {
            show: true,
         lineStyle: {
                color: "rgba(255,255,255,.1)",
                width: 1,
                type: "solid"
            },
        },
        axisTick: {
            show: false,
        },
		axisLabel:  {
                interval: 0,
               // rotate:50,
                show: true,
                splitNumber: 5,
                textStyle: {
 					color: "rgba(255,255,255,.6)",
                    fontSize: '12',
                },
            },
    }],
    yAxis: [{
        type: 'value',
        axisLabel: {
           //formatter: '{value} %'
			show:true,
			 textStyle: {
 					color: "rgba(255,255,255,.6)",
                    fontSize: '12',
                },
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "rgba(255,255,255,.1	)",
                width: 1,
                type: "solid"
            },
        },
        splitLine: {
            lineStyle: {
               color: "rgba(255,255,255,.1)",
            }
        }
    }],
    series: [{
        name: 'vx',
        type: 'line',
 smooth: true,
        data: [2, 6, 3, 8, 5, 4],
        itemStyle: {
            normal: {
                color:'#2f89cf',
                opacity: 1,
				
				barBorderRadius: 5,
            }
        }
    }, {
        name: 'vy',
        type: 'line',
		 smooth: true,
        data: [5, 2, 6, 4, 5, 5],
		barWidth:'15',
       // barGap: 1,
        itemStyle: {
            normal: {
                color:'#62c98d',
                opacity: 1,
				barBorderRadius: 5,
            }
        }
    },{
        name: 'vz',
        type: 'line',
		 smooth: true,
        data: [4, 3, 5, 3, 6, 3],
		barWidth:'15',
       // barGap: 1,
        itemStyle: {
            normal: {
                color:'#e30ce3',
                opacity: 1,
				barBorderRadius: 5,
            }
        }
    },
	]
};

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
	
function echarts_12() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart12'));
option = {
  //  backgroundColor: '#00265f',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['ax', 'ay', 'az'],
		top:'5%',
        textStyle: {
            color: "#fff",
		    fontSize: '12',

        },
 
        itemGap: 35
    },
    grid: {
        left: '0%',
		top:'40px',
        right: '0%',
        bottom: '0',
       containLabel: true
    },
    xAxis: [{
        type: 'category',
      		data: ['10:00', '12:00', '14:00', '16:00', '18:00', '20:00'],
        axisLine: {
            show: true,
         lineStyle: {
                color: "rgba(255,255,255,.1)",
                width: 1,
                type: "solid"
            },
        },
        axisTick: {
            show: false,
        },
		axisLabel:  {
                interval: 0,
               // rotate:50,
                show: true,
                splitNumber: 5,
                textStyle: {
 					color: "rgba(255,255,255,.6)",
                    fontSize: '12',
                },
            },
    }],
    yAxis: [{
        type: 'value',
        axisLabel: {
           //formatter: '{value} %'
			show:true,
			 textStyle: {
 					color: "rgba(255,255,255,.6)",
                    fontSize: '12',
                },
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "rgba(255,255,255,.1	)",
                width: 1,
                type: "solid"
            },
        },
        splitLine: {
            lineStyle: {
               color: "rgba(255,255,255,.1)",
            }
        }
    }],
    series: [{
        name: 'ax',
        type: 'line',
 smooth: true,
        data: [2, 6, 3, 8, 5, 3],
		
        itemStyle: {
            normal: {
                color:'#2f89cf',
                opacity: 1,
				
				barBorderRadius: 5,
            }
        }
    }, {
        name: 'ay',
        type: 'line',
		 smooth: true,
        data: [5, 2, 6, 4, 5, 4],
		barWidth:'10',
       // barGap: 1,
        itemStyle: {
            normal: {
                color:'#62c98d',
                opacity: 1,
				barBorderRadius: 5,
            }
        }
    },{
        name: 'az',
        type: 'line',
		 smooth: true,
        data: [4, 3, 5, 3, 6, 5],
		barWidth:'10',
       // barGap: 1,
        itemStyle: {
            normal: {
                color:'#e30ce3',
                opacity: 1,
				barBorderRadius: 5,
            }
        }
    },
	]
};

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
	
function echarts_13() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart13'));
 option = {
  title: {
/*    text: "总数变化图",
*/    textStyle: {
      fontSize: 25,
      fontWeight: "normal",
      color: "#fff",
    },
    x: "center",
  },
 
  tooltip: {},
  grid: {
    top: "8%",
    left: "1%",
    right: "1%",
    bottom: "8%",
    containLabel: true,
  },
  legend: {
    itemGap: 100,
    data: ["机身平稳性"],
    textStyle: {
      color: "#f9f9f9",
      borderColor: "#fff",
    },
  },
  xAxis: [
    {
      type: "category",
      boundaryGap: true,
      axisLine: {
        //坐标轴轴线相关设置。数学上的x轴
        show: true,
        lineStyle: {
          color: "#203861",
        },
      },
      axisLabel: {
        //坐标轴刻度标签的相关设置
        textStyle: {
          color: "#d1e6eb",
          margin: 15,
        },
      },
      axisTick: {
        show: false,
      },
      data: [
        "12:00",
        "14:00",
        "16:00",
        "18:00",
        "20:00",
        "22:00",
      ],
    },
  ],
  yAxis: [
    {
      type: "value",
      min: 0,
      // max: 140,
      splitNumber: 7,
      splitLine: {
        show: true,
        lineStyle: {
          color: "#0a3256",
        },
      },
      axisLine: {
        show: false,
      },
      axisLabel: {
        margin: 20,
        textStyle: {
          color: "#999",
        },
      },
      axisTick: {
        show: false,
      },
    },
  ],
  series: [
    {
      name: "注册总量",
      type: "line",
      smooth: true, //是否平滑曲线显示
      // 			symbol:'circle',  // 默认是空心圆（中间是白色的），改成实心圆
      showAllSymbol: true,
      symbol: "emptyCircle",
      symbolSize: 6,
      lineStyle: {
        normal: {
          color: "#2897ff", // 线条颜色
        },
        borderColor: "#2897ff",
      },
      label: {
        show: true,
        position: "top",
        textStyle: {
          color: "#fff",
        },
      },
      itemStyle: {
        normal: {
          color: "#2897ff",
        },
      },
      tooltip: {
        show: false,
      },
      areaStyle: {
        //区域填充样式
        normal: {
          //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: "rgba(10,60,240,0.4)",
              },
              {
                offset: 1,
                color: "rgba(0,0,0, 0)",
              },
            ],
            false
          ),
          shadowColor: "rgba(53,142,215, 0.2)", //阴影颜色
          shadowBlur: 20, //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
        },
      },
      data: [100, 220, 310, 260, 70, 230],
    },
    
  ],
};


        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
		
		
		
    }	
	
	function echarts_14() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart14'));
        $.ajax({
          type: "GET",
          url: "TFmini/TFmini_data", //后端请求
          dataType: "json",
          success: function (res) {
            let TFheight = res['TFmini_data'];
            var option = {
              grid: {
                  containLabel: true,
                  left: 20,
                  right: 20,
                  bottom: 10,
                  top: 10,
              },
              xAxis: {
                  axisLabel: {
                      color: '#c0c3cd',
                      fontSize: 12,
                      interval: 0,
                  },
                  axisTick: {
                      show: false,
                  },
                  splitLine: {
                      show: false,
                  },
                  axisLine: {
                      show: false,
                  },
                  data: ['高度(m)'],
                  type: 'category',
              },
              yAxis: {
                  axisLabel: {
                      color: '#c0c3cd',
                      fontSize: 12,
                  },
                  axisTick: {
                      show: false,
                  },
                  splitLine: {
                      show: false,
                  },
                  axisLine: {
                      show: false,
                  },
                  name: '',
              },
              series: [
                  {
                      data: [TFheight,],
                      type: 'bar',
                      barMaxWidth: 'auto',
                      barWidth: 30,
                      itemStyle: {
                          color: '#22E5D1',
                      },
                      label: {
                          show: false,
                          // position: 'top',
                          // distance: 10,
                          // color: '#fff'
                      },
                  },
                  {
                      data: [10, ],
                      type: 'bar',
                      barMaxWidth: 'auto',
                      barWidth: 30,
                      barGap: '-100%',
                      zlevel: -1,
                      itemStyle: {
                          color: '#174249',
                      },
                  },
              ],
          };
            myChart.setOption(option);

          }

        });


   // 使用刚指定的配置项和数据显示图表。

        // window.addEventListener("resize",function(){
        //     myChart.resize();
        // });
    }



