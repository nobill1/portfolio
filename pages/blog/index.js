import Head from "next/head";
import BlogHeader from "../../components/blogHeader";

function Index() {
  return (
    <>
      <Head>
        <title>Bill Nguimeya&apos; Blog</title>
        <meta
          name="description"
          content="This is my blog page where you will find blog articles."
        />
      </Head>
      <BlogHeader />
      <div className="container mx-auto pt-20">
        <h1>Blog page index</h1>
      </div>
    </>
  );
}

export default Index;
