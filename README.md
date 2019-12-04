# Apresentação
<p>
Projeto de Backend em NodeJs desenvolvido durante o Hackathon Social pela Educação, da prefeitura de Porto Alegre, em parceria com o Sicredi.<br/><br/>
  
O objetivo deste Backend é disponibilizar estruturas de Crud e uma regra de negócios que permite a pesquisa de escolas próximas a uma localização (seja um endereço, ou uma relação de Latitude x Longitude)<br/><br/>

Tecnologias utilizadas:<br/>
NodeJS<br/>
Postgres (Docker)<br/><br/>

Arquitetura:<br/>
REST API<br/>
MVC (Model, View, Controller)<br/><br/>

Estruturas de apoio:<br/>
Migrations<br/>
Seeders<br/><br/>

Ferramentas de apoio:<br/>
Insominia (Testes)<br/>
PostBird: (Visualização do DB)<br/>

</p>

# Backend Desenvolvido para o Hackaton de Porto Alegre

# #Lista de rotas
<p> <br/>

<strong>Categorias de escolas</strong><br/>
Pesquisar: GET  /school-categories<br/>
Inserir: POST   /school-categories<br/>
  Mandatory : category : @String<br/>
</p>

<p>
<strong>Categorias de Alimentação</strong><br/>
Pesquisar: GET  /school-foods<br/>
Inserir: POST   /school-foods<br/>
  Mandatory : category : @String<br/>
</p>

<p>
<strong>Infraestrutura das escolas</strong><br/>
Pesquisar: GET  /school-infraestructures<br/>
Inserir: POST   /school-infraestructures<br/>
  Mandatory : category : @String<br/>
  </p>

<p>
<strong>Atividades Extras</strong><br/>
Pesquisar: GET  /school-extra-activities<br/>
Inserir: POST   /school-extra-activities<br/>
  Mandatory : category : @String<br/>
</p>

<p>
<strong>Tipos de escolas</strong><br/>
Pesquisar: GET  /school-types<br/>
Inserir: POST   /schoo-types<br/>
  Mandatory : category : @String<br/>
</p>

<p>
<strong>Accessibilidade</strong><br/>
Pesquisar por categorias relacionadas a acessibilidade:
GET  /school-accessibility<br/>
Inserir categoria de acessibilidade: POST  /school-accessibility<br/>
    Mandatory : category : @String<br/>

</p>

# #Estrutura das Features

<p>
Cada feature disponibilizada neste projeto tem sua funcionalidade centrada em basicamente 4 tipos de arquivo.
<br/>
<strong>Controller => /src/controllers</strong><br/>
O arquivo do controller é responsável por gerenciar as regras da feature e armazena as funções
responsáveis por apoiar as routes.<br/>

<strong>Model => /src/models</strong><br/>
O model define a estrutura de dados que será utilizada nesta feature, assim como algum ajuste necessário.
<br/>

<strong>Migration => /src/database/migrations</strong><br/>
Arquivo de configuração da tabela no banco de dados utilizada nesta feature
<br/>

<strong>Routes => /src/routes.js</strong><br/>
Arquivo que centraliza as rotas de acesso ao sistema
<br/>
</p>
