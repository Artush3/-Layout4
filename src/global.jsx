import './styles'
import { Head } from 'minista'
import faviconIco from '@/assets/favicons/favicon.ico'
import favicon32 from '@/assets/favicons/favicon-32x32.png'
import favicon16 from '@/assets/favicons/favicon-16x16.png'
import appleTouch from '@/assets/favicons/apple-touch-icon.png'
import manifest from '@/assets/favicons/site.webmanifest'
import Header from './layouts/Header'
import Content from './layouts/Content'
import Footer from './layouts/Footer'

export default ({ title, url, children }) => {
  return (
    <>
      <Head htmlAttributes={{ lang: 'en' }}>
        <title>Harmony Taste | {title}</title>
        <link rel="icon" type="image/x-icon" href={faviconIco} />
        <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
        <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
        <link rel="apple-touch-icon" sizes="180x180" href={appleTouch} />
        <link rel="manifest" href={manifest} />
        <script type="module" src="/src/main.js" defer />
      </Head>
      <Header url={url} />
      <Content>{children}</Content>
      <Footer/>
    </>
  )
}
