import { Pressable, PressableProps, StyleSheet, View, Image } from "react-native";
import StyledText from "../StyledText";
import { PropsWithoutRef } from "react";
import Notificacao from "@/models/Notificacao";
import { getNotificacaoById } from "@/api/notificacaoService";

type NotificacaoItemProps = {
    notificacao: Notificacao;
} & PropsWithoutRef<PressableProps>;

export default function NotificacaoItem({ notificacao, ...props }: NotificacaoItemProps) {
  const notificacaoData = getNotificacaoById(notificacao.notificacaoId);

    return(
        <Pressable
      style={({ pressed }) => [styles.rootContainer, pressed && styles.pressed]}
      {...props}
    >
       <Image
        source={require('../../assets/images/papagaio_feliz.png')}
        style={styles.image} 
      />
      <View style={styles.mainContent}>
        <View style={styles.headerContent}>
          <View
            style={[
              styles.headerText,
              { flex: 1, justifyContent: "space-between" },
            ]}
          >
            <View style={styles.headerText}>
              <StyledText weight="bold">{notificacaoData?.titulo}</StyledText>
            </View>
            <StyledText color="textoCinza">
              {notificacao.dataPublicacao.toLocaleDateString()}
            </StyledText>
          </View>
        </View>
        <StyledText>{notificacao.conteudo}</StyledText>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
    rootContainer: {
      flexDirection: "row",
      padding: "1%",
      marginVertical: "2%",
      borderBottomWidth: 1,
      alignItems: "center",
    },
    headerContent: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    headerText: {
      flexDirection: "row",
      gap: 12,
    },
    mainContent: {
      flex: 1,
      justifyContent: "center",
    },
    pressed: {
      opacity: 0.85,
    },
    image: {
      width: 56, 
      height: 56,
      borderRadius: 28,
      resizeMode: 'cover', 
    },
  });