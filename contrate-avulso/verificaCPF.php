<nav class="navbar navbar-expand-lg navbar-dark bg-danger">
  <div class="container-fluid ml-4">
    <a class="navbar-brand" href="#"><img src="<?= $uri ?>img/logoplay-preta-oficial-navbar.png" class="img-fluid" alt=""></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        
      </ul>
      <form class="form-inline my-2 my-lg-0">
      <i class="fa fa-question-circle-o" aria-hidden="true"></i> 
      <h6 class="m-2"> Precisa de Ajuda?</h6>
      </form>
    </div>
  </div>
</nav>

<div class="footer-div ">
  <div class="border-box">
    <div class="border-1"></div>    
    <div class="border-2"></div>    
    <div class="border-3"></div>
    <div class="border-4"></div>
    <div class="border-5"></div>
    <div class="border-6"></div>
  </div>
</div>

<section class="sec-progressbar">
  <div class="row">
    <div class="col-12 col-xl-10 px-0 px-lg-3 py-3 m-auto" style="overflow: auto">
        <ul class="progressbar">
            <li class="TexIdentificao">CPF</li>
            <li class="TexIdentificao">PLANOS</li>
            <li class="TexIdentificao">SEU NÚMERO</li>
            <li class="TexIdentificao">ENDEREÇO</li>
            <li class="TexIdentificao">PAGAMENTO</li>
        </ul>
    </div>
  </div>
</section>

<section class="sec-contratar passo-um" id="features">
  <div class="container-fluid">
    <div class="section-heading text-center" >
      <h2 class="">Vamos começar?</h2>
      <p class="">Nos informe seu CPF</p>
      <hr>
    </div>
    <div class="container text-center mt-4">
      <div class=" col-md-3  mx-auto text-center">
        <input type="text" class="form-control form-control-contate text-center" id="cpf" placeholder="000.000.000-00" aria-label="Insira seu CPF" aria-describedby="submit-button">
      </div>
      <div class=" col-md-3  mx-auto">
        <button type="button" id="passo-um" class="btn btn-primary col-md-11 mt-4"  data-toggle="modal" data-target="#buscaCPF">Começar</button>
      </div>
    </div>
  </div>
</section> 
    
<section class="sec-contratar passo-dois" id="features">
  <div class="container">
    
  <div class="section-heading text-center col-md-11" >
          <h2 class="">Contrate um serviço avulso da Logtel Play</h2>
          <p class="">Personalize sua Logtel Play. Escolha abaixo os serviços desejados</p>
          <p id="response"></p>
          <hr><br><br>
        </div>
    <div class="row">
      <div class="col-md-9">
        <div class="row">
          <!-- Free Tier -->
          <div class="col-md-5 text-center">
            <div class="card mb-5 mb-lg-0 card-planos" id="mumo" data-valor="11.90" data-ativo="0">
              <div class="card-body"><img src="../img/logo/mumo1.png" class="img-fluid btn-planos btn-planos-paramount" alt=""></a>
                <h6 class="card-price text-center">R$11,90<span class="period">/mês</span></h6>
              </div>
            </div>
          </div>
          <!-- Pro Tier -->
          <div class="col-md-5 text-center">
            <div class="card mb-5 card-planos" id="qualifica" data-valor="24.90"  data-ativo="0">
              <div class="card-body"><img src="../img/logo/qualifica1.png" class="img-fluid btn-planos btn-planos-paramount" alt=""></a>
                <h6 class="card-price text-center">R$24,90<span class="period">/mês</span></h6>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <!-- Plus Tier -->
          <div class="col-md-10">
            <div class="card mb-5 mb-lg-0 card-planos" id="watch" data-valor="62.90" data-ativo="0">
              <div class="card-body text-center">
                <img src="../img/logo/watch1.png" class="img-fluid btn-planos btn-planos-paramount m-3" alt="">
                <img src="../img/logo/noggin1.png" class="img-fluid btn-planos btn-planos-paramount m-3" alt="">
                <img src="../img/logo/paramount1.png" class="img-fluid btn-planos btn-planos-paramount m-3" alt="">
                <h6 class="card-price text-center">R$62,90<span class="period">/mês</span></h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-3 mt-5">
        <div class="card card-combo" style="width: 22rem;">
          <div class="main-cardtitle col-md-12">
            Sua Logtel PLay
          </div>
          <div class="card-body mt-5">
            <spam class="md-3 movie" style="font-size:26px; ;"><i class="fa fa-film" aria-hidden="true"></i></spam>
            <spam class="md-5 movie offset-md-1" style="font-size:16px; color:black;">WATCH + NOGGIN + PARAMOUNT</spam><br>
            <spam class="md-3 music" style="font-size:26px;"><i class="fa fa-music" aria-hidden="true"></i></spam>
            <spam class="md-5 music offset-md-1" style="font-size:16px; color:black;">  MUMO</spam><br>
            <spam class="md-3 book" style="font-size:26px;"><i class="fa fa-book" aria-hidden="true"></i></spam>
            <spam class="md-5 book offset-md-1" style="font-size:16px; color:black;"> QUALIFICA</spam><br>
          </div>
          <div class="card-footer">
            <spam class="md-5" style="font-size:26px; color: #f0f0f0f;">Valor Total</spam>
            <spam class="md-2 offset-md-1" style="font-size:26px; color:black;"> RS</spam>
            <spam class="md-2 offset-md-1" id="total" style="font-size:26px; color:black;"></spam>
          </div>
        </div>
      </div>
    </div>

    
    
  </div>
