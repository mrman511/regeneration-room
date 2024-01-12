import './globals.css';
import localFont from 'next/font/local';

import Head from 'next/head';

export const metadata = {
  title: 'Regeneration Room: Coming Soon',
}

const myFont = localFont({ 
  src: '../public/fonts/photograph-signature.ttf',
  variable: '--cursive-font'
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel='icon' href='/icon.svg' type='image' sizes='any'/>
        <link rel="stylesheet" href="https://use.typekit.net/foq2ork.css" />
      </Head>
      <body className={myFont.variable}>{children}</body>
    </html>
  )
}
