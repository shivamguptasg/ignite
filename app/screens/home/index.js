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
            <ScrollView >
                <View style={styles.container}>
                    <Text style={styles.heading}>Gutenberg Project</Text>
                    <Text style={styles.description}>A social cataloging website that allows you to freely search its database of books, annotations, and reviews.</Text>
                    <Button title='FICTION' />
                    <Button title='DRAMA' />
                    <Button title='HUMOR' />
                    <Button title='POLITICS' />
                    <Button title='PHILOSOPHY' />
                    <Button title='HISTORY' />
                    <Button title='ADVENTURE' />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}