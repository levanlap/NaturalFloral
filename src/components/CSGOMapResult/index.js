import React, { Component } from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { Text } from 'native-base'
import TBA from '../../resources/images/tba.png'

export default class CSGOMapResultScreen extends Component {
  render() {
    return (
      <View>
        <View style={{ padding: 10 }}>
          <Text>1. Recca removed Overpass</Text>
          <Text>2. Lucid Dream removed Inferno</Text>
          <Text>3. Recca picked Cache</Text>
          <Text>4. Lucid Dream picked Cobblestone</Text>
          <Text>5. Recca removed Nuke</Text>
          <Text>6. Lucid Dream removed Train</Text>
          <Text>7. Mirage was left over</Text>
        </View>
        <View style={{ flexDirection: 'column', paddingLeft: 0, paddingRight: 0, marginLeft: 0, marginRight: 0 }}>
          <View style={{ width: '100%', position: 'relative', flexDirection: 'column', marginLeft: 0, marginRight: 0, paddingRight: 0, paddingBottom: 10 }} >
            <Image style={{ width: '100%', height: 38, margin: 0, padding: 0 }} source={TBA} />
            <Text style={{ width: '100%', position: 'absolute', lineHeight: 38, color: '#fff', fontWeight: 'bold', textAlign: 'center', fontSize: 13 }}>MIRAGE</Text>
            <Text style={{ fontSize: 11 }}>
              <Text style={{ color: '#388E3C', fontSize: 11 }}>16 : </Text><Text style={{ color: '#F53939', fontSize: 11 }}>10</Text>
              (<Text style={{ color: '#FFCC00', fontSize: 11 }}>10 : </Text><Text style={{ color: 'blue', fontSize: 11 }}>5</Text>;
              <Text style={{ color: 'blue', fontSize: 11 }}>6 : </Text><Text style={{ color: '#FFCC00', fontSize: 11 }}>5</Text>)</Text>
          </View>
          <View style={{ width: '100%', position: 'relative', flexDirection: 'column', marginLeft: 0, marginRight: 0, paddingRight: 0, paddingBottom: 10 }} >
            <Image style={{ width: '100%', height: 38, margin: 0, padding: 0 }} source={TBA} />
            <Text style={{ width: '100%', position: 'absolute', lineHeight: 38, color: '#fff', fontWeight: 'bold', textAlign: 'center', fontSize: 13 }}>MIRAGE</Text>
            <Text style={{ fontSize: 11 }}>
              <Text style={{ color: '#388E3C', fontSize: 11 }}>16 : </Text><Text style={{ color: '#F53939', fontSize: 11 }}>10</Text>
              (<Text style={{ color: '#FFCC00', fontSize: 11 }}>10 : </Text><Text style={{ color: 'blue', fontSize: 11 }}>5</Text>;
              <Text style={{ color: 'blue', fontSize: 11 }}>6 : </Text><Text style={{ color: '#FFCC00', fontSize: 11 }}>5</Text>)</Text>
          </View>
          <View style={{ width: '100%', position: 'relative', flexDirection: 'column', marginLeft: 0, marginRight: 0, paddingRight: 0, paddingBottom: 10 }} >
            <Image style={{ width: '100%', height: 38, margin: 0, padding: 0 }} source={TBA} />
            <Text style={{ width: '100%', position: 'absolute', lineHeight: 38, color: '#fff', fontWeight: 'bold', textAlign: 'center', fontSize: 13 }}>MIRAGE</Text>
            <Text style={{ fontSize: 11 }}>
              <Text style={{ color: '#388E3C', fontSize: 11 }}>16 : </Text><Text style={{ color: '#F53939', fontSize: 11 }}>10</Text>
              (<Text style={{ color: '#FFCC00', fontSize: 11 }}>10 : </Text><Text style={{ color: 'blue', fontSize: 11 }}>5</Text>;
              <Text style={{ color: 'blue', fontSize: 11 }}>6 : </Text><Text style={{ color: '#FFCC00', fontSize: 11 }}>5</Text>)</Text>
          </View>
        </View>
      </View>
    )
  }
}
