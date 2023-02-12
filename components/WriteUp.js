import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import markdownStyles from "./markdown-styles.module.css";

export default function WriteUp({ content }) {
  return (
    <div>
      <div className={markdownStyles["markdown"]}>
        {documentToReactComponents(content.json)}
      </div>
    </div>
  );
}
