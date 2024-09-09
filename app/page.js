// Imports
import Link from "next/link";

// Home Page
export default function Home() {
  return (
    <main> 
      <h1 className="text-4xl font-bold mb-5" > CPRG 306: Web Development 2 - Assignment </h1>
      <ul> 
        <li> <Link href="./week-2" className="hover:text-green-400 hover:underline"> Week 2 Assignment </Link> </li> 
        <li> <Link href="./week-3" className="hover:text-green-400 hover:underline"> Week 3 Assignment </Link> </li>
         
      </ul>
    </main>
  );
}
