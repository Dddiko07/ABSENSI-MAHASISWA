import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          📋 Absensi Mahasiswa
        </Link>

        <Link className="btn btn-light btn-sm" to="/tambah">
          ➕ Tambah Absensi
        </Link>
      </div>
    </nav>
  );
}
