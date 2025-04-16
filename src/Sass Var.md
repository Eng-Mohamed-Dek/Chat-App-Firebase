In Sass (Syntactically Awesome Stylesheets), you can define a color variable to reuse throughout your styles. To create a color variable, you simply define it with the `$` symbol, and then you can use that variable anywhere in your Sass files.

Here’s an example of defining and using a color variable in Sass:

### Defining a Color Variable

```scss
// Define a color variable
$primary-color: #3498db;  // Blue color
$secondary-color: #2ecc71; // Green color
```

### Using the Color Variable

```scss
// Use the color variable in your styles
body {
  background-color: $primary-color;
}

h1 {
  color: $primary-color;
}

button {
  background-color: $secondary-color;
  border: none;
  color: white;
  padding: 10px 20px;
  cursor: pointer;
}

button:hover {
  background-color: darken($secondary-color, 10%);  // Darken the green on hover
}
```

### Color Functions in Sass

Sass provides several color functions to manipulate colors like `lighten`, `darken`, `mix`, etc. For example, you can lighten or darken colors based on your needs:

- **`darken($color, $amount)`**: Darkens the color by the specified amount.
- **`lighten($color, $amount)`**: Lightens the color by the specified amount.
- **`mix($color1, $color2, $weight)`**: Mixes two colors together.

Example with `darken` and `lighten`:

```scss
$primary-color: #3498db;

.button {
  background-color: $primary-color;
  
  &:hover {
    background-color: darken($primary-color, 10%);  // Darkens the primary color by 10%
  }
}
```

This is how you can work with color variables in Sass to make your stylesheets more maintainable and flexible!