import Link from "next/link";

export default function Login() {
  return (
    <div style={{ padding: 40 }}>
      <h1>Login</h1>

      <input placeholder="Email" />
      <br /><br />
      <input placeholder="Senha" type="password" />
      <br /><br />

      <Link href="/dashboard">
        <button>Entrar</button>
      </Link>
    </div>
  );
}
