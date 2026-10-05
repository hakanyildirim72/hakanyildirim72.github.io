import { Activity, BrainCircuit, Fingerprint, Landmark, Microchip, Network, ScanSearch, ShieldCheck, ShoppingCart } from "lucide-react";

export function TopicIcon({ topic, size = 24 }: { topic: string; size?: number }) {
  const icons = {
    cybersecurity: ShieldCheck,
    "digital-evidence": ScanSearch,
    privacy: BrainCircuit,
    "information-systems": Network,
    polnet: Network,
    afis: Fingerprint,
    metsis: Landmark,
    "istanbul-mobese": ScanSearch,
    "smart-pos": ShoppingCart,
    "electronic-market-basket": ShoppingCart,
    "prostate-cancer": Activity,
    "ask-another-doctor": Activity,
    kec: Microchip,
    "iot-logistics": Network,
    "endoscopic-diagnosis": Activity,
  };
  const Icon = icons[topic as keyof typeof icons] ?? ShieldCheck;
  return <Icon size={size} strokeWidth={1.5} aria-hidden="true" />;
}
