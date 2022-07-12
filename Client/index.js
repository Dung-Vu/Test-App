/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Welcome from './screens/Welcome'
import React from 'react';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => <Welcome/>);
