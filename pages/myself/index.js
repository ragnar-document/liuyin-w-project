// pages/myself/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loginModel:true,
    userKey:'',
    userInfo:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    let userPhone = e.detail.value.input;
    let test = (/^1[3456789]\d{9}$/.test(userPhone));
    if(!userPhone || !test){
      wx.showToast({
        title: '请输入正确手机号码',
        icon:'none',
        duration: 2000
      })
      return
    }
    var _this = this; 
    wx.login({
      success (res) {
        console.log(res)
        if (res.code) {
          //发起网络请求
          wx.request({
            url: "http://localhost:4000/api/user",
            data: {
              code: res.code,
              userPhone: userPhone
            },
            success:(res)=> {
              if (res.data.code == 0) {
                wx.showToast({
                  title: '用户没有报班,请联系：xxx登记后使用',
                  icon: 'none',
                  duration: 1000
                })
              } else if (res.data.code == 200) {
                wx.showToast({
                  title: '成功登陆',
                  icon: 'none',
                  duration: 1000
                })
                wx.setStorage({
                  key: "token",
                  data: res.data.token
                })
                console.log(res)
                _this.setData({
                  loginModel:false,
                  userKey:true
                })
              }
            }
          })

        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  },
  onGotUserInfo: function (e) {
    console.log(this.data.loginModel)
    if (this.data.loginModel){
      console.log(e.detail.userInfo)
      this.setData({
        userInfo: e.detail.userInfo
      })
      return
    }
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