</section>

<section class="sec-contratar passo-tres" id="features">
  <div class="container">
    <div class="section-heading text-center" >
      <h2 class="">Tudo Ok com o CPF, agora, me informe os dados abaixo, por gentileza... <br>
      <p class="">Cadastro</p>
      <hr>
    </div>
    <div class="container " >
      <div class=" col-md-4  mb-3 offset-md-4">
        <!-- <label for="cpf">CPF</label> -->
        <input type="text" id="cpf" class="form-control form-control-contate text-center" aria-label="Insira seu CPF" value="cpf" name="cpf" disabled>
        <div class="input-group-append">
        </div>
      </div>
      <div class=" col-md-4 mb-3 offset-md-4">
        <!-- <label for="nome">Nome</label> -->
        <input type="text" id="nome" class="form-control form-control-contate text-center" placeholder="Insira seu nome" aria-label="Insira seu nome" value="nome" name="nome">
        <div class="input-group-append">
        </div>
      </div>
      <div class=" col-md-4 mb-3 offset-md-4">
        <!-- <label for="email">E-mail</label> -->
        <input type="text" id="email" class="form-control form-control-contate text-center" placeholder="exemplo@logtel.com.br" aria-label="Insira seu e-mail" value="email" name="email">
        <div class="input-group-append">
        </div>
      </div>
      <div class=" col-md-4  mb-3 offset-md-4">
        <!-- <label for="telefone">Telefone</label> -->
        <input type="text" id="telefone" class="form-control  form-control-contate text-center" placeholder="9 9999-9999" aria-label="Insira seu Telefone" id="telefone" value="telefone" name="telefone">
      </div>
      <div class=" col-md-3  mx-auto">
        <button type="button" id="passo-um" class="btn btn-primary col-md-11 mt-4"  data-toggle="modal" data-target="#buscaCPF">Começar</button>
      </div>
      
      <h4 class=" text-center mt-5 ">Você escolheu os serviços abaixo <h4>
        <div class="container-fluid mt-5">
          <div class="row offset-md-2">
            <div class="col-lg-3">
              <div class="feature-item" id="">
                <a href="#mokup" class="js-scroll-trigger">
                <img src="../img/logo/mumo1.png" class="img-fluid btn-planos btn-planos-mumo" alt=""></a>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="feature-item">
                <a href="#mokup" class="js-scroll-trigger">
                <img src="../img/logo/watch1.png" class="img-fluid  btn-planos btn-planos-watch" alt=""></a>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="feature-item">
                <a href="#mokup" class="js-scroll-trigger">
                <img src="../img/logo/noggin1.png" class="img-fluid btn-planos btn-planos-noggin" alt=""></a>
              </div>
            </div>
          </div>
        </div>

    </div>
  </div>
