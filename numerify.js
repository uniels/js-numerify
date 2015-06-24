function numerify(objectid)
{
    var $container = $('#'+objectid);
    console.log($container.length);
    var digits = $();

}

function numerifyReset($object)
{
    $object.find('.numerify-show').removeClass('numerify-show');
}

function numerifySet($object,number)
{
    numerifyReset($object);
    switch ( parseInt(number) ){
        case 8:
            numerifyShowDigit($object,"e");
        case 9:
            numerifyShowDigit($object,"b");
        case 3:
            numerifyShowDigit($object,"d");
            numerifyShowDigit($object,"g");
        case 7:
            numerifyShowDigit($object,"a");
        case 1:
            numerifyShowDigit($object,"c");
            numerifyShowDigit($object,"f");
            break;
        case 6:
            numerifyShowDigit($object,"e");
        case 5:
            numerifyShowDigit($object,"a");
            numerifyShowDigit($object,"b");
            numerifyShowDigit($object,"d");
            numerifyShowDigit($object,"f");
            numerifyShowDigit($object,"g");
            break;
        case 4:
            numerifyShowDigit($object,"c");
            numerifyShowDigit($object,"b");
            numerifyShowDigit($object,"d");
            numerifyShowDigit($object,"f");
            break;
        case 0:
            numerifyShowDigit($object,"a");
            numerifyShowDigit($object,"b");
            numerifyShowDigit($object,"c");
            numerifyShowDigit($object,"e");           
            numerifyShowDigit($object,"f");
            numerifyShowDigit($object,"g");
            break;
        case 2:
            numerifyShowDigit($object,"a");
            numerifyShowDigit($object,"c");
            numerifyShowDigit($object,"e");           
            numerifyShowDigit($object,"g"); 
        default:
            numerifyShowDigit($object,"d");
            break;
    }
}

function numerifyShowDigit($object,digit)
{
    $object.find('.numerify-'+digit).addClass("numerify-show");
}