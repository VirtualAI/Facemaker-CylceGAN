<?php
 if (isset($_GET['LoadImg'])) {
  header("Content-Type: image/png");
  $file = file_get_contents($_GET['LoadImg']);
  echo base64_encode($file);
}
?>
