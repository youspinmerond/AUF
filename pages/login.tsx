import { useSession, signIn } from "next-auth/react"

export default function Login() {
  const {data:session} = useSession()
  
  if(session) {
    return (
      <div>
        <h2>You&apos;re logged</h2>
        <div className="name">{session.user?.name}</div>
        <div className="email">{session.user?.email}</div>
      </div>
    )
  } else {
    return (
      <div>
        <h1>You&apos;ve to login</h1>
        <button onClick={() => signIn()}>Log in</button>
      </div>
    )
  }
}