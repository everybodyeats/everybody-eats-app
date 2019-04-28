import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView
} from 'react-native';

import {
  Card,
  ListItem,
  Button,
  Icon
} from 'react-native-elements';

import RestaurantCard from '../components/RestaurantCard.js'

export default class RestaurantsScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.toolbar}>
          <Image source={require
          ('../assets/images/logo.png')} style={styles.toolbarImage} />
          <Image source={require
          ('../assets/images/filter-icon.png')} style={styles.filterBtn} />
          <Image source={require
          ('../assets/images/search-icon.png')} style={styles.searchBtn} />
        </View>
        <ScrollView>
          <Text style={styles.headerLabel}>RECENTLY ORDERED</Text>
          <RestaurantCard imageUri={require("../assets/images/pizza.png")} name="Casablanca's" theme="Italian, Green" time="15-20 min" />
          <RestaurantCard imageUri={require("../assets/images/chinese.png")} name="Apollo Chinese Restaurant" theme="Chinese" time="15-20 min" />
          <Text style={styles.headerLabel}>OUR RESTAURANTS</Text>
          <RestaurantCard imageUri={require("../assets/images/thai.png")} name="Thai Basil" theme="Thai, Asian" time="15-20 min" />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  toolbar: {
    height: 100,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#dddddd',
  },
  toolbarImage: {
    width: 230,
    height: 40,
    resizeMode: 'contain',
    position: 'absolute',
    left: 10,
    top: 45,
  },
  filterBtn: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    position: 'absolute',
    left: 265,
    top: 50,
  },
  searchBtn: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    position: 'absolute',
    left: 310,
    top: 50,
  },
  headerLabel: {
    fontSize: 20,
    marginLeft: 10,
    marginTop: 20,
    marginBottom: 10,
    color: "#818181",
    fontFamily: "nunito-bold"
  },
});
