import { useEffect } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

WebBrowser.maybeCompleteAuthSession();

const LoginScreen = (props) => {

    const [request, response, promptAsync] = Google.useAuthRequest({
        expoClientId : '924327307269-0270e9dhuec71fa7lonnoubo2sttke8r.apps.googleusercontent.com',
        webClientId : '924327307269-0270e9dhuec71fa7lonnoubo2sttke8r.apps.googleusercontent.com'
    });

    useEffect(() => {
        console.log('response ==========> ', response)
        if(response?.type === 'success'){
            const {authentication} = response;
            const accessToken = authentication.accessToken;
            axios.get(`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${accessToken}`)
                .then((response) => {
                    console.log('response ==========> ', response)
                    const userDetails = response.data;
                    const {given_name, family_name, email, picture} = userDetails;
                    try{
                        AsyncStorage.setItem('userDetails', JSON.stringify({
                            firstName : given_name,
                            lastName : family_name,
                            email : email,
                            picture : picture,
                        }))
                        .then(() => {
                            console.log('Stockage des informations users dans le AsyncStorage')
                            props.navigation.navigate('HomeScreen')
                        })
                        .catch((e) => {
                            console.log("Erreur d'enregistrement dans le AsyncStorage : ", e);
                        })
                    }
                    catch(e){
                        console.log(e);
                    }
                })
                .catch((error) => {
                    console.log('error ============> ', error);
                })
        }
    }, [response])

    return(
        <View style={styles.container}>
            <Text style={{color:'white'}}>
                Login Screen
            </Text>
            <Button
                disabled={!request}
                title="Login with Google"
                onPress={() => promptAsync()}
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

export default LoginScreen;