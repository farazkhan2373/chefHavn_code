import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Animated,
  Dimensions,
  ScrollView,
  Image,
} from "react-native";

export default function MapForm() {
  const [formVisible, setFormVisible] = useState(false);
  const [selectedTag, setSelectedTag] = useState("Home"); // State to track selected tag
  const slideAnim = useRef(
    new Animated.Value(Dimensions.get("window").height)
  ).current;

  const toggleForm = () => {
    if (formVisible) {
      Animated.timing(slideAnim, {
        toValue: Dimensions.get("window").height,
        duration: 500,
        useNativeDriver: true,
      }).start(() => setFormVisible(false));
    } else {
      setFormVisible(true);
      Animated.timing(slideAnim, {
        toValue: Dimensions.get("window").height * -0.1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
  };

  const handleTagPress = (tag) => {
    setSelectedTag(tag); // Update selected tag state
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.mapContainer} onPress={toggleForm}>
        <Text style={styles.buttonText}>Open Form</Text>
      </TouchableOpacity>

      {formVisible && (
        <Animated.View
          style={[
            styles.formContainer,
            { transform: [{ translateY: slideAnim }] },
          ]}
        >
          <TouchableOpacity style={styles.closeButton} onPress={toggleForm}>
            <Image
              source={require("../../assets/icons/closeMark.svg")}
              style={styles.closeButtonImage}
            />
          </TouchableOpacity>

          <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <Text style={styles.heading}>Enter complete address</Text>
            <View style={styles.inputContainer}>
              <Text>Receiver's name</Text>
              <TextInput
                style={styles.inputField}
                placeholder="Enter receiver's name"
              />
              <Text>Receiver's contact</Text>
              <TextInput
                style={styles.inputField}
                placeholder="Enter receiver's contact"
              />
            </View>

            <View style={styles.saveAddressContainer}>
              <Text style={styles.subHeading}>Save address as *</Text>

              <View style={styles.tagContainer}>
                <TouchableOpacity
                  style={[
                    styles.tag,
                    selectedTag === "Home" && styles.selectedTag,
                  ]}
                  onPress={() => handleTagPress("Home")}
                >
                  <Text
                    style={[
                      styles.tagText,
                      selectedTag === "Home" && styles.selectedTagText,
                    ]}
                  >
                    Home
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.tag,
                    selectedTag === "Other" && styles.selectedTag,
                  ]}
                  onPress={() => handleTagPress("Other")}
                >
                  <Text
                    style={[
                      styles.tagText,
                      selectedTag === "Other" && styles.selectedTagText,
                    ]}
                  >
                    Other
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={styles.additionalFieldsContainer}>
                <Text style={styles.mapLabels}>Company, Building</Text>
                <TextInput
                  style={styles.inputField}
                  placeholder="Enter company, building"
                />
                <Text style={styles.mapLabels}>Floor</Text>
                <TextInput
                  style={styles.inputField}
                  placeholder="Enter floor"
                />
                <Text style={styles.mapLabels}>Tower</Text>
                <TextInput
                  style={styles.inputField}
                  placeholder="Enter tower"
                />
                <Text style={styles.mapLabels}>Nearby Landmark</Text>
                <TextInput
                  style={styles.inputField}
                  placeholder="Enter nearby landmark"
                />
              </View>
            </View>

            <TouchableOpacity style={styles.confirmButton}>
              <Text style={styles.confirmButtonText}>Confirm address</Text>
            </TouchableOpacity>
          </ScrollView>
        </Animated.View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },
  mapContainer: {
    backgroundColor: "#503a73",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    margin: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  formContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#f5f5f5",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    height: "70vh", // Set the form height to 70vh
  },
  scrollViewContent: {
    paddingBottom: 40,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  inputContainer: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  inputField: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingVertical: 8,
    paddingLeft: 8,
    marginBottom: 15,
  },
  saveAddressContainer: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  subHeading: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  tagContainer: {
    flexDirection: "row",
  },
  tag: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    marginRight: 10,
  },
  tagText: {
    color: "black",
  },
  selectedTag: {
    borderColor: "red",
  },
  selectedTagText: {
    color: "red",
  },
  additionalFieldsContainer: {
    marginBottom: 15,
    marginTop: 15,
  },
  confirmButton: {
    backgroundColor: "#503a73",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  confirmButtonText: {
    color: "white",
    fontSize: 16,
  },
  mapLabels: {
    marginBottom: 2,
  },
  closeButton: {
    position: "absolute",
    top: -40,
    left: 0,
    right: 0,
    alignItems: "center",
    zIndex: 1,
    
  },
  closeButtonImage: {
    padding: 4,
    borderRadius: '50%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    width: 26,
    height: 26,
  },
});
