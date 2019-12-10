var postsData = require('../../data/posts-data.js');
Page({
  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 500,
    circular: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      postsContainer: postsData.postList
    });
  },
  onPostTap: function(event){
    let postid = event.currentTarget.dataset.postid;
    // wx.navigateTo({
    //   url: 'post-detail/post-detail',
    // })
  }
})