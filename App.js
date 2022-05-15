import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Add from './src/screen/add';
import List from './src/screen/list';
import listt from './src/screen/profile';
import Login from './src/screen/Login';
import Profile2 from './src/screen/Profile2';

const AuthStack = createStackNavigator(
  {
    Login: {
      screen: Login,
    },
    Add: {
      screen: Add,
    },
    List: {
      screen: List,
    },
    listt: {
      screen: listt,
    },
    Profile2: {
      screen: Profile2,
    },
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  },
);
const MainApp = createAppContainer(AuthStack);
class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRealApp: true,
    };
  }

  render() {
    if (this.state.showRealApp) {
      return <MainApp />;
    }
  }
}
export default Application;
