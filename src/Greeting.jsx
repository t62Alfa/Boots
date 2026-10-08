import { useState } from "react";

function Greeting(props) {
    const [Jumlah, setJumlah] = useState(0);
    return (
        <div>
            <h1>{props.ucapan}, para {props.object}!</h1>
            <p>Ini adalah UI pertama {props.nama}</p>
            <br />
            <p>Kamu menekan tombol {Jumlah} kali</p>
            <button onClick={() => setJumlah(Jumlah + 1)}>Tombol</button>
        </div>
    )
}

export default Greeting