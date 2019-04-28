import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  Dimensions
} from 'react-native';

import {
  Card,
  CardItem,
  Body,
  ListItem,
  Button,
  Icon
} from 'react-native-elements';

import OrderCard from '../components/OrderCard.js'

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.toolbar}>
          <Text style={styles.toolbarTitle}>Hi Andrea!</Text>
          <Image source={require
          ('../assets/images/settings-icon.png')} style={styles.settingsBtn} />
        </View>
        <ScrollView>
          <Image source={require
          ('../assets/images/profile-screen-top.png')} style={styles.topPoly} />
          <Text style={styles.overPolyText}>We've helped 15 people eat!</Text>
          <Image source={require
          ('../assets/images/people.png')} style={styles.image} />
          <Text style={styles.orderHistoryLabel}>Order History</Text>
          <OrderCard date="11/2/18" restaurant="Casablanca's" orderDetails="Food, Side, Drink" price="$10.99" />
          <OrderCard date="10/2/18" restaurant="Thai Basil" orderDetails="Food, Side, Drink" price="$13.99" />
        </ScrollView>
      </SafeAreaView>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccdcb5'
  },
  toolbar: {
    height: 100,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#dddddd',
  },
  toolbarTitle: {
    width: 230,
    height: 40,
    position: 'absolute',
    left: 10,
    top: 45,
    fontFamily: 'nunito-regular',
    fontSize: 30
  },
  topPoly: {
    width: width,
    height: 100,
    resizeMode: 'cover',
  },
  overPolyText: {
    width: width,
    height: 40,
    position: 'absolute',
    left: 0,
    top: 30,
    fontFamily: 'nunito-semibold',
    fontSize: 24,
    textAlign: 'center'
  },
  settingsBtn: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    position: 'absolute',
    left: 310,
    top: 50,
  },
  image: {
    width: width,
    height: 160,
    resizeMode: 'contain',
    marginBottom: 60
  },
  orderHistoryLabel: {
    fontFamily: 'nunito-bold',
    fontSize: 20,
    color: "#fff",
    marginLeft: 10
  },
});
