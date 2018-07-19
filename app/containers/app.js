import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/Ionicons';
import IndexContainer from './indexContainer';
import FindContainer from './findContainer';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home'
    };
  }

  render() {
    return (
      <TabNavigator tabBarStyle={{ backgroundColor: 'white' }} style={{ backgroundColor: 'white', marginTop: 20 }}>
        <TabNavigator.Item
          title="主页"
          selected={this.state.selectedTab === 'home'}
          renderIcon={() => <Icon name="ios-home" size={30} color="gray" />}
          renderSelectedIcon={() => <Icon name="ios-home" size={30} color="#4E78E7" />}
          onPress={() => this.setState({ selectedTab: 'home' })}
        >

          <IndexContainer />
        </TabNavigator.Item>
        <TabNavigator.Item
          title="其他"
          selected={this.state.selectedTab === 'other'}
          renderIcon={() => <Icon name="ios-more" size={30} color="gray" />}
          renderSelectedIcon={() => <Icon name="ios-more" size={30} color="#4E78E7" />}
          onPress={() => this.setState({ selectedTab: 'other' })}
        >
          <FindContainer />
        </TabNavigator.Item>
      </TabNavigator>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
