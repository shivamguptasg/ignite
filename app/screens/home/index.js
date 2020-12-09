import React from 'react';
import {
    ScrollView,
    SafeAreaView,
    View,
    Text,
} from 'react-native';
import Button from '../../components/button'
import styles from './style'
export default function Home(props) {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={{ flex: 1 }}>
                <View style={styles.container}>
                    <Text style={styles.heading}>Gutenberg Project</Text>
                    <Text style={styles.description}>A social cataloging website that allows you to freely search its database of books, annotations, and reviews.</Text>
                    <Button title='FICTION' icon='Fiction' onPress={() => props.navigation.navigate('BookList', { title: 'Fiction' })} />
                    <Button title='DRAMA' icon='Drama' onPress={() => props.navigation.navigate('BookList', { title: 'Drama' })} />
                    <Button title='HUMOR' icon='Humour' onPress={() => props.navigation.navigate('BookList', { title: 'Humour' })} />
                    <Button title='POLITICS' icon='Politics' onPress={() => props.navigation.navigate('BookList', { title: 'Politics' })} />
                    <Button title='PHILOSOPHY' icon='Philosophy' onPress={() => props.navigation.navigate('BookList', { title: 'Philosophy' })} />
                    <Button title='HISTORY' icon='History' onPress={() => props.navigation.navigate('BookList', { title: 'History' })} />
                    <Button title='ADVENTURE' icon='Adventure' onPress={() => props.navigation.navigate('BookList', { title: 'Adventure' })} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}