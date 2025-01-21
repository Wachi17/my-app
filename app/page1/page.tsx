import Image from "next/image";
import Link from "next/link";
export default function Page() {
  return (
    <div>
      <h1 className="text-4xl text-center">Page1</h1>
      <h2 className="text-3xl text-center">66162110219-8</h2>
      <Image src="/01.jpg" width={300} height={300} alt="Player"/>

      <Link href="\page1">Go to page 1</Link><br />
      <Link href="\page2">Go to page 2</Link><br />
      <Link href="\page3">Go to page 3</Link><br />
    </div>
  );
}