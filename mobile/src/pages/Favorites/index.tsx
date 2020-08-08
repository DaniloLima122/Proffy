import React from 'react'
import { Text, View } from 'react-native'
import styles from './styles'
import PageHeader from '../../components/PageHeader'
import { ScrollView } from 'react-native-gesture-handler'
import TeacherItem from '../../components/TeacherItem'

export default function Favorites() {
    return (
        <View style={styles.container}>
            <PageHeader title="Meus proffys favoritos"/>

            <ScrollView 
                style={styles.teacherList}
                contentContainerStyle={{

                    paddingHorizontal:16,
                    paddingBottom: 24
                }}
            >
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </ScrollView>
        </View>
    )
}
