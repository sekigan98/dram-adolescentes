import Link from "next/link";

export default function Breadcrumb({ current }: { current?: string }) {
  return (
    <nav className="mb-6 text-sm text-gray-600" aria-label="Breadcrumb">
      <ol className="flex items-center">
        <li>
          <Link href="/" className="hover:text-brand-700">Inicio</Link>
        </li>
        {current && (
          <>
            <li><span className="mx-2">/</span></li>
            <li>
              <span className="text-brand-700 font-medium" aria-current="page">
                {current}
              </span>
            </li>
          </>
        )}
      </ol>
    </nav>
  );
}
