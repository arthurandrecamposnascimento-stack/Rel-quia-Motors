const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", function () {

    menu.classList.toggle("ativo");

    if (menu.classList.contains("ativo")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }

});



let carros = [

    {
        id: 1,
        marca: "Ford",
        modelo: "Mustang",
        ano: 1967,
        quilometragem: 85000,
        motor: "V8",
        potencia: "320 cv",
        cambio: "Automático",
        combustivel: "Gasolina",
        cor: "Cinza",
        preco: 280000,
        placa: "Sim",
        status: "Disponível",
        imagem: "img/mustang.png",
        descricao:
            "Mustang clássico com motor V8, acabamento preservado e características originais."
    },

    {
        id: 2,
        marca: "Chevrolet",
        modelo: "Opala SS",
        ano: 1976,
        quilometragem: 92000,
        motor: "4.1",
        potencia: "171 cv",
        cambio: "Manual",
        combustivel: "Gasolina",
        cor: "Branco",
        preco: 120000,
        placa: "Sim",
        status: "Disponível",
        imagem: "img/opala_ss-removebg-preview__1_.png",
        descricao:
            "Opala SS clássico, conhecido pelo motor forte e pelo visual esportivo."
    },

    {
        id: 3,
        marca: "Chevrolet",
        modelo: "Chevette",
        ano: 1978,
        quilometragem: 87000,
        motor: "1.6",
        potencia: "80 cv",
        cambio: "Manual",
        combustivel: "Gasolina",
        cor: "Preto",
        preco: 85000,
        placa: "Sim",
        status: "Disponível",
        imagem: "img/chevete-removebg-preview__1_.png",
        descricao:
            "Chevette clássico em bom estado de conservação, mantendo o estilo original da época."
    },

    {
        id: 4,
        marca: "Volkswagen",
        modelo: "Fusca",
        ano: 1972,
        quilometragem: 110000,
        motor: "1.300",
        potencia: "46 cv",
        cambio: "Manual",
        combustivel: "Gasolina",
        cor: "Preto",
        preco: 65000,
        placa: "Não",
        status: "Disponível",
        imagem: "img/fusca.png",
        descricao:
            "Fusca tradicional, um dos modelos mais conhecidos da história automotiva brasileira."
    },

    {
        id: 5,
        marca: "Ford",
        modelo: "Maverick",
        ano: 1974,
        quilometragem: 78000,
        motor: "V8",
        potencia: "199 cv",
        cambio: "Manual",
        combustivel: "Gasolina",
        cor: "Branco e laranja",
        preco: 180000,
        placa: "Sim",
        status: "Disponível",
        imagem: "img/maverick3-removebg-preview.png",
        descricao:
            "Maverick com estilo esportivo e motor V8, preservando características da época."
    },

    {
        id: 6,
        marca: "Chevrolet",
        modelo: "Caravan",
        ano: 1978,
        quilometragem: 96000,
        motor: "4.1",
        potencia: "171 cv",
        cambio: "Manual",
        combustivel: "Gasolina",
        cor: "Preto",
        preco: 135000,
        placa: "Sim",
        status: "Disponível",
        imagem: "img/Opala_Caravan.png",
        descricao:
            "Caravan clássica, combinando espaço, conforto e o tradicional motor Chevrolet."
    },

    {
        id: 7,
        marca: "Volkswagen",
        modelo: "Brasília",
        ano: 1978,
        quilometragem: 89000,
        motor: "1.6",
        potencia: "65 cv",
        cambio: "Manual",
        combustivel: "Gasolina",
        cor: "Caramelo",
        preco: 75000,
        placa: "Não",
        status: "Disponível",
        imagem: "img/brasilia.png",
        descricao:
            "Brasília preservada, representando um dos modelos mais marcantes da Volkswagen."
    },

    {
        id: 8,
        marca: "Volkswagen",
        modelo: "Karmann Ghia",
        ano: 1970,
        quilometragem: 72000,
        motor: "1.6",
        potencia: "50 cv",
        cambio: "Manual",
        combustivel: "Gasolina",
        cor: "Vermelho",
        preco: 150000,
        placa: "Sim",
        status: "Disponível",
        imagem: "img/Karmann-Ghia.png",
        descricao:
            "Modelo clássico de visual elegante, conhecido pelo desenho esportivo."
    },

    {
        id: 9,
        marca: "Ford",
        modelo: "Corcel",
        ano: 1977,
        quilometragem: 103000,
        motor: "1.4",
        potencia: "72 cv",
        cambio: "Manual",
        combustivel: "Gasolina",
        cor: "Branco",
        preco: 70000,
        placa: "Não",
        status: "Disponível",
        imagem: "img/corcel.png",
        descricao:
            "Corcel clássico com características originais e visual típico dos anos 70."
    },

    {
        id: 10,
        marca: "Chevrolet",
        modelo: "Monza",
        ano: 1985,
        quilometragem: 98000,
        motor: "1.8",
        potencia: "95 cv",
        cambio: "Manual",
        combustivel: "Gasolina",
        cor: "Verde escuro",
        preco: 55000,
        placa: "Não",
        status: "Disponível",
        imagem: "img/monza.png",
        descricao:
            "Monza clássico representando a geração de veículos nacionais dos anos 80."
    },

    {
        id: 11,
        marca: "Ford",
        modelo: "Galaxie 500",
        ano: 1969,
        quilometragem: 68000,
        motor: "V8",
        potencia: "164 cv",
        cambio: "Automático",
        combustivel: "Gasolina",
        cor: "Vinho",
        preco: 210000,
        placa: "Sim",
        status: "Disponível",
        imagem: "img/Ford_Galaxie_500.png",
        descricao:
            "Sedã clássico de grande porte, conhecido pelo conforto e pelo motor V8."
    },

    {
        id: 12,
        marca: "Volkswagen",
        modelo: "Kombi",
        ano: 1975,
        quilometragem: 120000,
        motor: "1.6",
        potencia: "52 cv",
        cambio: "Manual",
        combustivel: "Gasolina",
        cor: "Preto e creme",
        preco: 110000,
        placa: "Sim",
        status: "Disponível",
        imagem: "img/kombi.png",
        descricao:
            "Kombi clássica muito conhecida no Brasil, com visual tradicional."
    }

];



