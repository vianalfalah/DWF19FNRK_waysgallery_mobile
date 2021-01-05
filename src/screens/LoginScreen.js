import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
// import { TextInput } from 'react-native-paper';

import { COLOR } from "../../utils/colors";
import imageLogo from "../../assets/logo.png";

export default function App({ navigation }) {
  const [text, setText] = React.useState("");

  return (
    <>
      <View
        style={{ flex: 0.25, justifyContent: "center", alignItems: "center" }}
      >
        <StatusBar />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Landing");
          }}
          style={{ position: "absolute", top: 30, left: 20 }}
        >
          <Image
            source={require("./../../assets/back.png")}
            style={{ marginTop: 20 }}
          />
        </TouchableOpacity>
        <View>
          <Image source={imageLogo} />
        </View>
      </View>
      <View style={styles.container}>
        <View
          style={{
            width: "90%",
          }}
        >
          <View
            style={{
              marginBottom: 16,
            }}
          >
            <Text
              style={{
                color: COLOR.white,
                fontSize: 18,
                paddingLeft: 8,
                paddingBottom: 6,
              }}
            >
              E-mail
            </Text>
            <TextInput
              placeholder="Masukan password"
              style={{
                height: 60,
                borderColor: "white",
                borderWidth: 3,
                borderRadius: 10,
                paddingLeft: 16,
                fontSize: 18,
                color: COLOR.white,
              }}
            />
          </View>
          <View>
            <Text
              style={{
                color: COLOR.white,
                fontSize: 18,
                paddingLeft: 8,
                paddingBottom: 10,
              }}
            >
              Password
            </Text>
            <TextInput
              placeholder="Masukan password"
              style={{
                height: 60,
                borderColor: "white",
                borderWidth: 3,
                borderRadius: 10,
                paddingLeft: 16,
                fontSize: 18,
                color: COLOR.white,
              }}
            />
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("LogedLanding");
              }}
              style={{
                height: 60,
                backgroundColor: COLOR.white,
                borderRadius: 10,
                marginTop: 28,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "800",
                  color: COLOR.primary,
                }}
              >
                LOGIN
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.75,
    backgroundColor: COLOR.primary,
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
  },
});
