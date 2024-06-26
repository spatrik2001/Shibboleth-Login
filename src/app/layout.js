import "./favicon.ico";

export const metadata = {
  title: "Shibboleth Bejelentkezés",
  description: "Egyszerű applikáció, ami sibboleth segítségével authentikálja a felhasználót",
};

export default function RootLayout({ children }) {
  return (
    <html lang="hu">
      <body>{children}</body>
    </html>
  );
}
