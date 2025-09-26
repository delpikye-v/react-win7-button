# react-win7-button (7.css - wrapper)

A customizable React Button styled like Windows 7, built with **styled-components**.

---

[![NPM](https://img.shields.io/npm/v/react-win7-button.svg)](https://www.npmjs.com/package/react-win7-button)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

---

### 🚀 Live Demo

👉 [Codesandbox](https://codesandbox.io/p/sandbox/83t4jk)

---

### 📦 Installation

```bash
npm install react-win7-button
```

---

### 🛠 Usage

```tsx
import Button from "react-win7-button";

export default function App() {
  return (
    <>
      <Button>Default</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="danger">Danger</Button>
      <Button loading>Loading...</Button>
      <Button toggle>Toggle</Button>
      <Button focused>Focused</Button>
      <Button startIcon={<span>⭐</span>} endIcon={<span>➡️</span>}>
        Icons
      </Button>
      <Button iconOnly startIcon={<span>⚙️</span>} />
    </>
  );
}
```

---

### ⚙️ Props

| Prop              | Type                                               | Default       | Description                             |
| ----------------- | -------------------------------------------------- | ------------- | --------------------------------------- |
| `variant`         | `"default"` | `"primary"` | `"danger"`             | `"default"`   | Button style variant                    |
| `size`            | `"small"` | `"medium"` | `"large"`                 | `"medium"`    | Button size                             |
| `shape`           | `"square"` | `"rounded"` | `"pill"`                | `"rounded"`   | Button shape                            |
| `width`           | `string` | `number`                                | `"auto"`      | Button width                            |
| `height`          | `string` | `number`                                | `"auto"`      | Button height                           |
| `fullWidth`       | `boolean`                                          | `false`       | Button takes full width of parent       |
| `color`           | `string`                                           | `"#222"`    | Text/icon color                         |
| `background`      | `string`                                           | Win7 gradient | Background color / gradient             |
| `startIcon`       | `React.ReactNode`                                  | `undefined`   | Icon displayed before children          |
| `endIcon`         | `React.ReactNode`                                  | `undefined`   | Icon displayed after children           |
| `iconOnly`        | `boolean`                                          | `false`       | Show only icon, hide text               |
| `loading`         | `boolean`                                          | `false`       | Show loading spinner and disable button |
| `spinnerPosition` | `"start"` | `"end"` | `"overlay"`                  | `"start"`     | Position of spinner when `loading=true` |
| `active`          | `boolean`                                          | `undefined`   | Controlled toggle state                 |
| `toggle`          | `boolean`                                          | `false`       | Enable toggle mode (pressed/unpressed)  |
| `focused`         | `boolean`                                          | `false`       | Always show focus style                 |
| `autoFocus`       | `boolean`                                          | `false`       | Automatically focus button on mount     |
| `onActiveChange`  | `(active: boolean) => void`                        | `undefined`   | Callback when toggle state changes      |
| `onClick`.         | `(e: React.MouseEvent<HTMLButtonElement>) => void`| `undefined`   | Click event handler                     |

---

### 🔹 Notes

* **Win7 Click Animation:** Button visually depresses slightly when clicked via smooth `transform + box-shadow` transition, no JS timer needed.
* **Focus / Focused Prop:** Mimics default modal button focus in Windows 7, with pulsing outline and subtle gradient highlight.
* **Toggle Button:** Controlled via `active` or uncontrolled internally. Works with `onActiveChange` callback.
* **Loading Spinner:** Spinner color inherits `color` prop. Can appear at `start`, `end`, or overlayed on the button.
* **Icon-only Buttons:** Automatically shrink to minimal width and center the icon.

---

### 📋 License

