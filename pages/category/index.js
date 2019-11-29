import request from '../../utils/request';
// 引入一个假数据
// import mockData from './mock'
Page({

  data: {
    // 左侧标题数据
    leftMenus: [],

    // 右侧内容数据
    rightGoods: [],
    currentIndex: 0,
  },

  // 全局的数据
  Cates: [],
  onLoad() {
    //  获取数据
    request({ url: 'categories' }).then(res => {
      console.log(res);
      this.Cates = res.data.message;
      // console.log(this.Cates[0].children);
      // console.log(this.Cates);

      // 给左侧菜单栏赋值
      this.setData({
        leftMenus: this.Cates.map(v => v.cat_name),
        // 给右侧的内容安排第一次渲染
        rightGoods: this.Cates[this.data.currentIndex].children

      })



    })
  },

  // 左侧菜单点击事件
  handleMenuTap(e) {
    // console.log(e);
    const currentIndex = e.currentTarget.dataset.index;
    this.setData({
      currentIndex,
      rightGoods: this.Cates[currentIndex].children
    })
  }

})