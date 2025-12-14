const questions = [
    // Section 1: Diagnosis
    {
        id: 1,
        type: 'single',
        question: "Como você descreveria sua 'biblioteca' de conhecimento?",
        options: [
            { text: "📚 Pilha de Esperança: Tenho vários livros/cursos comprados que ainda não comecei.", value: "A" },
            { text: "🔄 Consumidor Crônico: Eu leio/assisto muito, mas sinto que não aplico quase nada.", value: "B" },
            { text: "🎯 Seletivo em Transição: Já percebi que menos é mais, mas ainda não achei o método certo.", value: "C" },
            { text: "✅ Aplicador Prático: Consigo extrair e aplicar as ideias principais do que consumo.", value: "D" }
        ]
    },
    {
        id: 2,
        type: 'scale',
        question: "Quando você termina um livro ou curso bom, o que normalmente acontece?",
        minLabel: "Anoto tudo, mas não vira ação",
        maxLabel: "Crio um plano e executo",
        range: 5
    },
    {
        id: 3,
        type: 'single',
        question: "Qual frase você mais se identifica?",
        options: [
            { text: "🤯 Sinto uma sobrecarga. Tem tanta coisa para aprender que não sei por onde começar.", value: "A" },
            { text: "😓 Eu começo, mas não mantenho a consistência. A motivação some rápido.", value: "B" },
            { text: "😤 Fico perdido na teoria. Quero um passo a passo claro do que fazer.", value: "C" },
            { text: "😌 Tenho clareza e vou ajustando o método conforme aplico.", value: "D" }
        ]
    },
    {
        id: 4,
        type: 'single',
        question: "Quanto tempo você acha que perde por semana consumindo conteúdo que não se transforma em resultado?",
        options: [
            { text: "Menos de 2h", value: "low" },
            { text: "2-5h", value: "med" },
            { text: "5-10h", value: "high" },
            { text: "+10h (é meu principal 'trabalho')", value: "very_high" }
        ]
    },
    // Section 2: Desires
    {
        id: 5,
        type: 'multi',
        limit: 2,
        question: "O que você mais deseja ao investir em um livro de desenvolvimento pessoal? (Escolha até 2)",
        options: [
            { text: "🧠 Aprendizado Rápido: Absorver o essencial em horas.", value: "fast_learning" },
            { text: "✅ Aplicação Imediata: Saber exatamente o que fazer hoje.", value: "application" },
            { text: "💰 Retorno Financeiro: Gerar dinheiro ou economia.", value: "money" },
            { text: "📈 Progresso Visível: Sentir que estou evoluindo.", value: "progress" },
            { text: "🏆 Vantagem Competitiva: Saber o que os outros não sabem.", value: "advantage" }
        ]
    },
    {
        id: 6,
        type: 'scale-emoji',
        question: "Como você se sente quando vê alguém aplicando um conceito que você também leu, mas não colocou em prática?",
        minLabel: "Inveja/Impotência",
        maxLabel: "Inspiração/Curiosidade",
        range: 5,
        emojis: ["😒", "😐", "🤔", "🙂", "😊"]
    },
    {
        id: 7,
        type: 'single',
        question: "Se você pudesse 'deletar' um dos seus problemas abaixo, qual seria?",
        options: [
            { text: "⏰ Falta de tempo (porque priorizo coisas erradas)", value: "time" },
            { text: "🧩 Falta de um método (sei o que, não sei o como)", value: "method" },
            { text: "🔥 Falta de motivação/disciplina (começo e paro)", value: "discipline" },
            { text: "🎯 Falta de clareza (não sei o que é prioridade)", value: "clarity" }
        ]
    },
    // Section 3: Test
    {
        id: 8,
        type: 'single',
        question: "Você acredita que é possível aprender o núcleo prático de um livro de 300 páginas em menos de 1 hora?",
        options: [
            { text: "❌ Impossível", value: "no" },
            { text: "🤔 Talvez, mas não deve ser bom", value: "maybe" },
            { text: "✅ Sim, se alguém extrair só o que é aplicável", value: "yes" }
        ]
    },
    {
        id: 9,
        type: 'multi', // Can be single based on prompt "Opção Múltipla", usually implies checkbox but text suggests 'Select one criteria'. I'll stick to single for simplicity unless context demands multi. Prompt said "Opção Múltipla" but didn't say "Pick 2". I'll treat as Single Choice for flow.
        limit: 1,
        question: "O que te faria confiar em um resumo de livro?",
        options: [
            { text: "✂️ Se ele cortar a teoria e focar só nas tarefas.", value: "cut_theory" },
            { text: "🛠️ Se vier com um checklist ou plano de ação.", value: "checklist" },
            { text: "📊 Se for feito por quem já aplicou e teve resultados.", value: "proven" },
            { text: "🎯 Se for uma curadoria dos livros mais importantes.", value: "curated" }
        ]
    },
    {
        id: 10,
        type: 'single',
        question: "Se você tivesse acesso ao 'suco' de 12 livros como Hábitos Atômicos e Mente Milionária, em qual área você aplicaria primeiro?",
        options: [
            { text: "💼 Produtividade & Foco", value: "productivity" },
            { text: "💰 Finanças & Riqueza", value: "finance" },
            { text: "🧘‍♂️ Mentalidade & Disciplina", value: "mindset" },
            { text: "🤝 Relacionamentos & Influência", value: "relations" }
        ]
    },
    // Section 4: Cost
    {
        id: 11,
        type: 'single',
        question: "Imagine seu 'eu' daqui a 1 ano. Se nada mudar, como você estará em relação aos seus objetivos?",
        options: [
            { text: "😔 Pior (Mais frustrado)", value: "worse" },
            { text: "😐 Na Mesma", value: "same" },
            { text: "😊 Melhor (Porque agi)", value: "better" }
        ]
    },
    {
        id: 12,
        type: 'input-number',
        question: "Quantas horas da sua vida você está disposto a perder até encontrar um método que funcione?",
        placeholder: "Ex: 100"
    },
    {
        id: 13,
        type: 'single',
        question: "Qual o valor que você colocaria em quebrar esse ciclo de estudar e não aplicar de uma vez por todas?",
        options: [
            { text: "💸 Menos de R$ 50 (ainda não é uma prioridade)", value: "cheap" },
            { text: "📚 O preço de 1 livro (faz sentido trocar 12 por 1)", value: "fair" },
            { text: "🎓 O preço de um curso curto (até R$ 300)", value: "expensive" },
            { text: "🚀 Não tem preço, preciso resolver isso", value: "priceless" }
        ]
    },
    // Section 5: Engagement
    {
        id: 14,
        type: 'book-select',
        question: "Dos livros abaixo, qual você mais tem vontade de entender e aplicar, mas nunca teve um guia claro?",
        options: [
            { text: "Hábitos Atômicos", icon: "atom" },
            { text: "Mente Milionária", icon: "brain-circuit" },
            { text: "Deep Work", icon: "focus" },
            { text: "Como Fazer Amigos", icon: "users" }
        ]
    },
    {
        id: 15,
        type: 'single',
        question: "Qual destes resultados te animaria mais alcançar nos próximos 3 meses?",
        options: [
            { text: "🚀 Finalizar um projeto importante que está parado há meses.", value: "project" },
            { text: "💰 Economizar/Ganhar um valor extra que sempre quis.", value: "money" },
            { text: "🧠 Acordar com clareza e foco, sem procrastinar.", value: "focus" }
        ]
    },
    {
        id: 16,
        type: 'input-text',
        question: "Para seu plano personalizado, qual é o seu primeiro nome?",
        placeholder: "Digite seu primeiro nome"
    }
];

