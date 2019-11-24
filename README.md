# Backend Desenvolvido para o Hackaton de Porto Alegre

<p>Lista de rotas <br/>

<strong>Categorias de escolas</strong><br/>
Pesquisar: GET  /school-categories<br/>
Inserir: POST   /school-categories<br/>
  Mandatory : category : @String<br/>
</p>


<strong>Categorias de Alimentação</strong><br/>
Pesquisar: GET  /school-foods<br/>
Inserir: POST   /school-foods<br/>
  Mandatory : category : @String<br/>
</p>


<strong>Infraestrutura das escolas</strong><br/>
Pesquisar: GET  /school-infraestructures<br/>
Inserir: POST   /school-infraestructures<br/>
  Mandatory : category : @String<br/>
</p>


<strong>Atividades Extras</strong><br/>
Pesquisar: GET  /school-extra-activities<br/>
Inserir: POST   /school-extra-activities<br/>
  Mandatory : category : @String<br/>
</p>

<strong>Tipos de escolas</strong><br/>
Pesquisar: GET  /school-types<br/>
Inserir: POST   /schoo-types<br/>
  Mandatory : category : @String<br/>
</p>

<strong>Geolocalização</strong><br/>
Pesquisar por latitude e longitude: GET  /geo-lat<br/>
    Mandatory : latitude : @Float<br/>
    Mandatory : longitude : @Float<br/>
Pesquisar por endereço: GET  /geo-address<br/>
    Mandatory : address : @String<br/>

</p>
