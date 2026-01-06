import AbsensiList from "../components/AbsensiList";

export default function Home() {
  return (
    <div className="card shadow-sm">
      <div className="card-header bg-white">
        <h5 className="mb-0">📊 Daftar Absensi Mahasiswa</h5>
        <small className="text-muted">
          Menampilkan seluruh data absensi
        </small>
      </div>

      <div className="card-body">
        <AbsensiList />
      </div>
    </div>
  );
}
