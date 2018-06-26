import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Container, Content, Header, Button, List, ListItem, Icon, Left, Right, Thumbnail, Body, Tabs, Fab, H1, H3, Tab, Card, CardItem } from "native-base"
import { Constants, MapView, Location, Permissions } from 'expo';
import firebase from 'firebase'

export default class ProductNearMe extends Component {
  state = {
    mapRegion: { latitude: 10.761329, longitude: 106.6742595, latitudeDelta: 1, longitudeDelta: 1 },
    locationResult: null,
    location: { coords: { latitude: 10.761329, longitude: 106.6742595 } },
    markers: []
  };

  componentDidMount() {
    this._getLocationAsync();
    var ref = firebase.database().ref("shop");
    ref.on('value', (dataSnapshot) => {
      this.setState({
        markers: dataSnapshot.val()
      });
      let datas = dataSnapshot.val();
      for (i = 0; i < datas.length; i++) { 
        var dist = this.distance(this.state.location.coords.latitude, this.state.location.coords.longitude, datas[i].coordinates.latitude, datas[i].coordinates.longitude, "K");
        datas[i].distance= dist;
      };
      console.log(datas);
    });

  }



  _handleMapRegionChange = mapRegion => {
    this.setState({ mapRegion });
  };

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        locationResult: 'Permission to access location was denied',
        location,
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    console.log(location);
    this.setState({ location: location });
  };
  deg2rad(angle) {
    return angle * 0.017453292519943295 // (angle / 180) * Math.PI;
  }

  rad2deg(angle) {
    return angle * 57.29577951308232 // angle / Math.PI * 180
  }

  distance(lat1, lon1, lat2, lon2, unit) {
    theta = lon1 - lon2;
    dist = Math.sin(this.deg2rad(lat1)) * Math.sin(this.deg2rad(lat2)) + Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * Math.cos(this.deg2rad(theta));
    dist = Math.acos(dist);
    dist = this.rad2deg(dist);
    miles = dist * 60 * 1.1515;
    if (unit == "K") {
      return (miles * 1.609344);
    } else if (unit == "N") {
      return (miles * 0.8684);
    } else {
      return miles;
    }
  }

  _onBack() {
    this.props.navigation.navigate('PlantesList')
  }
  render() {
    const deviceHeight = Dimensions.get("window").height
    return (
      <View style={styles.container}>
        <MapView provider="google"
          style={styles.map}
          region={{ latitude: this.state.location.coords.latitude, longitude: this.state.location.coords.longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }}
          onRegionChange={this._handleMapRegionChange}
        >
          {this.state.markers.map((marker, index) => (<MapView.Marker key={index} coordinate={marker.coordinates} title={marker.name} description={marker.address} />))}
        </MapView>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => this._onBack()}
            style={styles.bubble}
          >
            <Text>Tap to back list plantes</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const headerStyle = StyleSheet.create({
  title: { color: "#FFF", fontSize: 36, fontWeight: '300' },
  icon: { color: "#fff", fontSize: 30 }
})


const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    width: "100%"
  },
  bubble: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  latlng: {
    width: 200,
    alignItems: 'stretch',
  },
  button: {
    width: 80,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent',
  },
});
