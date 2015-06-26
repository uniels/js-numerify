function numerify(placeholder,length)
{
    var $maincontainer = $( '#'+placeholder);
    if( $maincontainer.length === 1){
        var numbers = [];
        var total = parseInt(length) || 0;
        for( var i = 0; i < total; i++){
            numbers.push(numerifyCreateNumber());
        }
        $maincontainer.append(numbers);
    } else console.log( 'Error on Numerify. "'+placeholder+'" is not an object.' );
}

function numerifyCreateNumber()
{
    var $container = $( '<div />' );
    var digits = [];
    for (var n = 0; n < 8; n++) {
        digits.push( $( '<div />' ).addClass( 'numerify-'+String.fromCharCode(97 + n)) );
    };
    digits.push( 
        $( '<div />' ).addClass( 'numerify-up' ).click( function(){
            numerifyUp( $container );
        }).append( $( '<div />' ) )
    );
    digits.push( 
        $( '<div />' ).addClass( 'numerify-down' ).click( function(){
            numerifyDown( $container );
        }).append( $( '<div />' ) )
    );
    $container.addClass( 'numerify-container' ).append( digits );
    numerifySetNumber( $container,'0' );
    numerifyShowDigits( $container);
    return $container;
}

function numerifyHideDigits( $object )
{
    $object.find( '.numerify-show' ).removeClass( 'numerify-show' );
}

function numerifyShowDigits( $object )
{
    numerifyHideDigits( $object);
    var number = numerifyGetNumber( $object);
    if( !isNaN( number ) && ( number >= 0 && number < 10 ) ){
        $object.data( 'number', number );
        switch ( number ){
            case 8:
                numerifyShowDigit( $object,"e" );
            case 9:
                numerifyShowDigit( $object,"b" );
            case 3:
                numerifyShowDigit( $object,"d" );
                numerifyShowDigit( $object,"g" );
            case 7:
                numerifyShowDigit( $object,"a" );
            case 1:
                numerifyShowDigit( $object,"c" );
                numerifyShowDigit( $object,"f" );
                break;
            case 6:
                numerifyShowDigit( $object,"e" );
            case 5:
                numerifyShowDigit( $object,"a" );
                numerifyShowDigit( $object,"b" );
                numerifyShowDigit( $object,"d" );
                numerifyShowDigit( $object,"f" );
                numerifyShowDigit( $object,"g" );
                break;
            case 4:
                numerifyShowDigit( $object,"c" );
                numerifyShowDigit( $object,"b" );
                numerifyShowDigit( $object,"d" );
                numerifyShowDigit( $object,"f" );
                break;
            case 0:
                numerifyShowDigit( $object,"a" );
                numerifyShowDigit( $object,"b" );
                numerifyShowDigit( $object,"c" );
                numerifyShowDigit( $object,"e" );           
                numerifyShowDigit( $object,"f" );
                numerifyShowDigit( $object,"g" );
                break;
            case 2:
                numerifyShowDigit( $object,"a" );
                numerifyShowDigit( $object,"c" );
                numerifyShowDigit( $object,"e" );           
                numerifyShowDigit( $object,"g" ); 
            default:
                numerifyShowDigit( $object,"d" ); 
                break;
        }
    } else {
        numerifyShowDigit( $object,"d" );
    }
}

function numerifyShowDigit( $object, digit )
{
    $object.find( '.numerify-' + digit ).addClass( "numerify-show" );
}

function numerifySetNumber( $object, num )
{
    var number = parseInt( num );
    $object.data( 'number',number);
    console.log( numerifySetTotal( $object.parent('div') ) );
}

function numerifySetTotal( $maincontainer )
{
    $numbers = $maincontainer.children( '.numerify-container' );
    var total = '';
    $numbers.each(function(){
        total += String( $(this).data( 'number' ) );
    });
    totalint = parseInt( total );
    $maincontainer.data( 'total', totalint );
    return totalint;
}

function numerifyGetNumber( $object )
{
    return parseInt( $object.data( 'number' )) || 0;
}

function numerifyUp( $object )
{
    var number = numerifyGetNumber( $object );
    number++;
    if( number == 10 ){
         number = 0;
         var $previous = $object.prev( '.numerify-container' );
         if( $previous.length ) numerifyUp( $previous );
    }
    numerifySetNumber( $object,number );
    numerifyShowDigits( $object );
}

function numerifyDown( $object )
{
    var number = numerifyGetNumber( $object);
    number--;
    if( number < 0 ){
        number = 9;
         var $previous = $object.prev( '.numerify-container' );
         if( $previous.length ) numerifyDown( $previous );        
    } 
    numerifySetNumber( $object, number );
    numerifyShowDigits( $object );
}
