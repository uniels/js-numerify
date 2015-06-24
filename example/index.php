<!DOCTYPE html>
<html lang="nl">
    <head>
        <meta charset="utf-8">
        <title>Hello World!</title>
        <link rel="stylesheet" href="../numerify.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
        <script src="../numerify.js"></script>
    </head>
    <body>
        <div id="number" class="numerify-container">
            <div class="numerify-a"></div>
            <div class="numerify-b"></div>
            <div class="numerify-c"></div>
            <div class="numerify-d"></div>
            <div class="numerify-e"></div>
            <div class="numerify-f"></div>
            <div class="numerify-g"></div>
        </div>
        <select id="selectbox">
            <?php for($i = 0; $i < 10; $i++){
                echo "<option val='$i'>$i</option>";
            }
            ?>
        </select>
    </body>
    <script>
    numerify('number');

    $('#selectbox').change(function() {
        $('#number').data("number",$(this).val());
        numerifySet($('#number'),$(this).val());
    });

    </script>
</html>