import { useEffect, useState } from "react"

export default function useEffects(url) {

    const [blogs, setBlog] = useState(null);
    const [lodinggs, setLodinggs] = useState(true)
    const [errors, setErrorrs] = useState(true)

    useEffect(() => {
        fetch(url).then(res => {
            if (!res.ok) throw Error("Veri Çekilemiyor")
            return res.json()
        }).then(data => {
            setBlog(data);
            setLodinggs(false)
        }).catch(err => {
            setLodinggs(false)
            setErrorrs(err.message)
        })
    }, [url])

    return { blogs, lodinggs, errors }
}