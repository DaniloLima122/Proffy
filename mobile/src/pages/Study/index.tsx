import React, { useState } from 'react'
import { View, Text } from 'react-native';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import { ScrollView, TextInput, BorderlessButton, RectButton } from 'react-native-gesture-handler';

import styles from './styles';

import { Feather } from "@expo/vector-icons";
import api from '../../services/api';
import AsyncStorage from "@react-native-community/async-storage";
import { useFocusEffect } from '@react-navigation/native';

export default function Study() {

    const [isfilterVisible, setisfilterVisible] = useState(true);

    const [favorites, setFavorites] = useState<number[]>([])

    const [teachers, setTeachers] = useState([]);

    const [subject, setSubject] = useState("");
    const [week_day, setWeek_day] = useState("");
    const [time, setTime] = useState("");

    
    function loadFavorites(){
        
        AsyncStorage.getItem("favorites").then(response => {

            if (response) {

                const favoritedTeachers = JSON.parse(response);

                const favoritedTeachersIds = favoritedTeachers.map((teacher: Teacher) => { 

                    return teacher.id;
                });

                setFavorites(favoritedTeachersIds)
            }
        })

    }

    useFocusEffect(()=>{
        loadFavorites();
    })


    async function searchTeachers() {

        loadFavorites();

        const response = await api.get("classes", {
            params: {
                subject,
                week_day,
                time
            }
        })

        setTeachers(response.data);

        setisfilterVisible(!isfilterVisible);
    }

    return (


        <View style={styles.container}>
            <PageHeader
                title="Proffys disponíveis"
                headerRight={(
                    <BorderlessButton onPress={() => setisfilterVisible(!isfilterVisible)}>
                        <Feather name="filter" size={20} color="#04d361" />
                    </BorderlessButton>
                )}>


                {isfilterVisible && <View style={styles.searchForm}>
                    <Text style={styles.label}>Matéria</Text>
                    <TextInput
                        style={styles.input}
                        value={subject}
                        onChangeText={text => setSubject(text)}
                        placeholder="Qual a Matéria?"
                        placeholderTextColor="#c1bccc"

                    />

                    <View style={styles.inputGroup}>
                        <View style={styles.inputBlock}>
                            <Text style={styles.label}>Dia da semana</Text>
                            <TextInput

                                style={styles.input}
                                placeholder="Qual o dia?"
                                placeholderTextColor="#c1bccc"
                                value={week_day}
                                onChangeText={text => setWeek_day(text)}
                            />
                        </View>

                        <View style={styles.inputBlock}>
                            <Text style={styles.label}>Horário</Text>
                            <TextInput

                                style={styles.input}
                                placeholder="Qual o horário?"
                                placeholderTextColor="#c1bccc"
                                value={time}
                                onChangeText={text => setTime(text)}
                            />
                        </View>
                    </View>

                    <RectButton onPress={searchTeachers} style={styles.submitButton} >
                        <Text style={styles.submitButtonText}>Buscar</Text>
                    </RectButton>
                </View>}

            </PageHeader>


            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{

                    paddingHorizontal: 16,
                    paddingBottom: 24
                }}
            >
                {teachers.map((teacher: Teacher) => (

                    <TeacherItem
                        key={teacher.id}
                        teacher={teacher}
                        favorited={favorites.includes(teacher.id)}
                    />

                ))}
            </ScrollView>

        </View>
    )
}
