import { WhatsAppIcon } from "@/components/shared/icons";
import { WHATSAPP_URL } from "@/data/content";

// Floating WhatsApp shortcut used on every page except Home (Home gets the richer ChatWidget).
export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      style={{
        position: "fixed", bottom: 26, right: 26, width: 58, height: 58, borderRadius: "50%",
        background: "var(--whatsapp-green)", display: "flex", alignItems: "center", justifyContent: "center",
        boxShadow: "var(--shadow-lg)", zIndex: 80, textDecoration: "none",
      }}
    >
      <span style={{ position: "absolute", inset: 0, borderRadius: "50%", border: "2px solid var(--whatsapp-green)", animation: "pulse-ring 2s infinite" }} />
      <WhatsAppIcon size={30} color="var(--white)" />
    </a>
  );
}
