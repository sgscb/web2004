export default function({$axios,redirect,route,store}){
  //基本配置

  $axios.defaults.timeout=1000;//响应时间

  //请求拦截
  $axios.onRequest(config=>{
    console.log('请求拦截')

    config.headers.token='加token';

    return config;
  })

  // //响应拦截
  // $axios.onRequest(res=>{

  //   if(res.data.err === 2 && route.fullPath !== '/login')//判断返回结果
  //     redirect('/login?path='+route.fullPath)//当前所在的位置
      
  //     return res
  // })

  //错误处理
}