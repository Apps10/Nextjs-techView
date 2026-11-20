import Navbar from "./components/Navbar/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-linear-to-b from-slate-900 via-purple-900 to-slate-900">
      <Navbar/>
      <p className="font-">hola desde home</p>

    </div>
  )
}
