// Objeto para guardar os likes de cada carro
const curtidas = {
    Ferrari: 0,
    Koenigsegg: 0,
    McLaren: 0
};

// Função para o botão Curtir
function curtirCarro(marca) {
    curtidas[marca]++; // Adiciona 1 ao contador
    document.getElementById(`like-${marca}`).innerText = curtidas[marca]; // Atualiza na tela
    
    // Efeito visual simples de feedback
    alert(`Você deu um superlike na ${marca}! ❤️`);
}

// Função para simular o ronco (interação com áudio ou texto)
function reproduzirSom(marca) {
    // Exemplo de interação textual (pode ser substituído por arquivos de áudio .mp3 realistas no futuro)
    if (marca === 'ferrari') {
        alert("VRUMMMMM! O V8 da Ferrari ecoou alto!");
    } else if (marca === 'koenigsegg') {
        alert("BOOM! O Jesko cortou giro a 8500 RPM!");
    } else if (marca === 'mclaren') {
        alert("ZUUUM! O motor híbrido da P1 entrou em ação!");
    }
}
