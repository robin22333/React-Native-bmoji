'use strict'

/*
* 模拟网络请求
*/

let getUser = () => {
  return {
    openid: 'o4fndsfdsgklasdfjdjfs',
    nickname: '羅賓',
    sex: 1,
    city: '厦门',
    province: '福建',
    headImgUrl: 'https://avatars0.githubusercontent.com/u/15028001?v=3&s=460'
  }
}

let fetchAgreeWithPage = (type, pageNow=0, pageSize=5) => {
  return [{
    nickname: '羅賓',
    headImgUrl: 'https://avatars0.githubusercontent.com/u/15028001?v=3&s=460',
    goal: '每天俯卧撑100下',
    deposit: 10,
    evolveMsg:'今日打卡',
    evolveImgUrl: 'http://7xnzgi.com1.z0.glb.clouddn.com/blog.jpg?imageView2/2/w/203/h/203&e=1455676733&token=zISwYfTQwQsJpFZp2MPs-xRqsOJbWBqjevMvmjZ-:EvB9V5FIxVn98uxpnCVLOHZ6_uk',
    evolveDay: 18,
    allDay:30
  },{
    nickname: '毛毛',
    headImgUrl: 'https://avatars0.githubusercontent.com/u/15028001?v=3&s=460',
    goal: '用文字记录每天生活感想',
    deposit: 20,
    evolveMsg:'庆祝！！！',
    evolveImgUrl: 'http://7xnzgi.com1.z0.glb.clouddn.com/blog.jpg?imageView2/2/w/203/h/203&e=1455676733&token=zISwYfTQwQsJpFZp2MPs-xRqsOJbWBqjevMvmjZ-:EvB9V5FIxVn98uxpnCVLOHZ6_uk',
    evolveDay: 15,
    allDay:21
  },{
    nickname: 'Mirror',
    headImgUrl: 'https://avatars0.githubusercontent.com/u/15028001?v=3&s=460',
    goal: '每天睡前跑步',
    deposit: 10,
    evolveMsg:'ok',
    evolveImgUrl: 'http://7xnzgi.com1.z0.glb.clouddn.com/blog.jpg?imageView2/2/w/203/h/203&e=1455676733&token=zISwYfTQwQsJpFZp2MPs-xRqsOJbWBqjevMvmjZ-:EvB9V5FIxVn98uxpnCVLOHZ6_uk',
    evolveDay: 21,
    allDay:21
  },{
    nickname: 'bobo',
    headImgUrl: 'https://avatars0.githubusercontent.com/u/15028001?v=3&s=460',
    goal: '每天10点前睡觉',
    deposit: 50,
    evolveMsg:'好累',
    evolveImgUrl: 'http://7xnzgi.com1.z0.glb.clouddn.com/blog.jpg?imageView2/2/w/203/h/203&e=1455676733&token=zISwYfTQwQsJpFZp2MPs-xRqsOJbWBqjevMvmjZ-:EvB9V5FIxVn98uxpnCVLOHZ6_uk',
    evolveDay: 5,
    allDay:21
  },{
    nickname: 'daniela',
    headImgUrl: 'https://avatars0.githubusercontent.com/u/15028001?v=3&s=460',
    goal: '摄影计划',
    deposit: 10,
    evolveMsg:'哈哈哈哈哈',
    evolveImgUrl: 'http://7xnzgi.com1.z0.glb.clouddn.com/blog.jpg?imageView2/2/w/203/h/203&e=1455676733&token=zISwYfTQwQsJpFZp2MPs-xRqsOJbWBqjevMvmjZ-:EvB9V5FIxVn98uxpnCVLOHZ6_uk',
    evolveDay: 6,
    allDay:30
  }];
}

export {getUser, fetchAgreeWithPage};
