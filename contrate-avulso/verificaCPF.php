<nav class="navbar navbar-expand-lg navbar-dark bg-danger">
  <div class="container-fluid ml-4">
    <a class="navbar-brand" href="<?= $uri ?>"><img src="<?= $uri ?>img/logoplay-preta-oficial-navbar.png" class="img-fluid" alt=""></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        
      </ul>
      <form class="form-inline my-2 my-lg-0 ">
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
            <li class="TexIdentificao active last" id="progressbar-um" >CPF</li>
            <li class="TexIdentificao" id="progressbar-dois" data-ativo="0">PLANOS</li>
            <li class="TexIdentificao" id="progressbar-tres"  data-ativo="0">DADOS PESSOAIS</li>
            <li class="TexIdentificao" id="progressbar-quatro"  data-ativo="0">ENDEREÇO</li>
            <li class="TexIdentificao" id="progressbar-cinco" data-ativo="0">PAGAMENTO</li>
        </ul>
    </div>
  </div>
</section>
<form  method="get" action="mail_vendas.php" id="mail_vendas">
  <section class="sec-contratar passo-um" id="features">
    <div class="container-fluid">
      <div class="section-heading text-center" >
        <h2 class="">Vamos começar?</h2>
        <p class="">Nos informe seu CPF</p>
        <hr>
      </div>
      <div class="container text-center mt-4">
        <div class=" col-md-3  mx-auto text-center">
          <input type="text" class="form-control form-control-contate text-center" id="cpf" val="" placeholder="000.000.000-00" aria-label="Insira seu CPF" maxlength="15" aria-describedby="submit-button" required>
          <p class="text-danger" id="label"></p>
        </div>
        <div class=" col-md-3  mx-auto">
          <button type="button" id="btn-passo-um" class="btn btn-primary col-md-11 mt-4"  data-toggle="modal" data-target="#modal-text" disabled>Começar</button>
        </div>
      </div>
    </div>
  </section> 
      
  <section class="sec-contratar passo-dois" id="features">
    <div class="container">
      
      <div class="section-heading text-center col-md-11" >
        <h2 class="">Contrate um serviço avulso da Logtel Play</h2>
        <p class="">Personalize sua Logtel Play. Escolha abaixo os serviços desejados</p>
        <hr><br><br>
      </div>
      <div class="container carrinho">
        <ul class="social-network social-circle mt-3">
            <li><a  class="icoTwitter" title="Twitter"><i class="fa fa-cart-plus" aria-hidden="true"></i></a></li>
        </ul>
      </div>
      <div class="row">
        <div class="col-md-9">
          <div class="row">
            <!-- Free Tier -->
            <div class="col-md-4 ">
              <div class="card mb-5 card-planos servico card-mumo" data-valor="11.90" data-ativo="0" data-bitwise="1">
                <div class="card-header text-center">
                  Escute música toda hora
                </div>
                <div class="card-body text-center">
                  <img src="../img/logo/mumo1.png" class="img-fluid btn-planos btn-planos-paramount m-3" style="width: 50px;" alt=""></a>
                  <hr class="mb-2">
                  <div class="text-left">
                    <spam class="text-right"> <i class="fa fa-check-circle-o text-danger mr-2" aria-hidden="true"></i> Disponível para Android, iOS.</spam><br>
                    <spam> <i class="fa fa-check-circle-o text-danger mr-2" aria-hidden="true"></i> Estações online</spam><br>
                    <spam> <i class="fa fa-check-circle-o text-danger mr-2" aria-hidden="true"></i> 24h por dia e sem propagandas.</spam><br>
                  </div>
                </div>
                <div class="card-footer">
                  <h6 class="card-price text-center">R$11,90<span class="period">/mês</span></h6>
                </div>
              </div>
            </div>
            <!-- Pro Tier -->
            <div class="col-md-4 text-center">
              <div class="card mb-5 card-planos servico card-qualifica" data-valor="24.90"  data-ativo="0" data-bitwise="2">
                <div class="card-header">
                  Estude sem sair de casa
                </div>
                <div class="card-body">
                  <img src="../img/logo/qualifica1.png" class="img-fluid btn-planos btn-planos-paramount m-3" style="width: 55px;" alt=""></a>
                  <hr class="mb-2">
                  <div class="text-left">
                    <spam> <i class="fa fa-check-circle-o text-danger mr-2" aria-hidden="true"></i> Acesse a todos os cursos</spam><br>
                    <spam> <i class="fa fa-check-circle-o text-danger mr-2" aria-hidden="true"></i> Certificações Digitais</spam><br>
                    <spam> <i class="fa fa-check-circle-o text-danger mr-2" aria-hidden="true"></i> Artigos e Quizzes</spam><br>
                  </div>
                </div>
                <div class="card-footer">
                  <h6 class="card-price text-center">R$24,90<span class="period">/mês</span></h6>
                </div>
              </div>
            </div>
            <div class="col-md-4 text-center">
              <div class="card mb-5 mb-lg-0 card-planos servico card-watch" data-valor="62.90" data-ativo="0" data-bitwise="4">
                <div class="card-header">
                  Filme para toda a família
                </div>
                <div class="card-body text-center">
                  <img src="../img/logo/watch1.png" class="img-fluid btn-planos m-3" style="width: 50px;" alt="">
                  <i class="fa fa-plus" aria-hidden="true"></i>
                  <img src="../img/logo/noggin1.png" class="img-fluid btn-planos m-3" style="width: 50px;" alt="">
                  <i class="fa fa-plus" aria-hidden="true"></i>
                  <img src="../img/logo/paramount1.png" class="img-fluid btn-planos  m-3" style="width: 50px;" alt="">
                  <hr class="mb-2">
                  <div class="text-left">
                    <spam> <i class="fa fa-check-circle-o text-danger mr-2" aria-hidden="true"></i> Dirversão Infantil.</spam><br>
                    <spam> <i class="fa fa-check-circle-o text-danger mr-2" aria-hidden="true"></i> Filmes e séries originais.</spam><br>
                    <spam> <i class="fa fa-check-circle-o text-danger mr-2" aria-hidden="true"></i> Disponível para Android, iOS.</spam><br>
                  </div>
                </div>
                <div class="card-footer">
                  <h6 class="card-price text-center">R$62,90<span class="period">/mês</span></h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3 mt-4">
          <div class="card card-combo" style="min-height:310px;">
            <div class="main-cardtitle col-md-12">
              Sua Logtel PLay
            </div>
            <div class="card-body mt-5 card-body-logtelplay">
              <spam class="md-5 vazio d-block text-center" style="font-size:18px; color: #2c2c6f; psition: center;">Você ainda não selecionou nenhum serviço</spam><br>
              <spam class="md-3 movie" style="font-size:26px;"><i class="fa fa-film" aria-hidden="true"></i></spam>
              <spam class="md-5 movie offset-md-1" style="font-size:12px; color:black;">WATCH + NOGGIN + PARAMOUNT</spam><br>
              <spam class="md-3 music" style="font-size:26px;"><i class="fa fa-music" aria-hidden="true"></i></spam>
              <spam class="md-5 music offset-md-1" style="font-size:12px; color:black;">MUMO</spam><br>
              <spam class="md-3 book" style="font-size:26px;"><i class="fa fa-book" aria-hidden="true"></i></spam>
              <spam class="md-5 book offset-md-1" style="font-size:12px; color:black;">QUALIFICA</spam><br>
            </div>
            <div class="card-footer">
              <spam class="md-5" style="font-size:18px; ">Valor Total</spam>
              <spam class="md-2 offset-md-1" style="font-size:18px; color:black;"> R$</spam>
              <spam class="md-2 offset-md-1 total" style="font-size:20px; color:black;"></spam>
            </div>
          </div>
      </div>
            
      <div class=" col-md-3  mx-auto">
        <button type="button" id="btn-passo-dois" class="btn btn-primary col-md-11 mt-4" disabled>Contratar</button>
      </div>
      </div>

      
      
    </div>
  </section>

  <section class="sec-contratar passo-tres" id="features">
    <div class="container">
      <div class="section-heading text-center" >
        <h2 class="">Me informe os dados abaixo<br>
        <hr><br>
      </div>
      <div class="container " >
        <div class=" col-md-4  mb-3 offset-md-4">
          <!-- <label for="cpf">CPF</label> -->
          <input type="text" id="cpf-disabled" class="form-control form-control-contate text-center" name="cpf-disabled" disabled>
          <div class="input-group-append">
          </div>
        </div>
        <div class=" col-md-4 mb-3 offset-md-4">
          <!-- <label for="nome">Nome</label> -->
          <input type="text" id="nome" class="form-control form-control-contate text-center obrigatorio" placeholder="Insira seu nome" aria-label="Insira seu nome" name="nome">
          <div class="input-group-append">
          </div>
        </div>
        <div class=" col-md-4 mb-3 offset-md-4">
          <!-- <label for="email">E-mail</label> -->
          <input type="text" id="email" class="form-control form-control-contate text-center obrigatorio" placeholder="exemplo@logtel.com.br" aria-label="Insira seu e-mail" name="email">
          <div class="input-group-append">
          </div>
        </div>
        <div class=" col-md-4  mb-3 offset-md-4">
          <!-- <label for="telefone">Telefone</label> -->
          <input type="text" id="telefone" class="form-control  form-control-contate text-center obrigatorio" maxlength="15" placeholder="(61) 9999-9999" aria-label="Insira seu Telefone" id="telefone" name="telefone">
        </div>
        <div class=" col-md-3  mx-auto">
          <button type="button" id="btn-passo-tres" class="btn btn-primary col-md-11 mt-4">Próximo</button>
        </div>
      </div>
    </div>
  </section>

  <section class="sect-contratar passo-quatro" id="features">
    <div class="container-fluid">
      <div class="section-heading text-center" >
        <h2 class="">Me informe seu Endereço<br>
        <hr>
      </div>
      <div class="container " >
        <div class="form-row col-md-8 mt-4 mx-auto">
          <div class="col-md-4">
            <input type="text" class="form-control form-control-contate" id="cep" name="cep" placeholder="00.000-000" aria-label="Insira seu CEP" aria-describedby="submit-button">
            <spam class="text-danger" id="labelcep"></spam>
          </div>
        </div>
        <div class="form-row mt-3 col-md-8 mx-auto">
          <div class="form-group col-md-5">
            <label for="bairro">Bairro</label>
            <input type="text" class="form-control form-control-contate " id="bairro" name="bairro" disabled>
          </div>
          <div class="form-group col-md-5">
            <label for="cidade">Cidade</label>
            <input type="text" class="form-control form-control-contate " id="cidade"  name="cidade" disabled>
          </div>
          <div class="form-group col-md-2">
            <label for="uf">UF</label>
            <input type="text" class="form-control form-control-contate " id="uf" name="uf" disabled>
          </div>
        </div>
        <div class="form-row mt-3 col-md-8 mx-auto">
          <div class="form-group col-md-10">
            <label for="rua">Logradouro</label>
            <input type="text" class="form-control form-control-contate " id="rua" name="rua"  disabled>
          </div>
          <div class="form-group col-md-2">
              <label for="numero-casa">Número</label>
              <input type="text" class="form-control form-control-contate " id="numero-casa" name="numero-casa"   disabled>
          </div>
        </div>
        </div>
      </div>
      <div class=" col-md-3  mx-auto">
        <button type="button" id="btn-passo-quatro" class="btn btn-primary col-md-11 mt-4" disabled>Próximo</button>
      </div>
    </div>
  </section>
      
  <section class="sec-contratar passo-cinco" id="features">
    <div class="container">
      <div class="section-heading text-center col-md-12" >
        <h2 class="">Pagamento</h2>
        <hr><br><br>
      </div>
      <div class="row">
        <div class="col-md-4 mt-4 offset-md-2">
          <div class="card card-combo">
            <div class="main-cardtitle col-md-12">
              Resumo da Compra
            </div>
            <div class="card-body mt-5 card-body-logtelplay">
              <spam class="md-5 vazio d-block text-center" style="font-size:18px; color: #2c2c6f; psition: center;">Você ainda não selecionou nenhum serviço</spam><br>
              <spam class="md-3 movie" style="font-size:26px;"><i class="fa fa-film" aria-hidden="true"></i></spam>
              <spam class="md-5 movie offset-md-1" style="font-size:12px; color:black;">WATCH + NOGGIN + PARAMOUNT</spam><br>
              <spam class="md-3 music" style="font-size:26px;"><i class="fa fa-music" aria-hidden="true"></i></spam>
              <spam class="md-5 music offset-md-1" style="font-size:12px; color:black;">MUMO</spam><br>
              <spam class="md-3 book" style="font-size:26px;"><i class="fa fa-book" aria-hidden="true"></i></spam>
              <spam class="md-5 book offset-md-1" style="font-size:12px; color:black;">QUALIFICA</spam><br>
            </div>
            <div class="card-footer">
              <spam class="md-5" style="font-size:18px; ">Subtotal</spam>
              <spam class="md-2 offset-md-1" style="font-size:18px; color:black;"> R$</spam>
              <spam class="md-2 offset-md-1 total" style="font-size:20px; color:black;"></spam>
            </div>
          </div>
        </div>
        <div class="col-md-5">
        <h4 class="">Identificação</h4>
          <h6>Nome:  <spam class="nome"></spam> </h6>
          <h6>Telefone: <spam class="telefone"></spam></h6> 
          <h6>Email: <spam class="email"></spam></h6> 
        <h4 class="">Endereço</h4>
          <h6>CEP:  <spam class="cep"></spam> </h6>
          <h6>Logradouro: <spam class="rua"></spam> <spam class="numero-casa"></spam></h6> 
          <h6>Endereço: <spam class="bairro"></spam> - <spam class="cidade"></spam> / <spam class="uf"></spam></h6> 
          <div class=" col-md-6  mx-auto">
            <button type="button" id="btn-passo-cinco" class="btn btn-primary col-md-11 mt-4">Cofirmar</button>
          </div>
        </div>
            
      
      </div>

      
      
    </div>
  </section>
