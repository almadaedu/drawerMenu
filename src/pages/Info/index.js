import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import DogSleep from '../../assets/Images/dog-sleep.gif'
import useStyles from "./styles";
const Info = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <Image style={{ width: 100, height: 100 }} source={DogSleep} />
      <Text style={styles.text}>Cachorro dormindo</Text>
    </View>
  )
}

export default Info