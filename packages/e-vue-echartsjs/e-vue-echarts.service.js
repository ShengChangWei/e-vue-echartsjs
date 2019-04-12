import * as echarts from 'echarts'

export default class EVueEchartsService {
    constructor() { }
    /**
 * 获取全局 echarts 对象
 */
    get echarts() {
        return echarts;
    }

    /**
         * 包装 echarts.graphic
         */
    get graphic() {
        return this._checkEcharts() ? echarts.graphic : undefined;
    }

	/**
	 * 包装 echarts.init
	 */
    get init() {
        return this._checkEcharts() ? echarts.init : undefined;
    }

	/**
	 * 包装 echarts.connect
	 */
    get connect() {
        return this._checkEcharts() ? echarts.connect : undefined;
    }

	/**
	 * 包装 echarts.disconnect
	 */
    get disconnect() {
        return this._checkEcharts() ? echarts.disconnect : undefined;
    }

	/**
	 * 包装 echarts.dispose
	 */
    get dispose() {
        return this._checkEcharts() ? echarts.dispose : undefined;
    }

	/**
	 * 包装 echarts.getInstanceByDom
	 */
    get getInstanceByDom() {
        return this._checkEcharts() ? echarts.getInstanceByDom : undefined;
    }

	/**
	 * 包装 echarts.registerMap
	 */
    get registerMap() {
        return this._checkEcharts() ? echarts.registerMap : undefined;
    }

	/**
	 * 包装 echarts.getMap
	 */
    get getMap() {
        return this._checkEcharts() ? echarts.getMap : undefined;
    }

	/**
	 * 包装 echarts.registerTheme
	 */
    get registerTheme() {
        return this._checkEcharts() ? echarts.registerTheme : undefined;
    }


    // 判断echart是否加载完成
    _checkEcharts() {
        if (echarts) {
            return true;
        } else {
            console.error('echarts加载未成功')
            return false;
        }
    }

}