import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DevOps Engineer | Portfolio",
  description: "DevOps engineering portfolio focused on Azure DevOps, CI/CD automation, cloud deployments and infrastructure reliability.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
