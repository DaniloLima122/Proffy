import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container:{
        backgroundColor: "#8257e5",
        flex:1,
        justifyContent:"center",
        paddingTop: 40
    },

    content:{
        flex:1,
        // borderStyle: "solid",
        // borderColor: "red",
        // borderWidth: 2,
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 100,
    
    },

    icon:{
        width:"35%",
        height: 100,
        marginBottom: 100
    },

    title:{
        fontFamily: "Archivo_400Regular",
        color: "#DBD9E4",
        fontSize:50,
        lineHeight: 77,
        maxWidth:180,
        marginBottom: 10,
        marginHorizontal: 50
    },
    
    
    subtitle: {
        color: "#6A68b0",
        fontSize: 25,
        fontFamily: "Poppins_600SemiBold",
        marginHorizontal: 50
    },


    contentText: {
        flex:1,
        backgroundColor: "#F0F0F7",
        paddingVertical: 50,
        margin: 0,
        width: "100%"
    },

    footer: {
        width: "100%",
        height:30,
        marginTop: 50,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:"center",
        paddingHorizontal: 30
        
    },

    page1Indicator: {
        width:20,
        height:5,
        marginLeft:20
    },

    nextPage: {
        transform: [{rotateZ: "0deg"}],
        width: 80,
    }




})

export default styles;