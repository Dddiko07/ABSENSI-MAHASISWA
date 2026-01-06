import AbsensiForm from "../components/AbsensiForm";

export default function Form() {
  return (
    <div className="card shadow-sm">
      <div className="card-header bg-white">
        <h5 className="mb-0">➕ Form Absensi Mahasiswa</h5>
        <small className="text-muted">
          Isi data absensi dengan benar
        </small>
      </div>

      <div className="card-body">
        <AbsensiForm />
      </div>
    </div>
  );
}