</form>
  

<!-- Modal -->
<div class="modal fade" id="modal-text" tabindex="-1" role="dialog" aria-labelledby="TituloModalCentralizado" aria-hidden="true">
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
        <button type="button" id="passo-um-cadastrar-logtelplay" class="btn btn-primary">Contratar Logtel Play</button>
        <button type="button" id="passo-cinco-ok" class="btn btn-primary"  data-dismiss="modal">OK</button>
      </div>
    </div>
  </div>
</div>




<!-- 
<div class="barra-conversao active">
  <div class="container">
    <div class="form-row">
      <div class="col-5 btn btn-light">
            <spam class="md-5 vazio d-block text-center" style="font-size:18px; color: #2c2c6f; psition: center;">Você ainda não selecionou nenhum serviço</spam><br>
            <spam class="md-3 movie" style="font-size:26px;"><i class="fa fa-film" aria-hidden="true"></i></spam>
            <spam class="md-5 movie offset-md-1" style="font-size:12px; color:black;">WATCH + NOGGIN + PARAMOUNT</spam><br>
            <spam class="md-3 music" style="font-size:26px;"><i class="fa fa-music" aria-hidden="true"></i></spam>
            <spam class="md-5 music offset-md-1" style="font-size:12px; color:black;">MUMO</spam><br>
            <spam class="md-3 book" style="font-size:26px;"><i class="fa fa-book" aria-hidden="true"></i></spam>
            <spam class="md-5 book offset-md-1" style="font-size:12px; color:black;">QUALIFICA</spam><br>
      </div>
      <div class="col-4">
      </div>
    </div>
  </div>
</div>



 -->