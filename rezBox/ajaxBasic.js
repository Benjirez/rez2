window.onload = function(){
  console.log('*** ajaxBasic***');
  var request_obj = new XMLHttpRequest(); // ajax object available in all modern browsers

  request_obj.onreadystatechange = function(){
    if(request_obj.readyState == 4 && request_obj.status == 200){
      console.log('ajaxBasic data:' ); console.log( JSON.parse( request_obj.response ) );
    }
  }

  request_obj.open('GET', '/../data/dummy.json', true); // true for async (or false for sync)
  request_obj.send();

}
