import useNavigationContext from "../hooks/use-navigation-context";

export default function Link({href, children}) {
    const {currentPath, navigate} = useNavigationContext(); 

    const handleClick = (e) => {
        e.preventDefault();
        navigate(href);
    };

    return (
        <a className={currentPath === href ? "active" : null} onClick={handleClick} href={href}>{children}</a>
    )
}