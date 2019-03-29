# Php version 1

Rendez-vous directement dans le dossier assets => API => KEY.php 

Vous-trouverez  

```
<?php
$client_id = "Inscrire ici votre clé"; // (client_id)
?>

```

Une fois fait, rendez-vous dans le document api.php, vous trouverez le code  

```

<?php
require 'key.php';
$users = array('solaryhs', 'solary', 'doigby','test');

for ($i = 0; $i < count($users); $i++) {
    $json_file = file_get_contents("https://api.twitch.tv/kraken/streams/?channel={$users[$i]}&client_id={$client_id}");
    $json_array = json_decode($json_file, true);
    // echo ('<img src="'.$json_array['streams'][0]['preview']['large'].' " alt="">');
    if ($json_array['streams'] != null) {
        echo ('<img src="' . $json_array['streams'][0]['preview']['large'] . ' " alt="">');
    } else {
        echo ('<div><a href=""><i class="fab fa-twitch"> Le joueur '. $users[$i]. '  n\'est pas en ligne...</i></a></div>');
    }
}
?>


```

``` $users = array('','','','') ``` Inscrire les pseudos des utilisateurs twitch à afficher.  

Tester si la page index.php fonctionne. 

Si vous voulez ajouter le flux vidéo quand une personne est en ligne, rendez-vous dans le ```if ($json_array['streams'] != null) {``` Ajouter la ligne juste ci-dessous.   

```
echo ('<iframe src="https://player.twitch.tv/?channel='.$json_array['streams'][0]['channel']['display_name'].'" frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="620"></iframe>');
```