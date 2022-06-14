import Link from "next/link";

const Home = () => {
  return (
    <div>
      <Link href="/">
        <a>Acessar rota dinâmica</a>
      </Link>
      <br />
      <Link href="/">
        <a>Acessar rota estática</a>
      </Link>
    </div>
  );
};

export default Home;
