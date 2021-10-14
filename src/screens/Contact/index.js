import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { getContacts } from '../../../store/action'

function Contact() {
    const navigation = useNavigation()

    const dispatch = useDispatch()

    const {contacts} = useSelector(state => state)

    useEffect(() => {
        dispatch(getContacts())
    }, [dispatch])

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return(
        <View>
        {
            contacts.map((contact) => {
            return (
                <TouchableOpacity key={contact.id} onPress={() => navigation.navigate('Contact Info', {details: contact})}>
                    <View  style={styles.contact}>
                    <Image
                        source={{
                            uri:contact.photo
                        }}
                        style={styles.image}
                    />
                    <View style={styles.info}>
                        <Text style={styles.contactName}>{capitalizeFirstLetter(contact.firstName) + ' ' + capitalizeFirstLetter(contact.lastName)}</Text>
                        <Text style={styles.age}>Age:{ contact.age}</Text>
                    </View>
                    </View>
                </TouchableOpacity>
            )
            })
        }
        </View>
    )
}

const styles = StyleSheet.create({
  contact: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft:10,
    marginBottom:5,
    marginRight:10,
    backgroundColor: '#ffff',
    borderTopLeftRadius:50,
    borderBottomLeftRadius:50,
    borderTopRightRadius:15,
    borderBottomRightRadius:15,
  },
  contactName: {
    fontSize:24,
    marginLeft:10,
    paddingTop:5,
  },
  age: {
    marginLeft:10,
  },
  image: {
      width:64,
      height:64,
      borderRadius:50,
      borderColor:'#DBD0C0',
      borderWidth:2,
  }
})

export default Contact