import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Genildo Burgos | Engenharia de Software",
    short_name: "GenildoBurgos",
    description:
      "Portal oficial e portfólio open source com repositórios e projetos vivos de Genildo Burgos.",
    start_url: "/",
    display: "standalone",
    background_color: "#09090b",
    theme_color: "#09090b",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