let currentStep = 0;
const answers = {};

// DOM Elements
const contentCard = document.getElementById('content-card');
const progressBar = document.getElementById('progress-bar');
const stepIndicator = document.getElementById('step-indicator');
const header = document.getElementById('quiz-header');

function startQuiz() {
    header.style.display = 'block';
    renderStep(0);
}

function updateProgress() {
    const progress = ((currentStep + 1) / questions.length) * 100;
    progressBar.style.width = `${progress}%`;
    stepIndicator.textContent = `Pergunta ${currentStep + 1}/${questions.length}`;
}

function renderStep(index) {
    if (index >= questions.length) {
        finishQuiz();
        return;
    }

    currentStep = index;
    updateProgress();

    const q = questions[index];
    contentCard.innerHTML = '';

    // Create elements
    const container = document.createElement('div');
    container.className = 'fade-in';

    const title = document.createElement('h2');
    title.className = 'question-title';
    title.textContent = q.question;
    container.appendChild(title);

    // Logic based on type
    if (q.type === 'single') {
        const grid = document.createElement('div');
        grid.className = 'options-grid';

        q.options.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.textContent = opt.text;
            btn.onclick = () => handleAnswer(q.id, opt.value);
            grid.appendChild(btn);
        });
        container.appendChild(grid);
    }
    else if (q.type === 'multi') {
        const grid = document.createElement('div');
        grid.className = 'options-grid';
        let selected = [];

        q.options.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.textContent = opt.text;
            btn.onclick = () => {
                if (selected.includes(opt.value)) {
                    selected = selected.filter(s => s !== opt.value);
                    btn.classList.remove('selected');
                } else {
                    if (selected.length < q.limit) {
                        selected.push(opt.value);
                        btn.classList.add('selected');
                    }
                }
                nextBtn.disabled = selected.length === 0;
            };
            grid.appendChild(btn);
        });
        container.appendChild(grid);

        const nextBtn = document.createElement('button');
        nextBtn.className = 'btn-primary';
        nextBtn.textContent = 'Continuar';
        nextBtn.disabled = true;
        nextBtn.onclick = () => handleAnswer(q.id, selected);
        container.appendChild(nextBtn);
    }
    else if (q.type === 'scale') {
        const scaleContainer = document.createElement('div');

        const labels = document.createElement('div');
        labels.className = 'likert-labels';
        labels.innerHTML = `<span>${q.minLabel}</span><span>${q.maxLabel}</span>`;

        const btnContainer = document.createElement('div');
        btnContainer.className = 'likert-scale';

        for (let i = 1; i <= q.range; i++) {
            const btn = document.createElement('button');
            btn.className = 'likert-btn';
            btn.textContent = i;
            btn.onclick = () => handleAnswer(q.id, i);
            btnContainer.appendChild(btn);
        }

        scaleContainer.appendChild(btnContainer);
        scaleContainer.appendChild(labels);
        container.appendChild(scaleContainer);
    }
    else if (q.type === 'scale-emoji') {
        const btnContainer = document.createElement('div');
        btnContainer.className = 'likert-scale';

        q.emojis.forEach((emoji, idx) => {
            const btn = document.createElement('button');
            btn.className = 'likert-btn';
            btn.style.fontSize = '1.5rem';
            btn.textContent = emoji;
            btn.onclick = () => handleAnswer(q.id, idx + 1);
            btnContainer.appendChild(btn);
        });

        const labels = document.createElement('div');
        labels.className = 'likert-labels';
        labels.innerHTML = `<span>${q.minLabel}</span><span>${q.maxLabel}</span>`;

        container.appendChild(btnContainer);
        container.appendChild(labels);
    }
    else if (q.type === 'input-number' || q.type === 'input-text') {
        const input = document.createElement('input');
        input.type = q.type === 'input-number' ? 'number' : 'text';
        input.placeholder = q.placeholder;
        input.className = 'form-input';
        container.appendChild(input);

        const nextBtn = document.createElement('button');
        nextBtn.className = 'btn-primary';
        nextBtn.textContent = 'Continuar';
        nextBtn.onclick = () => {
            if (input.value.trim() !== '') {
                handleAnswer(q.id, input.value);
            }
        };
        container.appendChild(nextBtn);

        // Enter key support
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && input.value.trim() !== '') {
                handleAnswer(q.id, input.value);
            }
        });
    }
    else if (q.type === 'book-select') {
        const grid = document.createElement('div');
        grid.className = 'book-grid';

        q.options.forEach(opt => {
            const card = document.createElement('div');
            card.className = 'book-card';
            // Use Lucide icons matching the theme
            let iconName = 'book';
            if (opt.icon === 'atom') iconName = 'zap'; // atomic/energy
            if (opt.icon === 'brain-circuit') iconName = 'brain';
            if (opt.icon === 'focus') iconName = 'target';
            if (opt.icon === 'users') iconName = 'users';

            card.innerHTML = `
                <i data-lucide="${iconName}" class="book-icon" style="color: var(--primary)"></i>
                <div class="book-title">${opt.text}</div>
            `;

            card.onclick = () => handleAnswer(q.id, opt.text);
            grid.appendChild(card);
        });
        container.appendChild(grid);
    }

    contentCard.appendChild(container);
    lucide.createIcons();
}

