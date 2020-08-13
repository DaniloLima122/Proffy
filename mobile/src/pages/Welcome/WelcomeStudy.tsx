import React from 'react'
import { View, Text, ImageBackground, Image } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';

import giveClassesBgImage from "../../assets/images/give-classes-background.png";

import page1 from "../../assets/images/icons/welcomepage1.png";

import next from "../../assets/images/icons/arrow.png";

import studyIcon from "../../assets/images/icons/study.png";

import styles from "./styles";

export default function WelcomeStudy() {

    const navigate = useNavigation();


    return (

        <View style={styles.container}>
            <ImageBackground
                resizeMode="contain"
                source={giveClassesBgImage}
                style={styles.content}
            >

                <Image source={studyIcon} style={styles.icon} />

                <View style={styles.contentText}>
                    <Text style={styles.title}>01.</Text>
                    <Text style={styles.subtitle}>Encontre vários professores para ensinar você</Text>

                    <View style={styles.footer}>
                        <Image source={page1} style={styles.page1Indicator} />
                        <RectButton onPress={() => navigate.navigate("WelcomeGV")}>
                            <Image source={next} style={styles.nextPage} />
                        </RectButton>

                    </View>
                </View>
            </ImageBackground>



        </View>

    )
}
