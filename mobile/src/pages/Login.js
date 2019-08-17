import React from 'react'
import { 
    KeyboardAvoidingView,
    Platform,
    Text, 
    StyleSheet, 
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native'

import logo from '../assets/logo.png'

const App = ({ navigation }) => {
    function handleLogin() {
        navigation.navigate('Main')
    }

    return (
        <KeyboardAvoidingView
            behavior="padding"
            enabled={Platform.OS === "ios"}
            style={styles.container}
        >
            <Image source={logo} />
            <TextInput 
                autoCapitalize="none"
                placeholder="Digite seu usuário no Github"
                placeholderTextColor="#999"
                style={styles.input}
            />
            <TouchableOpacity onPress={handleLogin} style={styles.button}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
    },
    input: {
        height: 46,
        alignSelf: 'stretch',
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 4,
        marginTop: 20,
        paddingHorizontal: 15,
    },
    button: {
        height: 46,
        alignSelf: 'stretch',
        backgroundColor: '#DF4723',
        borderRadius: 4,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontWeight: 'bold',
        color: '#FFF',
        fontSize: 16,
    }
})

export default App;