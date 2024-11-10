import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.documentTypeListItem("post").title("Post"),
      S.documentTypeListItem("author").title("Author"),
      S.documentTypeListItem("category").title("Category"),
      S.documentTypeListItem("page").title("Page"),
      S.documentTypeListItem("promotion").title("Promotion"),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() &&
          !["post", "author", "category", "page", "promotion"].includes(
            item.getId()!
          )
      ),
    ]);
