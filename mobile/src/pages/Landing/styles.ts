import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container:{
        backgroundColor: "#8257e5",
        flex:1,
        justifyContent:"center",
        padding:40,
    },
    
    banner:{
        width: "100%",
        resizeMode: "contain",
        marginTop:40
    },

    title:{
        fontFamily: "Poppins_400Regular",
        color: "#fff",
        fontSize:20,
        lineHeight: 30,
        marginTop:50,
    },

    titleBold:{
        fontFamily: "Poppins_600SemiBold"
    },

    buttonContainer:{
        flexDirection:"row",
        marginTop:40,
        justifyContent: "space-between"
    },

    button:{
        height:150,
        width:"48%",
        backgroundColor: "#333",
        borderRadius: 8,
        padding: 24,
        justifyContent: "space-between"        
    },

    buttonPrimary:{
        backgroundColor:"#9371f5"
    },

    buttonSecondary:{
        backgroundColor:"#04d361"
    },

    buttonText:{
         fontFamily: "Archivo_700Bold",
         color: "#fff",
         fontSize:18
    },

    totalConnections:{
        fontFamily: "Poppins_400Regular",
        color: "#d4c2ff",
        fontSize:12,
        lineHeight:20,
        marginTop:40,
        maxWidth:140
    }

})

export default styles;