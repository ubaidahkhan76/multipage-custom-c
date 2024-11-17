import Link from "next/link"
import About from "../app/about/page"
export default function Nav() {
    return (
        <div id="myNav">
            <nav>

            <ul>
            <Link style={{textDecoration:"none",color:"white"}} href="/">Home</Link>
            <Link style={{textDecoration:"none",color:"white"}} href="/about">About</Link>
            <Link style={{textDecoration:"none",color:"white"}} href="/contact">Contact Us</Link>
            </ul>

            </nav>
        </div>
    )
}