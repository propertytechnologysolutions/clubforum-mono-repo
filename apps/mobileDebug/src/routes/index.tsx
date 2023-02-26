import {HomeScreen} from '../Screens/Home';
import {NavigationTypeService} from '@core/types';

export const navigationRoutes: NavigationTypeService.INavigationRoutes = [
  {
    title: 'home',
    component: HomeScreen,
    name: 'HOME',
  },
];
