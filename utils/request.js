function axios({url,...params}) {
    const baceURL="https://api.zbztb.cn/api/public/v1/";
    return new Promise((resolve, reject)=>{
        wx.request({
            url: baceURL+url,
            ...params,
            success: (result) => {
                resolve(result)
            }
        });
          
    })
}

export default axios