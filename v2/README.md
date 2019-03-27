# Twitch php v2

Quels sont les changements ?

```$users = array('test','solaryhs', 'solary', 'doigby','solaryfortnite');```


Quand on regarde sur la Version 1, le petit problème était que si dans notre tableau les premiers joueurs étaient hors ligne sa rendait un rendu dégueulasse. 

Alors pour se faire, on va sauvegarder toute les informations dans deux variables.

$ONLINE .=   
$OFFLINE .=    

Et plus tard on va afficher dans l'ordre qu'on veut.

Exemple:

```
for ($i = 0; $i < count($users); $i++) {
    $json_file = file_get_contents("https://api.twitch.tv/kraken/streams/?channel={$users[$i]}&client_id={$client_id}");
    $json_array = json_decode($json_file, true);
    // echo ('<img src="'.$json_array['streams'][0]['preview']['large'].' " alt="">');
    if ($json_array['streams'] != null) {
        $ONLINE .= ('<img src="' . $json_array['streams'][0]['preview']['large'] . ' " alt="">');
        // $ONLINE .= ('<iframe src="https://player.twitch.tv/?channel='.$json_array['streams'][0]['channel']['display_name'].'" frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="620"></iframe>');
    } else {
        $OFFLINE .= ('<div class="twitch"><a href="http://twitch.tv/'.$users[$i].'"><i class="fab fa-twitch"> Le streamer '. $users[$i]. '  n\'est pas en ligne.</i></a></div>');
    }
}
echo $ONLINE;
echo $OFFLINE;
?>
```
