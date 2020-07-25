import Head from 'next/head';

const SEO = () => (
  <Head>
    <title>Country Database</title>
    <meta name="title" content="Country Database" />
    <meta name="description" content="A searchable database of all the countries in the world." />

    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://country-database.vercel.app/" />
    <meta property="og:title" content="Country Database" />
    <meta property="og:description" content="A searchable database of all the countries in the world." />
    <meta property="og:image" content={`src/images/meta-images.jpg`} />

    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://country-database.vercel.app/" />
    <meta property="twitter:title" content="Country Database" />
    <meta property="twitter:description" content="A searchable database of all the countries in the world." />
    <meta property="twitter:image" content={`src/images/meta-images.jpg`} />
  </Head>
)

export default SEO