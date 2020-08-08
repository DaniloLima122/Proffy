import React from 'react'
import { View, Text, Image, Linking } from 'react-native'

import styles from "./styles";
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from "../../assets/images/icons/heart-outline.png";
import unfavoriteIcon from "../../assets/images/icons/unfavorite.png";
import whatsappIcon from "../../assets/images/icons/whatsapp.png";


export interface Teacher {

    avatar: string;
    bio: string;
    cost: number;
    id: number;
    name: string;
    subject: string;
    whatsapp: string
}

interface teacherPropTypes{
    teacher: Teacher
}

const TeacherItem: React.FC<teacherPropTypes> = ({teacher}) => {

    function linkToWhatsApp(){

        Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`)
    }

    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image
                    style={styles.avatar}
                    source={{uri: teacher.avatar}}
                />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>{teacher.name}</Text>
                    <Text style={styles.subject}>{teacher.subject}</Text>
                </View>
            </View>

            <Text style={styles.bio}>
            {teacher.bio}
            </Text>


            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/Hora {"   "} 
                    <Text style={styles.priceValue}>R$ {teacher.cost.toFixed(2).replace(".",",")}</Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton style={[styles.favoriteButton,styles.favorited]}>
                        {/* <Image source={heartOutlineIcon}/> */}
                        <Image source={unfavoriteIcon}/>
                    </RectButton>
                    
                    <RectButton onPress={linkToWhatsApp} style={styles.contactButton}>
                        <Image source={whatsappIcon}/>
                        <Text style={styles.contactButtonText}>Entrar em contato</Text>
                    </RectButton>
                </View>
            </View>

        </View>
    )
}


export default TeacherItem;