import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container:{
        backgroundColor: "#f0f0f7",
        flex:1
    },

    content:{
        flex:1,
        justifyContent: "center"
    },

    teacherList:{
        marginTop: -40
    },

    searchForm: {
        marginBottom: 20,
    },

    label: {
        color: "#d4cdff",
        fontFamily: "Poppins_400Regular"
    },

    inputGroup: {
        flexDirection: "row",
        justifyContent: "space-between"
    },

    inputBlock: {

        width:"48%"
    },

    input:{
        height:54,
        backgroundColor: "#fff",
        borderRadius: 8,
        justifyContent: "center",
        paddingHorizontal:16,
        marginTop: 4,
        marginBottom: 16,
        fontSize:14,
        
    },

    submitButton:{
        backgroundColor: "#04d361",
        flexDirection: "row",
        height: 56,
        width: "100%",
        borderRadius: 8,
        justifyContent: "center",
        alignItems:"center",
        marginRight: 9,
    },

    submitButtonText: {
        color:"#fff"
    },
    
    selectPicker: {
        height: 54,
        backgroundColor: "#fff",
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 1,
        marginTop: 7,
        marginBottom: 16,

    },

    picker: {
        color: "#ccc",
    },

})
export default styles;