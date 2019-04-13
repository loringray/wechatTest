// pages/search/search.js
import {network} from "../../utils/network.js"

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
     wx.getStorage({
       key: 'searched',
       success: function(res) {
          var data = res.data;
          that.setData({
             histories: data
          });
       },
     })
  },

  onSearchInputEvent: function(event){
     // console.log(event);
     var that = this;
     var value = event.detail.value;
     if(!value || value === ""){
       that.setData({
          subjects: null
       });
       return;
     }
     network.getItemSearch({
        q: value,
        success: function(subjects){
            that.setData({
               subjects: subjects
            })
            //console.log(subjects);
        }
     })
  },

  onItemTapEvent: function(event){
     //console.log(event);
     var that = this;
     var id = event.currentTarget.dataset.id;
     var title = event.currentTarget.dataset.title;
     var histories = that.data.histories;
     var flag = false;  //默认数据不存在
    //  if(histories){
    //    for (var i = 0; i <= histories.length; i++) {
    //      var movie = histories[i];
    //      if (movie.id === id) {
    //        flag = true;
    //        break;
    //      }
    //    }
    //  }
     if(!flag){
       //判断
      if(!histories){
         histories = []; 
      } 
      histories.push({ title: title, id: id });
       wx.setStorage({
         key: 'searched',
         data: histories,
         success: function (res) {
           //console.log("保存成功~");
         }
       })
     }
   
     wx.navigateTo({
       url: "/pages/detail/detail?type=movie&id=" +id
     });
  },

//清除事件
  onClearEvent: function(event){
      wx.removeStorage({
        key: 'searched',
        success: function(res) {
          console.log("删除成功");
        },
      });
      this.setData({
        histories: null
      });
  }
})