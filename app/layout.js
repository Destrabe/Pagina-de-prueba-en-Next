import TitleChanger from "@/components/titleChanger";
import { Analytics } from "@vercel/analytics/next";
import "./global.css";

export const metadata = {
  title: "Prueba",
  description: "An example of a Next.js app using the App Router.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <TitleChanger />
        {children}
      </body>
    </html>
  );
}
