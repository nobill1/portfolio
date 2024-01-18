import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en-US' className="scroll-smooth">
        <Head>
          <meta name="description" content="Experienced full-stack developer skilled in multiple programming languages. Offering expertise in front-end and back-end development, database management, and web application design."/>
          <meta name="keywords" content="full-stack developer, web developer, front-end developer, back-end developer, programming languages, JavaScript, HTML, CSS, Python, SQL, MongoDB, MySQL, web application development"/>
          <meta name="author" content="Bill Nguimeya"/>

          <meta property="og:title" content="Bill Nguimeya - Full-Stack Developer"/>
          <meta property="og:description" content="Experienced full-stack developer skilled in multiple programming languages. Offering expertise in front-end and back-end development, database management, and web application design."/>
          <meta property="og:type" content="website"/>
          <meta property="og:url" content="https://billdev.netlify.app/"/>
          <meta property="og:image" content="/logo.svg"/>

       
          <meta property="og:title" content="Bill Nguimeya - Full-Stack Developer"/>
          <meta property="og:description" content="Experienced full-stack developer skilled in multiple programming languages. Offering expertise in front-end and back-end development, database management, and web application design."/>
          <meta property="og:type" content="website"/>
          <meta property="og:url" content="https://billdev.netlify.app/"/>
          <meta property="og:image" content="/logo.svg"/>
          <meta property="og:site_name" content="Bill Nguimeya - Full-Stack Developer"/>
          <meta property="profile:first_name" content="Bill"/>
          <meta property="profile:last_name" content="Nguimeya"/>
          <meta property="profile:industry" content="Information Technology and Services"/>
          <meta property="profile:position:web-developer" content="Full-Stack Developer"/>



          <link rel="icon" href="/favicon.png" />
          <link
            href="https://api.fontshare.com/css?f[]=nippo@500&display=swap"
            rel="stylesheet"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Teko:wght@300;400;600&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://cdn.lineicons.com/3.0/lineicons.css"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
