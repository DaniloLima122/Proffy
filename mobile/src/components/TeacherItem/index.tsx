import React from 'react'
import { View, Text, Image } from 'react-native'

import styles from "./styles";
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from "../../assets/images/icons/heart-outline.png";
import unfavoriteIcon from "../../assets/images/icons/unfavorite.png";
import whatsappIcon from "../../assets/images/icons/whatsapp.png";


export default function TeacherItem() {
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image
                    style={styles.avatar}
                    source={{uri: "https://github.com/DaniloLima122.png"}}
                />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Danilo Lima</Text>
                    <Text style={styles.subject}>Matemática</Text>
                </View>
            </View>

            <Text style={styles.bio}>
            Front-end Developer JavaScript, ReactJS 
            </Text>


            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/Hora {"   "} 
                    <Text style={styles.priceValue}>R$ 80,00</Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton style={styles.favoriteButton}>
                        <Image source={heartOutlineIcon}/>
                    </RectButton>
                    
                    <RectButton style={styles.contactButton}>
                        <Image source={whatsappIcon}/>
                        <Text style={styles.contactButtonText}>Entrar em contato</Text>
                    </RectButton>
                </View>
            </View>

        </View>
    )
}
