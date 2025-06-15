import "@/styles/global.css";

//keeping main.scss as global here
import "@/styles/main.scss";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
