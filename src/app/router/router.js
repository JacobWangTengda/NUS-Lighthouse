import About from '@/components/about/about';
import Contact from '@/components/contact/contact';
import Recommended from '@/components/recommended/recommended';
import Vue from 'vue';
import Router from 'vue-router';
import RecentPublications from '@/components/recent-publications';


Vue.use(Router);

export default new Router({
mode: 'history',
routes: [
{
path: '/about',
name: 'about',
component: About,
},
{
path: '/contact',
name: 'contact',
component: Contact,
},
{ path:'/',
name: 'home',
component: Recent_Publications,
}
],
});
