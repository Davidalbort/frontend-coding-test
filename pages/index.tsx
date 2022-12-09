import { Layout } from "../app"
import { getPeople } from "../services/getPeople"
import Head from "next/head"

function HomePage() {

  return (
      <>
        <Head>
        <meta name="description" content="solucion de la prueba tecnica Datasketch" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Datasketch</title>
        <meta property="og:locale" content="es" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"/>
        <meta property="og:type" content="WebPage" />
        <meta property="og:title" content="solucion de la prueba tecnica Datasketch" />
        <meta property="og:description" content="solucion de la prueba tecnica Datasketch" />
        <meta property="og:image" content="https://pages.datasketch.co/uploads/site/logo_placeholder.png" />
        <meta property="og:site_name" content="Datasketch" />
        <meta property="og:url" content="https://www.datasketch.co/" />
        <link rel="canonical" href="https://www.datasketch.co/" />
        </Head>
        <Layout />
      </>
    )
}

export default HomePage