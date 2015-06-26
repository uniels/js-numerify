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
        <input type="number" name="teller" min="1" max="999" value="69">
        <div id="number">
        </div>
    </body>
    <script>
    numerify('number',3);
    </script>
</html>