[![npm version](https://badge.fury.io/js/react-char-fill.svg)](https://badge.fury.io/js/react-char-fill)

# React Char Fill

A versatile React component library for creating customizable character-based ratings. Ideal for star ratings and other similar applications, with fine-grained control over rating steps, colors, and interactivity.

---

## 📺 Live Demo

Experience the component in action: [Live Demo](https://lexabu.github.io/react-char-fill/)

---

## 🚀 Installation

Install the package using your preferred package manager:

```
npm install react-char-fill
```

or

```
yarn add react-char-fill
```

or

```
bun add react-char-fill
```

---

## 📚 Usage

### Basic Example

```
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
```

### Advanced Example

```
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
```

---

## 🔧 API Documentation

### `CharacterRating`

This component displays a rating using characters and provides the ability to customize and interact with the rating.

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

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps to contribute:

1. **Fork the repository.**
2. **Create a new branch** with your changes: `git checkout -b my-feature-branch`.
3. **Commit your changes**: `git commit -am 'Add new feature'`.
4. **Push to the branch**: `git push origin my-feature-branch`.
5. **Create a pull request.**

---

## 🏗️ Publishing

To publish a new version of the `react-char-fill` package, follow these steps:

1. **Build and Preview:**
   First, build and preview the project to ensure everything works as expected.

   ```bash
   bun run bp
   ```

   This command will build the library and start a preview server. Verify that the build is successful and the preview behaves as intended.

2. **Commit Changes:**
   If everything works fine, commit any changes made to the repository.

   ```bash
   git add .
   git commit -m "Your commit message"
   ```

3. **Bump Version:**
   After committing, bump the version number. This will update the `package.json` version and create a new commit with the version bump.

   ```bash
   bun run bump
   ```

4. **Publish:**
   Finally, publish the package to npm and GitHub Packages.

   ```bash
   bun run publish
   ```

   This command will build the library, publish the package to npm and GitHub Packages, and ensure everything is correctly versioned and released.

By following these steps, you can ensure that each release is built, tested, and published consistently.

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
