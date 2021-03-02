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
    
  <section class="features pricing py-5 passo-dois" id="features">
    <div class="container">
      <div class="section-heading text-center" >
        <h2 class="text-white">Contrate um serviço avulso da Logtel Play</h2>
        <p class="text-white">Personalize sua Logtel Play. Escolha abaixo os serviços desejados</p>
        <p id="response"></p>
        <hr>
      </div>
      <div class="row ">
        <!-- Free Tier -->
        <div class="col-md-4 text-center offset-md-2">
          <div class="card mb-5 mb-lg-0">
            <div class="card-body"><img src="../img/logo/mumo1.png" class="img-fluid btn-planos btn-planos-paramount" alt=""></a>
              <h6 class="card-price text-center">R$11,90<span class="period">/mês</span></h6>
            </div>
          </div>
        </div>
        <!-- Pro Tier -->
        <div class="col-md-4 text-center">
          <div class="card mb-5">
            <div class="card-body"><img src="../img/logo/qualifica1.png" class="img-fluid btn-planos btn-planos-paramount" alt=""></a>
              <h6 class="card-price text-center">R$24,90<span class="period">/mês</span></h6>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <!-- Plus Tier -->
        <div class="col-md-8 offset-md-2">
          <div class="card mb-5 mb-lg-0" >
            <div class="card-body">
              <div class="row  col-md-11 offset-md-1">
              <img src="../img/logo/watch1.png" class="img-fluid btn-planos btn-planos-paramount m-3" alt="">
              <img src="../img/logo/noggin1.png" class="img-fluid btn-planos btn-planos-paramount m-3" alt="">
              <img src="../img/logo/paramount1.png" class="img-fluid btn-planos btn-planos-paramount m-3" alt="">
              </div>
              <h6 class="card-price text-center">R$62,90<span class="period">/mês</span></h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="features pricing py-5 passo-tres" id="features">
    <div class="container-fluid">
      <div class="section-heading text-center" >
        <h2 class="text-white">Tudo Ok com o CPF, agora, me informe os dados abaixo, por gentileza... <br>
        <p class="text-white">Cadastro</p>
        <hr>
      </div>
      <div class="container " >
        <div class=" col-md-4  mb-3 offset-md-4 input-group input-group-newsletter">
          <input type="text" class="form-control" placeholder="123.456.789-56" aria-label="Insira seu CPF" aria-describedby="submit-button">
          <div class="input-group-append">
          </div>
        </div>
        <div class=" col-md-4 mb-3 offset-md-4 input-group input-group-newsletter">
          <input type="text" class="form-control" placeholder="Gabriely Souza Mendes Montes" aria-label="Insira seu CPF" aria-describedby="submit-button">
          <div class="input-group-append">
          </div>
        </div>
        <div class=" col-md-4 mb-3 offset-md-4 input-group input-group-newsletter">
          <input type="text" class="form-control" placeholder="gabrily@gmail.com" aria-label="Insira seu CPF" aria-describedby="submit-button">
          <div class="input-group-append">
          </div>
        </div>
        <div class=" col-md-4  mb-3 offset-md-4 input-group input-group-newsletter">
          <input type="text" class="form-control" placeholder="Telefone" aria-label="Insira seu CPF" aria-describedby="submit-button">
          <div class="input-group-append">
            <button class="btn btn-secondary" type="button" id="passo-tres">Próximo</button>
          </div>
        </div>
        
        <h4 class="text-white text-center ">Você escolheu os serviços abaixo <h4>
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

  <section class="features pricing py-5 passo-quatro" id="features">
    <div class="container-fluid">
      <div class="section-heading text-center" >
        <h2 class="text-white">Certo, Agora me informe seu endereço...<br>
        <hr>
      </div>
      <div class="container " >
        
        <div class="form-group col-md-4">
          <label for="cep">CEP</label>
          <input type="number" class="form-control" id="cep" maxlength="8" value="" name="cep">
        </div>
        <div class="form-row mt-3">
          <div class="form-group col-md-5">
            <label for="bairro">Bairro</label>
            <input type="text" class="form-control form-control-inline" id="bairro" value="" name="bairro">
          </div>
          <div class="form-group col-md-5">
            <label for="cidade">Cidade</label>
            <input type="text" class="form-control form-control-inline" id="cidade" value="" name="cidade">
          </div>
          <div class="form-group col-md-2">
            <label for="numero">UF</label>
            <input type="text" class="form-control form-control-inline" id="uf" value="" name="uf">
          </div>
        </div>
        <div class="form-row mt-3">
          <div class="form-group col-md-9">
            <label for="instalacao">Logradouro</label>
            <input type="text" class="form-control form-control-inline" id="rua" value="" name="logradouro" >
          </div>
          <div class="form-group col-md-3 input-group input-group-newsletter">
              <label for="instalacao">Número</label>
              <input type="text" class="form-control" placeholder="Telefone" aria-label="Insira seu CPF" aria-describedby="submit-button">
              <div class="input-group-append">
                <button class="btn btn-secondary" type="button" id="passo-tres">Próximo</button>
              </div>
          </div>
        </div>
        
        </div>
        
        <h4 class="text-white text-center ">Você escolheu os serviços abaixo <h4>
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
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
        <button type="button" class="btn btn-primary">Prosseguir</button>
      </div>
    </div>
  </div>
</div>
