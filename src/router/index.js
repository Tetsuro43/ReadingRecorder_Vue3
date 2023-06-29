import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
// import BookSearch from '../views/BookSearch.vue';
// import BookForm from '../views/BookForm.vue';

const routes = [
    /* トップページ */
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/AboutView.vue')
    },
    {
        path: '/article/:aid',
        name: 'Article',
        component: () => import('../views/Article.vue'),
        props: true,
        /* Number型に変換する場合 */
        // props: routes => ({
        //     aid: Number(routes.params.aid)
        // })
    },
    // /* GoogleBooksの検索フォーム */
    // {
    //     path: '/search',
    //     name: 'Search',
    //     component: BookSearch,
    // },
    // /* 書籍レビューのためのフォーム */
    // {
    //     path: '/form',
    //     name: 'Form',
    //     component: BookForm,
    // },
    /* 最終的な受け皿 */
    {
        path: '/:paths(.*)*',
        name: 'Fallback',
        redirect: '/',
    },
];

const router = createRouter({
    // history: createWebHistory(process.env.BASE_URL),
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes,
});

export default router;