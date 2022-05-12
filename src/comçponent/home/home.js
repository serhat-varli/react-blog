
import useEffects from "../getData/useFetch";
import Item from "./item";

export default function Home() {
const {blogs, lodinggs, errors} = useEffects("http://localhost:8000/ailem")


    return (
        <div className="container">
            <h2 className="title-head">Bütün Yazılarımız</h2>
            {errors && <div className=""> {errors}</div>}
            {lodinggs && <div className=""> Yükleniyor</div>}
            {blogs && <Item blogs={blogs} />}
        </div>
    )
}