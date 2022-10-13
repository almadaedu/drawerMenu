import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Input from "../../components/Input";
import useStyles from "./styles";
const Profile = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Lorem ipsum</Text>
      <Input />
    </View>
  )
}

export default Profile