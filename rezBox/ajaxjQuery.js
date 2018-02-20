// basic ajax using jquery
// requires that jQuery be added (from CD, etc <script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>)

//window.onload = function(){
  //console.log('*** ajaxjQuery ***');
  $.get('/../data/dummy.json', function(data){ console.log('ajaxjQuery data:' ); console.log( data ); } );

//}
