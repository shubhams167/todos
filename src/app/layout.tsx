import { Providers } from "@/components/Providers";
import { ReactNode } from "react";
import { cookies } from "next/headers";
import Header from "../components/Header";

export default function RootLayout({ children }: { children: ReactNode }) {
  const cookieStore = cookies();

  return (
    <html lang="en">
      <body>
        <Providers cookies={cookieStore.toString()}>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
