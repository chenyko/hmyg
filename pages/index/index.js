//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    // 轮播图数组
    swiperList: [],

    //分类数组
    navs: [],
    // 楼层数组
    floorList: [],
  },
  onLoad() {
    wx.request({
      url: 'https://api.zbztb.cn/api/public/v1/home/swiperdata',
      success: (result) => {
        // console.log(result);
        this.setData({
          swiperList: result.data.message
        })
      }
    });

    wx.request({
      url: 'https://api.zbztb.cn/api/public/v1/home/catitems',
      success: (result) => {
        //  console.log(result);
        this.setData({
          navs: result.data.message
        })

      }
    });

    wx.request({
      url: 'https://api.zbztb.cn/api/public/v1/home/floordata',
      success: (result) => {
        // console.log(result.data.message);
        this.setData({
          floorList:result.data.message
        })
      }
    })
  }
})
