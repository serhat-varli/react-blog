import { useParams } from "react-router-dom"
import useEffects from "../getData/useFetch"
import { useHistory } from "react-router-dom";
export default function BlogDetail() {
    const { id } = useParams()
    const { blogs, lodinggs, errors } = useEffects('http://localhost:8000/ailem/' + id);
    const history = useHistory();
    const heandelDelete = () => {
        fetch('http://localhost:8000/ailem/' + id, {
            method: 'DELETE'
        }).then(
            console.log('slindi'),
            history.push('/')
        )
    }



    return (
        <div className="container">
            {lodinggs && <div className="">Yükleniyor</div>}
            {errors && <div className="">{errors}</div>}
            {
                blogs && (
                    <div className="">
                        <h1>Adı Soyad : {blogs.name + ' ' + blogs.surname}</h1>
                        <p>Yaş : {blogs.age}</p>
                        <p>Şehir : {blogs.city}</p>
                        <button onClick={heandelDelete}>Sil</button>
                    </div>
                )
            }
        </div>
    )
}