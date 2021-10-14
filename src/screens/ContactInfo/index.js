import React from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { deleteContact, getContacts } from '../../../store/action';

function ContactInfo({ route, navigation }) {
    const { details } = route.params
    const dispatch = useDispatch()

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const onDeleteHandler = async (id) => {

        await dispatch(deleteContact(id))
        await dispatch(getContacts())

        navigation.navigate('Home')
    }

    return (
        <View style={styles.container}>
            <Image
                source={{
                    uri:details.photo
                }}
                style={styles.image}
            />
            <View style={styles.info}>
                <Text style={styles.contactName}>{capitalizeFirstLetter(details.firstName) + ' ' + capitalizeFirstLetter(details.lastName)}  </Text>
                <Text>Age: {details.age}</Text>
            </View>
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate('Edit Contact', { data: details})}>
                    <Ionicons name="create-outline" color="#000" size={32}/> 
                </TouchableOpacity>
                <TouchableOpacity style={styles.icon} onPress={() => onDeleteHandler(details.id)}>
                    <Ionicons name="trash" color="#000" size={32}/> 
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        height:80,
        width:80,
        borderRadius:50,
        marginTop: 20,
    },
    info: {
        textAlign: 'center',
        alignItems: 'center'
    },
    contactName: {
        fontSize:24,
        fontWeight: 'bold'
    },
    btnContainer:{
        display: 'flex',
        flexDirection: 'row',
    },
    icon: {
        margin:10,
    }
})
export default ContactInfo
