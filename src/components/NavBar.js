import Link from "./Link";
import "./NavBar.css";
import { SiStrapi } from "react-icons/si"

export default function NavBar() {

    const links = [
        { id: 1, label: "Activities", path: "/activities" },
        { id: 2, label: "Colors", path: "/colors" },
        { id: 3, label: "Emojis", path: "/emojis" },
    ];

    const renderedLinks = links.map((link) => {
        return (
            <li key={link.id}>
                <Link href={link.path}>{link.label}</Link>
            </li>

        )
    });

    return(
        <nav>
            <p className="home-link">
                <Link href="/">
                    <SiStrapi className="logo" />
                    <span className="app-name">API Practice</span>
                </Link>
            </p>

            <ul className="menu">{renderedLinks}</ul>
        </nav>
    )
}