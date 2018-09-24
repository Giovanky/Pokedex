<?php
  include('database.php');
  $query = "SELECT * from pokemon";
  $result = mysqli_query($conexion, $query);
  if(!$result) {
    die('Query Failed'. mysqli_error($conexion));
  }
  $json = array();
  while($row = mysqli_fetch_array($result)) {
    $json[] = array(
      'id' => $row['id'],
      'nombre' => $row['nombre'],
      'tipo' => $row['tipo'],
      'habilidad' => $row['habilidad'],
      'descripcion' => $row['descripcion'],
      'hp' => $row['hp'],
      'at' => $row['at'],
      'def' => $row['def'],
      'ats'=> $row['ats'],
      'defs' => $row['defs'],
      'vel' => $row['vel']
    );
  }
  $jsonstring = json_encode($json);
  echo $jsonstring;