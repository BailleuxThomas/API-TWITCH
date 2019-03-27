#AJAX

Ce code fonctionne pour afficher si une personne est en ligne ou non via la console.    

Pourquoi en javascript et non php ? Parce que le code javascript permet de rafraichir le code sans forcer le rafraichissement d'une page entière.   


```
<script>

const user = "solary";

  $.getJSON('https://api.twitch.tv/kraken/streams/'+user+'?client_id=71s1heuigxa6my4u5lwo1fdzviu5db', function(c) {
    setInterval(function(){
    if (c.stream == null) {
    console.log("Offline");
  } else {
    console.log("Online");
  }
}); }, 30000);

</script>```

```
# Table des matières

1. [Introduction](../../../) Pouvoir utiliser une api et la comprendre.
    1. [API Twitch C'est quoi?](../API) Introduction à l'api twitch.
2. [Php version 1](./v1) Affiche si une personne est en ligne ou non.
    1. [Php version 2](../v2) Affiche si une personne est en ligne ou non avec une image.
    2. [Php version 3 pannel admin](../v3%20admin) Affiche si une personne est en ligne ou non avec une image, un pannel admin est crée.
3. [Javascript](#)
    1. [Javascript Ajax](./v1) Page déjà construite avec disign.