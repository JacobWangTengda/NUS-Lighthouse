import About from '@/components/about/about';
import Contact from '@/components/contact/contact';
import SearchBar from '@/components/search-bar/search-bar';
import IndustryExplorer from '@/components/industry-explorer/industry-explorer';
import Vue from 'vue';
import Router from 'vue-router';
import RecentPublications from '@/components/recent-publications/recent-publications';
import JobPostSearch from '@/components/job-post-search/job-post-search';
import Modal from '@/components/modal/modal';
import CurrentProjects from '@/components/current-projects/current-projects';
import PositionDetails from '@/components/position-details/position-details';


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: IndustryExplorer,
    },
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
    {
      path: '/jobPostSearch',
      name: 'jobPostSearch',
      component: JobPostSearch,
    },
    {
      path: '/searchBar',
      name: 'searchBar',
      component: SearchBar,
    },
    {
      path: '/positionDetails',
      name: 'positionDetails',
      component: PositionDetails,
    },
  ],
});
