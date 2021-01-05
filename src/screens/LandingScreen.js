import * as React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { COLOR } from '../../utils/colors';

import Background from './../../assets/bg.png';

export default function LandingScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.imageBackground} source={Background}>   
                <View 
                    style={{
                        justifyContent: 'center',
                        width: '90%',
                        position: 'absolute',
                        bottom: 30
                    }}
                >
                    <View style={{marginBottom: 20}}>
                        <Image 
                            source={require('./../../assets/logo.png')} 
                            style={{
                                resizeMode: 'contain',
                                marginBottom: -5
                            }}
                        />
                        <Text
                            style={{
                                fontSize: 18,
                                fontWeight: '600',
                                marginBottom: 10,
                                marginTop: 5,
                            }}
                        >
                            Show your work to <Text style={{fontWeight: '800', color: COLOR.primary}}>inspire everyone</Text>
                        </Text>
                        <Text style={{maxWidth:"85%"}}>Ways Exhibition is a app design creators gather to share their work with other creators</Text>
                    </View>
                    <TouchableOpacity style={[styles.button]} onPress={() => {navigation.navigate('Login')}} >
                        <Text style={{fontWeight: '800', color: '#fff', fontSize: 20}}>LOGIN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, {backgroundColor: '#fff', borderWidth: 2}]} onPress={() => {navigation.navigate('Register')}} >
                        <Text style={{fontWeight: '800', fontSize: 20}}>REGISTER</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground> 
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    imageBackground: {
        flex: 1,
        justifyContent: 'flex-end',
        resizeMode: 'cover',
        alignItems: 'center',
    },
    button: {
        // width: '100%',
        height: 54,
        backgroundColor: COLOR.black,
        marginBottom: 12,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
