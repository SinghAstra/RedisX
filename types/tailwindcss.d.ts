declare module "tailwindcss/lib/util/flattenColorPalette" {
  import { ThemeConfig } from "tailwindcss/types/config";

  function flattenColorPalette(
    colors: ThemeConfig["colors"]
  ): Record<string, string>;

  export default flattenColorPalette;
}
