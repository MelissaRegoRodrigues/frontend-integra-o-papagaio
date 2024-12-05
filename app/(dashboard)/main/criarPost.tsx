import React from "react";
import Botao from "@/components/Botao";
import Input from "@/components/geral/Input";
import StyledText from "@/components/StyledText";
import { PostCreation } from "@/models/Post";
import { router, useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { StyleSheet, View, Alert, ScrollView } from "react-native";
import { criarPost } from "@/api/postService";
import useAuth from "@/hooks/useAuth";

const defaultValue: PostCreation = {
  donoId: "placeholder",
  titulo: "",
  conteudo: "",
  hashtags: [],
};

export default function CreatePostScreen() {
  const { usuario } = useAuth();
  const [form, setForm] = useState<PostCreation>(defaultValue);

  function handleInputChange<T extends keyof PostCreation>(
    field: T,
    value: PostCreation[T]
  ) {
    setForm((prevForm) => ({
      ...prevForm,
      [field]: value,
    }));
  }

  function handleSubmit() {
    if (!form.donoId || !form.titulo || !form.conteudo) {
      Alert.alert("Erro", "Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    criarPost({ ...form, donoId: usuario!.id });
    setForm(defaultValue);
    router.back();
    Alert.alert("Sucesso", "Post criado com sucesso!");
  }

  useFocusEffect(
    useCallback(() => {
      setForm(defaultValue);
    }, [])
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StyledText type="header" weight="bold" style={styles.label}>
        Título (obrigatório):
      </StyledText>
      <Input
        placeholder="Digite o título"
        value={form.titulo}
        onChangeText={(text) => handleInputChange("titulo", text)}
      />

      <StyledText type="header" weight="bold" style={styles.label}>
        Conteúdo (obrigatório):
      </StyledText>
      <Input
        placeholder="Digite o conteúdo"
        value={form.conteudo}
        onChangeText={(text) => handleInputChange("conteudo", text)}
        multiline
        style={styles.textArea}
      />

      <StyledText type="header" weight="bold" style={styles.label}>
        Hashtags (separadas por vírgula):
      </StyledText>
      <Input
        placeholder="Ex.: #react, #typescript"
        value={form.hashtags.join(", ")}
        onChangeText={(text) =>
          handleInputChange(
            "hashtags",
            text.split(",").map((tag) => tag.trim())
          )
        }
      />

      <Botao
        texto="Criar Post"
        clicar={handleSubmit}
        width={200}
        color="green"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  label: {
    marginTop: 10,
    color: "#333",
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },
});
