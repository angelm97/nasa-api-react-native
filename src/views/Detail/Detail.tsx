import { useRoute } from '@react-navigation/native'
import React, { useState } from 'react'
import { ActivityIndicator, Alert, Image, ScrollView, StyleSheet, Text, View } from 'react-native'

const Detail = () => {

    const [imageReady, setImageReady] = useState(false)

    const isImageReady = () => {
        setImageReady(true)
       
    }

    const {
        params: {data}
    } = useRoute<any>()
  return (
    <View style={styles.container}>
        
            {!imageReady && <ActivityIndicator size="small" color="white" /> }
            <ScrollView  style={[imageReady !== true ? {opacity: 0, height: 0} : {display: 'flex'}]} > 
                <Image onLoad={isImageReady} source={{ uri: data?.url}} style={{height: 250, width: '100%', borderRadius: 25,}}/>
                <Text style={{color: 'white', fontSize: 20, margin: 10, fontWeight: '900'}}> {data?.title} </Text>
                <Text style={{color: 'white',  margin: 10, fontWeight: '800'}}> {data?.explanation} </Text>
                </ScrollView>
        

        
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue',
        padding: 15,
    }
})

export default Detail
