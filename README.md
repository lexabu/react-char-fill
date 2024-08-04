# Character Rating Component

A React component library for displaying character-based ratings.

## Installation

To install the package, use npm, yarn, or bun:

```bash
npm install character-rating-component
```

or

```bash
yarn add character-rating-component
```

or

```bash
bun add character-rating-component
```

## Usage

### Basic Example

Here is a basic example of how to use the `CharacterRating` component:

```tsx
import React from 'react';
import CharacterRating from 'character-rating-component';

const App = () => {
  return (
    <CharacterRating
      rating={3.5}
      character="★"
      maxRating={5}
      emptyColor="lightgray"
      fillColor="gold"
      interactive={false}
    />
  );
};

export default App;
```

### Advanced Example

You can also customize the colors and other props:

```tsx
import React from 'react';
import CharacterRating from 'character-rating-component';

const App = () => {
  return (
    <CharacterRating
      rating={4.2}
      character="☆"
      maxRating={10}
      emptyColor="#e0e0e0"
      fillColor="#ffeb3b"
    />
  );
};

export default App;
```

## API Documentation

### `CharacterRating`

A component to display a rating using characters.

#### Props

- `rating` (number, required): The current rating value.
- `character` (string, required): The character used to represent the rating. This can be any character shown in utils/characters.ts
- `maxRating` (number, required): The maximum rating value.
- `emptyColor` (string, optional): The color for the empty rating characters. Default is `lightgray`.
- `fillColor` (string, optional): The color for the filled rating characters. Default is `gray`.

### `CharacterFill`

A component used internally by `CharacterRating` to render individual characters.

#### Props

- `position` (number, required): The position of the character in the rating sequence.
- `rating` (number, required): The current rating value.
- `character` (string, required): The character used to represent the rating.
- `emptyColor` (string, optional): The color for the empty rating characters.
- `fillColor` (string, optional): The color for the filled rating characters.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch with your changes: `git checkout -b my-feature-branch`.
3. Commit your changes: `git commit -am 'Add new feature'`.
4. Push to the branch: `git push origin my-feature-branch`.
5. Create a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
