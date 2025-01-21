import Link from "next/link";

export default function Navbar() {
    const menus =[
        {name: "Home",path: "#"},
        {name: "About us",path: "#"},
        {name: "page1",path: "/page1"},
        {name: "page2",path: "/page2"},
        {name: "page3",path: "/page3#"},
        {name: "fruit",path: "/fruit"},
    ]
    return (
        <div className="w-full sticky top-0 flex justify-between bg-green-700">
            <div>
                Logo
            </div>
            <ul className="flex gap-x-6">
            <li className="text-center"><Link href="#">Home</Link></li>
                <li className="text-center"><Link href="#">About us</Link></li>
                <li className="text-center"><Link href="\page1">Page 1</Link></li>
                <li className="text-center"><Link href="\page2">Page 2</Link></li>
                <li className="text-center"><Link href="\page3">Page 3</Link></li>
                <li className="text-center"><Link href="\fruit">fruit</Link></li>
            </ul>
        </div>
    )
}