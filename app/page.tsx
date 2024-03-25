import Link from "next/link";


export default function Home() {
  return (
    <main className="flex flex-col items-center p-24">
      <p className="text-5xl">Hola Mundo!!!</p>
      <Link href='/about'>About</Link>
    </main>
  );
}
