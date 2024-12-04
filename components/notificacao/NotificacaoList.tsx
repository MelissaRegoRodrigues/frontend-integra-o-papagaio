import React from "react";
import Notificacao, { NOTIFY } from "@/models/Notificacao";
import { FlatList } from "react-native";
import NotificacaoItem from "./NotificacaoItem";

export default function NotificacaoList() {
  function renderHandler(notificacao: Notificacao) {
    return <NotificacaoItem notificacao={notificacao} />;
  }

  return (
    <FlatList
      data={NOTIFY}
      renderItem={({ item }) => renderHandler(item)}
      keyExtractor={(notificacao) => notificacao.notificacaoId}
      contentContainerStyle={{ padding: "2%" }}
    />
  );
}
