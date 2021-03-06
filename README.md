<div align="center">
  <strong>useImage</strong>
  <br />
  <strong>Minimal React Hook to load images!</strong>
  </strong>
</div>


## Install

###### Yarn

```cmd
yarn add react-hook-image
```

###### NPM

```cmd
npm i react-hook-image
```

## Usage

```jsx
import useImage from "react-hook-image";

export default function ImageComponent({ imageUrl }) {
  const { src, status } = useImage(imageUrl, "Anonymous");
  
  return status === "loading" ? <div>Loading ...</div> : <img src={src} alt="alt text" />
});
```
Hook status: `loading`, `success`, `failed`


| Arguments | Required?|
| ----- | ----- |
| url | Yes |
| crossOrigin | No |

## License

Licensed under the MIT License
