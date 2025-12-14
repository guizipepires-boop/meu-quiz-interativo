const questions = [
    {
        id: 1,
        type: 'single',
        question: "📚 Quantos livros você acredita que já leu até hoje?",
        options: [
            { text: "Menos de 10 😢", value: "<10" },
            { text: "Entre 10 e 20 😅", value: "10-20" },
            { text: "Mais de 20 😄", value: ">20" }
        ]
    },
    {
        id: 2,
        type: 'single',
        question: "Desses livros lidos, quantos você absorveu e aplicou o conhecimento?",
        options: [
            { text: "Nenhum 😔", value: "none" },
            { text: "Pouquíssimos 😢", value: "very_few" },
            { text: "Só alguns", value: "some" }
        ]
    },
    {
        id: 3,
        type: 'single',
        question: "Quando você termina um bom livro, o que normalmente acontece?",
        options: [
            { text: "Anoto tudo, mas acabo não aplicando.", value: "notes_only" },
            { text: "Crio um plano no mesmo dia e começo a executar.", value: "action_plan" }
        ]
    },
    {
        id: 4,
        type: 'single',
        question: "O que você sente ao ler um livro?",
        options: [
            { text: "🤯 Sinto uma sobrecarga. Tem tanta coisa para aprender que não sei por onde começar.", value: "overwhelm" },
            { text: "😓 Eu começo, mas não mantenho a consistência. A motivação some rápido.", value: "inconsistency" },
            { text: "😤 Fico perdido na teoria. Quero um passo a passo claro do que fazer.", value: "lost_theory" },
            { text: "😌 Tenho clareza e vou ajustando o método conforme aplico.", value: "clarity" }
        ]
    },
    {
        id: 5,
        type: 'scale-labels', // Custom type for text based scale
        question: "Quanto tempo você acha que perde por semana consumindo conteúdo que não se transforma em resultado?",
        options: ["Menos de 2h", "2-5h", "5-10h", "+10h (é meu principal 'trabalho')"]
    },
    {
        id: 6,
        type: 'multi',
        limit: 2,
        question: "O que você mais deseja ao investir em um livro de desenvolvimento pessoal? (Escolha até 2)",
        options: [
            { text: "🧠 Aprendizado Rápido: Absorver o essencial do livro em pouco tempo.", value: "fast_learning" },
            { text: "✅ Aplicação Imediata: Saber exatamente como aplicar a teoria do livro.", value: "immediate_app" },
            { text: "📈 Progresso Visível: Sentir que estou evoluindo a cada semana.", value: "progress" },
            { text: "🏆 Vantagem Competitiva: Saber coisas que os outros não sabem.", value: "advantage" }
        ]
    },
    {
        id: 7,
        type: 'single',
        question: "Se você pudesse resolver apenas um dos problemas abaixo, qual seria?",
        options: [
            { text: "⏰ Falta de tempo (porque priorizo coisas erradas)", value: "time" },
            { text: "🧩 Falta de um método (sei o que, não sei o como)", value: "method" },
            { text: "🔥 Falta de motivação/disciplina (começo e paro)", value: "discipline" },
            { text: "🎯 Falta de clareza (não sei o que é prioridade)", value: "clarity" }
        ]
    },
    {
        id: 8,
        type: 'scale-labels',
        question: "Você acredita que é possível absorver todo conhecimento útil de um livro de 300 páginas em menos de 1 hora?",
        options: ["❌ Impossível", "🤔 Talvez, tenho dúvidas", "✅ Sim, se alguém extrair só o que é importante"]
    },
    {
        id: 9,
        type: 'single',
        question: "Se seu nível de conhecimento não mudar, como você estará daqui 1 ano?",
        options: [
            { text: "Pior, e mais frustrado.", value: "worse" },
            { text: "Com os mesmos resultados.", value: "same" },
            { text: "Não quero nem pensar nisso.", value: "scared" }
        ]
    },
    {
        id: 10,
        type: 'single',
        question: "Qual valor você estaria disposto a investir pra quebrar o ciclo de 'estudar e não aplicar' de uma vez por todas?",
        options: [
            { text: "📚 O preço de 1 livro (faz sentido trocar 12 por 1)", value: "book_price" },
            { text: "🎓 O preço de um curso (até R$ 300)", value: "course_price" },
            { text: "🚀 Não tem preço, preciso resolver isso", value: "priceless" }
        ]
    },
    {
        id: 11,
        type: 'single',
        question: "Qual destes resultados te animaria mais alcançar nos próximos 3 meses?",
        options: [
            { text: "🚀 Finalizar um projeto importante que está parado há meses.", value: "project" },
            { text: "💰 Economizar/Ganhar um valor extra que sempre quis.", value: "money" },
            { text: "🧠 Desenvolver mais clareza e foco, e eliminar a procrastinação.", value: "focus" }
        ]
    },
    {
        id: 12,
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

// Timer logic
let timerInterval;

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

    // Create container with animation
    const container = document.createElement('div');
    container.className = 'fade-in';

    const title = document.createElement('h2');
    title.className = 'question-title';
    title.textContent = q.question;
    container.appendChild(title);

    // Render logic
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
    else if (q.type === 'scale-labels') {
        const grid = document.createElement('div');
        grid.className = 'options-grid'; // Re-use grid but could be side-by-side if CSS allowed, stick to vertical stack for mobile safety
        q.options.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.style.textAlign = 'center';
            btn.style.justifyContent = 'center';
            btn.textContent = opt;
            btn.onclick = () => handleAnswer(q.id, opt);
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
            btn.innerHTML = `<span style="flex:1">${opt.text}</span> <i data-lucide="check" class="hidden"></i>`;

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

                // Toggle check icon
                // Re-render handled by class mostly, simpler

                nextBtn.disabled = selected.length === 0;
                nextBtn.style.opacity = selected.length === 0 ? '0.5' : '1';
                nextBtn.textContent = selected.length === 0 ? 'Selecione pelo menos 1' : 'Continuar';
            };
            grid.appendChild(btn);
        });
        container.appendChild(grid);

        const nextBtn = document.createElement('button');
        nextBtn.className = 'btn-primary';
        nextBtn.textContent = 'Selecione pelo menos 1';
        nextBtn.disabled = true;
        nextBtn.style.opacity = '0.5';
        nextBtn.onclick = () => handleAnswer(q.id, selected);
        container.appendChild(nextBtn);
    }
    else if (q.type === 'input-text') {
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = q.placeholder;
        input.className = 'form-input';
        input.autofocus = true;
        container.appendChild(input);

        const nextBtn = document.createElement('button');
        nextBtn.className = 'btn-primary';
        nextBtn.textContent = 'Ver Meu Diagnóstico';
        nextBtn.onclick = () => {
            if (input.value.trim() !== '') {
                handleAnswer(q.id, input.value);
            }
        };
        container.appendChild(nextBtn);

        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && input.value.trim() !== '') {
                handleAnswer(q.id, input.value);
            }
        });
    }

    contentCard.appendChild(container);
    lucide.createIcons();
}

