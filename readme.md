# Small project to show digits
This little script replaces the form-input for numbers.
It replaces, for example this input:

```
<input type="number" name="digits" min="5" max="258" value="69">
```

Just numerify the name of this input-field, and it will replace it with digits.
The value from the original input-field (in this example '69') will be displayed first.

The user is able to adjust the value, by clicking at the top (to add up) or bottom (to subtract) of a digit.
The current value will be saved as hidden value in the form. The same name will be used.

The number of digits is determined by the lenght of the max-value (in the example: '258', so 3 digits).

When the max-value is exceeded by one, the digits will be reset to the min value.
When the max-value is exceeded largely, the digits will be reset to the max-value.
When the min-value is exceeded by one, the digits will be reset to the max value.

### Dependencies
This script uses jQuery v.1.11.3. This script may work from jQuery 1.8 upwards (not verified).

The CSS used in this file needs a modern browser.

## How to use it?
In your form use the input-field like the example above.

Add the numerify.js and the numerify.css in the head of your document.

Call the script, using the input field name (in the example above "digits")

```
<script>
...
numerify('digits');
...
</script>
```

Be sure that the script is called AFTER the input-field.

### A working example
Inside the folder "example" you'll find an example page of the implementation of this script.


## Known issues.
This digits are responsive, however, the container is not (yet). This will be solved in the next release.

The background-color (black) and digit-color (green) are set in CSS. This will be detached in the future.