export default interface Notificacao{
    notificacaoId: string;
    titulo: string;
    nomeDono: string;
    conteudo: string;
    dataPublicacao: Date;
} 

export const NOTIFY: Notificacao[] = [
    {
        notificacaoId: "1",
        titulo: "FELIPE AMORIM!",
        nomeDono: "CHOQUEI",
        conteudo: "Cantor de Música do TikTok Felipe Amorim",
        dataPublicacao: new Date(),
    },
    {
        notificacaoId: "2",
        titulo: "MICHAEL JACKSON REVIVEU!",
        nomeDono: "CHOQUEI",
        conteudo: "O cantor até então declarado como morto foi visto recentemente na festa do arrombado Diddy",
        dataPublicacao: new Date(),
    },
    {
        notificacaoId: "3",
        titulo: "ALUNOS DA UPE SE REVOLTAM",
        nomeDono: "CHOQUEI",
        conteudo: "Após um docente da Universidade de Pernambuco cobrar coisas absurdas em sua avaliação, alunos se revoltam e jogam uma cadeira nele",
        dataPublicacao: new Date(),
    },
]