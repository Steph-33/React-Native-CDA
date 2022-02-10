import {View, Text, StyleSheet, Image, Button} from 'react-native';
import { useEffect, useState } from 'react';
import {useAsyncStorage} from '@react-native-async-storage/async-storage'

const HomeScreen = (props) => {

    const [user, setUser] = useState({});

    useEffect(() => {
        useAsyncStorage('userDetails').getItem()
        .then((userDetails) => {
            setUser(JSON.parse(userDetails));
        })
        .catch((error) => {
            console.log('userDetails Error ===========> ', error);
        })
    }, [])

    const navigateToCountries = () => {
        props.navigation.navigate('CountriesScreen')
    }

    return(
        <View style={styles.container}>
            <Image source={{uri : user.picture}} style={styles.userPicture}/>
            <Text style={styles.text}>
                Welcome {user.firstName} {user.lastName} ! 
            </Text>
            <Text style={{fontSize : 13, color : 'white', marginBottom:15}}>
                Logged with following email :  {user.email} 
            </Text>
            <Button
                title="See Countries"
                onPress={() => navigateToCountries()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1, 
        backgroundColor:'black',
        justifyContent:'center',
        alignItems:'center',
    }, 
    text : {
        color:'white', 
        fontFamily:'Tactile', 
        fontSize:20
    },
    userPicture : {
        width : 100, 
        height : 100, 
        marginBottom : 15,
        borderRadius : 50
    }
})

export default HomeScreen;