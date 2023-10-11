import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

const TodayImage = (data: any) => {

    const {navigate} = useNavigation<any>();

    const handleViews = () => {
        navigate('Detail', {...data}) 
    } 

    return (
        <View style={{ marginHorizontal: 20, borderRadius: 50, backgroundColor: 'rgb(70, 70, 243)', height: 350, justifyContent: 'center', padding: 15, marginBottom: 30 }}>
            <Image source={{ uri: data?.data?.url }} style={[{ width: '100%', height: '55%', marginBottom: 10, borderRadius: 30 }]} />
            <Text style={{ fontSize: 20, fontWeight: '700', color: 'white', margin: 5 }}>{data?.data?.title}</Text>
            <Text style={{ fontSize: 15, fontWeight: '500', color: 'white', margin: 5 }}>{data?.data?.date}</Text>
            <View style={{alignItems: 'flex-end'}}>
                <TouchableOpacity style={{ alignItems: 'center', width: 100, }} onPress={handleViews}>
                    <Text style={{ color: 'white',  fontSize: 20, fontWeight: '900' }}>View</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default TodayImage