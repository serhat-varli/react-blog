import { useState } from "react"
import { useHistory } from "react-router-dom"

export default function Create() {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [age, setAge] = useState("");
    const [city, setCity] = useState("");
    const [lodinggs, setLodinggs] = useState(false);
    const history = useHistory() 

    const handelSubmit = (e) => {
        e.preventDefault();
        setLodinggs(true)
 
        const outher = { name, surname, age, city }
        fetch('http://localhost:8000/ailem/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(outher)
        }).then(()=> {
            console.log('eklendi')
            setLodinggs(false);
            history.push("/")
        })
    }
    return (
        <div className="container">
            <h1>Yeni Yazı Ekle</h1>
            <form onSubmit={handelSubmit}>
                <div className="form-item">
                    <label>Yazı Kullanıcı Adı: </label>
                    <input type="text" name="name" placeholder="Adı" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form-item">
                    <label>Yazı Kullanıcı Soyadı: </label>
                    <input type="text" name="surname" placeholder="Soyadı" value={surname} onChange={(e) => setSurname(e.target.value)} />
                </div>
                <div className="form-item">
                    <label>Yazı Kullanıcı Yaş: </label>
                    <input type="text" name="age" placeholder="Yaş" value={age} onChange={(e) => setAge(e.target.value)} />
                </div>
                <div className="form-item">
                    <label>Yazı Kullanıcı Şehir: </label>
                    <input type="text" name="city" placeholder="Şehir" value={city} onChange={(e) => setCity(e.target.value)} />
                </div>
                <div className="form-item">
                    {!lodinggs && <button>Kaydet</button>}
                    {lodinggs && <button>Yükleniyor</button>}
                </div>
            </form>
        </div>
    )
}