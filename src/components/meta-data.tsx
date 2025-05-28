import type { FC } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router";

type SeoProps = {
  title?: string;
  description?: string;
};

const MetaData: FC<SeoProps> = ({ title, description }) => {
  const { pathname } = useLocation();
  const getTitle = () => {
    if (title) {
      return title;
    }
    return generateTitleFromPath(pathname);
  };

  return (
    <Helmet>
      <title>{getTitle()}</title>
      {description && <meta name="description" content={description} />}
    </Helmet>
  );
};

export default MetaData;

function toTitleCase(str: string) {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
}

function generateTitleFromPath(pathName: string): string {
  if (!pathName || pathName === "/") return "Home";

  const cleanPath = pathName.replace(/^\/|\/$/g, "").toLowerCase();

  switch (cleanPath) {
    case "403":
      return "403 | Forbidden";
    case "*":
      return "404 | Page Not Found";
    default:
      return cleanPath
        .split("/")
        .map((segment) =>
          toTitleCase(segment.replace(/[-_]/g, " ").replace(/\s+/g, " ").trim())
        )
        .join(" | ");
  }
}
