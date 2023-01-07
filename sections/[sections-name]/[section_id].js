import { CategoriesComponent } from "@components/sections/categories";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";

const CategoriesPage = () => {
  const { t } = useTranslation('common')

  return (
    <div>
      <Head>
        <title>{t("Search results")}</title>
        <meta key="description" name="description" content="My new title" />
        <meta key="keywords" name="keywords" content="My, new, title" />
      </Head>
      <CategoriesComponent />
    </div>
  );
};

export default CategoriesPage;
