const globalUrls = {
  //电影url
  movieList: "https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items",
  //电视url
  tvList: "https://m.douban.com/rexxar/api/v2/subject_collection/tv_hot/items?",
  //综艺节目url
  showList: "https://m.douban.com/rexxar/api/v2/subject_collection/tv_variety_show/items?",
   
  // 电影详细url
  movieDetail: "https://m.douban.com/rexxar/api/v2/movie/",
  //电视剧详细url    
  tvDetail: "https://m.douban.com/rexxar/api/v2/tv/",
  //综艺节目详细url
  showDetail: "https://m.douban.com/rexxar/api/v2/tv/",

 //电影、电视剧、综艺节目标签url
  movieTags: function(id){
     return "https://m.douban.com/rexxar/api/v2/movie/" + id +
     "/tags?count=8"
   },
   tvTags: function(id){
     return "https://m.douban.com/rexxar/api/v2/tv/" + id + "/tags?count=8"
   },
   showTags: function(id){
      return this.tvTags(id);
   },

   //电影、电视剧、综艺节目url
   movieComments: function(id, start=0, count=3){
     return "https://m.douban.com/rexxar/api/v2/movie/" + id +
       "/interests?count=" + count + '&start=' + start;
   },
   tvComments: function(id, start=0, count=3){
     return "https://m.douban.com/rexxar/api/v2/tv/" + id +
       "/interests?count=" + count + '&start=' + start;
   },
   showComments: function(id,start=0, count=3){
     return this.tvComments(id, start, count);
   },
   //搜索url
   searchUrl: function(q){
     return "https://m.douban.com/rexxar/api/v2/search?type=movie&q=" + q
   }
}

export { globalUrls }