import React, {useState} from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux'
import { getContacts, updateContact } from '../../../store/action'

function EditContact ({route, navigation}) {
    const { data } = route.params

    const dispatch = useDispatch()

    const [firstName, setFirstName] = useState(data.firstName)
    const [lastName, setLastName] = useState(data.lastName)
    const [ages, setAge] = useState(data.age.toString())
    const [photo, setPhoto] = useState(data.photo)

    const onSubmitHandler = async () => {
        const age = +ages
        const contact = {
            firstName,
            lastName,
            age,
            photo
        }

        await dispatch(updateContact(contact, data.id))
        await dispatch(getContacts())

        navigation.navigate('Home')
    }
    
    return (
        <View>
            <Text style={styles.inputText}>First Name</Text>
            <TextInput style={styles.input} onChangeText={setFirstName} value={firstName} placeholder="Enter Your First Name..."/>
            
            <Text style={styles.inputText}>Last Name</Text>
            <TextInput style={styles.input} onChangeText={setLastName} value={lastName} placeholder="Enter Your Last Name..."/>
            
            <Text style={styles.inputText}>Age</Text>
            <TextInput style={styles.input} onChangeText={setAge} value={ages} keyboardType="numeric" placeholder="Enter Your Agee..."/>
            
            <Text style={styles.inputText}>Photo Link</Text>
            <TextInput style={styles.input} onChangeText={setPhoto} value={photo} placeholder="Enter Photo Link..."/>
            
            <TouchableOpacity onPress={onSubmitHandler} style={styles.buttonSave}>
                <Text style={styles.btnText}>Save Contact</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    inputText:{
        marginLeft:10,
        marginTop:5,
        fontSize:18,
    },
    input: {
        borderWidth:1,
        margin:10,
        borderRadius:5,
        height:48,
        fontSize:18,
        padding:5,
        paddingLeft:10,
    },
    buttonSave:{
        backgroundColor: '#DBD0C0',
        height:44,
        margin:10,
        borderRadius:10,
    },
    btnText: {
        textAlign: 'center',
        fontSize:18,
        paddingTop:10,
        fontWeight: 'bold'
    }
})


export default EditContact