function handleAnswer(questionId, value) {
    answers[questionId] = value;
    answers['name'] = value; // Store last answer if it's name, simplest hack or explicit check

    // If it's the last question (Name), explicitly save it because the ID is 16
    if (questionId === 16) {
        answers['userName'] = value;
    }

    renderStep(currentStep + 1);
}

function finishQuiz() {
    // Show Processing
    contentCard.innerHTML = `
        <div class="intro-content fade-in" style="text-align: center;">
            <i data-lucide="loader-2" class="spin" style="width: 48px; height: 48px; color: var(--primary); animation: spin 1s linear infinite;"></i>
            <h2 style="margin-top: 1rem;">Analisando suas respostas...</h2>
            <p class="subtitle">Criando seu diagnóstico personalizado.</p>
        </div>
    `;
    lucide.createIcons();

    // Add spin keyframe dynamically if not in CSS
    const style = document.createElement('style');
    style.innerHTML = `@keyframes spin { 100% { transform: rotate(360deg); } }`;
    document.head.appendChild(style);

    setTimeout(() => {
        showResultsPage();
    }, 2500);
}

function showResultsPage() {
    const name = answers['userName'] || 'Amigo(a)';

    contentCard.style.maxWidth = '800px'; // Widen the card for results

    contentCard.innerHTML = `
        <div class="result-container fade-in">
            <div class="result-badge stagger-1">Diagnóstico Concluído</div>
            <h1 class="main-title stagger-1">${name}, seu perfil é: <br><span style="color: var(--primary)">O ESTRATEGISTA PARALISADO</span></h1>
            
            <p class="subtitle stagger-2" style="text-align: left; margin-bottom: 1rem;">
                <strong>Seu Maior Bloqueio:</strong> Você sofre da <strong>Síndrome do Consumidor de Conhecimento</strong>. 
                Você identifica o que precisa (nota 9/10 em desejo), mas <strong>trava na hora de transformar teoria em ação prática</strong> (nota 3/10 em aplicação).
            </p>
            
            <div class="result-stats stagger-2">
                <div class="stat-item">
                    <h3>✅ Você valoriza</h3>
                    <p>Aprendizado acelerado e passos claros.</p>
                </div>
                <div class="stat-item" style="border-left-color: #ef4444;">
                    <h3>⚠️ Você sofre com</h3>
                    <p>Sobrecarga de informação e falta de um método.</p>
                </div>
            </div>
            
            <div class="offer-box stagger-3">
                <h2 style="color: white; margin-bottom: 0.5rem;">🎁 SUA RECOMENDAÇÃO ESPECIAL</h2>
                <p style="color: #cbd5e1; font-size: 0.95rem;">
                    O caminho mais rápido para você sair da paralisia é ter um <strong>protocolo que já fez o trabalho pesado por você</strong>.
                </p>
                
                <h3 style="margin: 1.5rem 0; font-size: 1.5rem; color: var(--secondary);">Apresentamos: 'O Atalho do Topo'</h3>
                
                <ul style="text-align: left; margin-bottom: 1.5rem; list-style-position: inside; color: #e2e8f0;">
                    <li>🎯 Aprender em 1 dia o que levaria 1 ano.</li>
                    <li>📋 Ter checklist prático para cada livro.</li>
                    <li>🛑 Parar de colecionar teoria e colecionar resultados.</li>
                </ul>
                
                <div class="price-tag">R$ 27,00 <span style="font-size: 1rem; color: white; font-weight: 400;">(ou 6x 5,07)</span></div>
                
                <a href="#" class="btn-primary" style="text-decoration: none; display: inline-flex; width: auto; font-size: 1.2rem;">
                    QUERO MEU ATALHO AGORA!
                </a>
                
                <div class="small-print">
                    <br>
                    <a href="#" style="color: #64748b; text-decoration: none;">Não, quero continuar perdendo tempo e dinheiro.</a>
                </div>
            </div>
        </div>
    `;
    lucide.createIcons();
    header.style.display = 'none'; // Hide progress bar
}
