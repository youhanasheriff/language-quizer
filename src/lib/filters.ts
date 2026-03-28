import type { Kanji, VocabItem, GrammarRule } from "@/data/types";
import { KANJI, VOCAB, GRAMMAR } from "@/data";

export const KANJI_CATS: Record<string, (k: Kanji) => boolean> = {
  numbers: (k) => ["One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Hundred","Thousand","Ten thousand","Yen","Number/turn"].some((w) => k.en.includes(w)),
  time: (k) => ["Day","Month","Year","Time","Hour","Interval","Week","Now","Morning","Daytime","Night","Past","Come/Next","Before","After","Every","Noon"].some((w) => k.en.includes(w)),
  people: (k) => ["Person","I/","Name","Friend","House","Family","brother","sister","Self","Introduce","Clan"].some((w) => k.en.includes(w)),
  nature: (k) => ["Mountain","River","Water","Fire","Earth","Tree","Flower","Sky","Rain","Heaven","Weather","Spirit","Rice field","Empty"].some((w) => k.en.includes(w)),
  directions: (k) => ["North","South","East","West","Right","Left","Up","Down","Outside","Inside","Middle","Near","Far"].some((w) => k.en.includes(w)),
  places: (k) => ["Country","Town","Shop","Station","Garden","Park","Roof","Institution","Public","Company","Shrine","Meet","Store"].some((w) => k.en.includes(w)),
  school: (k) => ["Study","School","Life","Born","Student","Teacher","Previous","Character","Letter","Chinese","Test","Examine","Book","Write","Read","Language","Hear","Listen","Talk","Story","Origin","Word"].some((w) => k.en.includes(w)),
  actions: (k) => ["Go","Return","Enter","Exit","See","Buy","Eat","Drink","Walk","Run","Rest","Use","Serve","Work","Thing","Roll","Turn","Put","Look","Do"].some((w) => k.en.includes(w)),
  adjectives: (k) => ["Big","Small","Long","Short","High","Expensive","Cheap","Safe","Many","Few","New","Old","Wide","Strong","Bright","Dark","White","Red","Blue","Black","Exist","Have","Fun","Music","Little"].some((w) => k.en.includes(w)),
};

export function getFilteredKanji(filter: string): Kanji[] {
  if (filter === "all") return [...KANJI];
  const fn = KANJI_CATS[filter];
  return fn ? KANJI.filter(fn) : [...KANJI];
}

export function getFilteredVocab(filter: string): VocabItem[] {
  if (filter === "katakana") return VOCAB.filter((v) => /^[\u30A0-\u30FF\u30FC]+$/.test(v.japanese.trim()));
  if (filter === "hiragana") return VOCAB.filter((v) => /^[\u3040-\u309F\u30FC\uFF08\uFF09\uFF5E\u30FB]+$/.test(v.japanese.replace(/\s/g, "").trim()));
  return [...VOCAB];
}

export function getFilteredGrammar(filter: string): GrammarRule[] {
  if (filter === "all") return [...GRAMMAR];
  const lessonNum = parseInt(filter.replace("L", ""));
  return GRAMMAR.filter((g) => g.lesson === lessonNum);
}
