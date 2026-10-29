// Todo o conteúdo do portfólio fica aqui — edite este arquivo para atualizar o site.

export const profile = {
  name: 'Luan Martins Basilio',
  shortName: 'Luan Basilio',
  role: 'Desenvolvedor de Software',
  location: 'Praia Grande, SP',
  email: 'luan_martins_basilio@outlook.com',
  phone: '(13) 99130-9010',
  phoneLink: 'https://wa.me/5513991309010',
  roles: ['Desenvolvedor Web', 'Estudante de Ciência da Computação', 'Entusiasta de Cibersegurança', 'Ex-militar do Exército Brasileiro'],
  links: {
    github: 'https://github.com/LuanMBasilio',
    linkedin: 'https://www.linkedin.com/in/luanmbasilio/',
    tryhackme: 'https://tryhackme.com/p/LittleTyrant',
  },
}

export const about = [
  'Sou estudante do 8º semestre de Ciência da Computação na UNIP e técnico em Informática para Internet pela ETEC. Gosto de transformar problemas em código limpo e funcional — de bots que automatizam comunidades a sistemas de visão computacional.',
  'Antes da tecnologia virar profissão, servi no Exército Brasileiro, onde aprendi disciplina, trabalho em equipe e a manter a calma sob pressão. Hoje levo essa mesma rigidez de processo para o desenvolvimento de software e para o estudo de segurança da informação no TryHackMe.',
]

export const stats = [
  { value: '8º', label: 'semestre de CC' },
  { value: '5+', label: 'projetos públicos' },
  { value: '4', label: 'linguagens' },
  { value: 'EN', label: 'inglês avançado' },
]

export const skillGroups = [
  { title: 'Linguagens', icon: '{ }', items: ['Java', 'C#', 'Python', 'JavaScript', 'SQL'] },
  { title: 'Web', icon: '</>', items: ['HTML5', 'CSS3', 'React', 'Node.js', 'Streamlit'] },
  { title: 'Dados', icon: '⛁', items: ['Modelagem relacional', 'Consultas SQL', 'Normalização', 'JSON'] },
  { title: 'Fundamentos', icon: '∑', items: ['Estruturas de dados', 'Algoritmos', 'POO', 'Boas práticas'] },
  { title: 'Infra & Segurança', icon: '⌁', items: ['Redes TCP/IP', 'LAN / Wi-Fi', 'TryHackMe', 'Softwares de segurança'] },
  { title: 'Ferramentas', icon: '⚙', items: ['Git & GitHub', 'OpenCV', 'discord.js', 'Java Swing'] },
]

export const projects = [
  {
    id: 'fp',
    title: 'FP-Matcher',
    tagline: 'Correspondência de impressões digitais',
    description:
      'Aplicação web em Streamlit que compara duas digitais usando visão computacional: pré-processamento com limiarização de Otsu, extração de pontos-chave com ORB e matching por força bruta com distância de Hamming e teste de razão de Lowe.',
    tags: ['Python', 'OpenCV', 'Streamlit', 'Plotly'],
    category: 'python',
    repo: 'https://github.com/LuanMBasilio/FP-Matcher',
    demo: 'fingerprint',
    featured: true,
  },
  {
    id: 'alice',
    title: 'Alice Bot',
    tagline: 'Bot de Discord para comunidade',
    description:
      'Bot auxiliar do regimento Selva com mais de 15 comandos slash: sistema de encomendas e vendas com fila de pedidos, enquetes, sugestões, denúncias, moderação e utilidades. Persistência em JSON e arquitetura modular por comandos e eventos.',
    tags: ['JavaScript', 'Node.js', 'discord.js'],
    category: 'javascript',
    repo: 'https://github.com/LuanMBasilio/Alice-Bot',
    demo: 'chat',
    featured: true,
  },
  {
    id: 'bj',
    title: 'BlackJack Card Counter',
    tagline: 'Contador Hi-Lo com true count',
    description:
      'Ferramenta em Java que implementa o sistema Hi-Lo de contagem de cartas, calculando a contagem corrente e a contagem real (true count) a partir do número de baralhos restantes. Teste a lógica ao lado!',
    tags: ['Java', 'POO', 'Probabilidade'],
    category: 'java',
    repo: 'https://github.com/LuanMBasilio/BlackJackCardCounter',
    demo: 'cards',
  },
  {
    id: 'sort',
    title: 'Sorteio & Ordenação',
    tagline: 'Benchmark de algoritmos',
    description:
      'Gera 250 números aleatórios e compara o desempenho de Bubble Sort, Insertion Sort e Quick Sort medindo o tempo de execução em nanossegundos. Veja os algoritmos em ação no visualizador.',
    tags: ['Java', 'Algoritmos', 'Complexidade'],
    category: 'java',
    repo: 'https://github.com/LuanMBasilio/Sorteio',
    demo: 'sort',
  },
  {
    id: 'aps',
    title: 'APS — Jogo 2D',
    tagline: 'Jogo arcade em Java Swing',
    description:
      'Jogo 2D desenvolvido como Atividade Prática Supervisionada: o jogador se move pelo cenário coletando pontos coloridos que correspondem a um alvo sorteado, com detecção de colisão AABB, cronômetro de 30 s e placar.',
    tags: ['Java', 'Swing', 'Game Dev'],
    category: 'java',
    repo: 'https://github.com/LuanMBasilio/APS',
    demo: 'game',
  },
]

