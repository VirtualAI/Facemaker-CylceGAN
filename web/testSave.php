<?php


  $imageData = file_get_contents('php://input');
  $filteredData = substr($imageData, strpos($imageData, ",") + 1);

  $encodedData = str_replace(' ','+',$filteredData);
  $decocedData = base64_decode($encodedData);


  mkdir($_SERVER['DOCUMENT_ROOT'] . "/photos");

  file_put_contents($_SERVER['DOCUMENT_ROOT'] . "/data/test/testA/"."orginal".'.png', $decocedData);

  $im = imagecreatefrompng('./data/test/testA/orginal.png');

  $size = min(imagesx($im), imagesy($im));
  $im2 = imagecrop($im, ['x' => round($size/4), 'y' => 0, 'width' => $size, 'height' => $size]);
 $im2 = imagescale($im2, 256, 256);
  if ($im2 !== FALSE) {
    imagepng($im2, './data/test/testA/orginal.png');
    imagedestroy($im2);
  }

  imagedestroy($im);


 $command = escapeshellcmd('model.py');
 $output = shell_exec($command);
 echo $output;
  die;
?>
