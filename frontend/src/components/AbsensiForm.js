import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

export default function AbsensiForm() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    nama: "",
    nim: "",
    tanggal: "",
    status: "Hadir",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    api.post("/absensi", form).then(() => {
      alert("Data absensi berhasil disimpan");
      navigate("/");
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Nama Mahasiswa</label>
        <input
          className="form-control"
          placeholder="Masukkan nama"
          onChange={(e) =>
            setForm({ ...form, nama: e.target.value })
          }
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">NIM</label>
        <input
          className="form-control"
          placeholder="Masukkan NIM"
          onChange={(e) =>
            setForm({ ...form, nim: e.target.value })
          }
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Tanggal</label>
        <input
          type="date"
          className="form-control"
          onChange={(e) =>
            setForm({ ...form, tanggal: e.target.value })
          }
          required
        />
      </div>

      <div className="mb-4">
        <label className="form-label">Status Kehadiran</label>
        <select
          className="form-select"
          onChange={(e) =>
            setForm({ ...form, status: e.target.value })
          }
        >
          <option>Hadir</option>
          <option>Izin</option>
          <option>Alpha</option>
        </select>
      </div>

      <button className="btn btn-primary">
        Simpan Data
      </button>
    </form>
  );
}
