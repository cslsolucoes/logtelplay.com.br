<?php
  $ch = curl_init('http://cslsolucoes.com.br/logdesk/api/v1/cadastrar_venda');
  curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
  curl_setopt($ch, CURLOPT_POSTFIELDS, $_POST);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  $data = curl_exec($ch);
  echo $data;
  curl_close($ch);
  exit;
  echo "
    <script type='text/javascript'>
      window.location='http://www.logtelplay.com.br';
    </script>
  ";
?>