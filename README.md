# Rel-quia-Motors

**Clássicos que contam histórias.**

Projeto acadêmico demonstrativo de um sistema web para uma concessionária fictícia de veículos antigos e clássicos.

🔗 Repositório: [Rel-quia-Motors](https://github.com/arthurandrecamposnascimento-stack/Rel-quia-Motors)


## 1. Descrição do projeto

A **Relíquia Motors** é uma concessionária fictícia especializada em carros antigos e clássicos, como Mustang, Opala SS, Fusca, Kombi, Maverick e Galaxie 500.

O sistema foi criado para facilitar a consulta dos veículos do estoque, a visualização das informações de cada carro, o cadastro de clientes interessados e a realização de simulações de compra. O site conta com um catálogo de 12 veículos pré-cadastrados, filtros de busca, formulários de cadastro e um layout responsivo, que se adapta a computadores, tablets e celulares.


>  Este é um projeto **demonstrativo**. As simulações de financiamento não representam propostas reais e os dados cadastrados não são salvos após recarregar a página.


## 2. Público-alvo

- **Clientes e entusiastas de carros clássicos**, que desejam conhecer o estoque, comparar modelos e simular uma compra.
- **Vendedores e equipe da concessionária**, que precisam gerenciar o estoque (cadastrar, marcar como vendido ou excluir veículos) e registrar clientes interessados.
- **Professores e avaliadores**, que analisam o projeto como trabalho acadêmico de desenvolvimento web.


## 3. Funcionalidades do sistema

### Catálogo de veículos
- Exibição de 12 veículos em cards com foto, ano, marca, modelo, motor, câmbio, quilometragem, placa de coleção, status e preço.
- **Pesquisa** por marca, modelo ou ano.
- **Filtros** por marca, tipo de câmbio e placa de coleção, além do botão **Limpar filtros**.
- **Ver detalhes**: janela (modal) com todas as informações do veículo (potência, combustível, cor, descrição etc.).

### Gerenciamento de estoque
- **Cadastro de novo veículo** por formulário, com adição imediata ao catálogo.
- **Marcar como vendido / voltar a disponível**, alterando o status do carro.
- **Excluir veículo**, com confirmação antes da remoção.

### Simulação de compra
- Cálculo demonstrativo com valor do veículo, entrada e número de parcelas (12x, 24x, 36x, 48x ou 60x).
- Exibe o valor financiado, o valor de cada parcela e o total estimado.
- Validação: a entrada deve ser menor que o valor do veículo.

### Clientes interessados
- Cadastro de nome, telefone, e-mail e veículo de interesse.
- Lista dos clientes cadastrados exibida na própria página.
- A lista de veículos de interesse é atualizada automaticamente conforme o estoque.

### Contato e navegação
- Formulário de contato com mensagem de confirmação.
- Menu de navegação fixo no topo, com rolagem suave entre as seções (Início, Catálogo, Sobre nós, Clientes e Contato).
- Menu responsivo (botão ☰) para telas pequenas.
- Seções institucionais: "Nossa história" e números da empresa.


## 4. Tecnologias utilizadas no desenvolvimento

| Tecnologia | Uso |
|---|---|
| **HTML5** | Estrutura das páginas e formulários |
| **CSS3** | Estilização, layout com Flexbox e responsividade com *media queries* |
| **JavaScript (ES6+)** | Lógica do sistema, manipulação do DOM, filtros, modal e simulação |
| **GitHub** | Controle de versão e hospedagem do código |

Não são utilizados frameworks, bibliotecas externas ou banco de dados. Os dados ficam armazenados na memória do navegador durante o uso.


## 5. Requisitos mínimos para execução

- Computador, tablet ou celular com um **navegador moderno** (Google Chrome, Microsoft Edge, Mozilla Firefox ou Safari, em versões recentes).
- **JavaScript habilitado** no navegador.
- Não é necessário servidor, instalação de programas ou conexão com a internet (apenas para clonar o repositório).


## 6. Instruções para execução

1. **Clone o repositório** (ou baixe o ZIP pelo botão *Code* no GitHub):

   ```bash
   git clone https://github.com/arthurandrecamposnascimento-stack/Rel-quia-Motors.git
   ```

2. **Acesse a pasta do projeto**, onde ficam os arquivos `index.html`, `style.css`, `script.js` e a pasta `img/`:

   ```bash
   cd Rel-quia-Motors
   ```

3. **Abra o arquivo `index.html`** com um clique duplo (ele será aberto no navegador padrão) ou clique com o botão direito e escolha *Abrir com* o navegador de sua preferência.


> 💡 Mantenha os arquivos `index.html`, `style.css`, `script.js` e a pasta `img/` juntos, para que estilos e imagens sejam carregados corretamente.


## 7. Desenvolvedores

| Nome |
|---|
| Arthur Nascimento |
| Gabriel Medeiro Freitas |
| Giovanna Lopes de Carvalho |
| Kerollyn Monteiro Costa |


Centro Universitário Braz Cubas — Projeto acadêmico.


© 2026 Relíquia Motors — Projeto acadêmico demonstrativo.
