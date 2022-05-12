import { Link } from "react-router-dom";

export default function Item({blogs}) {
    return (
        <div className="item-wrap">
            {
                blogs.map((blog) => (
                    <div className="items" key={blog.id}>
                        <Link to={`/detail/${blog.id}`}>
                            <h3>{blog.name}</h3>
                            <p>Yazı yazarı : {blog.surname}</p>
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}