import React, { useState } from "react";
import {
  View,
  ScrollView,
  Text,
  TextInput,
  Button,
  Switch,
  StyleSheet,
} from "react-native";

export default function Datasheet() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [saveDetails, setSaveDetails] = useState(false);
  const [notes, setNotes] = useState("");

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Height (cm)</Text>

      <TextInput
        placeholder="Height of Plant 1"
        value={firstName}
        onChangeText={setFirstName}
        style={styles.input}
      />
      <TextInput
        placeholder="Height of Plant 2"
        value={lastName}
        onChangeText={setLastName}
        style={styles.input}
      />
      <TextInput
        placeholder="Height of Plant 3"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />

      <Text style={styles.header}>Tillers</Text>

      <TextInput
        placeholder="# of tillers (Plant 1)"
        value={address}
        onChangeText={setAddress}
        style={styles.input}
      />
      <TextInput
        placeholder="# of tillers with panicles (Plant 1)"
        value={city}
        onChangeText={setCity}
        style={styles.input}
      />
      <TextInput
        placeholder="Height of tillers (cm) (Plant 1)"
        value={zip}
        onChangeText={setZip}
        style={styles.input}
      />

      <TextInput
        placeholder="# of Tillers (Plant 2)"
        value={address}
        onChangeText={setAddress}
        style={styles.input}
      />
      <TextInput
        placeholder="# of tillers with panicles (Plant 2)"
        value={city}
        onChangeText={setCity}
        style={styles.input}
      />
      <TextInput
        placeholder="Height of Tillers (cm) (Plant 2)"
        value={zip}
        onChangeText={setZip}
        style={styles.input}
      />
      <TextInput
        placeholder="# of Tillers (Plant 3)"
        value={address}
        onChangeText={setAddress}
        style={styles.input}
      />
      <TextInput
        placeholder="# of tillers with panicles (Plant 3)"
        value={city}
        onChangeText={setCity}
        style={styles.input}
      />
      <TextInput
        placeholder="Height of Tillers (cm) (Plant 3)"
        value={zip}
        onChangeText={setZip}
        style={styles.input}
      />
      <Text style={styles.header}>Stem Diameter</Text>

      <TextInput
        placeholder="3rd internode (Plant 1)(axis1)"
        value={address}
        onChangeText={setAddress}
        style={styles.input}
      />
      <TextInput
        placeholder="3rd internode (Plant 1)(axis2) if oval"
        value={city}
        onChangeText={setCity}
        style={styles.input}
      />
      <TextInput
        placeholder="6th internode (Plant 1)(axis1)"
        value={zip}
        onChangeText={setZip}
        style={styles.input}
      />
      <TextInput
        placeholder="6th internode (Plant 1)(axis 2) if oval"
        value={zip}
        onChangeText={setZip}
        style={styles.input}
      />
      <TextInput
        placeholder="3rd internode (Plant 2)(axis1)"
        value={address}
        onChangeText={setAddress}
        style={styles.input}
      />
      <TextInput
        placeholder="3rd internode (Plant 2)(axis2) if oval"
        value={city}
        onChangeText={setCity}
        style={styles.input}
      />
      <TextInput
        placeholder="6th internode (Plant 2)(axis1)"
        value={zip}
        onChangeText={setZip}
        style={styles.input}
      />
      <TextInput
        placeholder="6th internode (Plant 2)(axis 2) if oval"
        value={zip}
        onChangeText={setZip}
        style={styles.input}
      />

      <Text style={styles.header}>Lodging</Text>

      <TextInput
        placeholder="% Lodged"
        value={address}
        onChangeText={setAddress}
        style={styles.input}
      />
      <Text style={styles.header}>Notes</Text>
      <TextInput
        placeholder="Notes"
        value={notes}
        onChangeText={setNotes}
        multiline={true}
        numberOfLines={4}
        style={[styles.input, styles.textArea]}
      />

      <View style={styles.switchContainer}>
        <Text>Save my details</Text>
        <Switch
          value={saveDetails}
          onValueChange={() => setSaveDetails(!saveDetails)}
        />
      </View>

      <Button
        title="Save"
        onPress={() => {
          /* Handle the save logic here */
        }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginVertical: 5,
  },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  textArea: {
    height: 100, //
    textAlignVertical: "top",
  },
});
