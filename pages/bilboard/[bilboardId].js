import Head from "next/head";
import { SingleBilboardComponent } from "../../components/bilboard/singleBilboard/singleBilboard";

const SingleBilboardPage = () => {
  return (
    <div>
      <Head>
        <title>emma website</title>
        <meta key="description" name="description" content="My new title" />
        <meta key="keywords" name="keywords" content="My, new, title" />
      </Head>
      <SingleBilboardComponent />
    </div>
  );
};

export default SingleBilboardPage;
