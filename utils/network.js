import { globalUrls } from "urls.js";

const network = {
  //电影获取列表
  getMovieList: function (params) {
    //request 异步的
    params.type = "movie";
    this.getItemList(params);
  },
  //电视剧获取列表
  getTVList: function (params) {
    params.type = "tv";
    this.getItemList(params);
  },
  //综艺获取列表
  getShowList: function (params) {
    params.type = "show";
    this.getItemList(params);
  },

  //获取item列表
  getItemList: function(params){
     var url = "";
     if(params.type === 'movie'){
       url = globalUrls.movieList;
     } else if(params.type === 'tv'){
       url = globalUrls.tvList;
     } else{
       url = globalUrls.showList;
     }
    var count = params.count ? params.count : 6;
    wx.request({
      url: url,
      data: {
        count: count
      },
      success: function (res) {
        //  console.log(res);
        var items = res.data.subject_collection_items;
        var itemsCount = items.length;
        var left = itemsCount%3;
        if(left === 2){
          items.push(null);
        }
        if (params && params.success) {
          params.success(items);
        }
      }
    });
  },

 //获取item详细列表
   getItemDetail: function(params){
      var type = params.type;
      var id = params.id;
      var url = "";
      if(type === 'movie'){
        url = globalUrls.movieDetail + id;
      } else if(type === 'tv'){
        url = globalUrls.tvDetail + id;
      } else{
        url = globalUrls.showDetail + id;
      }
      wx.request({
        url: url,
        success: function(res){
          var item = res.data;
          if(params.success){
              params.success(item);   //回调
              //console.log(item);
          }
        }
      });
   },

//获取标签列表
getItemTags: function(params){
    var type = params.type;
    var id = params.id;
    var url = "";
    if(type == "movie"){
      url = globalUrls.movieTags(id);
    } else if(type == 'tv'){
      url = globalUrls.tvTags(id);
    } else{
      url = globalUrls.showTags(id);
    }
    wx.request({
      url: url,
      success: function(res){
        //console.log(res);
        var tags = res.data.tags;
        if(params.success){
          params.success(tags);
        }
      }
    })
},
  
  //获取评论列表
  getItemComments: function(params){
    var type = params.type;
    var id = params.id;
    var start = params.start?params.start:0;
    var count = params.count?params.count:0;
    var url = "";
    if(type == 'movie'){
      url = globalUrls.movieComments(id, start, count);
    } else if (type == 'tv'){
      url = globalUrls.tvComments(id, start, count);
    } else {
      url = globalUrls.showComments(id, start, count);
    }
    wx.request({
      url: url,
      success: function(res){
        var data = res.data;
        if(params.success){
          params.success(data);
        }
      }
    })
  },
  
  //获取搜索列表
  getItemSearch: function(params){
     var q = params.q;
     var url = globalUrls.searchUrl(q);
     wx.request({
       url: url,
       success: function(res){
          var subjects = res.data.subjects;
          if(params.success){
             params.success(subjects);
          }
       }
     })
  }

}
export { network }