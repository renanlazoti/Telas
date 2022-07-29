import { View, Text } from "react-native";
import { styles } from "../../css/Styles.js";

export default function Header() {

    return(
        <View style={styles.header}>
            <Text style={styles.txtHeader}> Faça sua inscrição </Text>
        </View>
    )

}