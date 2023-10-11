import React, { useEffect, useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import Header from '../../components/Header'
import fetchApi from '../../utils/fetch'
import TodayImage from '../../components/TodayImage'
import { format, sub } from "date-fns";

const Home = () => {

    const [image, setImage] = useState();
    const [fiveDayImagesInfo, setFiveDayImagesInfo] = useState([])

    useEffect(() => {
    
        
     

        const load5DayImages = async () => {
            try {
                const date = new Date();
                const todayDate = await format(date, 'yyyy-MM-dd')
                const fiveDaysAgo = await format(sub(date, {days: 25}), 'yyyy-MM-dd')
                const fiveDayImages = await fetchApi(`&start_date=${fiveDaysAgo}&end_date=${todayDate}`);
                setFiveDayImagesInfo(fiveDayImages)
                console.log('====================aqui================');
                await console.log(fiveDayImages);
                console.log('====================================');
            
            } catch (error) {
                console.error(error)
            }
        }

        load5DayImages() 
    
        return () => {
          
        }

       
    }, [])


    return (


        <View style={styles.container}>
            <Header></Header>
            <ScrollView>
              
                {
                    fiveDayImagesInfo.reverse().map( (res, index) => 
                       <TodayImage data={res} key={index}></TodayImage>
                     )
                }

            </ScrollView>

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue'
    },
});

export default Home