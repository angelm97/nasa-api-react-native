import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const Header = () => {
    return (
        <View style={styles.container}>
            <View style={[styles.leftSide]}>
                <Text style={{fontSize: 20, fontWeight: '900', color: 'white'}}>Explore</Text>
            </View>
            <View style={styles.rigthSide}>
                <Image style={styles.image} source={require('../../assets/nasa-logo.png')}></Image>
            </View>

        </View>

    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 5,
        height: '10%',
  
        
    },

    rigthSide:{
        flex: 1,
       alignItems: 'flex-end',
       justifyContent: 'center',
   
    
    },

    leftSide:{
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
    

    },

    image:{
        width: 60,
        height: 60,
    }
});

export default Header
