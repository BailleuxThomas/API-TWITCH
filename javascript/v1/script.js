
$('document').ready(function(){
  var arr = ['ogaminglol','montanablack88','alderiate','solaryhs','solary','tonton', 'karnackz', 'formal', 'chrismd10']
  
$(arr).each(function(i){
  $.ajax({
    url:"https://api.twitch.tv/kraken/streams/" + arr[i] +"?client_id=b6bustu47nbmaftgi0v8tldtt4jqcye&callback=?",
    type: 'GET',
    dataType:'json',
    headers: {
      'Client-ID': "b6bustu47nbmaftgi0v8tldtt4jqcye"
    },
    success: function(data){
  if(data.stream !== null){
   $('.gallery').prepend('<div class="online col-xs-12 col-sm-6 col-md-4 text-center" id='+ arr[i] +'><a href=' + data.stream.channel.url + ' target="_blank"><h4 class="info">Game: ' + data.stream.channel.game + '<br><span class="views glyphicon glyphicon-eye-open"></span> '+data.stream.viewers+'</h4><img class="img-responsive pulsate" src=' + data.stream.preview.medium +'</a><h3>'+data.stream.channel.display_name+'</h3></div>')
  }else{
    $('.gallery').append("<div class='col-xs-12 col-sm-6 col-md-4 offline text-center' id=" + arr[i] + "><a href=https://www.twitch.tv/" + arr[i] + "  target='_blank'><img class='img-responsive' src='https://res.cloudinary.com/dplpq72kg/image/upload/v1465261783/static_mhwlfg.png'></a><h3>"+ arr[i] +"</h3></div>")      
  } 
   //hover 
  $('.online a').hover(function(){
    $(this).find($('img')).css("opacity", ".25")
    $(this).children($('.info')).toggle(true) 
  }, function(){
    $(this).find($('img')).css("opacity", "1")
    $('.info').toggle(false)
  })
    $('.live').click(function(){
      $('.offline').hide()
      $('.online').show()
    })
    $('.all').click(function(){
      $('.online').show()
      $('.offline').show()
    })
    $('.off').click(function(){
      $('.online').hide()
      $('.offline').show()
    })    
   }
  })   
  //search
   $("#filter").keyup(function(){
    var filter = $('#filter').val().toLowerCase()
    if(arr[i].search(new RegExp(filter, "i")) < 0){
      $('#' + arr[i]).hide()
    } else{
      $('#' + arr[i]).show()
    }
   })
})
  // new channel 
 $('#addChannel').on('hidden.bs.modal', function(){
     var newChannel = $('#channelVal').val().toLowerCase()
     if(newChannel !== ''){
      $.ajax({
        type: 'GET',
        url: 'https://api.twitch.tv/kraken/channels/' + newChannel,
        headers:{
        'Client-ID': 'b6bustu47nbmaftgi0v8tldtt4jqcye'
  },
        success: function(data) {
          $.ajax({
            type: 'GET',
            url: "https://api.twitch.tv/kraken/streams/" + newChannel,
            headers:{
            'Client-ID': 'b6bustu47nbmaftgi0v8tldtt4jqcye'
  },
        success: function(result){
            if(result.stream !== null){
  $('.gallery').prepend('<div class="online col-xs-12 col-sm-6 col-md-4 text-center" id='+ newChannel +'><a href=' + result.stream.channel.url + ' target="_blank"><h4 class="info">Game: ' + result.stream.channel.game + '<br><span class="views glyphicon glyphicon-eye-open"></span> '+result.stream.viewers+'</h4><img class="img-responsive pulsate" src=' + result.stream.preview.medium +'</a><h3>'+result.stream.channel.display_name+'</h3></div>')
  }else{
    $('.gallery').append("<div class='col-xs-12 col-sm-6 col-md-4 offline text-center' id=" + newChannel + "><a href=https://www.twitch.tv/" + newChannel + " target='_blank'><img class='img-responsive' src='https://res.cloudinary.com/dplpq72kg/image/upload/v1465261783/static_mhwlfg.png'></a><h3>"+ newChannel +"</h3></div>")      
            }
          },//success(result)
      error: function() {
    alert('This channel does not exist!')
  }
         })//AJAX
        }//success(data)
      })//ajax
    }//if statement
  })//add channel function
    
 $('.newChannel').click(function(){
    $('#channelVal').val('')
  })
 
  $('#addChannel').on('shown.bs.modal', function(){
    $('#channelVal').focus()
  })
})
