// Variável global para armazenar os itens da biblioteca
let bibliotecaItens = [];

// Elementos DOM
const elementoErro = document.getElementById('erro');
const elementoCarregamento = document.getElementById('carregamento');
const biblioteca = document.getElementById('biblioteca');
const contadorElement = document.getElementById('total');
const formulario = document.getElementById('form-livro');
const btnExemplo = document.getElementById('btn-exemplo');

// ============================================
// FUNÇÕES OBRIGATÓRIAS (5 pontos)
// ============================================

// 1. mostrarErro(mensagem)
function mostrarErro(mensagem) {
    const elemento = document.getElementById('erro');
    elemento.textContent = mensagem;
    elemento.style.display = 'block';
}

// 2. esconderErro()
function esconderErro() {
    const elemento = document.getElementById('erro');
    elemento.style.display = 'none';
}

// 3. mostrarCarregamento()
function mostrarCarregamento() {
    const elemento = document.getElementById('carregamento');
    elemento.style.display = 'block';
    // Bônus
    if (biblioteca) {
        biblioteca.style.display = 'none';
    }
}

// 4. esconderCarregamento()
function esconderCarregamento() {
    const elemento = document.getElementById('carregamento');
    elemento.style.display = 'none';
    // Bônus
    if (biblioteca) {
        biblioteca.style.display = 'block';
    }
}

// ============================================
// FUNÇÕES PARA CARREGAR ITENS (simulação)
// ============================================

function carregarItens() {
    mostrarCarregamento();
    esconderErro();
    
    // Simulando requisição ao servidor
    setTimeout(() => {
        // Dados de exemplo (simulando resposta do servidor)
        const dadosExemplo = [
            { id: 1, titulo: "Dom Casmurro", autor: "Machado de Assis", ano: 1899 },
            { id: 2, titulo: "O Cortiço", autor: "Aluísio Azevedo", ano: 1890 },
            { id: 3, titulo: "Memórias Póstumas de Brás Cubas", autor: "Machado de Assis", ano: 1881 }
        ];
        
        bibliotecaItens = dadosExemplo;
        renderizarBiblioteca();
        atualizarContador(); // Atividade opcional 1
        
        esconderCarregamento();
    }, 1500);
}

function renderizarBiblioteca() {
    biblioteca.innerHTML = '';
    
    bibliotecaItens.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'item-biblioteca';
        itemElement.innerHTML = `
            <h3>${item.titulo}</h3>
            <p><strong>Autor:</strong> ${item.autor}</p>
            ${item.ano ? `<p><strong>Ano:</strong> ${item.ano}</p>` : ''}
        `;
        biblioteca.appendChild(itemElement);
    });
}

// ============================================
// ATIVIDADES OPCIONAIS (escolha 2)
// ============================================

// ATIVIDADE OPCIONAL 1 (2.5 pontos)
// Mostrar quantidade de itens na biblioteca
function atualizarContador() {
    const totalItens = bibliotecaItens.length;
    contadorElement.textContent = totalItens;
}

// ATIVIDADE OPCIONAL 3 (2.5 pontos)
// Botão para preencher formulário com valores de exemplo
function preencherComExemplo() {
    document.getElementById('titulo').value = '1984';
    document.getElementById('autor').value = 'George Orwell';
    document.getElementById('ano').value = '1949';
}

// ============================================
// MANIPULAÇÃO DO FORMULÁRIO
// ============================================

formulario.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const titulo = document.getElementById('titulo').value;
    const autor = document.getElementById('autor').value;
    const ano = document.getElementById('ano').value;
    
    if (!titulo || !autor) {
        mostrarErro('Título e autor são obrigatórios!');
        return;
    }
    
    // Adicionar novo item
    const novoItem = {
        id: Date.now(),
        titulo: titulo,
        autor: autor,
        ano: ano || null
    };
    
    bibliotecaItens.push(novoItem);
    renderizarBiblioteca();
    atualizarContador();
    esconderErro();
    
    // Limpar formulário
    formulario.reset();
});

// ============================================
// INICIALIZAÇÃO
// ============================================

// Event listener para o botão de exemplo (Atividade opcional 3)
if (btnExemplo) {
    btnExemplo.addEventListener('click', preencherComExemplo);
}

// Carregar itens iniciais quando a página carrega
document.addEventListener('DOMContentLoaded', function() {
    carregarItens();
});

// ATIVIDADE OPCIONAL 4 já está implementada no HTML e CSS
// Rodapé com link para email
