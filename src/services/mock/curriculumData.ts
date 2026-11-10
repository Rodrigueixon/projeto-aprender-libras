import { Course, Unit, Lesson } from "@/types/curriculum.types";

/**
 * CAMADA TEMPORÁRIA DE DADOS PEDAGÓGICOS (MOCK LAYER)
 * -------------------------------------------------------------
 * Esta camada simula os dados fornecidos pelo Supabase até que as migrações
 * e conexões de produção estejam ativas. Contém a estrutura da Unidade 1,
 * Unidade 2 e Unidade 3 do curso "Libras Básico I".
 */

export const mockCourse: Course = {
  id: "course-libras-1",
  slug: "libras-basico-1",
  title: "Libras Básico I — Fundamentos e Comunicação",
  description: "Aprenda a se comunicar em Libras desde o alfabeto manual até diálogos cotidianos essenciais.",
  units: [
    {
      id: "unit-1",
      courseId: "course-libras-1",
      title: "Unidade 1: O Alfabeto Manual e Datilologia",
      description: "Domine as configurações de mão do alfabeto manual e entenda quando utilizar a soletração.",
      order: 1,
      color: "indigo",
      lessons: [
        {
          id: "lesson-1",
          unitId: "unit-1",
          title: "Letras A até M",
          description: "Aprenda as primeiras 13 configurações de mão da datilologia em Libras.",
          lessonType: "standard",
          status: "completed",
          xpReward: 10,
          order: 1,
          exercises: [
            {
              id: "ex-1-1",
              type: "sign_to_text",
              prompt: "Qual letra do alfabeto manual este sinal representa?",
              signGloss: "LETRA-A",
              options: [
                { id: "opt-1", text: "Letra A (Polegar ao lado do punho)", isCorrect: true, explanation: "Correto! Na letra 'A', a mão fica fechada com o polegar estendido ao lado." },
                { id: "opt-2", text: "Letra S (Polegar sobre os dedos)", isCorrect: false, explanation: "Atenção: Na letra 'S', o polegar repousa sobre a frente dos dedos dobrados." },
                { id: "opt-3", text: "Letra E", isCorrect: false, explanation: "Na letra 'E', as pontas dos dedos dobram sobre a palma." },
                { id: "opt-4", text: "Letra B", isCorrect: false, explanation: "Na letra 'B', os quatro dedos ficam estendidos e o polegar dobrado na palma." },
              ],
            },
            {
              id: "ex-1-2",
              type: "sign_to_text",
              prompt: "Identifique a letra correta com os dedos estendidos em formato de 'L':",
              signGloss: "LETRA-L",
              options: [
                { id: "opt-1", text: "Letra L", isCorrect: true, explanation: "Exato! Indicador para cima e polegar aberto a 90 graus formam a letra 'L'." },
                { id: "opt-2", text: "Letra D", isCorrect: false, explanation: "Na letra 'D', apenas o indicador aponta para cima, formando um círculo com os outros dedos." },
                { id: "opt-3", text: "Letra G", isCorrect: false, explanation: "Na letra 'G', o indicador aponta para cima e o polegar fica paralelo a ele." },
                { id: "opt-4", text: "Letra I", isCorrect: false, explanation: "Na letra 'I', apenas o dedo mínimo permanece erguido." },
              ],
            },
          ],
        },
        {
          id: "lesson-2",
          unitId: "unit-1",
          title: "Letras N até Z",
          description: "Complete o alfabeto manual com configurações dinâmicas e rotações.",
          lessonType: "standard",
          status: "available", // Lição atual ativa!
          xpReward: 10,
          order: 2,
          exercises: [
            {
              id: "ex-2-1",
              type: "sign_to_text",
              prompt: "Qual letra é representada pelo dedo indicador e médio em 'V' com o polegar entre eles?",
              signGloss: "LETRA-K",
              options: [
                { id: "opt-1", text: "Letra K (com movimento para cima)", isCorrect: true, explanation: "Muito bem! A letra 'K' tem a mesma configuração da letra 'P' e 'H', diferenciando-se pelo movimento para cima." },
                { id: "opt-2", text: "Letra V", isCorrect: false, explanation: "Na letra 'V', os dedos indicador e médio ficam abertos sem o polegar no meio." },
                { id: "opt-3", text: "Letra W", isCorrect: false, explanation: "Na letra 'W', três dedos ficam levantados (indicador, médio e anelar)." },
                { id: "opt-4", text: "Letra R", isCorrect: false, explanation: "Na letra 'R', os dedos indicador e médio ficam entrelaçados." },
              ],
            },
            {
              id: "ex-2-2",
              type: "sign_to_text",
              prompt: "Em Libras, a soletração rítmica (datilologia) deve ser usada prioritariamente para:",
              options: [
                { id: "opt-1", text: "Nomes de pessoas, lugares ou palavras sem sinal estabelecido", isCorrect: true, explanation: "Perfeito! A Libras possui sinais próprios para quase tudo; a datilologia é um recurso complementar de empréstimo." },
                { id: "opt-2", text: "Substituir todos os verbos e adjetivos", isCorrect: false, explanation: "Incorreto. Sinalizar palavra por palavra em datilologia torna a comunicação truncada e não natural." },
                { id: "opt-3", text: "Conversar apenas em locais escuros", isCorrect: false, explanation: "Incorreto." },
                { id: "opt-4", text: "Traduzir artigos 'o' e 'a'", isCorrect: false, explanation: "Incorreto. A Libras não utiliza artigos definidos ou indefinidos." },
              ],
            },
          ],
        },
        {
          id: "lesson-3",
          unitId: "unit-1",
          title: "Prática com Câmera: Letras A, B e C",
          description: "Posicione sua mão em frente à câmera para validar sua execução.",
          lessonType: "practice",
          status: "locked",
          xpReward: 15,
          order: 3,
        },
        {
          id: "lesson-4",
          unitId: "unit-1",
          title: "Avaliação da Unidade 1: Mestre do Alfabeto",
          description: "Desafio final para desbloquear a Unidade de Saudações.",
          lessonType: "checkpoint",
          status: "locked",
          xpReward: 50,
          order: 4,
        },
      ],
    },
    {
      id: "unit-2",
      courseId: "course-libras-1",
      title: "Unidade 2: Saudações e Primeiros Contatos",
      description: "Aprenda saudações essenciais, expressões de cortesia e a perguntar o nome de alguém.",
      order: 2,
      color: "emerald",
      lessons: [
        {
          id: "lesson-5",
          unitId: "unit-2",
          title: "Saudações: 'Oi', 'Tudo Bem?' e 'Bom Dia'",
          description: "Primeiras interações face a face em Libras.",
          lessonType: "standard",
          status: "locked",
          xpReward: 10,
          order: 1,
        },
        {
          id: "lesson-6",
          unitId: "unit-2",
          title: "Identidade: 'Meu Nome é...' e Sinais Pessoais",
          description: "Aprenda a convenção cultural do Batismo de Sinal na comunidade surda.",
          lessonType: "standard",
          status: "locked",
          xpReward: 10,
          order: 2,
        },
      ],
    },
    {
      id: "unit-3",
      courseId: "course-libras-1",
      title: "Unidade 3: Numerais e Quantificadores",
      description: "Diferencie números cardinais de números de contagem e valores monetários.",
      order: 3,
      color: "amber",
      lessons: [
        {
          id: "lesson-7",
          unitId: "unit-3",
          title: "Números Cardinais de 0 a 10",
          description: "Contagem básica e formatos numéricos.",
          lessonType: "standard",
          status: "locked",
          xpReward: 10,
          order: 1,
        },
      ],
    },
  ],
};

export function getMockCourse(): Course {
  return mockCourse;
}

export function getMockLesson(lessonId: string): Lesson | undefined {
  for (const unit of mockCourse.units) {
    const lesson = unit.lessons.find((l) => l.id === lessonId);
    if (lesson) return lesson;
  }
  return undefined;
}
