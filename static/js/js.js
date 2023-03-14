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
 //设置总的定时器，0.5秒调用一下后端
 $(function () {
   connect_state();
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
   voltage();
   current();
   level();
   echarts_connect_time();
   log_util();
   time_left();
   // connect_GPS();
   var timer1 = setInterval(function() {
        connect_state();
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
        voltage();
        current();
        level();
        echarts_connect_time();
        log_util();
        time_left();
    }, 500);
   // var timer2 = setInterval(function() {
   //      connect_GPS();
   //  }, 10000);
 });

/**
 * 下面有14个图表，对应仪表盘，曲线等
 */
function echarts_1() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart1'));
        $.ajax({
          type: "GET",
          url:"velocity/xvelocity", //后端请求
          dataType: "json",
           success: function (res) {
            xdata = res['xvelocity']
             $('#xvelocity').text(res['xvelocity'])
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
          url:"attitude/yaw", //后端请求
          dataType: "json",
           success: function (res) {
             xdata = res['yaw']
             $('#yaw').text(xdata)
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
            $('#yvelocity').text(res['yvelocity'])
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
          url: "attitude/roll", //后端请求
          dataType: "json",
          success: function (res) {
            ydata = res['roll'];
            $('#roll').text(res['roll'])
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
    $('#zvelocity').text(res['zvelocity'])
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
          url: "attitude/pitch", //后端请求
          dataType: "json",
          success: function (res) {
            zdata = res['pitch'];
            $('#pitch').text(res['pitch'])
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
            $('#allSpeed').text(res['allSpeed'])
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
      $('#heading').text(res['heading'])
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
            $('#airspeed').text(res['airspeed'])
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
            $('#groundspeed').text(res['groundspeed'])
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
        $.ajax({
          type: "GET",
          url: "line/gyro_line", //后端请求
          dataType: "json",
          success: function (res) {
            gyro_line = res['gyro_line']
        option = {
          //  backgroundColor: '#00265f',
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                data: ['gx', 'gy', 'gz'],
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
                    data: ['10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00', '24:00', '26:00', '28:00'],
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
                name: 'gx',
                type: 'line',
         smooth: true,
                data: gyro_line[0],
                itemStyle: {
                    normal: {
                        color:'#2f89cf',
                        opacity: 1,

                        barBorderRadius: 5,
                    }
                }
            }, {
                name: 'gy',
                type: 'line',
                 smooth: true,
                data: gyro_line[1],
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
                name: 'gz',
                type: 'line',
                 smooth: true,
                data: gyro_line[2],
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
        myChart.setOption(option);
          }
        });
    }

function echarts_12() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart12'));
        $.ajax({
          type: "GET",
          url: "line/accel_line", //后端请求
          dataType: "json",
          success: function (res) {
            accel_line = res['accel_line']
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
                    data: ['10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00', '24:00', '26:00', '28:00'],
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
                data: accel_line[0],
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
                data: accel_line[1],
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
                data: accel_line[2],
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
          }
        });
    }

function echarts_13() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart13'));
        $.ajax({
          type: "GET",
          url: "line/shake_amplitude", //后端请求
          dataType: "json",
          success: function (res) {
            shake_amplitude = res['shake_amplitude']
            var flag = 0;
            for(var i = 0;i<shake_amplitude.length;i++){
              if(shake_amplitude[i]>100){
                flag = 1;
              }
            }
            if(flag===1){
              shake_change_color();
              $('#shake_state').text("警告：机身失稳");
            }else {
              shake_clear();
              $('#shake_state').text("");
            }

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
              data: ["1", "2", "3", "4", "5", "6","7", "8", "9", "10"],
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
              data: shake_amplitude,
            },

          ],
        };


        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
          }
        });
    }

    function echarts_connect_time() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echarts_connect_time'));
        $.ajax({
          type: "GET",
          url: "state/time", //后端请求
          dataType: "json",
          success: function (res) {
            time_list = res['time']
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
            data: ["连接情况"],
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
              data: ["1", "2", "3", "4", "5", "6","7", "8"],
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
              data: time_list,
            },

          ],
        };


        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
          }
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
    }

/**
 * 设置电压值
 */
function voltage() {
  $.ajax({
    type: "GET",
    url: "battery/voltage", //后端请求
    dataType: "json",
    success: function (res) {
      var voltage = res['voltage']
      $('#voltage').text("电池电压: "+voltage);
      if(voltage<9){
        $('#battery_state').text("警告： 电池电量过低");
      }else{
        $('#battery_state').text("");
      }

    }
  });
}

