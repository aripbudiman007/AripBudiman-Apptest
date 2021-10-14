import React, { useEffect } from "react"
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Contact from "../Contact"
import { Ionicons } from '@expo/vector-icons';
import { useDispatch } from "react-redux";
import { getContacts } from "../../../store/action";

function Home({navigation}){
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getContacts())
	})

	return (
		<SafeAreaView>
			<View>
				<View style={styles.headingContainer}>
					<Text style={styles.heading}>Contacts</Text>
					<TouchableOpacity style={styles.iconAdd} onPress={() => navigation.navigate('Add Contact')}>
						<Ionicons name="add" color="#000" size={36}/> 
					</TouchableOpacity>
				</View>
				<Contact/>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	headingContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	heading: {
		fontSize:36,
		fontWeight: 'bold',
		marginTop:10,
		marginLeft:10,
		marginBottom:20,
	},
	iconAdd: {
		margin: 10,
	},
	subheading: {
		fontSize:16,
		marginLeft:10,
	}
})

export default Home
