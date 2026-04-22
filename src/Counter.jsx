import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  tambahBarang,
  hapusBarang,
  bersihkanSemua,
} from "./counterSlice";

export default function InventoryApp() {
  const [nama, setNama] = useState("");
  const [qty, setQty] = useState("");

  const dispatch = useDispatch();
  const items = useSelector((state) => state.inventory.items);

  const handleTambah = () => {
    if (!nama || !qty) return;

    dispatch(
      tambahBarang({
        nama,
        qty: Number(qty),
      })
    );

    setNama("");
    setQty("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>E-Inventory Masjid</h2>

      <input
        type="text"
        placeholder="Nama Barang"
        value={nama}
        onChange={(e) => setNama(e.target.value)}
      />

      <input
        type="number"
        placeholder="Kuantitas"
        value={qty}
        onChange={(e) => setQty(e.target.value)}
      />

      <br /><br />

      <button onClick={handleTambah}>Tambah</button>
      <button onClick={() => dispatch(bersihkanSemua())}>
        Bersihkan Semua
      </button>

      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.nama} - {item.qty}
            <button onClick={() => dispatch(hapusBarang(index))}>
              Hapus
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}