import React, { ReactNode } from 'react';
import { View, Image, Text } from 'react-native';
import { BorderlessButton } from "react-native-gesture-handler";

import { useNavigation } from '@react-navigation/native';

import styles from './styles';

import backIcon from "../../assets/images/icons/back.png";
import logoImg from "../../assets/images/logo.png";

interface PageheaderProps {
    title: string;
    headerRight?: ReactNode;
}

const PageHeader: React.FC<PageheaderProps> = ({ title, headerRight, children }) => {


    const navigation = useNavigation();

    function goBacktoLanding() {

        navigation.navigate("Landing");
    }

    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <BorderlessButton onPress={goBacktoLanding}>
                    <Image source={backIcon} resizeMode="contain" />
                </BorderlessButton>

                <Image source={logoImg} resizeMode="contain" />
            </View>

            <View style={styles.header}>

                <Text style={styles.title}>{title}</Text>
                {headerRight}
            </View>


            {children}


        </View>
    )
}

export default PageHeader;
