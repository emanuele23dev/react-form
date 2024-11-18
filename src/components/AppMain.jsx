import { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../components/AppMain.css";

export default function AppMain() {
  const [articoli, setArticoli] = useState([]);
  const [titolo, setTitolo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setArticoli([{ id: Date.now(), titolo }, ...articoli]);

    setTitolo("");
  };

  const deleteArticoli = (e) => {
    const dataIndex = e.target.getAttribute("data-index");
    const newArticoli = articoli.filter((articolo, index) => dataIndex != index);
    setArticoli(newArticoli);
  };

  return (
    <div className="container-form">
      <h1 className="text-center text-white mt-5 mb-5">React Blog Form</h1>

      <form className="d-flex gap-4 mb-4" onSubmit={handleSubmit}>
        <input
        className="rounded"
          type="text"
          value={titolo}
          onChange={(e) => setTitolo(e.target.value)}
          placeholder="Inserisci articolo"
        />
        <button className="btn btn-primary" type="submit">
          Aggiungi Articolo
        </button>
      </form>

      <ul className="list-group">
        {articoli.map((articolo, index) => (
            <li
                key={index}
                className="list-group-item d-flex justify-content-between mt-2 mb-2 rounded"
            >
                {articolo.titolo}{" "}
                <button className="trash-icon" data-index={index} onClick={deleteArticoli}>
                    <i className="bi bi-trash"></i>
                </button>
            </li>
        ))}
      </ul>
    </div>
  );
}
