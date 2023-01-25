import Head from "next/head";
import { SinglePreviousCompainsComponent } from "../../components/previous-compains/single-previous-compains/singlePreviousCompains";

const SinglePreviousCompains = () => {
  return (
    <div>
      <Head>
        <title>emma website</title>
        <meta key="description" name="description" content="My new title" />
        <meta key="keywords" name="keywords" content="My, new, title" />
      </Head>

      <SinglePreviousCompainsComponent />
    </div>
  );
};

export default SinglePreviousCompains;
