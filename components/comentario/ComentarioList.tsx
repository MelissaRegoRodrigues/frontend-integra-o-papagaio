import { FlatList } from "react-native";
import ComentarioItem from "./ComentarioItem";
import Comentario from "@/models/Comentario";

type ComentarioListProps = {
  comentarios: Comentario[];
};

export default function ComentarioList({ comentarios }: ComentarioListProps) {
  function renderHandler(comentario: Comentario) {
    return <ComentarioItem comentario={comentario} />;
  }

  return (
    <FlatList
      data={comentarios}
      renderItem={({ item }) => renderHandler(item)}
      keyExtractor={(comentario) => comentario.id}
      contentContainerStyle={{ padding: "2%" }}
    />
  );
}
