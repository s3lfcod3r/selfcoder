import { de } from "./de";
import { en } from "./en";
import { fr } from "./fr";
import { es } from "./es";
import { it } from "./it";
import { nl } from "./nl";
import { pl } from "./pl";
import { pt } from "./pt";
import { sv } from "./sv";
import { da } from "./da";
import { cs } from "./cs";
import { el } from "./el";
import type { Lang, Dict } from "./types";

export type { Lang, Dict, ProjectItem } from "./types";
export { LANGS } from "./types";

export const translations: Record<Lang, Dict> = {
  de,
  en,
  fr,
  es,
  it,
  nl,
  pl,
  pt,
  sv,
  da,
  cs,
  el,
};
