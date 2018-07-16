<!-- 层叠柱状图 -->
<template>
  <div id="myChart" :style="{width: '800px', height: '300px'}"></div>
</template>
<script>
export default {
  data() {
    return {
      chart: null,
      data: [
        1, 20, 30, 97, 23, 56, 23, 2, 7, 9, 3, 0, 42, 34, 12, 21, 81, 1, 20, 30, 37, 23, 56, 23, 32, 7, 9, 3, 0, 42, 34, 12, 21, 19, 1, 20, 30, 7, 23, 56, 23, 2, 7, 9, 3, 0, 42, 34, 12, 21, 11, 0, 20, 30, 27, 23, 56, 23, 2, 7, 9, 3, 0, 42, 34, 12, 21, 11, 1, 20, 30, 7, 23, 56, 23, 2, 7, 9, 3, 0, 42, 34, 12, 29, 11, 1, 20, 30, 7, 23, 56, 23, 2, 7, 9, 3, 0, 42, 34, 12, 21, 100, 10, 20, 0, 7, 23, 56, 23, 2, 7, 9, 3, 0, 42, 34, 12, 21, 11, 1, 20, 30, 47, 23, 56, 23, 2, 7, 9, 3, 0, 42, 34, 12, 21, 11, 14, 20, 30, 7, 23, 56, 23, 2, 7, 9, 3, 0, 42, 34, 12, 21, 11, 1, 20, 30, 7, 23, 56, 23, 27, 7, 9, 3, 0, 42, 34, 12, 21, 11, 1, 20, 30, 57, 23, 56, 23, 2, 7, 9, 3, 0, 42, 34, 12, 21, 11, 100, 20, 30, 7, 23, 56, 23, 2, 7, 9, 3, 0, 42, 34, 12, 21, 11, 1, 20, 30, 67, 23, 56, 23, 2, 7, 9, 3, 0, 42, 34, 12, 21, 11, 15, 0, 30, 87, 23, 56, 23, 2, 7, 9, 3, 0, 42, 34, 12, 21, 11, 100, 20, 30, 7, 23, 56, 23, 2, 7, 9, 3, 0, 42, 34, 12, 21, 11, 1, 20, 30, 7, 23, 56, 23, 2, 7, 9, 3, 0, 42, 4, 12, 21, 11
      ],
      option: {
        title: {
          x: 'center',
          y: 'top',
          backgroundColor: 'rgba(0,0,0,0)',
          text: '土壤水分(单位:%)',
          textStyle: {
            fontSize: 18,
            fontWeight: 'bolder',
            color: '#2ec7c9' // 主标题文字颜色
          },
          borderColor: '#ccc', // 标题边框颜色
          borderWidth: 0, // 标题边框线宽，单位px，默认为0（无边框）
          padding: 5, // 标题内边距，单位px，默认各方向内边距为5，
          itemGap: 10, // 主副标题纵向间隔，单位px，默认为10，
        },
        grid:{
          x:50,
          y:100
        },
        tooltip: { trigger: 'axis' },
        calculable: true,
        //图例--折线提示提示
        xAxis: {
          data: [],

        },
        yAxis: [{
          type: 'value',
        }],
        legend: {
          x: 'center',
          y: '30',
          borderColor: '#6699FF', //边框颜色
          textStyle: {
            color: '#000' // 图例文字颜色
          },
          data: ['0~10cm', '10~20cm', '20~30cm']
        },
        //右上角的工具箱
        toolbox: {
          x: '80%',
          y: 'top',
          show: true,
          feature: {
            mark: { show: true },
            //是否可以保存图片
            saveAsImage: { show: true },
            //dataView : '数据视图',
            dataView: { show: true },
          }
        },
         dataZoom: {
          show: true,
          realtime: true,
          //orient: 'vertical',   // 'horizontal'
          //x: 0,
          y: 60,
          //width: 400,
          height: 20,
          backgroundColor: 'rgba(238,238,238,0.5)',
          dataBackgroundColor: 'rgba(204,204,204,1)',
          fillerColor: 'rgba(0,204,205,0.6)',
           handleColor: 'rgba(128,43,16,0.8)',
          //xAxisIndex:[],
          //yAxisIndex:[],
          start: 40,
          end: 60,
          realtime:true,

        },
        series: [{
         
            type: 'bar',
            name: '水分',
            data: [],
            itemStyle: {
              normal: {
                barBorderColor:'#000',
                color: "#2ec7c9",
                lineStyle: {
                  width: 1,
                  color: "#2ec7c9"
                }
              },

            },
             markLine : {
                data : [
                    // {type : 'average', name : '平均值'},
                    {type : 'max'},
                    {type : 'min'}
                ]
            }
          }                  
        ]
      }
    }
  },
  // 注意： 这里echarts初始化应在钩子函数mounted()中，这个钩子函数是在el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用
  mounted() {
    // this.drawLine();
    this.initChart();
  },
  methods: {

    // 基于准备好的dom，初始化echarts实例
    // let myChart = this.$echarts.init(document.getElementById('myChart'))
    // 绘制图表

    initChart() {
      //x轴时间
      for (var i = 0, g = 5; i < 288; i++) {
        var time = (Math.floor(g / 60) + ":" + (g % 60));
        g += 5;
        this.option.xAxis.data.push(time);
      }
      //y轴数据点
      for (var i = 0; i < this.data.length; i++) {
        this.option.series[0].data.push(this.data[i]);
      }
     
      this.chart = this.$echarts.init(document.getElementById('myChart'));
      // 把配置和数据放这里
      this.chart.setOption(this.option);
    }
  },
}

</script>
