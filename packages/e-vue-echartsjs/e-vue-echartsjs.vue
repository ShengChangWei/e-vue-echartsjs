<template>
  <div style="width: 100%; height: 100%;" ref="echarts"></div>
</template>

<script>
import EVueEchartsService from "./e-vue-echarts.service";
/**
 * 第一步：实现点击出现
 * 第二步：出现在点击鼠标位置
 * 第三步：点击其他地方隐藏
 */
export default {
  name: "e-vue-echartsjs",
  props: {
    options: {},
    theme: "",
    initOpts: ""
  },
  data() {
    return {
      es: "",
      echartsIntance: ""
    };
  },
  created() {
    this.es = new EVueEchartsService();
    console.log(this.es);
  },
  mounted() {
    this.echartsIntance = this.es.init(
      this.$refs.echarts,
      this.theme,
      this.initOpts
    );
    this.initEvents();
    this.echartsIntance.setOption(this.options);
    this.$emit("ready", this);
  },

  destroyed() {
    this.es.dispose(this.$refs.echarts);
  },
  methods: {
    // 初始化事件
    initEvents() {
      this.echartsIntance.on("click", params => {
        this.$emit("chartClick", params);
      });
      this.echartsIntance.on("dblclick", params => {
        this.$emit("chartDblClick", params);
      });
      this.echartsIntance.on("mousedown", params => {
        this.$emit("chartMouseDown", params);
      });
      this.echartsIntance.on("mousemove", params => {
        this.$emit("chartMouseMove", params);
      });
      this.echartsIntance.on("mouseup", params => {
        this.$emit("chartMouseUp", params);
      });
      this.echartsIntance.on("mouseover", params => {
        this.$emit("chartMouseOver", params);
      });
      this.echartsIntance.on("mouseout", params => {
        this.$emit("chartMouseOut", params);
      });
      this.echartsIntance.on("dataZoom", params => {
        this.$emit("chartDataZoom", params);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.ctx-menu-container {
  position: fixed;
  padding: 0;
  top: 100%;
  left: 0;
  z-index: 1000;
  display: block;
  float: left;
  min-width: 160px;
  padding: 5px 0;
  margin: 2px 0 0;
  font-size: 0.9rem;
  color: #373a3c;
  text-align: left;
  list-style: none;
  background-color: #fff;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
  -moz-box-shadow: 0 0 5px #ccc;
  -webkit-box-shadow: 0 0 5px #ccc;
  box-shadow: 0 0 5px #ccc;
}
</style>

