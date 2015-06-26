function numerify( name )
{
    var $input = $( 'input[name="'+name+'"]' );
    if( $input.length === 1){
        var value = parseInt( $input.val() ) || 0;
        var strval = String( value );
        var min = parseInt( $input.attr( 'min' ) ) || 0;
        var max = parseInt( $input.attr( 'max' ) ) || numerifyMax( value );
        var strmax = String(max); //Use max to compare currentvalue.
        var length = strmax.length;
        if( value > max ) return console.log('Error in Numerify: value exceeds the maximum value. Please adjust the value or the maximum value.');
        var $maincontainer = $( '<div />' );
        var numbers = [];
        var total = parseInt(length) || 1;
        for( var i = 0; i < total; i++){
            currentnumber = parseInt( strval.charAt( i - ( total - strval.length  ) ) );
            numbers.push( numerifyCreateNumber( currentnumber ) );
        }
        var $hiddeninput = $('<input>').attr('type','hidden').attr( 'name', name ).val( value );
        $maincontainer.append( numbers ).append( $hiddeninput ).data( 'max', max).data( 'min', min);
        $input.replaceWith($maincontainer);
    } else console.log( 'Error in Numerify: "'+name+'" is not an object.' );
}

function numerifyMax(value)
{
    var i = String(value).length;
    return Math.pow(10,i) - 1;

}

function numerifyCreateNumber( currentnumber )
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
    numerifySetNumber( $container, currentnumber );
    numerifyShowDigits( $container );
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
        //$object.data( 'number', number ); >> Set to SetNumber
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
        numerifyShowDigit( $object, "d" );
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
    numerifyShowDigits( $object );
}

function numerifySetValue( $maincontainer, value )
{
    var strval = String( parseInt(value) );
    var $numbers = $maincontainer.children('.numerify-container');
    var totalnumbers = $numbers.length;
    var number = 0;

    $numbers.each( function( i ){
        number = parseInt( strval.charAt( i - ( totalnumbers - strval.length  ) ) );
        numerifySetNumber($(this) , number );
    });
    numerifySetTotal( $maincontainer );
}

function numerifySetTotal( $maincontainer )
{
    var $numbers = $maincontainer.children( '.numerify-container' );
    var total = '';
    var value = 0;
    var max = $maincontainer.data('max');
    var min = $maincontainer.data('min');

    $numbers.each(function(){
        var number = parseInt( $(this).data('number') );
        if( isNaN(number) ) number = 0;
        total += String( number );
    });
    totalint = parseInt( total );
    if( isNaN(totalint) ) totalint = 0;
    if( ( totalint <= max ) && ( totalint > min ) ){
        value = totalint;
    } else if ( totalint > max ) {
        // If we only add 1 up, we reset the digits to min, else to the max...
        if( totalint == max+1 ) value = min;
        else value = max;
        numerifySetValue( $maincontainer, value );
    } else if ( totalint < min ) {
        if( totalint == min-1 ) value = max;
        else value = min;
        numerifySetValue( $maincontainer, value );
    }
    $maincontainer.find('input').val( totalint );
}

function numerifyGetNumber( $object )
{
    return parseInt( $object.data( 'number' )) || 0;
}

function numerifyUp( $object )
{
    numerifySetUp( $object );    
    numerifySetTotal( $object.parent() );
}

function numerifySetUp( $object ) //Function not in use...
{
    var number = numerifyGetNumber( $object );
    number++;
    if( number == 10 ){
         number = 0;
         var $previous = $object.prev( '.numerify-container' );
         if( $previous.length ) numerifySetUp( $previous );
    }
    numerifySetNumber( $object,number );
}

function numerifyDown( $object )
{ 
    numerifySetDown( $object );
    numerifySetTotal( $object.parent() );
}

function numerifySetDown( $object ) //Function not in use...
{
    var number = numerifyGetNumber( $object);
    number--;
    if( number < 0 ){
        number = 9;
         var $previous = $object.prev( '.numerify-container' );
         if( $previous.length ) numerifySetDown( $previous );        
    } 
    numerifySetNumber( $object, number );  
}
