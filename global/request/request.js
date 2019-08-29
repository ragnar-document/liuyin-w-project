module.exports = {
  _get:function(url="",data={},config){
    console.log(url)
    return new Promise((resolve, reject) => {
      wx.request({
        url: url,
        data: data,
        method: 'GET',
        success: function (res) {
          if (res.statusCode == 200) {
            resolve(res); //返回成功提示信息
          } else {
            reject(res.data.message); //返回错误提示信息
          }
        },
        fail: function (res) {
          reject("网络连接错误"); //返回错误提示信息
        }
      })
    });
  }
}