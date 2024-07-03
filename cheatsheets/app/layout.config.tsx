import { type BaseLayoutProps, type DocsLayoutProps } from "fumadocs-ui/layout";

export const baseOptions: BaseLayoutProps = {
  githubUrl: "https://github.com/kennyAnyi9/cheatsheets",
  nav: {
    title: (
      <>
        <span className="font-medium text-xl [.uwu_&]:hidden max-md:[header_&]:hidden">
          ⌘ Cheatpedia
        </span>
      </>
    ),
    transparentMode: "top",
  },
  links: [],
};
