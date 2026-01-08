import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body style={{ margin: 0, background: "#0b0014", color: "white" }}>
        {children}
      </body>
    </html>
  );
}
