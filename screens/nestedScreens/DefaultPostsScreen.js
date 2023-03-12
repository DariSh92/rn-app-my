import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";

import { FontAwesome5 } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

const DefaultPostsScreen = ({ navigation }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
    }
  }, [route.params]);

  //   return (
  //     <View style={styles.container}>
  //       <FlatList
  //         data={posts}
  //         keyExtractor={(item, index) => index.toString()}
  //         renderItem={({ item }) => (
  //           <View
  //             style={{
  //               marginBottom: 10,
  //               justifyContent: "center",
  //               alignItems: "center",
  //             }}
  //           >
  //             <Image
  //               source={{ uri: item.photo }}
  //               style={{ width: 10, height: 200 }}
  //             ></Image>
  //           </View>
  //         )}
  //       />
  //     </View>
  //   );
  // };
  return (
    <View style={styles.container}>
      {posts && (
        <FlatList
          data={posts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.postCard}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() =>
                  navigation.navigate("Comments", {
                    postId: item.id,
                    photo: item.photo,
                  })
                }
              >
                <Image style={styles.photo} source={{ uri: item.photo }} />
              </TouchableOpacity>
              <Text style={styles.title}>{item.title}</Text>
              <View style={styles.linkContainer}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Comments", {
                      postId: item.id,
                      photo: item.photo,
                    })
                  }
                >
                  <FontAwesome5
                    style={styles.commentIcon}
                    name="comment"
                    size={24}
                    color="#BDBDBD"
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.locationLink}
                  onPress={() =>
                    navigation.navigate("Map", { location: item.location })
                  }
                >
                  <SimpleLineIcons
                    name="location-pin"
                    size={24}
                    color="#BDBDBD"
                  />
                  <Text style={styles.locationDescr}>{item.locationDescr}</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        ></FlatList>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 16,
  },
  postCard: {
    marginTop: 32,
  },
  photo: {
    minWidth: 343,
    minHeight: 240,
    borderRadius: 8,
    marginBottom: 8,
  },
  title: {
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
    marginBottom: 11,
  },
  linkContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  locationLink: {
    flexDirection: "row",
  },
  locationDescr: {
    marginLeft: 8,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    textDecorationLine: "underline",
    color: "#212121",
  },
});
export default DefaultPostsScreen;
