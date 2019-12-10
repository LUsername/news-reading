var postsData = require('../../../data/posts-data.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    collected:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var postId = options.id;
    this.data.currentPostId = postId;
    var postData = postsData.postList[postId];
    this.setData({...postData});
    // var postsCollected={
    //   0:true,
    //   1:false,
    //   2:true,
    //   ...
    // }
    var postsCollected = wx.getStorageSync('postsCollected');
    if (postsCollected){
      if (postsCollected[postId]){
        this.setData({ collected: postsCollected[postId] });
      }else{
        postsCollected[postId] = false;
        wx.setStorageSync('postsCollected', postsCollected);
      }
    }else{
      postsCollected = {};
      postsCollected[postId] = false;
      wx.setStorageSync('postsCollected', postsCollected);
    }
    
  },

  onCollectionTap:function(){
    var postsCollected = wx.getStorageSync('postsCollected');
    var collected = postsCollected[this.data.currentPostId];
    collected = !collected;
    postsCollected[this.data.currentPostId] = collected;
    wx.setStorageSync('postsCollected', postsCollected);
    this.setData({ collected});
    wx.showToast({
      title: collected?'收藏成功':'取消成功',
      duration:1000
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})