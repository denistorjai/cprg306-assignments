// Imports
import Link from "next/link";

// Home Page
export default function Home() {
  return (
    <main className="p-24"> 
      <h1 className="text-4xl font-bold mb-5" > CPRG 306: Web Development 2 - Assignment </h1>
      <ul> 
        <li> <Link href="./week-2" className="hover:text-purple-800 hover:underline"> Week 2 Assignment </Link> </li> 
        <li> <Link href="./week-3" className="hover:text-purple-800 hover:underline"> Week 3 Assignment </Link> </li>
        <li> <Link href="./week-4" className="hover:text-purple-800 hover:underline"> Week 4 Assignment </Link> </li>
        <li> <Link href="./week-5" className="hover:text-purple-800 hover:underline"> Week 5 Assignment </Link> </li>
        <li> <Link href="./week-6" className="hover:text-purple-800 hover:underline"> Week 6 Assignment </Link> </li>
      </ul>
    </main>
  );
}
