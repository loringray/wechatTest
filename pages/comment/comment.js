// pages/comment/comment.js
import {network} from "../../utils/network.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    total: 0,
    start: 1,
    count: 20
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     var that = this;
     that.setData(options);
     that.getComments(1);
  },   

  getComments: function(start){
    var that = this;
    var type = that.data.type;
    var id = that.data.id;
    if(start > that.data.start){
       that.setData({
         nextloading: true
       });
    } else{
      that.setData({
         preloading: true
      });
    }
    network.getItemComments({
      type: type,
      id: id,
      start: start,
      count: 20,
      success: function (data) {
        //console.log(data);
        var total = data.total;
        var comments = data.interests;
        that.setData({
          total: total,
          comments: comments,
          start: start,
          preloading: false,
          nextloading: false
        });
        wx:wx.pageScrollTo({
          scrollTop: 0
        })
      }
    })
  },

  onItemTapEvent: function (event) {
    //返回上一页,返回到评分主页
    wx.navigateBack({
    });
  },

  onPrePageTap: function(event){
     var that = this;
     var oldstart = that.data.start;
     var count = that.data.count;
    if (oldstart - count> 0){
      var start = oldstart - that.data.count;
      that.getComments(start);
    } 

  },

  onNextPageTap: function(event){
     var that = this;
     var oldstart = that.data.start;
     var start = oldstart + that.data.count;
     that.getComments(start);
     
  }
   
})