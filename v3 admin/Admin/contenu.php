<?php

$html1 = $html2 = "";

if ($parsed_json) {
    foreach ($parsed_json as $key => $value) {
        if ($value["archive"] == 1) {
            $html1 .= '<li><input type=checkbox name=modification[] value='.$value["id"] .'> <label>' .$value["name"]. '</label><br></li>';
        } else if ($value["archive"] == 0) {
            $html2 .= '<li><input type=checkbox name=archive[] value='.$value["id"] .'> <label>' .$value["name"]. '</label><br></li>';
        }
    }
} else {
    $html1 .= "Pas de streamer enreigstré";
}


?>