function current() {
  $.ajax({
    type: "GET",
    url: "battery/current", //后端请求
    dataType: "json",
    success: function (res) {
      var current = res['current'];
      $('#current').text("电流大小: " + current);
      if(current>6){
        $('#battery_state').text("警告： 电流过大");
      }else{
        $('#battery_state').text("");
      }
    }
  });
}

function level() {
  $.ajax({
    type: "GET",
    url: "battery/level", //后端请求
    dataType: "json",
    success: function (res) {
      var level = res['level'];
      $('#level').text("剩余电量: " + level);
      //电池的图像，应该显示的百分比
      var battery_chart = document.getElementById("battery_level");
      battery_chart.style.setProperty('width',level + '%');
      if(level<20){
        $('#battery_state').text("警告： 电量过低");
      }else{
        $('#battery_state').text("");
      }
    }
  });
}

function time_left() {
  $.ajax({
    type: "GET",
    url: "battery/time_left", //后端请求
    dataType: "json",
    success: function (res) {
      var time_str = res['time_str'];
      $('#time_left').text("续航: " + time_str);
      //电池的图像，应该显示的百分比
    }
  });
}

/**
 * 机身平稳性处的报警情况
 * @type {number}
 */
var color_flag = 0;
function shake_change_color() {
  var battery_chart = document.getElementById("echart13");
  var h4_shake = document.getElementById("h4_shake");
  if(color_flag===0){
    battery_chart.style.background = "";
    h4_shake.style.background = "";
    color_flag = 1;
  }else{
     battery_chart.style.background = "red";
     h4_shake.style.background = "red";
     color_flag = 0;
  }

}

function shake_clear() {
  var battery_chart = document.getElementById("echart13");
  var h4_shake = document.getElementById("h4_shake");
  battery_chart.style.background = "";
  h4_shake.style.background = "";
}

/**
 * 连接情况的报警信息处理
 */
var connect_state_flag = 1;
var warning = 0;
function connect_state() {
  var connect_state = document.getElementById("connect_state");
  var echarts_connect_time = document.getElementById("echarts_connect_time");
  $.ajax({
    type: "GET",
    url: "state/ping", //后端请求
    dataType: "json",
    success: function (res) {
      if(res['state']){
        $('#connect_state').text("连接成功");
        warning = 0;
      }else {
        $('#connect_state').text("错误：连接断开");
        warning = 1;
      }
    }
  });

  if(warning===0){
      $.ajax({
        type: "GET",
        url: "state/time", //后端请求
        dataType: "json",
        success: function (res) {
          if(res['time'][0]>2&&res['time'][0]<5){
            $('#connect_state').text("警告：连接延迟严重");
            warning = 1;
          }
        }
      });
  }
  //修改底色，制造出闪烁的效果
  if(warning===1){
      if(connect_state_flag===0){
        connect_state.style.background = "";
        echarts_connect_time.style.background = "";
        connect_state_flag = 1;
      }else{
         connect_state.style.background = "red";
         echarts_connect_time.style.background = "red";
         connect_state_flag = 0;
      }
  }else {
    connect_state.style.background = "";
    echarts_connect_time.style.background = "";
  }

}

function log_util(){
    $.ajax({
    type: "GET",
    url: "log/log", //后端请求
    dataType: "json",
    success: function (res) {
      let log_list = res['log'];
      //这一句非常重要，删除原有的，更新日志输出窗口，达到刷新的效果。
      $("#log_win").html("");
      $.each(log_list,function(i,item){
        // 将后端的数据按照$先分割，获取时间、级别和日志详情
        var arr = item.split("$");
        var msg = arr[0];
        var level = arr[1];
        var msg_time = arr[2];

        var html = '<li><p>';
        html += msg_time;
        switch(level){
          case "info":
            html += "<a class=\"text-green\" href=\"#\" data-toggle=\"modal\" data-target=\"#myModal-add\">";
            break;
          case "warning":
            html += "<a class=\"text-yellow\" href=\"#\" data-toggle=\"modal\" data-target=\"#myModal-add\">";
            break;
          case "error":
            html += "<a class=\"text-red\" href=\"#\" data-toggle=\"modal\" data-target=\"#myModal-add\">";
            break;
        }
        html += msg;
        html +="</a></p></li>";
        $('#log_win').append(html);
      });
    }
  });
}

// function connect_GPS() {
//         $.ajax({
//         type: "GET",
//         url: "GPS/gps", //后端请求
//         dataType: "json",
//         success: function (res) {
//             lon = res['lon'];
//             lat = res['lat'];
//              var map = new BMapGL.Map('container'); // 创建Map实例
//              map.centerAndZoom(new BMapGL.Point(lon, lat), 18); // 初始化地图,设置中心点坐标和地图级别
//              map.enableScrollWheelZoom(true); // 开启鼠标滚轮缩放
//
//         }
//       });
// }

