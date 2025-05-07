import Head from "next/head";

const SEO = ({ pageTitle }) => (
    <>
        <Head>
            <title>
                {pageTitle && `${pageTitle} ApexNucleus - Leading Website Design Agency in India & Internationally `}
            </title>
            <meta httpEquiv="x-ua-compatible" content="ie=edge" />
            <meta name="keywords" content="ApexNucleus, web development, Full-Stack Web Development, digital marketing agency,digital marketing agency near me, digital marketing agency in delhi, " />
            <meta name="description" content="ApexNucleus is a leading website design agency in India, offering creative, responsive, and user-friendly designs for global clients to enhance your brand’s online presence." />
            <meta name="robots" content="index, follow" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        </Head>
    </>
);

export default SEO;