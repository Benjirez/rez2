console.log( 'poor otis running script');
$.get('data/dummy.html', function( data ){ console.log( data); $('body').append( data ) });