// Versão revisada do currículo
export const resume = {
  headline: 'Desenvolvedor de Software Júnior | Estudante de Ciência da Computação',
  summary:
    'Estudante do 8º semestre de Ciência da Computação (conclusão prevista em 2026) e técnico em Informática para Internet, com projetos práticos em Java, Python e JavaScript — incluindo visão computacional, bots com Node.js e jogos 2D. Experiência no Exército Brasileiro que consolidou disciplina, cumprimento de procedimentos e trabalho em equipe sob pressão. Busco uma oportunidade de estágio ou posição júnior em desenvolvimento de software, onde possa entregar código de qualidade e crescer tecnicamente.',
  experience: [
    {
      role: 'Soldado EV — Intendência',
      org: 'Exército Brasileiro · 2º GAAAe',
      place: 'Praia Grande, SP',
      period: 'mar/2023 — jan/2024',
      bullets: [
        'Executei inspeções diárias e manutenção preventiva da frota de viaturas, assegurando a disponibilidade operacional da unidade.',
        'Apliquei com rigor normas de segurança, controle e logística de materiais, seguindo procedimentos padronizados.',
        'Operei e mantive equipamentos de artilharia antiaérea, em atividades que exigiam precisão e atenção a detalhes.',
        'Atuei em equipe sob pressão e prazos rígidos, desenvolvendo disciplina, responsabilidade e resiliência.',
      ],
    },
  ],
  education: [
    {
      course: 'Bacharelado em Ciência da Computação',
      org: 'Universidade Paulista (UNIP) — Santos, SP',
      period: 'Cursando 8º semestre · Conclusão prevista: 2026',
    },
    {
      course: 'Técnico em Informática para Internet',
      org: 'ETEC de Praia Grande — Praia Grande, SP',
      period: 'Concluído em 2021',
    },
  ],
  projects: [
    { name: 'FP-Matcher', text: 'Comparador de digitais com OpenCV (ORB + Hamming) e interface em Streamlit.' },
    { name: 'Alice Bot', text: 'Bot de Discord em Node.js com 15+ comandos, sistema de pedidos e moderação.' },
    { name: 'Sorteio', text: 'Benchmark de Bubble, Insertion e Quick Sort com medição em nanossegundos.' },
  ],
  skills: [
    { label: 'Linguagens', value: 'Java, C#, Python, JavaScript, SQL' },
    { label: 'Web', value: 'HTML, CSS, React, Node.js, Streamlit' },
    { label: 'Banco de dados', value: 'Modelagem relacional, consultas SQL, normalização' },
    { label: 'Fundamentos', value: 'Estruturas de dados, algoritmos, POO, boas práticas de código' },
    { label: 'Infraestrutura', value: 'Redes (LAN, Wi-Fi, TCP/IP), instalação e configuração de sistemas, drivers e softwares de segurança' },
    { label: 'Ferramentas', value: 'Git, GitHub, OpenCV, discord.js' },
  ],
  languages: ['Português — nativo', 'Inglês — avançado'],
  extras: ['Estudo contínuo de cibersegurança na plataforma TryHackMe (perfil LittleTyrant)'],
}

export const timeline = [
  { year: '2021', title: 'Técnico em Informática para Internet', org: 'ETEC de Praia Grande', text: 'Primeiro contato profissional com desenvolvimento web, lógica e banco de dados.' },
  { year: '2023', title: 'Soldado EV — Intendência', org: 'Exército Brasileiro · 2º GAAAe', text: 'Manutenção de viaturas, logística e equipamentos antiaéreos. Disciplina e trabalho em equipe.' },
  { year: '2026', title: 'Bacharelado em Ciência da Computação', org: 'UNIP — Santos', text: 'Estruturas de dados, algoritmos, POO, redes e engenharia de software. Conclusão prevista para 2026.' },
  { year: 'Agora', title: 'Projetos & Cibersegurança', org: 'GitHub · TryHackMe', text: 'Construindo projetos práticos e estudando segurança ofensiva e defensiva.' },
]
