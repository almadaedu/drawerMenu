import React from "react";
import { View, Text, Image } from "react-native";
import Dog from '../../assets/Images/dog.gif'
import useStyles from "./styles";
const Home = () => {
  const styles = useStyles();
  return (
      <View style={styles.container}>
        <Image style={{ width: 100, height: 100 }} source={Dog} />
        <Text style={styles.text}>Bem vindo</Text>
      </View>
  );
};

export default Home;
