import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { Camera } from "expo-camera";

const Avatar = () => {
  const defaultAvatar = require("../../assets/images/avatarfacebook.jpg");

  const [avatarUri, setAvatarUri] = useState(null);
  const [coverUri, setCoverUri] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [imageType, setImageType] = useState("");
  const [cameraPermission, setCameraPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setCameraPermission(status === "granted");
    })();
  }, []);

  const pickImage = async (type) => {
    setImageType(type);
    setModalVisible(true);
  };

  const handleImageSelect = async (type) => {
    setModalVisible(false);
    let result;
    const options = {
      mediaTypes:
        type === "photo"
          ? ImagePicker.MediaTypeOptions.Images
          : ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: true,
      quality: 1,
      aspect: [1, 1],
      videoQuality: "1080p",
    };
    if (type === "photo" || type === "video") {
      result = await ImagePicker.launchCameraAsync(options);
    } else {
      result = await ImagePicker.launchImageLibraryAsync(options);
    }

    if (!result.canceled) {
      if (imageType === "avatar") {
        setAvatarUri(result.uri);
      } else if (imageType === "cover") {
        setCoverUri(result.uri);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileHeader}>
        <TouchableOpacity
          onPress={() => pickImage("cover")}
          style={styles.coverContainer}
        >
          {coverUri ? (
            <Image source={{ uri: coverUri }} style={styles.coverImage} />
          ) : (
            <Text style={styles.coverPlaceholder}>Add Cover Photo</Text>
          )}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => pickImage("avatar")}
          style={styles.avatarContainer}
        >
          {avatarUri ? (
            <Image source={{ uri: avatarUri }} style={styles.avatarImage} />
          ) : (
            <Image source={defaultAvatar} style={styles.avatarImage} />
          )}
          <Ionicons name="camera-outline" size={30} style={styles.cameraIcon} />
        </TouchableOpacity>
        <Text style={styles.username}>Brak Lihou</Text>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <TouchableOpacity
          style={styles.modalContainer}
          activeOpacity={1}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <View style={styles.modalContent}>
            <TouchableOpacity
              onPress={() => handleImageSelect("photo")}
              style={[
                styles.selectButton,
                imageType === "photo" && styles.selectedButton,
              ]}
            >
              <Ionicons name="camera" size={24} color="#fff" />
              <Text style={styles.selectButtonText}>Take Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleImageSelect("video")}
              style={[
                styles.selectButton,
                imageType === "video" && styles.selectedButton,
              ]}
            >
              <Ionicons name="videocam" size={24} color="#fff" />
              <Text style={styles.selectButtonText}>Record Video</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleImageSelect("selectImage")}
              style={[
                styles.selectButton,
                imageType === "selectImage" && styles.selectedButton,
              ]}
            >
              <Ionicons name="image" size={24} color="#fff" />
              <Text style={styles.selectButtonText}>Select Image/Video</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  profileHeader: {
    alignItems: "center",
  },
  coverContainer: {
    width: "100%",
    height: 200,
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
  },
  coverImage: {
    width: "100%",
    height: "100%",
  },
  coverPlaceholder: {
    fontSize: 18,
    color: "#000",
  },
  avatarContainer: {
    backgroundColor: "#ccc",
    width: 160,
    height: 160,
    borderRadius: 80,
    alignItems: "center",
    justifyContent: "center",
    marginTop: -80,
    position: "relative",
  },
  avatarImage: {
    width: 160,
    height: 160,
    borderRadius: 80,
  },
  cameraIcon: {
    position: "absolute",
    bottom: 10,
    right: 10,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    borderRadius: 20,
    padding: 5,
  },
  username: {
    marginTop: 10,
    fontSize: 24,
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    width: "100%",
    padding: 20,
    borderRadius: 10,
  },
  selectButton: {
    backgroundColor: "#007BFF",
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 5,
    marginBottom: 10,
    flexDirection: "row",
    gap: 10,
    padding: 10,
  },
  selectedButton: {
    backgroundColor: "#0056b3",
  },
  selectButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  cancelButton: {
    paddingVertical: 10,
    alignItems: "center",
  },
  cancelButtonText: {
    color: "#007BFF",
    fontSize: 16,
  },
});

export default Avatar;
