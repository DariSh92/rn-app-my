import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, TextInput, Text } from "react-native";
import { Camera } from "expo-camera";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Fontisto } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import * as Location from "expo-location";

const CreatePostsScreen = ({ navigation }) => {
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState(null);

  const takePhoto = async () => {
    const location = await Location.getCurrentPositionAsync();
    const shot = await camera.takePictureAsync();
    setPhoto(shot.uri);
  };
  const sendPhoto = () => {
    navigation.navigate("DefaultScreen", { photo });
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} ref={setCamera} ratio="1:1">
        {photo && (
          <View style={styles.photoContainer}>
            <Image source={{ uri: photo }} style={styles.photo}></Image>
          </View>
        )}
        <View style={styles.snapContainer}>
          <TouchableOpacity onPress={takePhoto}>
            <Fontisto name="camera" size={20} color="#ffffff" />
          </TouchableOpacity>
        </View>
      </Camera>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder={"Название..."}
          // value={inputState.title}
          // onFocus={() => setIsShowKeyboard(true)}
          // onChangeText={(value) =>
          //   setInputState((prev) => ({ ...prev, title: value }))
          // }
        />
        <View style={styles.locationInputContainer}>
          <SimpleLineIcons
            style={styles.locationIcon}
            name="location-pin"
            size={24}
            color="#BDBDBD"
          />
          <TextInput
            style={styles.locationInput}
            placeholder={"Местность..."}
            // value={inputState.locationDescr}
            // onFocus={() => setIsShowKeyboard(true)}
            // onChangeText={(value) =>
            //   setInputState((prev) => ({ ...prev, locationDescr: value }))
            // }
          />
        </View>
      </View>
      <TouchableOpacity
        onPress={sendPhoto}
        activeOpacity={0.8}
        style={styles.sendButton}
      >
        <Text style={styles.buttonText}>Опубликовать</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  camera: {
    position: "relative",
    marginHorizontal: 16,
    marginTop: 32,
    justifyContent: "center",
    alignItems: "center",
    height: 240,
  },

  snap: {
    color: "#fff",
  },
  snapContainer: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  takePhotoContainer: {
    position: "absolute",
    top: 50,
    left: 10,
    borderColor: "#fff",
    borderWidth: 1,
  },
  form: {
    marginHorizontal: 16,
    marginTop: 48,
  },
  photo: {
    flex: 1,
    height: 240,
  },
  photoContainer: {
    position: "absolute",
    flexDirection: "row",
    top: 0,
    left: 0,
  },
  input: {
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
  },
  locationInputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
  },
  locationIcon: {
    marginRight: 8,
  },
  locationInput: {
    flex: 1,
    height: 50,
  },
  sendButton: {
    justifyContent: "center",
    marginTop: 32,
    marginHorizontal: 16,
    height: 51,
    borderRadius: 100,
    backgroundColor: "#FF6C00",
  },
  sendButton: {
    justifyContent: "center",
    marginTop: 32,
    marginHorizontal: 16,
    height: 51,
    borderRadius: 100,
    backgroundColor: "#FF6C00",
  },
  buttonText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#FFFFFF",
  },
});

export default CreatePostsScreen;
