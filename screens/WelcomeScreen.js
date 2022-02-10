import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const WelcomeScreen = (props) => {

    const navigateToLogin = () => {
        props.navigation.navigate('LoginScreen', {
            firstName : "Stéphane",
            lastName : "PATERNA",
            age : 46,
        });
    }

    return (
        <View style={styles.container}>
            <Text style={{color:'white', fontFamily:'Supermercado'}}>
                Welcome Screen
            </Text>
            <TouchableOpacity onPress={navigateToLogin}>
                <View>
                    <Text style={styles.button}>Login</Text>
                </View>
            </TouchableOpacity>
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
    button:{
        backgroundColor:'white', 
        color:'black',
        width : 60,
        textAlign:'center',
        padding:5,
        borderRadius:5,
        margin:10,
    }
})


export default WelcomeScreen;