const listaCarros = document.getElementById("listaCarros");
const pesquisa = document.getElementById("pesquisa");
const filtroMarca = document.getElementById("filtroMarca");
const filtroCambio = document.getElementById("filtroCambio");
const filtroPlaca = document.getElementById("filtroPlaca");
const limparFiltros = document.getElementById("limparFiltros");



function formatarPreco(valor) {

    return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

}



function mostrarCarros(lista = carros) {

    listaCarros.innerHTML = "";

    if (lista.length === 0) {

        listaCarros.innerHTML = `
            <p>
                Nenhum veículo encontrado.
            </p>
        `;

        return;
    }


    lista.forEach(function (carro) {

        const card = document.createElement("article");

        card.className = "card-carro";

        const classeStatus =
            carro.status === "Disponível"
                ? "disponivel"
                : "vendido";


        card.innerHTML = `

            <div class="carro-imagem">

                <img
                    src="${carro.imagem}"
                    alt="${carro.marca} ${carro.modelo}"
                    onerror="this.onerror=null;this.src='img/carro-padrao.svg'"
                >

            </div>


            <div class="carro-info">

                <span class="ano">
                    ${carro.ano}
                </span>

                <h3>
                    ${carro.marca} ${carro.modelo}
                </h3>

                <span class="status ${classeStatus}">
                    ${carro.status}
                </span>

                <div class="detalhes">

                    <span>
                        ${carro.motor}
                    </span>

                    <span>
                        ${carro.cambio}
                    </span>

                    <span>
                        ${carro.quilometragem.toLocaleString("pt-BR")} km
                    </span>

                </div>

                <p class="placa">
                    Placa de coleção: ${carro.placa}
                </p>

                <strong class="preco">
                    ${formatarPreco(carro.preco)}
                </strong>


                <div class="acoes">

                    <button
                        class="btn-detalhes"
                        onclick="verDetalhes(${carro.id})"
                    >
                        Ver detalhes
                    </button>

                    <button
                        class="btn-simular"
                        onclick="simularCompra(${carro.id})"
                    >
                        Simular
                    </button>

                    <button
                        class="btn-vendido"
                        onclick="alterarStatus(${carro.id})"
                    >
                        ${carro.status === "Disponível"
                            ? "Marcar vendido"
                            : "Voltar disponível"}
                    </button>

                    <button
                        class="btn-excluir"
                        onclick="excluirCarro(${carro.id})"
                    >
                        Excluir
                    </button>

                </div>

            </div>
        `;


        listaCarros.appendChild(card);

    });

}



function preencherFiltros() {

    const marcas = [...new Set(carros.map(carro => carro.marca))];
    const cambios = [...new Set(carros.map(carro => carro.cambio))];


    marcas.forEach(function (marca) {

        const option = document.createElement("option");

        option.value = marca;
        option.textContent = marca;

        filtroMarca.appendChild(option);

    });


    cambios.forEach(function (cambio) {

        const option = document.createElement("option");

        option.value = cambio;
        option.textContent = cambio;

        filtroCambio.appendChild(option);

    });

}


