<?php
require 'key.php';

$document = file_get_contents("./Admin/todo.json", true); //récupère le doc json
$tableau = json_decode($document, true);
$tableau{[]} = ["id" => sizeof($tableau), "name" => $depart, "archive" => true];
$codejson = json_encode($tableau, JSON_UNESCAPED_UNICODE); //JSON_FORCE_OBJECT JSON_UNESCAPED_UNICODE\\

foreach ($tableau as $key => $value) {
    $json_file = file_get_contents("https://api.twitch.tv/kraken/streams/?channel={$value["name"]}&client_id={$client_id}");
    $json_array = json_decode($json_file, true);
    if ($json_array['_total'] != 0) {
        $json_array = $json_array;
        $json_array = json_decode($json_file, true);
        $ONLINE .= ('<div class="twitch"><a style=color:green; href="http://twitch.tv/' . $value["name"] . '"><i class="fab fa-twitch"> Le streamer ' . $value["name"] . '  est en ligne sur le jeu ' . $json_array['streams'][0]['game'] . ' avec un total de ' . $json_array['streams'][0]['viewers'] . ' viewers</i></a></div>');
        $ONLINE .= ('<img src="' . $json_array['streams'][0]['preview']['large'] . ' " alt="">');
    }
    else if ($json_array['_total'] == null){
      $OFFLINE .= ('<div class="twitch"><a style=color:red; href="http://twitch.tv/'.$value["name"].'"><i class="fab fa-twitch"> Le streamer '. $value["name"]. '  n\'est pas en ligne.</i></a></div>');
    }
}
echo $ONLINE;
echo $OFFLINE;
?>