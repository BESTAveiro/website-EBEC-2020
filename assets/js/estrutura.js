$(document).ready(function () {

    var portuguese = {
        navbar: {
            img: "assets/img/logos/roldana-branca.png",
            img2: "assets/img/logos/best-aveiro-white.png",
            lingua: "EN",
            page: "index-en.html",
            dropdowns: [
                {
                    title: "Sobre a EBEC",
                    menu: ["EBEC Aveiro", "EdiÃ§Ãµes Anteriores", "Programa", "InscriÃ§Ã£o", "Testemunhos"]
                },
                {
                    title: "Mais sobre a EBEC",
                    menu: ["FAQ", "JÃºri", "Parceiros", "Equipa", "Torne-se nosso Parceiro", "Contactos"]
                },
                {title: "A OrganizaÃ§Ã£o", menu: ["Sobre o BEST Aveiro", "InformaÃ§Ãµes"]}
            ]

        },
        entrada: {
            logo: "assets/img/logos/ebec-aveiro.png",
            title: "14, 15, 16, 17 e 20 de marÃ§o<br class='hidden-xs'> de 2019"
        },
        ebecAveiro: {
            sectionHeading: "EBEC Aveiro",
            icones: [
                {title: "Ronda Local", classe: "fa-map-pin"},
                {title: "Modalidades", classe: "fa-tools"},
                {title: "FormaÃ§Ã£o", classe: "fa-chalkboard-teacher"},
                {title: "Ronda Nacional", classe: "fa-award"},
            ],
            seccoes: {
                seccao1: {
                    ps: [
                        "Ã‰ com prazer que o <b style='color:orange'>BEST Aveiro</b> organiza anualmente " +
                        "uma das 88 fases locais do projeto EBEC.",
                        "Com a nona ediÃ§Ã£o da competiÃ§Ã£o a ocorrer em <b style='color:orange'>marÃ§o de 2019</b>, evento que tem vindo a contar com um" +
                        "grande nÃºmero de participantes em todas as ediÃ§Ãµes, consideramo-lo um dos eventos de maior destaque" +
                        "do BEST Aveiro. Direcionado aos alunos da Universidade de Aveiro, a EBEC Aveiro pretende ser um" +
                        "momento onde criatividade, desafio, energia, flexibilidade e espÃ­rito de equipa sÃ£o postos em prÃ¡tica.",
                        "No sentido de promover uma melhor relaÃ§Ã£o entre estudantes e empresas, a EBEC Aveiro organizarÃ¡," +
                        "Ã  parte da competiÃ§Ã£o, uma <span style='color:orange'>feira de empresas</span> seguida" +
                        "de um cocktail network, que irÃ£o ocorrer no dia 14 de marÃ§o.",
                        "Para qualquer dÃºvida, podes-se informar na secÃ§Ã£o FAQ ou nos contactar por meio da nossa equipa" +
                        "ou por meios da secÃ§Ã£o de informaÃ§Ãµes."
                    ],
                    subscribe: "Inscreve-te jÃ¡!",
                    img: "assets/img/event/ebec-aveiro.png"
                },
                seccao2: {
                    title: "Modalidades",
                    modalidades: [
                        {
                            title: "Case Study",
                            corpo: "Os participantes terÃ£o a oportunidade de resolver dois casos de estudo fornecidos por empresas, " +
                                "que deverÃ£o consistir num problema que poderÃ¡ advir da necessidade da empresa em inovar ou " +
                                "otimizar processos. Cada um dos casos de estudo deverÃ¡ estar preparado para corresponder a " +
                                "12 horas de prova, sendo entregue aos participantes no inÃ­cio da competiÃ§Ã£o."
                        },
                        {
                            title: "Team Design",
                            corpo: "Os participantes terÃ£o a oportunidade de construir um protÃ³tipo que solucione um desafio, " +
                                "colocado por uma empresa, com acesso a recursos limitados. Os protÃ³tipos serÃ£o posteriormente " +
                                "avaliados por um jÃºri com base em parÃ¢metros previamente definidos pela organizaÃ§Ã£o."
                        }
                    ]
                },
                seccao3: [
                    "O BEST Aveiro volta a organizar mais uma ediÃ§Ã£o dos <b class=\"text-orange\">BEST Training Days</b>, " +
                    "da EBEC Aveiro 2019, onde terÃ¡s a oportunidade de desenvolver as tuas capacidades numa formaÃ§Ã£o.",
                    "A formaÃ§Ã£o decorrerÃ¡ durante a tarde do dia <b class=\"text-orange\">15 de marÃ§o</b> e Ã© restrita " +
                    "aos participantes.",
                    "Todos os participantes do <b class=\"text-orange\">BEST Training Day</b> receberÃ£o um certificado " +
                    "de participaÃ§Ã£o na formaÃ§Ã£o."
                ],
                seccao4: [
                    "A EBEC Portugal Ã© a final nacional da competiÃ§Ã£o de Engenharia do BEST.",
                    "A EBEC Portugal Ã© uma Ronda Nacional organizada por 5 Grupos Locais do BEST de norte a sul do paÃ­s. " +
                    "Na fase Nacional irÃ£o competir os vencedores das diferentes rondas locais, de 5 Universidades Portuguesas.",
                    "Para mais informaÃ§Ãµes visita o <a class='text-orange' href='http://ebecportugal.pt/' " +
                    "target='_blank'>site</a>."
                ]
            }
        },
        edicoesAnteriores: {
            sectionHeading: "EdiÃ§Ãµes Anteriores",
            videos: [
                "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FEBEC.aveiro%2Fvideos%2F1347546375345790%2F",
                "https://www.youtube.com/embed/osqsy-kDcU4"
            ]
        },
        programa: {
            title: "Programa",
            schedule: [
                {
                    diaSemana: "Quinta", diaMes: "14 marÃ§o",
                    eventos: [
                        {
                            hora: "16:00 - 17:30",
                            nome: "Cocktail Network",
                            local: "Complexo PedagÃ³gico, Universidade de Aveiro"
                        }
                    ]
                },
                {
                    diaSemana: "Sexta", diaMes: "15 marÃ§o",
                    eventos: [
                        {
                            hora: "18:00 - 20:00",
                            nome: "Best Training Days",
                            local: "Complexo PedagÃ³gico, Universidade de Aveiro"
                        }
                    ]
                },
                {
                    diaSemana: "SÃ¡bado", diaMes: "16 marÃ§o",
                    eventos: [
                        {hora: "09:30 - 10:30", nome: "Check-in", local: "DAO, Universidade de Aveiro"},
                        {hora: "10:30 - 11:30", nome: "SessÃ£o de Abertura", local: "DAO, Universidade de Aveiro"},
                        {
                            hora: "11:30 - 12:30",
                            nome: "ApresentaÃ§Ã£o das empresas",
                            local: "DAO, Universidade de Aveiro"
                        },
                        {hora: "12:30 - 13:00", nome: "Picture", local: "Meia Lua, Universidade de Aveiro"},
                        {hora: "13:00 - 14:30", nome: "AlmoÃ§o", local: "RefeitÃ³rio do Crasto, Universidade de Aveiro"},
                        {hora: "14:30 - 00:00", nome: "CompetiÃ§Ã£o", local: "ESSUA, Universidade de Aveiro"}
                    ]
                },
                {
                    diaSemana: "Domingo", diaMes: "17 marÃ§o",
                    eventos: [
                        {hora: "00:00 - 14:30", nome: "CompetiÃ§Ã£o", local: "ESSUA, Universidade de Aveiro"}
                    ]
                },
                {
                    diaSemana: "Quarta", diaMes: "20 marÃ§o",
                    eventos: [
                        {hora: "13:30 - 18:00", nome: "ApresentaÃ§Ãµes", local: "ESSUA, Universidade de Aveiro"},
                        {hora: "18:00 - 19:00", nome: "SessÃ£o de encerramento", local: "ESSUA, Universidade de Aveiro"}
                    ]
                }
            ]

        },
        apply: {
            sectionHeading: "InscriÃ§Ã£o",
            sectionSubheading: "Para te inscreveres sÃ³ precisas de efetuar os seguintes passos:",
            corpo: [
                " Leia o regulamento que se encontra <a href='assets/Regulamento.pdf' target='_blank'>aqui</a>.",
                "Regista-te no site do BEST. Podes fazÃª-lo " +
                "<a target='_blank' href='https://www.best.eu.org/account/registration.jsp'>aqui</a>.",
                " Efetua a prÃ©-inscriÃ§Ã£o na EBEC Aveiro 2019. Podes fazÃª-lo " +
                "<a href=\"https://www.best.eu.org/event/localDetails.jsp?event=o538j3f\" target=\"_blank\">aqui</a>.",
                " Indica o nome da tua equipa. Todos os elementos da equipa devem indicar o mesmo nome.",
                " Preenche os dados pedidos. Todos os campos deverÃ£o ser preenchidos, Ã  exceÃ§Ã£o do campo \"Motivation Letter\", " +
                "que Ã© de preenchimento facultativo. Clica em 'Apply' para finalizares esta parte.",
                "JÃ¡ tens equipa? EntÃ£o terminaste a tua prÃ©-inscriÃ§Ã£o para a EBEC Aveiro 2019. Brevemente irÃ¡s " +
                "receber um e-mail de confirmaÃ§Ã£o de inscriÃ§Ã£o com mais informaÃ§Ã£o sobre o evento."
            ]
        },
        testimonials: {
            sectionHeading: "Teste<span class='hidden-lg hidden-md hidden-sm'>-<br></span>munhos",
            sectionSubheading: "Professores e Participantes",
            testemunhos: [
                {
                    foto: "assets/img/team/valente.jpg",
                    corpo: " â€œSer-se Coordenador da EBEC, Ã© nÃ£o ter um dia normal!â€, isto jÃ¡ Ã© uma mÃ¡xima de todos os coordenadores " +
                        "deste evento e eu nÃ£o poderia concordar mais com ela. Ã‰ fascinante poder coordenar uma equipa durante " +
                        "6 meses com o intuito de organizar mais uma ediÃ§Ã£o de um evento que jÃ¡ conta com uma dÃ©cada de " +
                        "existÃªncia. O peso da responsabilidade Ã© sem dÃºvida enorme, mas tudo compensa no momento em que, " +
                        "chegado ao dia do evento, vemos o empenho e a paixÃ£o com que os participantes aderem e se envolvem " +
                        "neste projeto",
                    final: "JoÃ£o Valente<br>Coordenador da EBEC Challenge Aveiro 2018"
                },
                {
                    foto: "assets/img/testimonials/2.jpg",
                    corpo: " JÃ¡ participei em 4 EBECs, em 2 anos consecutivos, e nÃ£o " +
                        "me canso de participar. Acho que Ã© uma experiÃªncia fantÃ¡stica, que nos obriga a pensar fora da " +
                        "caixa, resolver desafios complicados mas interessantes, num ambiente competitivo mas amigÃ¡vel e " +
                        "espetacular entre todos. Foi graÃ§as Ã  EBEC que jÃ¡ fiz amigos em Universidades diferentes e conheci " +
                        "pessoas fantÃ¡sticas na minha prÃ³pria universidade, criei laÃ§os mais fortes com os meus colegas " +
                        "de equipa e aprendi imenso ao investigar e experimentar soluÃ§Ãµes para os problemas propostos. Vale, " +
                        "sem dÃºvida, a pena ",
                    final: "Francisco Power<br>Vencedor da EBEC Challenge Aveiro 2018<br>Modalidade: Team Design"
                },
                {
                    foto: "assets/img/testimonials/3.jpg",
                    corpo: "Participar na EBEC foi uma experiÃªncia incrÃ­vel, nÃ£o sÃ³ pela oportunidade de trabalhar em desafios " +
                        "interessantes, mas tambÃ©m pelos momentos de team building proporcionados e as excelentes conexÃµes " +
                        "que tivemos a oportunidade de fazer. Trabalhar com os meus colegas foi incrivel! A melhor parte " +
                        "foi a forma como crescemos enquanto equipa depois da EBEC, e acho que isso Ã© o que a EBEC oferece " +
                        "de mais valor ",
                    final: "Marcelo Manteigas<br>Vencedor da EBEC Challenge Aveiro 2018<br>Modalidade: Case Study"
                },
                {
                    foto: "assets/img/testimonials/5.jpg",
                    corpo: "A minha participaÃ§Ã£o como jÃºri na EBEC Aveiro tem sido um " +
                        "privilÃ©gio, enquanto docente universitÃ¡ria. AlÃ©m da boa disposiÃ§Ã£o sempre presente, tive o prazer " +
                        "de participar num evento bem organizado! Para alÃ©m do rigor e empenho exigidos e demonstrados na " +
                        "resoluÃ§Ã£o de questÃµes tÃ©cnico-cientÃ­ficas, fiquei, essencialmente, agradada com a qualidade humana " +
                        "dos participantes e da organizaÃ§Ã£o.<br>Na EBEC Aveiro tem-se conseguido fomentar o gosto pela lideranÃ§a, " +
                        "mas tambÃ©m pelo espÃ­rito de equipa e de entreajuda. Os desafios multidisciplinares sÃ£o vencidos " +
                        "por todos, as competÃªncias de cada participante sobressaem, permitindo criar valor acrescentado " +
                        "de forma quase natural e descontraÃ­da!<br>Numa Ã©poca onde se criticam tanto os mÃ©todos de ensino " +
                        "atualmente utilizados, Ã©, sem dÃºvida, uma lufada de ar fresco, conseguir perceber que algo se faz " +
                        "bem! Desejo, sinceramente, todo o sucesso para as ediÃ§Ãµes futuras! ",
                    final: "Professora MÃ³nica Oliveira<br>Departamento de Engenharia MecÃ¢nica<br>Universidade de Aveiro"
                },
                {
                    foto: "assets/img/testimonials/4.jpg",
                    corpo: " Na Universidade de Aveiro, as atividades do BEST Aveiro, " +
                        "nomeadamente no contexto das competiÃ§Ãµes EBEC, tÃªm sido claros exemplos de sucesso. Por um lado, " +
                        "mobilizam um nÃºmero considerÃ¡vel de pessoas, entre participantes, colaboradores diversos e assistÃªncia. " +
                        "Por outro lado, apresentam-se como excelentes iniciativas no Ã¢mbito de ciÃªncias, tecnologia e " +
                        "engenharia. Os desafios propostos promovem um evidente crescimento dos envolvidos, em questÃµes " +
                        "tÃ£o diversas quanto a aplicaÃ§Ã£o prÃ¡tica de conhecimentos cientÃ­ficos ou a imaginaÃ§Ã£o e criatividade " +
                        "exigidos.<br>Os participantes beneficiam ainda das exigÃªncias de um trabalho de equipa com objetivos " +
                        "bem definidos e um prazo muito apertado, assim como de um contacto direto com representantes de " +
                        "empresas e instituiÃ§Ãµes de relevo.<br>Este Ã©, aliÃ¡s, um dos marcadores essenciais do mÃ©rito desta " +
                        "organizaÃ§Ã£o, sempre apoiada por diversas entidades que constatam o dinamismo e a qualidade do BEST " +
                        "Aveiro ",
                    final: "Professor JoÃ£o Oliveira<br>Departamento de Engenharia MecÃ¢nica<br>Universidade de Aveiro"
                }
            ]

        },
        faqs: {
            sectionHeading: "FAQ",
            sectionSubHeading: "Frequently Asked Questions",
            vetor: [
                {
                    p: "Quando tempo dura a competiÃ§Ã£o?",
                    r: "Tens 24 horas para construir o teu protÃ³tipo, caso participes no <i>Team Design</i>, ou arranjar uma " +
                        "soluÃ§Ã£o para o problema de <i>Case Study</i>. A apresentaÃ§Ã£o do teu projeto serÃ¡ apenas na quarta-feira " +
                        "seguinte(20 de marÃ§o)."
                },
                {
                    p: "HÃ¡ quantos membros por equipa?",
                    r: "Cada equipa Ã© constituÃ­da <u>sempre</u> por 4 elementos."
                },
                {
                    p: "Quando Ã© que saberemos qual Ã© a prova que teremos que realizar?",
                    r: "A prova serÃ¡ apresentada na sessÃ£o de abertura, no entanto, o guiÃ£o serÃ¡ apenas distribuÃ­do quando a " +
                        "competiÃ§Ã£o se iniciar."
                },
                {
                    p: "Podemos sair da Universidade durante a prova?",
                    r: "Apenas serÃ£o permitidas deslocaÃ§Ãµes externas ao local da prova exclusivamente com a aprovaÃ§Ã£o do coordenador " +
                        "do evento."
                },
                {
                    p: "Que penalizaÃ§Ãµes existem durante a prova para os participantes?",
                    r: "Caso se verifique o incumprimento das regras definidas para a competiÃ§Ã£o, a equipa poderÃ¡ ser penalizada " +
                        "na pontuaÃ§Ã£o da sua prova ou desqualificada. A equipa poderÃ¡ tambÃ©m estar sujeita Ã  perda da cauÃ§Ã£o."
                },
                {
                    p: "Paga-se para participar na competiÃ§Ã£o?",
                    r: "NÃ£o, cada equipa terÃ¡ apenas de deixar uma cauÃ§Ã£o. O valor ser-te-Ã¡ devolvido no final da competiÃ§Ã£o, " +
                        "apÃ³s a sessÃ£o de encerramento. Esta cauÃ§Ã£o tem por objetivo prevenir quaisquer estragos causados."
                },
                {
                    p: "Temos direito a alimentaÃ§Ã£o durante o fim de semana da competiÃ§Ã£o?",
                    r: "Sim, ao longo do fim de semana terÃ¡s direito a todas as refeiÃ§Ãµes enquanto estiveres a participar na " +
                        "prova. TerÃ¡s tambÃ©m disponÃ­vel um coffee break contÃ­nuo durante todo o fim-de-semana."
                },
                {
                    p: "Ã‰ possÃ­vel descansar durante a prova?",
                    r: "Sim, haverÃ¡ uma \"sala de descanso\" para os participantes poderem descansar e atÃ© dormir se assim o " +
                        "desejarem. EstarÃ¡ tambÃ©m disponÃ­vel uma sala de recreaÃ§Ã£o (sala que irÃ¡ contar com algumas atividades " +
                        "de lazer), para usar durante os intervalos das provas, para que os participantes descontraiam um pouco."
                },
                {
                    p: "Quem vai avaliar as provas?",
                    r: "O jÃºri Ã© composto por professores e elementos do BEST com experiÃªncia em competiÃ§Ãµes, dependendo do " +
                        "teor da prova. Existe ainda a possibilidade de integrarem o jÃºri representantes das empresas parceiras."
                },
                {
                    p: "Como vÃ£o ser avaliados os projetos?",
                    r: "Os projetos vÃ£o ser avaliados conforme o guiÃ£o de cada prova, atempadamente fornecido aos participantes."
                },
                {
                    p: "Com quem devo tirar dÃºvidas durante a prova?",
                    r: "SÃ³ podes tirar dÃºvidas com pessoas designadas para o efeito: o responsÃ¡vel pela prova, pelo coordenador " +
                        "do evento e pela equipa de tÃ³pico."
                },
                {
                    p: "Tenho frequÃªncia no dia da prova. E agora?",
                    r: "Deves contactar a organizaÃ§Ã£o para adequar da melhor forma possÃ­vel a calendarizaÃ§Ã£o da tua prova no " +
                        "dia de avaliaÃ§Ã£o."
                },
            ]
        },
        juri: {
            sectionHeading: "JÃºri",
            sectionSubHeading: "Quem irÃ¡ julgar as provas",
            sectionSubHeading1: "TEAM DESIGN",
            sectionSubHeading2: "CASE STUDY",
            juri1: [
                {
                    nome: "Vitor BonifÃ¡cio",
                    foto: 'assets/img/juri/1.jpg',
                    conta: "https://www.linkedin.com/in/vitor-bonif%C3%A1cio-473455127/"
                },
                {
                    nome: "Ricardo Sousa",
                    foto: "assets/img/juri/2.jpg",
                    conta: "https://www.linkedin.com/in/ricardo-sousa-02a61317/"
                },
                {nome: "Bohdan Kulyk", foto: "assets/img/juri/3.jpg", conta: "https://www.linkedin.com/in/bohdankulyk/"}
            ],
            juri2: [
                {nome: "Diogo Gomes", foto: "assets/img/juri/4.jpg", conta: "https://www.linkedin.com/in/dgomes/"},
                {
                    nome: "JoÃ£o Labrincha",
                    foto: "assets/img/juri/5.jpg",
                    conta: "https://www.linkedin.com/in/jo%C3%A3o-labrincha-0b69549/"
                }
            ]
        },
        partners: {
            sectionHeading: "Parceiros",
            sectionSubHeading: "Parceiros de MÃ­dia",
            sectionSubHeading2: "Parceiros Promo"
        },
        team: {
            sectionHeading: "Equipa",
            equipa: [
                {nome: "Pedro D. Gomes", role: "Coordenador da EBEC Aveiro 2019", foto: "assets/img/team/david.jpg"},
                {nome: "Ana Moura", role: "ResponsÃ¡vel de TÃ³pico", foto: "assets/img/team/anaMoura.jpg"},
                {
                    nome: "Dalila Marques",
                    role: "ResponsÃ¡vel de RelaÃ§Ãµes Empresariais",
                    foto: "assets/img/team/dalila.jpg"
                },
                {nome: "Ana Rita Silva", role: "ResponsÃ¡vel de Marketing", foto: "assets/img/team/anaRita.jpg"}
            ],
            equipa2: [
                {
                    nome: "Renan Ferreira",
                    role: "ResponsÃ¡vel de Tecnologias de InformaÃ§Ã£o",
                    foto: "assets/img/team/renan.jpg"
                },
                {nome: "Beatriz Candeias", role: "ResponsÃ¡vel de LogÃ­stica", foto: "assets/img/team/beatriz.jpg"},
                {nome: "Marta Santos", role: "ResponsÃ¡vel de Participantes", foto: "assets/img/team/marta.jpg"},
                {nome: "Luis Filipe Aguiar", role: "ResponsÃ¡vel de RelaÃ§Ãµes PÃºblicas", foto: "assets/img/team/luis.jpg"}
            ]
        },
        becomePartner: {
            sectionHeading: "Torne-se Nosso parceiro",
            corpo: [
                "Ao tornar-se nosso parceiro, a sua empresa estarÃ¡ integrada na organizaÃ§Ã£o da EBEC Aveiro 2019, com uma " +
                "equipa dinÃ¢mica e empenhada em satisfazer as necessidades de desenvolvimento extracurricular dos estudantes, " +
                "bem como os interesses da sua empresa. TerÃ¡ a oportunidade de participar numa feira de empresas e num " +
                "cocktail network.",
                "<span class=\"big-number text-blue\">â€¢</span>Marque presenÃ§a numa feira de empresas e exponha a sua empresa, produtos e projetos. TerÃ¡ a oportunidade " +
                "de trocar experiÃªncias com os estudantes num ambiente informal.",
                "<span class=\"big-number text-blue\">â€¢</span>Beneficie do acesso aos currÃ­culos disponibilizados, de forma opcional, pelos participantes do evento " +
                "e estudantes da Universidade de Aveiro presentes na sessÃ£o de encerramento.",
                "<span class=\"big-number text-blue\">â€¢</span>Direito a trabalhar em sintonia com o Topic Group podendo propor provas, tanto de Case Study como de " +
                "Team Design, que serÃ£o realizadas pelos participantes.",
                "Como nosso parceiro, beneficiarÃ¡ de interaÃ§Ãµes estreitas com estudantes da universidade de Aveiro, atravÃ©s " +
                "de uma feira de empresas e um cocktail network, conseguindo recolher diversas perceÃ§Ãµes atravÃ©s de " +
                "uma intensa partilha de conhecimentos.",
                "A sua empresa aumentarÃ¡ ainda a visibilidade entre os estudantes da Universidade de Aveiro, conhecidos " +
                "pelo seu dinamismo, inovaÃ§Ã£o e empreendedorismo, atravÃ©s de promoÃ§Ã£o disponibilizada pelo BEST Aveiro.",
                "Caso esteja interessado em ser nosso parceiro, contacte-nos por meio dos " +
                "<a style=\"color: #428BFF\" href=\"#contactos\">Contactos</a> da equipa ou por meio das " +
                "<a style=\"color: #428BFF\" href=\"#info\">InformaÃ§Ãµes</a> do Best Aveiro."
            ]
        },
        contacts: {
            sectionHeading: "Contactos",
            people: [
                {
                    foto: "assets/img/team/david-2.jpg",
                    nome: "Pedro D. Gomes",
                    role: "Coordenador da EBEC Aveiro 2019",
                    tel: "+(351) 938 097 366",
                    email: "mailto:pedrodavid1969@gmail.com",
                    email2: "pedrodavid1969@gmail.com"
                },
                {
                    foto: "assets/img/team/jorge.jpg",
                    nome: "Jorge Silva",
                    role: "Presidente do BEST Aveiro",
                    tel: "+(351) 917 077 293",
                    email: "mailto:jorge.silva@BEST.eu.org",
                    email2: "jorge.silva@BEST.eu.org"
                },
                {
                    foto: "assets/img/team/dalila-2.jpg",
                    nome: "Dalila Marques",
                    role: "ResponsÃ¡vel de RelaÃ§Ãµes Empresariais",
                    tel: "+(351) 917 369 988",
                    email: "mailto:dalilarakelam@gmail.com",
                    email2: "dalilarakelam@gmail.com"
                }
            ]
        },
        bestAveiro: {
            img: "assets/img/logos/best-aveiro-color.png",
            sectionHeading: "Sobre o BEST Aveiro",
            corpo: [
                "Fundado oficialmente em 2010, o Grupo Local BEST Aveiro, sediado na Universidade de Aveiro, conta com " +
                "cerca de 45 membros ativos das Ã¡reas de CiÃªncias, Tecnologias e Engenharias. Ao longo dos seus 8 anos " +
                "de histÃ³ria distinguiu-se pela diversidade e qualidade de eventos organizados. Estes abrangem os estudantes " +
                "a nÃ­vel local, nacional e europeu, focando-se ainda no prÃ³prio desenvolvimento dos membros da AssociaÃ§Ã£o " +
                "para que estes estejam em constante progressÃ£o e aprendizagem.",
                "O BEST Aveiro oferece aos estudantes a oportunidade de participar em eventos que visam a complementaridade " +
                "dos seus estudos, organizando anualmente uma competiÃ§Ã£o na Ã¡rea cientÃ­fico-tecnolÃ³gica, formaÃ§Ãµes em Soft " +
                "ou Hard skills, um curso sazonal e um simpÃ³sio de inovaÃ§Ã£o tecnolÃ³gica. Com o objetivo de estreitar " +
                "a relaÃ§Ã£o entre estudantes e empresas, o BEST Aveiro organiza ainda uma feira de empresas anual, integrada " +
                "na competiÃ§Ã£o EBEC, oferecendo aos estudantes oportunidades relevantes para o seu futuro profissional " +
                "e Ã s empresas maior facilidade de comunicaÃ§Ã£o e recrutamento da comunidade acadÃ©mica."
            ]
        },
        info: {
            mapa: "https://www.google.com/maps/embed/v1/place?key=AIzaSyDM0ZNlzZS6wulKFOv1s6PARvuXmGI-paM&q=BEST Aveiro, Aveiro, PT",
            infos: [
                {
                    chave: "Morada",
                    valor: "Incubadora de Empresas da Universidade de Aveiro<br/>Campus UniversitÃ¡rio de Santiago, EdifÃ­cio 1<br/>" +
                        "3810-193 Aveiro<br/>Portugal",
                    classe: "fa-home"
                },
                {chave: "Telefone", valor: "+351 917 077 329", classe: "fa-phone"},
                {
                    chave: "Email",
                    valor: "<a href='mailto:aveiro@BEST.eu.org'>aveiro@BEST.eu.org</a>",
                    classe: "fa-envelope"
                },
            ],
            sectionHeading: "Infor<span class=\"hidden-lg hidden-md hidden-sm\">-<br></span>maÃ§Ãµes",
            icones: [
                {ref: "http://bestaveiro.web.ua.pt/", classe: "fa-globe"},
                {ref: "https://www.facebook.com/EBEC.aveiro/", classe: "fa-facebook"},
                {ref: "https://instagram.com/best.aveiro/", classe: "fa-instagram"},
                {ref: "https://www.linkedin.com/company/best-aveiro", classe: "fa-linkedin-in"},
                {ref: "https://www.flickr.com/photos/bestaveiro", classe: "fa-flickr"}
            ]
        },
        footer: {
            img: "assets/img/partners/annual/ua-2.gif",
            img2: "assets/img/partners/annual/ipdj.png",
            img3: "assets/img/partners/annual/ua.png"
        }

    };

    var vm = {
        corpo: ko.observable(portuguese),
    };
    ko.applyBindings(vm);
});
