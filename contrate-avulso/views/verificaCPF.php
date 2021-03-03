</head>
<body id="page-top">  

<section class="features pricing py-5 passo-um" id="features">
  <div class="container-fluid">
    <div class="section-heading text-center" >
      <h2 class="text-white">Informe seu CPF, por gentileza</h2>
      <p class="text-white">Vamos Buscar seu CPF no sistema</p>
      <hr>
    </div>
    <div class="container">
      <div class=" col-md-4  offset-md-4 input-group">
        <input type="text" class="form-control" id="cpf" placeholder="000.000.000-00" aria-label="Insira seu CPF" aria-describedby="submit-button">
        <div class="input-group-append">
          <button class="btn btn-secondary" type="button" id="passo-um">Cadastrar</button>
        </div>
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

  <section class="features pricing py-5 nome passo-tres" id="features">
    <div class="container-fluid">
      <div class="section-heading text-center" >
        <h2 class="text-white">Tudo Ok com o CPF, agora, me informe os dados abaixo, por gentileza... <br>
        <p class="text-white">Cadastro</p>
        <hr>
      </div>
      <div class="container " >
        <div class=" col-md-4  mb-3 offset-md-4 input-group">
          <input type="text" class="form-control" placeholder="123.456.789-56" aria-label="Insira seu CPF" aria-describedby="submit-button">
          <div class="input-group-append">
          </div>
        </div>
        <div class=" col-md-4 mb-3 offset-md-4 input-group">
          <input type="text" class="form-control" placeholder="Gabriely Souza Mendes Montes" aria-label="Insira seu CPF" aria-describedby="submit-button">
          <div class="input-group-append">
          </div>
        </div>
        <div class=" col-md-4 mb-3 offset-md-4 input-group">
          <input type="text" class="form-control" placeholder="gabrily@gmail.com" aria-label="Insira seu CPF" aria-describedby="submit-button">
          <div class="input-group-append">
          </div>
        </div>
        <div class=" col-md-4  mb-3 offset-md-4 input-group">
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

  <section class="features pricing py-5 nome passo-quatro" id="features">
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
          <div class="form-group col-md-3 input-group">
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

  <div class="bg-white barra-conversao fixed-bottom active d-none d-xl-block fixed-bottom">
    <div class="container">
        <div class="form-row">
          <div class="col-md-3 offset-md-2 mt-1">
            <a href="<?= $uri ?>/img/#nossosPlanos" class="col btn btn-light" >
              <spam class=""> Desconto R$ N,00 </spam>
            </a>
          </div>   
          <div class="col-md-3 m-1">
            <a href="tel:40639001" class="col btn btn-light" >
              <!-- <i class="fa fa-phone cyan-gradient fa-2x "></i>  -->
              <spam class="ml-4"> Total: R$ N,00 </spam>
            </a>
          </div>    
          <div class="col-md-3">
              <!-- <i class="fa fa-whatsapp green-gradient fa-2x"></i>  -->
              <spam class="ml-4 pt-2 pb-2 btn btn-primary" id="passo-dois"> Contratar </spam>
            </a>
          </div>  
        </div>
    </div>
  </div>