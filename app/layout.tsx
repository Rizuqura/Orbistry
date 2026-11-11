import type { Metadata } from "next";
import "./globals.css";
import "./palette.css";
import "../features/chat/chat.css";
import "../features/model-settings/model-settings.css";
import "../features/dialogs/confirmation.css";
import "./victoria.css";
import "./soft-surfaces.css";
import "./startup.css";
import "../features/chat/chat-presentation.css";
import "./worldview.css";
import "./typography.css";

export const metadata: Metadata = {
  title: "ORB Terminal",
  description:
    "Orbistry Victoria — your knowledge, context and conversations in one workspace.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
