// pages/list/list.js
import {network} from "../../utils/network.js";

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var type = options.type;
    //保存type
    that.setData({
      type: type
    });
    var title = "";
    wx.showLoading({
      title: '正在加载中',
    })
    if(type === "movie"){
      //请求电影的数据
      network.getMovieList({
        success: function (items) {
          that.setData({
            items: items
          });
          wx.hideLoading();
        },
        count: 1000
      });
      title = "电影";
    } else if(type === "tv"){
      //请求电视剧的数据
      network.getTVList({
        success: function (items) {
          that.setData({
            items: items
          });
          wx.hideLoading();
        },
        count: 1000
      });
      title = "电视剧";
    } else {
      //请求综艺的数据
      network.getShowList({
        success: function (items) {
          that.setData({
            items: items
          });
          wx.hideLoading();
        },
        count: 1000
      });
      title = "综艺";
    }
    wx.setNavigationBarTitle({
      title: title,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  
})