/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import { Navigation } from 'react-native-navigation';
import {name as appName} from './app.json';

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.registerComponent('Home', () => App);
    Navigation.setRoot({
            root: {
                      stack: {
                                  children: [{
                                                component: {
                                                                name: "Home"
                                                              }
                                              }]
                                }
                    }
          });
});

