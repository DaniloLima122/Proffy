import React from 'react'
import { View } from 'react-native';
import styles from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import { ScrollView } from 'react-native-gesture-handler';

export default function Study() {
    return (
        <View style={styles.container}>
            <PageHeader title="Proffys disponíveis" />


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