function aplicarFiltros() {

    const texto = pesquisa.value.toLowerCase();
    const marca = filtroMarca.value;
    const cambio = filtroCambio.value;
    const placa = filtroPlaca.value;


    const resultado = carros.filter(function (carro) {

        const correspondeTexto =
            carro.marca.toLowerCase().includes(texto) ||
            carro.modelo.toLowerCase().includes(texto) ||
            carro.ano.toString().includes(texto);


        const correspondeMarca =
            marca === "" || carro.marca === marca;


        const correspondeCambio =
            cambio === "" || carro.cambio === cambio;


        const correspondePlaca =
            placa === "" || carro.placa === placa;


        return (
            correspondeTexto &&
            correspondeMarca &&
            correspondeCambio &&
            correspondePlaca
        );

    });


    mostrarCarros(resultado);

}


pesquisa.addEventListener("input", aplicarFiltros);

filtroMarca.addEventListener("change", aplicarFiltros);

filtroCambio.addEventListener("change", aplicarFiltros);

filtroPlaca.addEventListener("change", aplicarFiltros);


limparFiltros.addEventListener("click", function () {

    pesquisa.value = "";
    filtroMarca.value = "";
    filtroCambio.value = "";
    filtroPlaca.value = "";

    mostrarCarros();

});



function verDetalhes(id) {

    const carro = carros.find(carro => carro.id === id);

    const modal = document.getElementById("modal");
    const conteudo = document.getElementById("conteudoModal");


    conteudo.innerHTML = `

        <h2>
            ${carro.marca} ${carro.modelo}
        </h2>

        <p>
            <strong>Ano:</strong> ${carro.ano}
        </p>

        <p>
            <strong>Quilometragem:</strong>
            ${carro.quilometragem.toLocaleString("pt-BR")} km
        </p>

        <p>
            <strong>Motor:</strong> ${carro.motor}
        </p>

        <p>
            <strong>Potência:</strong> ${carro.potencia}
        </p>

        <p>
            <strong>Câmbio:</strong> ${carro.cambio}
        </p>

        <p>
            <strong>Combustível:</strong> ${carro.combustivel}
        </p>

        <p>
            <strong>Cor:</strong> ${carro.cor}
        </p>

        <p>
            <strong>Placa de coleção:</strong> ${carro.placa}
        </p>

        <p>
            <strong>Status:</strong> ${carro.status}
        </p>

        <p>
            <strong>Preço:</strong> ${formatarPreco(carro.preco)}
        </p>

        <hr>

        <p>
            ${carro.descricao}
        </p>

    `;


    modal.classList.add("ativo");

}


document.getElementById("fecharModal").addEventListener(
    "click",
    function () {

        document.getElementById("modal")
            .classList.remove("ativo");

    }
);


function simularCompra(id) {

    const carro = carros.find(carro => carro.id === id);

    const modal = document.getElementById("modal");
    const conteudo = document.getElementById("conteudoModal");


    conteudo.innerHTML = `

        <h2>
            Simulação de compra
        </h2>

        <p>
            <strong>
                ${carro.marca} ${carro.modelo}
            </strong>
        </p>

        <br>

        <label>
            Valor do veículo
        </label>

        <input
            type="number"
            id="valorSimulacao"
            value="${carro.preco}"
        >

        <br><br>

        <label>
            Entrada
        </label>

        <input
            type="number"
            id="entradaSimulacao"
            value="0"
        >

        <br><br>

        <label>
            Parcelas
        </label>

        <select id="parcelasSimulacao">

            <option value="12">12x</option>
            <option value="24">24x</option>
            <option value="36">36x</option>
            <option value="48">48x</option>
            <option value="60">60x</option>

        </select>

        <br><br>

        <button
            class="btn"
            onclick="calcularSimulacao()"
        >
            Calcular
        </button>

        <div id="resultadoSimulacao"></div>

        <br>

        <small>
            Esta é uma simulação demonstrativa.
            Os valores não representam uma proposta real
            de financiamento.
        </small>

    `;


    modal.classList.add("ativo");

}


