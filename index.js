/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import './src/config/StatusBarConfig'; //importando a classe de configuração da barra do header 

AppRegistry.registerComponent(appName, () => App);
