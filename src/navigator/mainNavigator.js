import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList103784Navigator from '../features/ArticleList103784/navigator';
import ArticleList103783Navigator from '../features/ArticleList103783/navigator';
import ArticleList103782Navigator from '../features/ArticleList103782/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList103784: { screen: ArticleList103784Navigator },
ArticleList103783: { screen: ArticleList103783Navigator },
ArticleList103782: { screen: ArticleList103782Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
