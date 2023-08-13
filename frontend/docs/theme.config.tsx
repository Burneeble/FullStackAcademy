import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import "./pages/_app";

const config: DocsThemeConfig = {
  logo: <span>Web3 Docs</span>,
  project: {
    link: "https://github.com/shuding/nextra-docs-template",
  },
  chat: {
    link: "https://discord.com",
  },
  docsRepositoryBase: "https://github.com/shuding/nextra-docs-template",
  footer: {
    text: "Web3 Docs",
  },
};

export default config;
