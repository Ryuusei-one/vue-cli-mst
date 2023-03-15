export default[
    {
        path:"/index",
        name:"Index",
        meta:{
            title:'MaSteelTools'
        },
        component:() => import('@/views/Index')
    },
    {
        path:"/add",
        component:() => import("@/views/Add")
      },
      {
        path:"/modify",
        component:() => import("@/views/Modify")
      },

]