import Vue from 'vue';
import Router from 'vue-router';
import demoRouter from './demo';
Vue.use(Router);

let routerConfig = {
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'main',
            component: resolve => require(['@/views/main/index.vue'], resolve),
            children: [
                {
                    path: '/',
                    name: 'mian-default',
                    component: resolve => require(['@/views/workbench/WorkContent.vue'], resolve),
                    meta: {
                        title: '工作台'
                    }
                },
                {
                    path: 'index',
                    name: 'mian-index',
                    redirect: {name: 'mian-default'},
                    meta: {
                        title: '工作台'
                    }
                },
                {
                    path: 'netsource',
                    name: 'netsource',
                    component: resolve => require(['@/views/netsource/index.vue'], resolve),
                    meta: {
                        title: '网络资源管理'
                    },
                    children: [
                        {
                            path: '/deviceInfo',
                            name: 'device-info',
                            component: resolve => require(['@/views/netsource/device/DeviceInfo.vue'], resolve),
                            meta: {
                                title: '设备信息'
                            }
                        },
                        {
                            path: '/edit',
                            name: 'edit',
                            component: resolve => require(['@/views/netsource/device/Edit.vue'], resolve),
                            meta: {
                                title: '新增/编辑'
                            }
                        },
                        {
                            path: '/lineSource',
                            name: 'line-source',
                            component: resolve => require(['@/views/netsource/line/LineSource.vue'], resolve),
                            meta: {
                                title: '线路资源'
                            }
                        }
                    ]
                },
                {
                    path: 'transfertopo',
                    name: 'transfer-topo',
                    component: resolve => require(['@/views/transfertopo/TransferTopo.vue'], resolve),
                    meta: {
                        title: '传输拓扑图'
                    }
                },
                {
                    path: 'class',
                    name: 'class',
                    component: resolve => require(['@/views/demo/layout/Class.vue'], resolve),
                    meta: {
                        title: '公共类'
                    }
                },
                {
                    path: 'layout',
                    name: 'layout',
                    component: resolve => require(['@/views/demo/layout/layout.vue'], resolve),
                    meta: {
                        title: '常用布局'
                    }
                },
                {
                    path: 'function',
                    name: 'function',
                    component: resolve => require(['@/views/demo/function/index.vue'], resolve),
                    meta: {
                        title: '方法说明'
                    }
                },
                {
                    path: 'function/copy',
                    name: 'function-copy',
                    component: resolve => require(['@/views/demo/function/CopyObj.vue'], resolve),
                    meta: {
                        title: '对象拷贝'
                    }
                },
                {
                    path: 'function/http',
                    name: 'function-http',
                    component: resolve => require(['@/views/demo/function/Http.vue'], resolve),
                    meta: {
                        title: '数据交互'
                    }
                },
                {
                    path: 'function/localStorage',
                    name: 'function-localStorage',
                    component: resolve => require(['@/views/demo/function/LocalStorage.vue'], resolve),
                    meta: {
                        title: '本地存储'
                    }
                },
                {
                    path: 'function/toast',
                    name: 'function-toast',
                    component: resolve => require(['@/views/demo/function/Toast.vue'], resolve),
                    meta: {
                        title: '弹条提示'
                    }
                },
                {
                    path: 'function/unique',
                    name: 'function-unique',
                    component: resolve => require(['@/views/demo/function/UniqueArray.vue'], resolve),
                    meta: {
                        title: '数组去重'
                    }
                },
                {
                    path: 'function/upload',
                    name: 'function-upload',
                    component: resolve => require(['@/views/demo/function/Upload.vue'], resolve),
                    meta: {
                        title: '文件上传'
                    }
                },
                {
                    path: 'function/echart',
                    name: 'function-echart',
                    component: resolve => require(['@/views/demo/function/Echart.vue'], resolve),
                    meta: {
                        title: 'echart图表'
                    }
                },
                {
                    path: 'function/moment',
                    name: 'function-moment',
                    component: resolve => require(['@/views/demo/function/Moment.vue'], resolve),
                    meta: {
                        title: '格式化日期'
                    }
                },

                {
                    path: 'line',
                    name: 'line',
                    component: resolve => require(['@/views/demo/component/charts/line.vue'], resolve),
                    meta: {
                        title: '折线图'
                    }
                },
                {
                    path: '403',
                    name: 'page403',
                    component: resolve => require(['@/views/error/403.vue'], resolve),
                    meta: {
                        title: '拒绝访问'
                    }
                },
                {
                    path: '*',
                    name: 'page404',
                    component: resolve => require(['@/views/error/404.vue'], resolve),
                    meta: {
                        title: '页面不存在'
                    }
                }
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: resolve => require(['@/views/login/index.vue'], resolve),
            meta: {
                title: '登录'
            }
        },
        {
            path: '*',
            name: 'page404',
            component: resolve => require(['@/views/error/404.vue'], resolve)
        }
    ],
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return {
                x: 0,
                y: 0
            };
        }
    }
};

// 合并demo路由
let temp = routerConfig.routes[0].children.concat(demoRouter);
routerConfig.routes[0].children = temp;
console.log(routerConfig);
// let allRouterConfig = routerConfig.routes[0].children.concat(demoRouter);

const router = new Router(routerConfig);

router.beforeEach((to, from, next) => {
    // if (!to.query.r && to.path !== '/') {
    //     next({
    //         path: to.fullPath,
    //         query: {
    //             r: Math.random()
    //         }
    //     });
    // } else {
    //     next();
    // }
    next();
});

export default router;
