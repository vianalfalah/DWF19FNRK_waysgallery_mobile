import * as React from 'react';
import { Text, View, Image, Dimensions, ScrollView, FlatList } from 'react-native';
import { COLOR } from '../../utils/colors';

const {width, height} = Dimensions.get('screen');
const DATA = [
  {
    "key": "357157s",
    "title": "Multi-lateral intermediate moratorium",
    "image": "https://cdn.dribbble.com/users/1715186/screenshots/9168705/media/d4c4e054a3a53b57946074cdf70e2fb0.png?compress=1&resize=800x600"
  },
  {
    "key": "35717s7",
    "title": "Automated radical data-warehouse",
    "image": "https://cdn.dribbble.com/users/204298/screenshots/14177335/media/da14c50a59936fab4ddf973e05dd274f.png?compress=1&resize=300x225"
  },
  {
    "key": "3571180",
    "title": "Inverse attitude-oriented system engine",
    "image": "https://cdn.dribbble.com/users/1997192/screenshots/11084691/media/fe5e1acda65b496c3bbd37f66eb9f09a.png?compress=1&resize=600x450"
  },
  {
    "key": "3571643",
    "title": "Monitored global data-warehouse",
    "image": "https://cdn.dribbble.com/users/1997192/screenshots/14594099/media/065a8cd472b99b8d554e4baabe5a7e95.png?compress=1&resize=300x225"
  },
  {
    "key": "35716l0",
    "title": "Inverse attitude-oriented system engine",
    "image": "https://cdn.dribbble.com/users/1997192/screenshots/11084691/media/fe5e1acda65b496c3bbd37f66eb9f09a.png?compress=1&resize=600x450"
  },
  {
    "key": "3571h03",
    "title": "Monitored global data-warehouse",
    "image": "https://cdn.dribbble.com/users/1997192/screenshots/14594099/media/065a8cd472b99b8d554e4baabe5a7e95.png?compress=1&resize=300x225"
  },
  {
    "key": "357k680",
    "title": "Inverse attitude-oriented system engine",
    "image": "https://cdn.dribbble.com/users/1997192/screenshots/11084691/media/fe5e1acda65b496c3bbd37f66eb9f09a.png?compress=1&resize=600x450"
  },
  {
    "key": "3571603",
    "title": "Monitored global data-warehouse",
    "image": "https://cdn.dribbble.com/users/1997192/screenshots/14594099/media/065a8cd472b99b8d554e4baabe5a7e95.png?compress=1&resize=300x225"
  },
  {
    "key": "357l680",
    "title": "Inverse attitude-oriented system engine",
    "image": "https://cdn.dribbble.com/users/1997192/screenshots/11084691/media/fe5e1acda65b496c3bbd37f66eb9f09a.png?compress=1&resize=600x450"
  },
  {
    "key": "3571l03",
    "title": "Monitored global data-warehouse",
    "image": "https://cdn.dribbble.com/users/1997192/screenshots/14594099/media/065a8cd472b99b8d554e4baabe5a7e95.png?compress=1&resize=300x225"
  },
]

export default function LogedScreen() {
  return (
    <>
      <View 
        style={{
          flex: 0.2,
        }}
      >
        <View
          style={{
            position: 'absolute',
            top: 60,
            left: 20
          }}
        >
          <Text style={{fontSize: 32, fontWeight: 'bold'}}>Ways <Text style={{color: COLOR.primary}}>Gallery</Text></Text> 
          <Text style={{marginTop: 0, fontSize: 16}}>Today's Post</Text>
        </View>
      </View>
      <FlatList 
        data={DATA}
        keyExtractor={item => item.key}
        horizontal={false}
        style={{flex: 0.8, borderTopRightRadius: 32, borderTopLeftRadius: 32, marginBottom: 32}}
        numColumns="2"
        renderItem={({item}) => {
          return (
            <View style={{padding: 10}}>
              <Image 
                source={{uri: item.image}} 
                style={{
                  width: width/2 - 20,
                  height: width/2 - 20,
                  borderRadius: 10, 
                  // borderWidth: 1, 
                  borderColor: COLOR.black
                }}
              />
            </View>
          )
        }}
      />
    </>
  )
}
