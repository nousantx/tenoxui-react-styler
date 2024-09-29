# TenoxUI React Styler

## Installation

```sh
npm i @tenoxui/core @nousantx/tenoxui-react-styler --save-dev
```

## Usage

```jsx
import { useStyler } from "@nousantx/tenoxui-react-styler";

export default function App() {
  useStyler({
    property: {
      bg: "background",
      text: "color",
      p: "padding"
    }
  });

  return <div className="bg-red p-1rem text-blue hover:bg-yellow">Hello</div>;
}
```
