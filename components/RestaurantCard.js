import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import {
  Card,
  ListItem,
  Button,
  Icon
} from 'react-native-elements';

export default class RestaurantCard extends React.Component {
  render() {
    return (
      <TouchableOpacity onPress={() =>  console.log("PRESSED!")}>
        <Card
          pointerEvents="none"
          containerStyle={{ borderRadius: 10 }}
          imageStyle={{
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            overflow: 'hidden',
          }}
          image={this.props.imageUri}>
          <Text style={styles.restaurantTitle}>
            {this.props.name}
          </Text>
          <Text style={styles.restaurantDetails}>
            {this.props.theme}        {this.props.time}
          </Text>
        </Card>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  restaurantTitle: {
    color: "#818181",
    fontFamily: "open-sans-semibold",
    fontSize: 18
  },
  restaurantDetails: {
    color: "#818181",
    fontFamily: "open-sans-light",
    fontSize: 16
  }
});
