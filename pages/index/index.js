//index.js
//获取应用实例
import request from '../../utils/request.js'
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

    // 轮播图数据
  
    request({ url:'home/swiperdata' }).then(result=>{
      this.setData({
            swiperList: result.data.message
            })
    })

    // 导航数据

    request({ url:'home/catitems' }).then(result=>{
      this.setData({
              navs: result.data.message
            })
    })

    // 楼层数据
    
    request({ url:'home/floordata' }).then(result=>{
      this.setData({
            floorList:result.data.message
            })
    })
  }
})
