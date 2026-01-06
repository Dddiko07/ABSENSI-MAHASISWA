import { useEffect, useState } from "react";
import api from "../api";

export default function AbsensiList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get("/absensi").then((res) => setData(res.data));
  }, []);

  const hapusData = (id) => {
    if (window.confirm("Yakin ingin menghapus data ini?")) {
      api.delete(`/absensi/${id}`).then(() => {
        setData(data.filter((item) => item.id !== id));
      });
    }
  };

  return (
    <div className="table-responsive">
      <table className="table table-striped table-hover align-middle">
        <thead className="table-primary">
          <tr>
            <th>Nama</th>
            <th>NIM</th>
            <th>Tanggal</th>
            <th>Status</th>
            <th className="text-center">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center text-muted">
                Belum ada data absensi
              </td>
            </tr>
          ) : (
            data.map((item) => (
              <tr key={item.id}>
                <td>{item.nama}</td>
                <td>{item.nim}</td>
                <td>{item.tanggal}</td>
                <td>
                  <span className="badge bg-success">
                    {item.status}
                  </span>
                </td>
                <td className="text-center">
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => hapusData(item.id)}
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
