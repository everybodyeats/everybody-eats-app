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

export default class OrderCard extends React.Component {
  render() {
    return (
      <Card
        pointerEvents="none"
        containerStyle={{ borderRadius: 10 }}>
        <Text style={styles.orderDate}>
          {this.props.date}
        </Text>
        <Text style={styles.restaurantTitle}>
          {this.props.restaurant}
        </Text>
        <Text style={styles.orderDetails}>
          {this.props.orderDetails}
        </Text>
        <Text style={styles.orderPrice}>
          {this.props.price}
        </Text>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  orderDate: {
    color: "#818181",
    fontFamily: "open-sans-semibold",
    fontSize: 16,
    height: 60,
    width: 70,
    paddingTop: 10,
    borderRightWidth: 1,
    borderRightColor: '#E6E6E6',
  },
  restaurantTitle: {
    color: "#818181",
    fontFamily: "open-sans-semibold",
    fontSize: 18,
    position: 'absolute',
    left: 80,
    top: 5
  },
  orderDetails: {
    color: "#818181",
    fontFamily: "open-sans-light",
    fontSize: 16,
    position: 'absolute',
    left: 80,
    top: 30
  },
  orderPrice: {
    color: "#818181",
    fontFamily: "open-sans-semibold",
    fontSize: 16,
    position: 'absolute',
    right: 5,
    top: 10
  }
});
