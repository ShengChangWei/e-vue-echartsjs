# e-vue-echartsjs

基于 Vue + Javascript + Echarts 的 [echarts](http://echarts.baidu.com/index.html) 图表组件

## Usage

1. Install

	```shell
	npm install --save e-vue-echartsjs@latest
	```

2. main.js

	```javascript
    import EVueEchartsjs from 'e-vue-echartsjs';
    Vue.use(EVueEchartsjs)
	```

3. template

	```html
	<e-vue-echartsjs style="width: 600px; height: 400px;" :options="options" v-on:ready="onEChartsReady($event)"></e-vue-echartsjs>
	```

4. component

	```javascript
	options:{
        title: {
            text: '堆叠区域图'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: '邮件营销',
                type: 'line',
                stack: '总量',
                areaStyle: {normal: {}},
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: '联盟广告',
                type: 'line',
                stack: '总量',
                areaStyle: {normal: {}},
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: '视频广告',
                type: 'line',
                stack: '总量',
                areaStyle: {normal: {}},
                data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
                name: '直接访问',
                type: 'line',
                stack: '总量',
                areaStyle: {normal: {}},
                data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
                name: '搜索引擎',
                type: 'line',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'top'
                    }
                },
                areaStyle: {normal: {}},
                data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
        ]
    };
    
    onEChartsReady(evt) {
        console.log(evt);
    }
	```



### Prop

- `options`（`Object`） - options 与[echarts的配置属性](http://echarts.baidu.com/option.html)一致

- `theme`（`Object`） - 调用 [echarts.init](http://echarts.baidu.com/api.html#echarts.init) 方法传入的主题的配置对象，也可以是使用已经通过 echarts.registerTheme 注册的主题名称。可通过[echarts主题构建工具](http://echarts.baidu.com/theme-builder/)导出自定义主题的配置对象（JSON版）

- `initOpts`（`Object`） - 调用 [echarts.init](http://echarts.baidu.com/api.html#echarts.init) 方法传入的附加参数

### Outputs

- `ready` - 初始化完成的事件，$event为当前组件的实例

- `chartClick`: 点击事件。参数同 `click` 事件

- `chartDblClick`: 双击事件。参数同 `dblclick` 事件

- `chartMouseDown`: 鼠标按下事件。`mousedown` 事件

- `chartMouseUp`: 鼠标松开事件。参数同 `mouseup` 事件

- `chartMouseOver`: 鼠标移上事件。参数同 `mouseover` 事件

- `chartMouseOut`: 鼠标移开事件。参数同 `mouseout` 事件

- `chartDataZoom`: 数据区域缩放后的事件。参数同 `dataZoom` 事件

更多事件可查看：[http://echarts.baidu.com/api.html#events](http://echarts.baidu.com/api.html#events)

### Properties

- `echartsIntance` - echarts 实例


# License

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](/LICENSE)
