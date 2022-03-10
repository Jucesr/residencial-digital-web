import Body from "../components/Body";
import Head from 'next/head';

function App() {
  return (
    <div className="App">
      <Head>
        <title>Residencial digital | Software para residenciales</title>
        <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
        <link rel="shortcut icon" type="image/x-icon" href="/static/favicon.ico" />
        <link href="https://fonts.googleapis.com/css?family=Lobster&display=swap" rel="stylesheet" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="Software para el control residencial." />
        <meta name="og:title" property="og:title" content="Software para el control residencial." />
        <meta name="twitter:card" content="Software para el control residencial"></meta>
        <link rel="canonical" href="https://www.pacientesano.com/"></link>

      </Head>
      <Body />
    </div>
  );
}

export default App;