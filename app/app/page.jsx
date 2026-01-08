import Link from "next/link";

export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(135deg, #ff2fa0, #9b5cff)"
    }}>
      <h1 style={{ fontSize: 48 }}>HIPOPÔ 💸</h1>
      <p>Plataforma de bots no Telegram</p>

      <Link href="/login">
        <button style={{ padding: 16, marginTop: 20 }}>
          Entrar
        </button>
      </Link>
    </main>
  );
}
