import {network} from "../../utils/network.js";

Page({

  /**
   * 页面的初始数据
   */
  data: {
     swiperCurrent: 0,
     indicatorDots: true,
     autoplay: true,
     interval: 3000,
     duration: 800,
     circular: true,
     swiperimg: [
       'https://img1.doubanio.com/view/photo/m/public/p2541901817.webp',
       'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2541280047.webp',
       'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2542216607.webp',
       'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2544988187.webp',
       'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2538826177.webp'
     ],
     links: [
      
     ]
  },

  //轮播图的切换时间
  swiperChange: function(e){
      this.setData({
          swiperCurrent: e.detail.current
      });
  },
  //点击指示点切换
   DotsEvent: function(e){
     this.setData({
        swiperCurrent: e.currentTarget.id
     }) 
   },
   //**点击图片触发时间
    swiperClick: function(e){
       console.log(this.data.swiperCurrent);
       wx.switchTab({
          // url: this.data.links[this.data.swiperCurrent]
         url: '/pages/search/search'
       });
    },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var that = this;
      var type = options.type;
      var id = options.id;
      //电影
      network.getMovieList({
            success: function(movies){
                that.setData({
                  movies: movies
              }) 
          }
      });
    //电视剧
    network.getTVList({
      success: function (tvs) {
        that.setData({
            tvs: tvs
        })
      }
    });

  }
})