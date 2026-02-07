import ar from "@/data/ar";
import en from "@/data/en";

const dictionaries = {
  ar,
  en,
};

export function getDictionary(lang) {
  if (!lang) return ar;
  return dictionaries[lang] || ar;
}
