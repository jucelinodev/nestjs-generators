# NestJS Generators

Este é um guia para instalar o NestJS e configurar um projeto básico com MongoDB como banco de dados, além de como gerar um módulo REST completo usando Hygen.

## Pré-requisitos

Antes de começar, certifique-se de ter instalado o seguinte em sua máquina:

- Node.js e npm (ou yarn) instalados. Você pode baixá-los em [nodejs.org](https://nodejs.org/).
- MongoDB instalado localmente ou configurado em um serviço de hospedagem.

## Instalação do NestJS Generators

1. **Crie um novo projeto NestJS**: Você pode criar um novo projeto NestJS usando o CLI oficial do Nest. Execute o seguinte comando no terminal:

    ```
    $ npm install -g @nestjs/cli
    $ nest new nome-do-seu-projeto
    ```

    Ou, se preferir usar yarn:

    ```
    $ yarn global add @nestjs/cli
    $ nest new nome-do-seu-projeto
    ```

2. **Instale as dependências**: Navegue até o diretório recém-criado do seu projeto e instale as dependências necessárias:

    ```
    $ cd nome-do-seu-projeto
    $ npm install
    ```

    Ou, usando yarn:

    ```
    $ cd nome-do-seu-projeto
    $ yarn
    ```

3. **Configuração do MongoDB**: Certifique-se de ter uma instância do MongoDB pronta para uso. Você precisará de uma URI de conexão. Defina esta URI como uma variável de ambiente `MONGO_URI`. Você pode fazer isso adicionando-a a um arquivo `.env` no diretório raiz do seu projeto.

## Gerando um Módulo REST com Hygen

O NestJS Generators oferece uma maneira conveniente de gerar rapidamente módulos REST completos usando o Hygen.

1. **Crie um novo módulo REST**: Use o seguinte comando para gerar um novo módulo REST chamado `task`:

    ```
    $ npx hygen rest new task
    ```

    Isso criará automaticamente uma estrutura básica para o seu módulo REST, incluindo um controlador, serviço, módulo e outros arquivos necessários.

2. **Personalize o esquema**: Por padrão, o módulo criado terá um esquema básico com campos `name` e `description`. Você pode personalizar este esquema editando os arquivos `.model.ts` e `.dto.ts` dentro do diretório do seu módulo. Adicione ou remova campos conforme necessário para atender aos requisitos do seu aplicativo.


3. Visite o `/swagger` para testar sua rest api gerada de acordo com as instruções acima 


Este é um guia básico para começar com NestJS e MongoDB, além de como gerar rapidamente módulos REST completos usando Hygen. Sinta-se à vontade para explorar mais a documentação oficial do NestJS e do Hygen para aprofundar seu conhecimento.