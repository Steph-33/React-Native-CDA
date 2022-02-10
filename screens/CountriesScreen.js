import React, { useEffect, useState } from "react";
import {View, Flatlist, Text, StyleSheet} from 'react-native';

const CountriesScreen = (props) => {
  
    const [countries, setCountries] = useState([]);

    useEffect(() => {

    }, []);
  
    return (
        <View style={styles.container}>
            <Text style={{color:'white', fontFamily:'Supermercado', fontSize : 20}}>Countries</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1, 
        backgroundColor:'black',
        justifyContent:'center',
        alignItems:'center',
    }


})

export default CountriesScreen;