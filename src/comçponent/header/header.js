import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="home">
            <div className="container">
                <header className="header">

                    <Link className="logo" to="/"><h1 >AOS Blog</h1></Link>
                    <ul className="nav">
                        <li><Link to="/">Anasayfa</Link></li>
                        <li><Link to="/create">Yeni Yazı</Link></li>
                    </ul>
                </header>
            </div>
        </div>
    )
}