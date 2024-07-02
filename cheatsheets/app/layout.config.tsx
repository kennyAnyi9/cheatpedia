import { type BaseLayoutProps, type DocsLayoutProps } from "fumadocs-ui/layout";
import { BookIcon, LayoutTemplateIcon } from "lucide-react";
import Image from "next/image";

export const baseOptions: BaseLayoutProps = {
  githubUrl: "https://github.com/fuma-nama/fumadocs",
  nav: {
    title: (
      <>
        <span className="font-medium [.uwu_&]:hidden max-md:[header_&]:hidden">
          Cheatpedia
        </span>
      </>
    ),
    transparentMode: "top",
  },
  links: [],
};
