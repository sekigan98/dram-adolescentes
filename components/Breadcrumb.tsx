import Link from "next/link";

export default function Breadcrumb() {
  return (
    <nav className="mb-6 text-sm text-gray-600">
      <Link href="/" className="hover:text-brand-700">Inicio</Link>
      <span className="mx-2">/</span>
      <span className="text-brand-700 font-medium">Taller</span>
    </nav>
  );
}
