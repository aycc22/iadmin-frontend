import Main from '@/view/main'
import parentView from '@/components/parent-view'

export default [
  { path: '/login', name: 'login', meta: { title: 'Login - 登录', hideInMenu: true }, component: () => import('@/view/login/login.vue') },
  {path: '/',
    name: 'index',
    redirect: '/home',
    component: Main,
    meta: {
      hideInMenu: true,
      notCache: false
    },
    // 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在这里
    children: [
      { path: 'home', name: 'home', meta: { hideInMenu: true, notCache: true, title: '首页' }, component: () => import('@/view/single-page/home') },
      { path: 'order-info', name: 'order-info', meta: { hideInMenu: true, notCache: true, title: '用户详细信息' }, component: () => import('@/view/sys-manage/user-manage/user-manage-info.vue') }
    ]
  },
  {
    path: '/components',
    name: 'components',
    meta: {
      icon: 'social-buffer',
      title: '组件'
    },
    component: Main,
    children: [
      {
        path: 'count_to',
        name: 'count_to',
        meta: {
          icon: 'arrow-graph-up-right',
          title: '数字渐变'
        },
        component: () => import('@/view/components/count-to/count-to.vue')
      }
    ]
  },
  {
    path: '/multilevel',
    name: 'multilevel',
    meta: {
      icon: 'arrow-graph-up-right',
      title: '多级菜单'
    },
    component: Main,
    children: [
      {
        path: 'level_2_1',
        name: 'level_2_1',
        meta: {
          icon: 'arrow-graph-up-right',
          title: '二级-1'
        },
        component: () => import('@/view/multilevel/level-1.vue')
      },
      {
        path: 'level_2_2',
        name: 'level_2_2',
        meta: {
          access: ['super_admin'],
          icon: 'arrow-graph-up-right',
          title: '二级-2'
        },
        component: parentView,
        children: [
          {
            path: 'level_2_2_1',
            name: 'level_2_2_1',
            meta: {
              icon: 'arrow-graph-up-right',
              title: '三级'
            },
            component: () => import('@/view/multilevel/level-2/level-2-1.vue')
          }
        ]
      },
      {
        path: 'level_2_3',
        name: 'level_2_3',
        meta: {
          icon: 'arrow-graph-up-right',
          title: '二级-3'
        },
        component: parentView,
        children: [
          {
            path: 'level_2_3_1',
            name: 'level_2_3_1',
            meta: {
              access: ['super_admin'],
              icon: 'arrow-graph-up-right',
              title: '三级-1'
            },
            component: () => import('@/view/multilevel/level-2/level-2-1.vue')
          },
          {
            path: 'level_2_3_2',
            name: 'level_2_3_2',
            meta: {
              access: ['super_admin', 'admin'],
              icon: 'arrow-graph-up-right',
              title: '三级-2'
            },
            component: () => import('@/view/multilevel/level-2/level-2-1.vue')
          }
        ]
      }
    ]
  },
  {
    path: '/sys-manage',
    name: 'sys-manage',
    meta: {
      icon: 'ios-gear',
      title: '系统管理'
    },
    component: Main,
    children: [
      {
        path: 'user-manage',
        name: 'user-manage',
        meta: {
          icon: 'arrow-graph-up-right',
          title: '用户管理'
        },
        component: () => import('@/view/sys-manage/user-manage/user-manage.vue')
      }
    ]
  },
  {
    path: '/401',
    name: 'error_401',
    component: () => import('@/view/error-page/401.vue')
  },
  {
    path: '/500',
    name: 'error_500',
    component: () => import('@/view/error-page/500.vue')
  },
  {
    path: '*',
    name: 'error_404',
    component: () => import('@/view/error-page/404.vue')
  }
]
