import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';

class HomeTab extends Component {

    constructor(props) {
        super(props);
    }
    static navigationOptions = {
        title: 'Home',
    };
    render() {
        return (
            <Text>Hello HomeTab!</Text>
        )
    }

}

class ProfileTab extends Component {
    constructor(props) {
        super(props);
    }
    static navigationOptions = {
        title: 'Profile',
    };
    render() {
        return (
            <Text>Hello ProfileTab!</Text>
        )
    }

}

const MainNav = createBottomTabNavigator({
    Home: HomeTab,
    Profile: ProfileTab
}, {
    tabBarOptions: {
        activeBackgroundColor: '#9575CD',
        inactiveBackgroundColor: '#D1C4E9',
        activeTintColor: '#ffffff',
        inactiveTintColor: 'gray'
    }
});

export default MainNav;