// pages/ranking/ranking.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    group: [
      {
        src: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2551353482.webp",
        show: false,
        def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif"
      },
      {
        src: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2551249211.webp",
        show: false,
        def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif"
      },
      {
        src: "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2551995207.webp",
        show: false,
        def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif"
      },
      {
        src: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2552522615.webp",
        show: false,
        def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif"
      },
      {
        src: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2542973862.jpg",
        show: false,
        def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif"
      },
      {
        src: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2542867516.jpg",
        show: false,
        def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif"
      },
      {
        src: "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2541280047.jpg",
        show: false,
        def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif"
      },
      {
        src: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2530599636.jpg",
        show: false,
        def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif"
      },
      {
        src: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2539661066.jpg",
        show: false,
        def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif"
      },
      {
        src: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2537158013.jpg",
        show: false,
        def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif"
      },
      {
        src: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2544987866.jpg",
        show: false,
        def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif"
      },
      {
        src: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2535260806.jpg",
        show: false,
        def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif"
      },
    ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     var that = this;
     let group = this.data.group;     //获取原数据
     for(let i in group){
        //设置监听回调原事件
      wx.createIntersectionObserver().relativeToViewport({ bottom: 20 }).observe('.loadImg' + i, (ret) => {
        if(ret.intersectionRatio > 0) {
             group[i].show = true
          }
            this.setData({ // 更新数据
              group
            });
        });
    }
   },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
   

})