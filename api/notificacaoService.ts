import Notificacao from "@/app/(dashboard)/notificacoes";
import { NOTIFY } from "@/models/Notificacao";

export function getAllNotificacoes() {
    return NOTIFY;
}

export function getNotificacaoById (id: string) {
    return NOTIFY.find((Notificacao) => Notificacao.notificacaoId == id);
}