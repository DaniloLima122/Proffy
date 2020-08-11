import React, { useState } from 'react'
import { View, Text, TimePickerAndroid, KeyboardAvoidingView, Platform } from 'react-native';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import { ScrollView, TextInput, BorderlessButton, RectButton } from 'react-native-gesture-handler';

import styles from './styles';

import { Feather } from "@expo/vector-icons";
import api from '../../services/api';
import AsyncStorage from "@react-native-community/async-storage";
import { useFocusEffect } from '@react-navigation/native';
import { Picker } from '@react-native-community/picker';

export default function Study() {

    const [isfilterVisible, setisfilterVisible] = useState(true);

    const [favorites, setFavorites] = useState<number[]>([])

    const [teachers, setTeachers] = useState([]);


    const [subject, setSubject] = useState("");
    const [week_day, setWeek_day] = useState(0);
    const [time, setTime] = useState("");


    const Picker_subject_data = [

        { label: "Matemática", value: "Matemática" },
        { label: "Física", value: "Física" },
        { label: "Química", value: "Química" },
        { label: "Geografia", value: "Geografia" },
        { label: "História", value: "História" },
        { label: "Artes", value: "Artes" },
        { label: "Português", value: "Português" },
        { label: "Inglês", value: "Inglês" },
        { label: "Biologia", value: "Biologia" },
        { label: "Educação Física", value: "Educação Física" },
        { label: "Filosofia", value: "Filosofia" },
        { label: "Sociologia", value: "Sociologia" },
    ]
    const Picker_days_data = [

        { label: "Domingo", value: 0 },
        { label: "Segunda-feira", value: 1 },
        { label: "Terça-feira", value: 2 },
        { label: "Quarta-feira", value: 3 },
        { label: "Quinta-feira", value: 4 },
        { label: "Sexta-feira", value: 5 },
        { label: "Sábado", value: 6 },
    ]



    function loadFavorites() {

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

    useFocusEffect(() => {
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

                        <View style={styles.selectPicker}>
                            <Picker
                                style={styles.picker}
                                selectedValue={subject}
                                onValueChange={itemValue => { setSubject(itemValue.toString()); }}

                            >

                                {Picker_subject_data.map(({ label, value }) => {

                                    return (

                                        <Picker.Item
                                            key={label}
                                            label={label}
                                            value={value}

                                        />
                                    )
                                })}
                            </Picker>
                        </View>

                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Dia da semana</Text>

                                <View style={styles.selectPicker}>
                                    <Picker
                                        style={styles.picker}
                                        selectedValue={Picker_days_data[week_day].value}
                                        onValueChange={(dayValue) => { setWeek_day(dayValue) }}
                                    >

                                        {Picker_days_data.map(({ label, value }) => {

                                            return (

                                                <Picker.Item
                                                    key={label}
                                                    label={label}
                                                    value={value}

                                                />
                                            )
                                        })}
                                    </Picker>
                                </View>

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
