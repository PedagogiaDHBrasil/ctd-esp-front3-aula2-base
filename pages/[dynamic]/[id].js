import Link from "next/link";

const DynamicPage = () => {
  return (
    <div>
      <Link href="/">
        <a>Página inicial</a>
      </Link>
      <p>
        Rota dinâmica:
      </p>
    </div>
  );
};

export default DynamicPage;
