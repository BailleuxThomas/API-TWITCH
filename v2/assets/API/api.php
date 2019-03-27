<?php
require 'key.php';
$users = array('solaryhs', 'solary', 'doigby','solaryfortnite');

for ($i = 0; $i < count($users); $i++) {
    $json_file = file_get_contents("https://api.twitch.tv/kraken/streams/?channel={$users[$i]}&client_id={$client_id}");
    $json_array = json_decode($json_file, true);
    // echo ('<img src="'.$json_array['streams'][0]['preview']['large'].' " alt="">');
    if ($json_array['streams'] != null) {
        echo ('<img src="' . $json_array['streams'][0]['preview']['large'] . ' " alt="">');
        // echo ('<iframe src="https://player.twitch.tv/?channel='.$json_array['streams'][0]['channel']['display_name'].'" frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="620"></iframe>');
    } else {
        echo ('<div class="twitch"><a href="http://twitch.tv/'.$users[$i].'"><i class="fab fa-twitch"> Le streamer '. $users[$i]. '  n\'est pas en ligne.</i></a></div>');
    }
}
?>