// components/starts/starts.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
     rate:{
       type: Number,
       value: 0,
       //observer监听作用
       observer(newVak=l, oldVal, changedPath){
        // 属性被改变时执行的函数（可选），通常 newVal 就是新设置的数据， oldVal 是旧数
        // 新版本基础库不推荐使用这个字段，而是使用 Component 构造器的 observer 字段代替（这样会有更强的功能和更好的性能）
         this.updateRate();
       }
     },
     starsize: {
       type: Number,
       value: 20  //rpx     
    },
    fontsize: {
      type: Number,
      value: 20   //rpx
    }, 
    fontcolor: {
      type: String,
      value: "#ccc"
    },
    istext:{
      type: Boolean,
      value: true
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    //更新评分
     updateRate: function(){
       var that = this;
       var rate = that.properties.rate;
       //  console.log("=====");
       //  console.log(rate);
       //  console.log("=====");
       var intRate = parseInt(rate);
       var light = parseInt(intRate / 2);
       var half = intRate % 2;
       var gray = 5 - light - half;
       var lights = [];
       var halfs = [];
       var grays = [];
       for (var index = 1; index <= light; index++) {
         lights.push(index);
       }
       for (var index = 1; index <= half; index++) {
         halfs.push(index);
       }
       for (var index = 1; index <= grays; index++) {
         grays.push(index);
       }
       var ratetext = rate && rate > 0 ? rate.toFixed(1) : "未评分"
       that.setData({
         lights: lights,
         halfs: halfs,
         grays: grays,
         ratetext: ratetext
       });
     }
  },
  
  //生命周期函数， 页面被加载，就会执行
   lifetimes: {
    attached: function(){
        this.updateRate();
    }
  }
})