</section>

<section class="sect-contratar passo-quatro" id="features">
  <div class="container-fluid">
    <div class="section-heading text-center" >
      <h2 class="">Certo, Agora me informe seu endereço...<br>
      <hr>
    </div>
    <div class="container " >
      
      <div class="form-group col-md-3">
        <label for="cep">CEP</label>
        <input type="text" class="form-control form-control-contate " id="cep" maxlength="8" value="cep" name="cep">
      </div>
      <div class="form-row mt-3 col-md-12">
        <div class="form-group col-md-5">
          <label for="bairro">Bairro</label>
          <input type="text" class="form-control form-control-contate " id="bairro" value="bairro" name="bairro">
        </div>
        <div class="form-group col-md-5">
          <label for="cidade">Cidade</label>
          <input type="text" class="form-control form-control-contate " id="cidade" value="cidade" name="cidade">
        </div>
        <div class="form-group col-md-2">
          <label for="uf">UF</label>
          <input type="text" class="form-control form-control-contate " id="uf" value="uf" name="uf">
        </div>
      </div>
      <div class="form-row mt-3 col-md-12">
        <div class="form-group col-md-10">
          <label for="logradouro">Logradouro</label>
          <input type="text" class="form-control form-control-contate " id="logradouro" value="logradouro" name="logradouro" >
        </div>
        <div class="form-group col-md-2">
            <label for="telefone">Número</label>
            <input type="text" class="form-control form-control-contate " placeholder="9 9999-9999" id="numero" value="numero" name="numero"  >
        </div>
      </div>
      
      </div>
      
      <h4 class=" text-center mt-5 ">Você escolheu os serviços abaixo <h4>
      <div class="container-fluid">
        <div class="row offset-md-2">
          <div class="col-lg-3">
            <div class="feature-item" id="">
              <a href="#mokup" class="js-scroll-trigger">
              <img src="../img/logo/mumo1.png" class="img-fluid btn-planos btn-planos-mumo" alt=""></a>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="feature-item">
              <a href="#mokup" class="js-scroll-trigger">
              <img src="../img/logo/watch1.png" class="img-fluid  btn-planos btn-planos-watch" alt=""></a>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="feature-item">
              <a href="#mokup" class="js-scroll-trigger">
              <img src="../img/logo/noggin1.png" class="img-fluid btn-planos btn-planos-noggin" alt=""></a>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

  

<!-- Modal -->
<div class="modal fade" id="buscaCPF" tabindex="-1" role="dialog" aria-labelledby="TituloModalCentralizado" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-body">
        <p id="response"></p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-light" data-dismiss="modal">Cancelar</button>
        <a href="<?= $uri ?>#cta" id="acessar-logtelplay">
          <button type="button" class="btn btn-primary">Saiba como acessar</button>
        </a>
        <button type="button" id="cadastrar-logtelplay" class="btn btn-primary">Contratar Logtel Play</button>
      </div>
    </div>
  </div>
</div>




<!-- barra de conversao -->
<!-- 
<div class="barra-conversao active">
    <div class="container">
          
        <div class="form-row">
          <div class="col-md-9 row btn btn-light mt-1">
              <div class="col-md-8">
              <spam style="font-size:32px; color:black;">Valor Total</spam>
              </div>
              <div class="col-md-4">
                <spam id="total" style="font-size:32px; color:black;"></spam>
              </div>
          </div>  
        <div class=" col-md-3  mx-auto">
          <button type="button" id="passo-um" class="btn btn-primary col-md-11 mt-4"  data-toggle="modal" data-target="#buscaCPF">Contratar</button>
        </div>
        </div>
    </div>
  </div>

  <p id="total" style="font-size:32px; color:black;"></p>
   -->