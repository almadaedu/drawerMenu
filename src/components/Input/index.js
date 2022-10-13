import { View, TextInput, Image } from 'react-native'
import React from 'react'
import useStyles from './styles'
import Search from '../../assets/Images/search.png'
import IconButton from '../IconButton'
const Input = () => {
  const styles = useStyles()
  return (
    <View>
      <View style={styles.searchContainer}>
        <TextInput  style={styles.input} placeholder="Digite seu nome" placeholderTextColor={'#6b6e70'} />
        <IconButton>
          <Image style={{ width: 16, height: 16 }} color={'#fff'} source={Search} />
        </IconButton>
      </View>
    </View>
  )
}

export default Input