function calcularSimulacao() {

    const valor =
        Number(document.getElementById("valorSimulacao").value);

    const entrada =
        Number(document.getElementById("entradaSimulacao").value);

    const parcelas =
        Number(document.getElementById("parcelasSimulacao").value);


    if (entrada >= valor) {

        document.getElementById("resultadoSimulacao").innerHTML = `
            <p style="color:#8a2937; margin-top:15px;">
                A entrada precisa ser menor que o valor do veículo.
            </p>
        `;

        return;
    }


    const saldo = valor - entrada;

    const taxa = 0.01;

    const valorParcela =
        (saldo * (1 + taxa * parcelas)) / parcelas;

    const total =
        entrada + (valorParcela * parcelas);


    document.getElementById("resultadoSimulacao").innerHTML = `

        <div style="margin-top:20px;">

            <p>
                <strong>Entrada:</strong>
                ${formatarPreco(entrada)}
            </p>

            <p>
                <strong>Valor financiado:</strong>
                ${formatarPreco(saldo)}
            </p>

            <p>
                <strong>Parcelas:</strong>
                ${parcelas}x de
                ${formatarPreco(valorParcela)}
            </p>

            <p>
                <strong>Total estimado:</strong>
                ${formatarPreco(total)}
            </p>

        </div>

    `;

}



function alterarStatus(id) {

    const carro = carros.find(carro => carro.id === id);

    if (carro.status === "Disponível") {

        carro.status = "Vendido";

    } else {

        carro.status = "Disponível";

    }

    mostrarCarros();

}



function excluirCarro(id) {

    const confirmar = confirm(
        "Deseja realmente excluir este veículo?"
    );

    if (!confirmar) {
        return;
    }


    carros = carros.filter(carro => carro.id !== id);

    mostrarCarros();

}



document.getElementById("formCarro")
    .addEventListener("submit", function(event) {

        event.preventDefault();


        const novoCarro = {

            id: Date.now(),

            marca: document.getElementById("marca").value,

            modelo: document.getElementById("modelo").value,

            ano: Number(
                document.getElementById("ano").value
            ),

            quilometragem: Number(
                document.getElementById("quilometragem").value
            ),

            motor: document.getElementById("motor").value,

            potencia: "Não informado",

            cambio: document.getElementById("cambio").value,

            combustivel:
                document.getElementById("combustivel").value,

            cor: document.getElementById("cor").value,

            preco: Number(
                document.getElementById("preco").value
            ),

            placa:
                document.getElementById("placaColecao").value,

            status: "Disponível",

            imagem: "img/carro-padrao.svg",

            descricao:
                document.getElementById("descricao").value

        };


        carros.push(novoCarro);


        alert(
            "Veículo cadastrado com sucesso!"
        );


        this.reset();

        atualizarCarrosInteressados();

        mostrarCarros();

    });



let clientes = [];


const formCliente =
    document.getElementById("formCliente");


function atualizarCarrosInteressados() {

    const select =
        document.getElementById("carroInteresse");


    select.innerHTML = `
        <option value="">
            Selecione o veículo de interesse
        </option>
    `;


    carros.forEach(function(carro) {

        const option =
            document.createElement("option");

        option.value = `${carro.marca} ${carro.modelo}`;

        option.textContent =
            `${carro.marca} ${carro.modelo} - ${carro.ano}`;

        select.appendChild(option);

    });

}


formCliente.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const cliente = {

            nome:
                document.getElementById("nomeCliente").value,

            telefone:
                document.getElementById("telefoneCliente").value,

            email:
                document.getElementById("emailCliente").value,

            carro:
                document.getElementById("carroInteresse").value

        };


        clientes.push(cliente);

        mostrarClientes();

        this.reset();


        alert(
            "Cliente cadastrado com sucesso!"
        );

    }
);


function mostrarClientes() {

    const lista =
        document.getElementById("listaClientes");


    lista.innerHTML = "";


    clientes.forEach(function(cliente) {

        const div =
            document.createElement("div");

        div.className = "cliente";


        div.innerHTML = `

            <h3>
                ${cliente.nome}
            </h3>

            <p>
                📞 ${cliente.telefone}
            </p>

            <p>
                ✉️ ${cliente.email}
            </p>

            <p>
                🚗 Interesse:
                ${cliente.carro}
            </p>

        `;


        lista.appendChild(div);

    });

}



document.getElementById("formContato")
    .addEventListener("submit", function(event) {

        event.preventDefault();


        alert(
            "Mensagem enviada com sucesso! " +
            "Nossa equipe entrará em contato."
        );


        this.reset();

    });




document.getElementById("modal")
    .addEventListener("click", function(event) {

        if (event.target === this) {

            this.classList.remove("ativo");

        }

    });



preencherFiltros();

atualizarCarrosInteressados();

mostrarCarros();