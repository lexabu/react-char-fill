# React Char Fill

A versatile React component library for creating flexible character-based ratings, perfect for star ratings and other similar use cases.

## Installation

To install the package, use npm, yarn, or bun:

npm install react-char-fill

or

yarn add react-char-fill

or

bun add react-char-fill

## Usage

### Basic Example

Here is a basic example of how to use the `CharacterRating` component:

import CharacterRating from 'react-char-fill';

const App = () => {
return (
<CharacterRating
      rating={3.5}
      character="★"
      maxRating={5}
      emptyColor="lightgray"
      fillColor="gold"
      interactive={false}
      step={0.5}
    />
);
};

export default App;

### Advanced Example

You can also customize the colors, font size, and other props:

import CharacterRating from 'react-char-fill';

const App = () => {
return (
<CharacterRating
      rating={4.2}
      character="☆"
      maxRating={10}
      emptyColor="#e0e0e0"
      fillColor="#ffeb3b"
      fontSize="32px"
      interactive={true}
      step={0.1}
    />
);
};

export default App;

## API Documentation

### `CharacterRating`

A component to display a rating using characters.

#### Props

- `rating` (number, required): The current rating value.
- `character` (string, required): The character used to represent the rating.
- `maxRating` (number, required): The maximum rating value.
- `emptyColor` (string, optional): The color for the empty rating characters. Default is `lightgray`.
- `fillColor` (string, optional): The color for the filled rating characters. Default is `gold`.
- `fontSize` (string, optional): The size of the rating characters. Default is `24px`.
- `interactive` (boolean, optional): If true, the rating can be changed by the user. Default is `true`.
- `step` (number, required): The increment step for the rating value.
- `onMouseMove` (function, optional): Function to call on mouse move.
- `onClick` (function, optional): Function to call on click.
- `onKeyDown` (function, optional): Function to call on key down.

### `CharacterFill`

A component used internally by `CharacterRating` to render individual characters.

#### Props

- `position` (number, required): The position of the character in the rating sequence.
- `rating` (number, required): The current rating value.
- `character` (string, required): The character used to represent the rating.
- `emptyColor` (string, optional): The color for the empty rating characters. Default is `grey`.
- `fillColor` (string, optional): The color for the filled rating characters. Default is `gold`.
- `fontSize` (string, optional): The size of the character. Default is `24px`.
- `step` (number, required): The increment step for the rating value.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch with your changes: `git checkout -b my-feature-branch`.
3. Commit your changes: `git commit -am 'Add new feature'`.
4. Push to the branch: `git push origin my-feature-branch`.
5. Create a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
