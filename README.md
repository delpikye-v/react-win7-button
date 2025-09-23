## Button - Win7 Style (7.css)

A customizable React Button styled like Windows 7, built with styled-components.

### 📦 Installation

```bash
npm install win7-button
```

### 🛠 Usage

```tsx
import Button from "win7-button";

export default function App() {
  return (
    <>
      <Button>Default</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="danger">Danger</Button>
      <Button loading>Loading...</Button>
    </>
  );
}
```

### ⚙️ Props

| Prop            | Type                                                       | Default     | Description                                  |
|-----------------|------------------------------------------------------------|-------------|----------------------------------------------|
| `variant`       | `"default"` \| `"primary"` \| `"danger"`                 | `"default"` | Button style variant                         |
| `startIcon`     | `React.ReactNode`                                          | `undefined` | Icon at the start of the button              |
| `endIcon`       | `React.ReactNode`                                          | `undefined` | Icon at the end of the button                |
| `iconOnly`      | `boolean`                                                  | `false`     | Whether button is icon only                  |
| `size`          | `"small"` \| `"medium"` \| `"large"`                     | `"medium"`  | Size of the button                           |
| `fullWidth`     | `boolean`                                                  | `false`     | Button takes full width of parent            |
| `loading`       | `boolean`                                                  | `false`     | Shows spinner when loading                   |
| `shape`         | `"square"` \| `"rounded"` \| `"pill"`                    | `"rounded"` | Shape of the button                          |
| `color`         | `string`                                                   | `"#222"`    | Text color                                   |
| `background`    | `string`                                                   | Gradient    | Background color / gradient                  |
| `spinnerPosition`| `"start"` \| `"end"` \| `"overlay"`                     | `"start"`   | Position of spinner                          |
| `width`         | `string` \| `number`                                      | `"auto"`    | Button width                                 |
| `height`        | `string` \| `number`                                      | `"auto"`    | Button height                                |

### 📋 License

MIT / Delpi