function handleAnswer(questionId, value) {
    answers[questionId] = value;
    if (questionId === 12) { // ID 12 is name
        answers['userName'] = value;
    }
    renderStep(currentStep + 1);
}

function finishQuiz() {
    header.style.display = 'none'; // Hide progress bar for processing screen
    contentCard.innerHTML = `
        <div class="intro-content fade-in" style="text-align: center; padding: 2rem 0;">
            <div style="margin-bottom: 2rem;">
                <i data-lucide="loader-2" class="spin" style="width: 64px; height: 64px; color: var(--primary);"></i>
            </div>
            <h2 class="question-title">Analisando suas respostas...</h2>
            <p class="subtitle">Criando seu diagnóstico personalizado.</p>
        </div>
    `;
    lucide.createIcons();

    setTimeout(() => {
        showResultsPage();
    }, 3000); // 3 seconds delay
}

function showResultsPage() {
    const name = answers['userName'] || 'Amigo(a)';

    contentCard.innerHTML = `
        <div class="result-container fade-in">
            <div class="result-badge stagger-1">Diagnóstico Concluído</div>
            <h1 class="main-title stagger-1" style="font-size: 1.8rem; margin-bottom: 0.5rem;">${name}, seu perfil é: <br><span style="color: var(--primary)">O ESTRATEGISTA PARALISADO</span></h1>
            
            <div class="stagger-2" style="text-align: left; margin: 1.5rem 0; background: #FFF; padding: 1.5rem; border-radius: 16px; border: 1px solid #E2E8F0;">
                 <h3 style="color: var(--text-main); margin-bottom: 0.5rem; font-size: 1.1rem; display: flex; align-items: center; gap: 0.5rem;"><i data-lucide="lock" style="width: 20px;"></i> Seu Maior Bloqueio:</h3>
                 <p style="color: var(--text-muted); font-size: 1rem; line-height: 1.6;">
                    Você sofre da <strong>Síndrome do Consumidor de Conhecimento</strong>. 
                    Você identifica o que precisa (nota 9/10 em desejo), mas <strong>trava na hora de transformar teoria em ação prática</strong> (nota 3/10 em aplicação).
                 </p>
            </div>
            
            <div class="result-stats stagger-2">
                <div class="stat-item">
                    <h3><i data-lucide="check-circle-2" style="width: 16px; display: inline-block; vertical-align: middle; margin-right: 4px; color: var(--secondary);"></i> Você valoriza</h3>
                    <p style="font-size: 0.95rem; color: var(--text-muted);">Aprendizado acelerado e passos claros.</p>
                </div>
                <div class="stat-item" style="border-left-color: var(--danger);">
                    <h3><i data-lucide="alert-triangle" style="width: 16px; display: inline-block; vertical-align: middle; margin-right: 4px; color: var(--danger);"></i> Você sofre com</h3>
                    <p style="font-size: 0.95rem; color: var(--text-muted);">Sobrecarga de informação e falta de um método.</p>
                </div>
            </div>
            
            <div class="offer-box stagger-3">
                <h2 style="color: white; margin-bottom: 0.5rem; font-size: 1.3rem;">🎁 SUA RECOMENDAÇÃO ESPECIAL</h2>
                
                <h3 style="margin: 1.5rem 0; font-size: 1.6rem; color: #FDBA74;">Apresentamos: 'Da Leitura À Execução'</h3>
                
                <p style="color: #cbd5e1; font-size: 1rem; line-height: 1.6; margin-bottom: 1.5rem;">
                    Isso não é uma coleção de resumos. É um <strong>manual de execução</strong> dos 12 livros que mais geraram transformação na vida das pessoas.
                </p>
                
                <div style="background: rgba(255,255,255,0.05); padding: 1.5rem; border-radius: 12px; text-align: left; margin-bottom: 2rem;">
                    <p style="color: white; font-weight: 600; margin-bottom: 1rem;">Para VOCÊ, ${name}, isso significa:</p>
                    <ul style="list-style: none; color: #e2e8f0; font-size: 0.95rem;">
                        <li style="margin-bottom: 0.8rem; display: flex; align-items: start; gap: 0.5rem;">
                            <i data-lucide="zap" style="color: #FDBA74; min-width: 20px;"></i>
                            Aprender em 1 dia o que levaria 1 ano para ler.
                        </li>
                        <li style="margin-bottom: 0.8rem; display: flex; align-items: start; gap: 0.5rem;">
                            <i data-lucide="check-square" style="color: #FDBA74; min-width: 20px;"></i>
                            Ter um checklist em mãos para cada livro, sabendo exatamente o que fazer dia a dia.
                        </li>
                        <li style="margin-bottom: 0rem; display: flex; align-items: start; gap: 0.5rem;">
                            <i data-lucide="trending-up" style="color: #FDBA74; min-width: 20px;"></i>
                            Parar de colecionar teoria e começar a colecionar resultados reais.
                        </li>
                    </ul>
                </div>

                <div style="text-align: left; margin-bottom: 2rem;">
                    <p style="color: white; font-weight: 700; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
                        <i data-lucide="book-open" style="color: #10B981;"></i>
                        Tenha acesso a exercícios práticos de:
                    </p>
                    <div style="display: grid; grid-template-columns: 1fr; gap: 0.8rem;">
                        <div style="background: rgba(255,255,255,0.03); padding: 0.8rem; border-radius: 8px; border-left: 3px solid #FDBA74;">
                            <div style="color: #FDBA74; font-weight: 600; font-size: 0.95rem;">1. Hábitos Atômicos</div>
                            <div style="color: #94A3B8; font-size: 0.85rem;">Aprenda como criar novas rotinas de forma simples.</div>
                        </div>
                        <div style="background: rgba(255,255,255,0.03); padding: 0.8rem; border-radius: 8px; border-left: 3px solid #FDBA74;">
                            <div style="color: #FDBA74; font-weight: 600; font-size: 0.95rem;">2. Deep Work</div>
                            <div style="color: #94A3B8; font-size: 0.85rem;">Produza 10x mais com trabalho focado.</div>
                        </div>
                        <div style="background: rgba(255,255,255,0.03); padding: 0.8rem; border-radius: 8px; border-left: 3px solid #FDBA74;">
                            <div style="color: #FDBA74; font-weight: 600; font-size: 0.95rem;">3. Os Segredos da Mente Milionária</div>
                            <div style="color: #94A3B8; font-size: 0.85rem;">Aplique os comportamentos dos ricos.</div>
                        </div>
                        <div style="background: rgba(255,255,255,0.03); padding: 0.8rem; border-radius: 8px; border-left: 3px solid #FDBA74;">
                            <div style="color: #FDBA74; font-weight: 600; font-size: 0.95rem;">4. Como Fazer Amigos e Influenciar Pessoas</div>
                            <div style="color: #94A3B8; font-size: 0.85rem;">Aprenda a se tornar influente e atraente.</div>
                        </div>
                        <div style="background: rgba(255,255,255,0.03); padding: 0.8rem; border-radius: 8px; border-left: 3px solid #FDBA74;">
                            <div style="color: #FDBA74; font-weight: 600; font-size: 0.95rem;">5. A Sutil Arte de Ligar o F*da-se</div>
                            <div style="color: #94A3B8; font-size: 0.85rem;">Aprenda a se importar somente com o essencial.</div>
                        </div>
                        <div style="background: rgba(255,255,255,0.03); padding: 0.8rem; border-radius: 8px; border-left: 3px solid #FDBA74;">
                            <div style="color: #FDBA74; font-weight: 600; font-size: 0.95rem;">6. Mindset</div>
                            <div style="color: #94A3B8; font-size: 0.85rem;">Elimine suas crenças limitantes.</div>
                        </div>
                        <div style="background: rgba(255,255,255,0.03); padding: 0.8rem; border-radius: 8px; border-left: 3px solid #FDBA74;">
                            <div style="color: #FDBA74; font-weight: 600; font-size: 0.95rem;">7. O Poder do Agora</div>
                            <div style="color: #94A3B8; font-size: 0.85rem;">Elimine sua ansiedade vivendo o presente.</div>
                        </div>
                        <div style="background: rgba(255,255,255,0.03); padding: 0.8rem; border-radius: 8px; border-left: 3px solid #FDBA74;">
                            <div style="color: #FDBA74; font-weight: 600; font-size: 0.95rem;">8. Essencialismo</div>
                            <div style="color: #94A3B8; font-size: 0.85rem;">Aprenda a priorizar o que realmente importa.</div>
                        </div>
                        <div style="background: rgba(255,255,255,0.03); padding: 0.8rem; border-radius: 8px; border-left: 3px solid #FDBA74;">
                            <div style="color: #FDBA74; font-weight: 600; font-size: 0.95rem;">9. Pense e Enriqueça</div>
                            <div style="color: #94A3B8; font-size: 0.85rem;">Manual prático de sucesso e riqueza.</div>
                        </div>
                        <div style="background: rgba(255,255,255,0.03); padding: 0.8rem; border-radius: 8px; border-left: 3px solid #FDBA74;">
                            <div style="color: #FDBA74; font-weight: 600; font-size: 0.95rem;">10. O Homem Mais Rico da Babilônia</div>
                            <div style="color: #94A3B8; font-size: 0.85rem;">Aplique as regras de ouro do dinheiro.</div>
                        </div>
                        <div style="background: rgba(255,255,255,0.03); padding: 0.8rem; border-radius: 8px; border-left: 3px solid #FDBA74;">
                            <div style="color: #FDBA74; font-weight: 600; font-size: 0.95rem;">11. A Única Coisa</div>
                            <div style="color: #94A3B8; font-size: 0.85rem;">Realize suas metas em tempo recorde.</div>
                        </div>
                        <div style="background: rgba(255,255,255,0.03); padding: 0.8rem; border-radius: 8px; border-left: 3px solid #FDBA74;">
                            <div style="color: #FDBA74; font-weight: 600; font-size: 0.95rem;">12. Nada Pode Me Ferir</div>
                            <div style="color: #94A3B8; font-size: 0.85rem;">Crie uma mentalidade blindada.</div>
                        </div>
                    </div>
                </div>

                <hr style="border-color: rgba(255,255,255,0.1); margin: 1.5rem 0;">

                <div class="stagger-4">
                     <p style="font-weight: bold; margin-bottom: 0.5rem; display: flex; align-items: center; justify-content: center; gap: 0.5rem;">
                        <i data-lucide="zap" style="color: #eab308; fill: #eab308;"></i> OFERTA EXCLUSIVA E COM URGÊNCIA
                     </p>
                     
                     <div class="timer-box" id="timer">00:00</div>
                     
                     <div style="margin: 1.5rem 0;">
                        <span class="old-price">R$ 97,00</span>
                        <div class="price-tag">R$ 27,00</div>
                        <p style="font-size: 0.9rem; color: #cbd5e1;">(ou 6x de R$ 5,07)</p>
                     </div>
                     
                     <button class="btn-primary" style="background: #10B981; width: 100%; font-size: 1.2rem; padding: 1.2rem; box-shadow: 0 0 20px rgba(16, 185, 129, 0.4);" onclick="window.location.href='#'">
                        QUERO ADQUIRIR AGORA! <i data-lucide="arrow-right"></i>
                     </button>
                     
                     <div style="margin-top: 1rem;">
                        <a href="#" class="secondary-link">Não, quero continuar perdendo tempo e dinheiro.</a>
                     </div>
                </div>
            </div>
        </div>
    `;
    lucide.createIcons();
    startTimer(15, 0);
}

function startTimer(minutes, seconds) {
    let time = minutes * 60 + seconds;
    const timerElement = document.getElementById('timer');

    if (timerInterval) clearInterval(timerInterval);

    timerInterval = setInterval(() => {
        const m = Math.floor(time / 60);
        const s = time % 60;

        timerElement.textContent = `EXPIRA EM: ${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;

        if (time <= 0) {
            clearInterval(timerInterval);
            timerElement.textContent = "OFERTA EXPIRADA";
            timerElement.style.color = "gray";
            timerElement.style.animation = "none";
        }
        time--;
    }, 1000);
}
