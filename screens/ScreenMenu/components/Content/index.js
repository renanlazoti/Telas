import { Text, TouchableOpacity, View } from "react-native";
import { clickProps } from "react-native-web/dist/cjs/modules/forwardedProps";
import { styles } from "../../css/Styles.js"

export default function Content( props ) {
    
    return(
        <View style={{flex: 8}}>
            <View style={styles.content}>
                
                <TouchableOpacity onPress={() => {props.acao.navigate("ScreenOne")}}>
                    <Text>Data para Inscrição</Text>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => {props.acao.navigate("ScreenTwo")}}>
                    <Text>Bolsa de Estudo</Text>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => {props.acao.navigate("ScreenThree")}}>
                    <Text>Informações da Turma</Text>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => {props.acao.navigate("ScreenFour")}}>
                    <Text>Instruções importantes</Text>
                </TouchableOpacity>

            </View>
        </View>
    )

}