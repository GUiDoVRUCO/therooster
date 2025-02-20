// Dados de exemplo para os itens do cardápio
const menuItems = {
    Burguers: [
        { id: 1, name: "Burguer Cordeiro Tasty", description: "Pão australiano chapeado na manteiga de garrafa, cebola roxa caramelizada, alface americana, burger de cordeiro de 180g, queijo mussarela e para finalizar aquele queijo parmesão maçaricado, completando essa maravilha.", price: "R$ 25,00", img: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/ea5221c2-9f51-4d6b-bb9d-be09646f967d/202203281955_qh8i_p.jpg" },
        { id: 2, name: "Burguer Mande In Roça", description: "Pão com gergelim chapeado na manteiga de garrafa, burger de charque 180g, queijo muçarela, queijo coalho e para finalizar um delicioso melaço de cana de açúcar que vai fazer você babar.", price: "R$ 35,00", img: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/ea5221c2-9f51-4d6b-bb9d-be09646f967d/202203282029_wrRx_p.jpg" },
        { id: 3, name: "California", description: "Pão com gergelim chapeado na manteiga de garrafa, burger de blend bovino 180g, blend de queijo mussarela e cheddar, picles de pepino, finalizando com cebola roxa picada crua.", price: "R$ 40,00", img: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/ea5221c2-9f51-4d6b-bb9d-be09646f967d/202203281953_ZP9Q_p.jpg" },
        { id: 4, name: "Burguer Double Dream - 360g De Carne", description: "Pão australiano chapeado na manteiga de garrafa, cebola roxa caramelizada, alface americana, bacon, duplo cheddar melt, duas fatias de cheddar e 2 burgers de blend bovino de 180g, totalizando 360g de pura proteína, esse não é para qualquer um.", price: "R$ 25,00", img: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/ea5221c2-9f51-4d6b-bb9d-be09646f967d/202203282027_LY6c_p.jpg" },
        { id: 5, name: "Creamy Pork Burger", description: "Pão com gergelim chapeado na manteiga de garrafa, pork loin burger de 180g (lombo suíno), cebola roxa caramelizada, queijo muçarela, bacon e, fazendo jus ao nome, um cremoso queijo Catupiry para finalizar sua cremosidade.", price: "R$ 35,00", img: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/ea5221c2-9f51-4d6b-bb9d-be09646f967d/202203282024_k1uq_p.jpg" },
        { id: 6, name: "Dream Cheddar", description: "Pão australiano chapeado na manteiga de garrafa, cebola roxa caramelizada, alface americana, burger de blend bovino 180g, bacon, fatia de cheddar e cheddar melt para finalizar essa belezura.", price: "R$ 40,00", img: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/ea5221c2-9f51-4d6b-bb9d-be09646f967d/202203282028_QrSe_p.jpg" },
        { id: 7, name: "Gorgonzola Supreme", description: "Pão com gergelim chapeado na manteiga de garrafa, cebola roxa caramelizada, burger de blend bovino de 180g, queijo muçarela e para terminar um delicioso gorgonzola melt.", price: "R$ 25,00", img: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/ea5221c2-9f51-4d6b-bb9d-be09646f967d/202203282029_S2Qh_p.jpg" },
        { id: 8, name: "Sheet Chilli King", description: "Pão com gergelim chapeado na manteiga de garrafa, burger de blend bovino 180g, queijo muçarela, queijo do reino, uma fantástica geleia de pimenta Tr, coroando essa obra com uma farofa rústica de milho caramelizado.", price: "R$ 35,00", img: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/ea5221c2-9f51-4d6b-bb9d-be09646f967d/202203282030_sn5u_p.jpg" },
        { id: 9, name: "The American Bacon", description: "Pão com gergelim chapeado na manteiga de garrafa, burger de blend bovino de 180g, queijo muçarela, alface americana, e muito. Mas muito bacon, garantindo o sabor americano.", price: "R$ 40,00", img: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/ea5221c2-9f51-4d6b-bb9d-be09646f967d/202203282031_bbVt_p.jpg" },
        { id: 10, name: "The Classic", description: "Pão com gergelim chapeado na manteiga de garrafa, burger de blend bovino de 180g, queijo muçarela, alface americana e tomate. Esse é para aqueles que não gostam de muito mimimi.", price: "R$ 25,00", img: "img/theclassic.jpg" },
        { id: 11, name: "The Dulce - Burger Novo", description: "Pão com gergelim chapeado na manteiga de garrafa, burger de blend bovino 180g, queijo muçarela, queijo coalho, doce de leite argentino, finalizando com uma farofa de bacon, fazendo assim a junção do doce com o salgado.", price: "R$ 35,00", img: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/ea5221c2-9f51-4d6b-bb9d-be09646f967d/202501011831_JH8C_i.jpg" },
        { id: 12, name: "Tropical Crispy Burguer", description: "Pão com gergelim chapeado na manteiga de garrafa, pork loin burger de 180g (lombo suíno), queijo muçarela, cubinhos de abacaxi grelhados com um toque especial de canela, finalizando com um crispy de couve para fechar esse clima tropical.", price: "R$ 40,00", img: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/ea5221c2-9f51-4d6b-bb9d-be09646f967d/202203282033_tQzs_p.jpg" },
        { id: 13, name: "The Grill Burger", description: "Pão com gergelim chapeado na manteiga de garrafa, maionese defumada, burger de blend bovino 180g, onion rings, duplo queijo cheddar, farofa de bacon, finalizando com um toque de barbecue.", price: "R$ 40,00", img: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/ea5221c2-9f51-4d6b-bb9d-be09646f967d/202401012031_R3lU_.jpeg" },
    ],
    Acompanhamentos: [
        { name: "Gouda Pillows (200g)", description: "Nessas almofadinhas de queijo gouda empanadas, acompanhadas da nossa geleia de pimenta Tr, uma combinação fantástica.", price: "R$ 72,00", img: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/ea5221c2-9f51-4d6b-bb9d-be09646f967d/202203282036_otjA_p.jpg" },
        { name: "Original Fries (200g)", description: "Nessa batatinha sequinha, fininha e crocante! Nosso verdadeiro xodó!", price: "R$ 58,00", img: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/ea5221c2-9f51-4d6b-bb9d-be09646f967d/202204021559_Q164_i.jpg" },
        { name: "Rustic Fries (250g)", description: "Nessa batata rustica com casca, sem delicadeza, crocante por fora e macia por dentro.", price: "R$ 45,00", img: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/ea5221c2-9f51-4d6b-bb9d-be09646f967d/202204021602_QSA6_i.jpg" },
        { name: "Onion Rings (200g)", description: "Deliciosas cebolas empanadas, sequinhas por fora e cremosas por dentro.", price: "R$ 45,00", img: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/ea5221c2-9f51-4d6b-bb9d-be09646f967d/202401012032_NR2v_.jpeg" },
        { name: "Roça Meat Balls (200g)", description: "O irresistível bolinho de macaxeira crocante com saboroso recheio de charque desfiada, acompanha maionese defumada!", price: "R$ 45,00", img: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/ea5221c2-9f51-4d6b-bb9d-be09646f967d/202204021601_4B64_i.jpg" },
    ],
    Cervejas: [
        { name: "Brotherhood 500ml", description: "Com chantilly", price: "R$ 18,00", img: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/ea5221c2-9f51-4d6b-bb9d-be09646f967d/202204021617_8D67_i.jpg" },
        { name: "Cangaço Kingdom 500ml", description: "Com sorvete de creme", price: "R$ 22,00", img: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/ea5221c2-9f51-4d6b-bb9d-be09646f967d/202204021630_NPQN_i.jpg" },
        { name: "Outlaw 7/10 500ml", description: "Com frutas vermelhas", price: "R$ 28,00", img: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/ea5221c2-9f51-4d6b-bb9d-be09646f967d/202204021620_WIGO_i.jpg" },
        { name: "Pilsen 500ml", description: "Com frutas vermelhas", price: "R$ 28,00", img: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/ea5221c2-9f51-4d6b-bb9d-be09646f967d/202204021611_8EV1_i.jpg" },
        { name: "Pura Vida 500ml", description: "Com frutas vermelhas", price: "R$ 28,00", img: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/ea5221c2-9f51-4d6b-bb9d-be09646f967d/202204021624_451M_i.jpg" },
        { name: "Serelepe 500ml", description: "Com frutas vermelhas", price: "R$ 28,00", img: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/ea5221c2-9f51-4d6b-bb9d-be09646f967d/202204021627_2V35_i.jpg" },
        { name: "Tropical 500ml", description: "Com frutas vermelhas", price: "R$ 28,00", img: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/ea5221c2-9f51-4d6b-bb9d-be09646f967d/202204021614_BG4S_i.jpg" },
        { name: "Velho Chico 500ml", description: "Com frutas vermelhas", price: "R$ 28,00", img: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/ea5221c2-9f51-4d6b-bb9d-be09646f967d/202204021622_AD34_i.jpg" },
        { name: "Zumbi Republic 500ml", description: "Com frutas vermelhas", price: "R$ 28,00", img: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/ea5221c2-9f51-4d6b-bb9d-be09646f967d/202204021633_FH54_i.jpg" },
    ],
    bebidas: [
        { name: "Coca-Cola Original 350ml", description: "Cachaça, limão e açúcar", price: "R$ 18,00", img: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/820af392-002c-47b1-bfae-d7ef31743c7f/202210190340_0zsv41vq6o7i.jpg" },
        { name: "Coca-Cola sem Açúcar 350ml", description: "Natural e refrescante", price: "R$ 10,00", img: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/820af392-002c-47b1-bfae-d7ef31743c7f/202210190430_lvqed59n0gr.jpg" },
        { name: "Fanta Uva 350ml", description: "Harmonização perfeita com carnes", price: "R$ 90,00", img: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/820af392-002c-47b1-bfae-d7ef31743c7f/202210182322_zcsoh3sr71f.jpg" },
        { name: "H2oh limoneto", description: "Com frutas vermelhas", price: "R$ 28,00", img: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/ea5221c2-9f51-4d6b-bb9d-be09646f967d/202203282047_goXD_p.jpg" },
        { name: "H2oh tradicional", description: "Com frutas vermelhas", price: "R$ 28,00", img: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/ea5221c2-9f51-4d6b-bb9d-be09646f967d/202203282046_hhwr_p.jpg" },
        { name: "Refrigerante Guaraná Antarctica 350ml", description: "Com frutas vermelhas", price: "R$ 28,00", img: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/820af392-002c-47b1-bfae-d7ef31743c7f/202301241119_8ko7t9c9a5p.jpg" },
        { name: "Refrigerante Guaraná Antarctica sem Açúcar Lata 350ml", description: "Com frutas vermelhas", price: "R$ 28,00", img: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/820af392-002c-47b1-bfae-d7ef31743c7f/202302231549_8r68mi293q8.jpg" },
        { name: "Refrigerante Pepsi Black Sem Açúcar Lata 350ml", description: "Com frutas vermelhas", price: "R$ 28,00", img: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/820af392-002c-47b1-bfae-d7ef31743c7f/202501281117_6lh2atot4ct.png" },
        { name: "Refrigerante Pepsi Lata 350ml", description: "Com frutas vermelhas", price: "R$ 28,00", img: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/820af392-002c-47b1-bfae-d7ef31743c7f/202501281115_n21snc5erad.png" },
        { name: "Refrigerante Soda Limonada Antarctica 350ml", description: "Com frutas vermelhas", price: "R$ 28,00", img: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/820af392-002c-47b1-bfae-d7ef31743c7f/202303160848_1xia7f3o5trh.jpg" },
        { name: "Refrigerante Sukita Lata 350ml", description: "Com frutas vermelhas", price: "R$ 28,00", img: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/820af392-002c-47b1-bfae-d7ef31743c7f/202210181803_z900yvyo5c.jpg" },
        { name: "Schweppes citrus", description: "Com frutas vermelhas", price: "R$ 28,00", img: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/ea5221c2-9f51-4d6b-bb9d-be09646f967d/202203282056_xE6a_p.jpg" },
        { name: "Suco de laranja natural 330ml", description: "Com frutas vermelhas", price: "R$ 28,00", img: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/ea5221c2-9f51-4d6b-bb9d-be09646f967d/202203282054_gpHy_p.jpg" },
        { name: "Água Tonica sem Açúcar Schweppes 350ml com 6un", description: "Com frutas vermelhas", price: "R$ 28,00", img: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/820af392-002c-47b1-bfae-d7ef31743c7f/202308241508_bci4hkrmebk.jpg" },
        { name: "Água com gás", description: "Com frutas vermelhas", price: "R$ 28,00", img: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/ea5221c2-9f51-4d6b-bb9d-be09646f967d/202203282041_NcrY_p.jpg" },
        { name: "Água sem gás", description: "Com frutas vermelhas", price: "R$ 28,00", img: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/ea5221c2-9f51-4d6b-bb9d-be09646f967d/202203282041_aXco_p.jpg" },
        { name: "Cerveja Heineken Long Neck", description: "Com frutas vermelhas", price: "R$ 28,00", img: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/ea5221c2-9f51-4d6b-bb9d-be09646f967d/202402012003_RxG1_.jpeg" },
    ]
};

// Função para carregar dinamicamente os itens
function loadMenu() {
    ['Burguers', 'Acompanhamentos', 'Cervejas', 'bebidas'].forEach(category => {
        const categoryContainer = document.querySelector(`#${category} .menu-items`);
        menuItems[category].forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('menu-item');
            itemElement.innerHTML = `
                    <div class="test">
                            <img src="${item.img}" alt="${item.name}">
                        <div class="content">
                            <h3>${item.name}</h3>
                            <span class="price">${item.price}</span>
                        </div>
                    </div>
            `;
            categoryContainer.appendChild(itemElement);

            itemElement.addEventListener("click", () => {
                const franca = document.getElementById('franca')
                franca.innerHTML = `
                    <div class="flex">
                            <img id="modalImage" src=${item.img} alt="">
                        <div id="modalInfo">
                            <h3 id="modalTitle">${item.name.toUpperCase()}</h3>
                            <p id="modalDescription">${item.description}</p>
                        <span id="modalPrice">${item.price}</span>
                    </div>
                `
                openModal()
            })
        });
    });
}

// Chama a função para carregar os itens
document.addEventListener('DOMContentLoaded', loadMenu);

function openModal() {
    const containerModal = document.getElementById('itemModal')
    containerModal.classList.add('active')
}

function closeMoldal() {
    const containerModal = document.getElementById('itemModal')
    containerModal.classList.remove('active')
}


// sair da modal
const exitModal = document.getElementById('closeModal')
exitModal.addEventListener('click', () => {
    closeMoldal()
})

//sair da modal com o overlay
const exitModalOverlay = document.getElementById('itemModal')
exitModalOverlay.addEventListener('click', () => {
    closeMoldal()
})

//função de stopPropagation que não deixa o clique no conteúdo fechar a modal
const modalContent = document.querySelector(".modal-content");
modalContent.addEventListener("click", (event) => {
    event.stopPropagation();
})

//toggle menu
function toggleMenu() {
    let isOpen = false; // Use let para alterar o valor
    const menuHamburger = document.getElementById('menu-toggle');
    menuHamburger.addEventListener('click', (e) => {
        isOpen = !isOpen; // Alterna o estado de isOpen
        e.preventDefault();
        const nav = document.getElementsByClassName('nav-links')[0]; // Acesse o primeiro item da coleção
        if (isOpen) {
            nav.classList.add('open'); // Use a classe 'open'
        } else {
            nav.classList.remove('open');
        }
    });
}

toggleMenu(); // Chame a função para ativar o evento
