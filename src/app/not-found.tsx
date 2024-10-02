import Image from 'next/image';
import Link from 'next/link';


const NotFoundPage = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Página não encontrada</h1>
      <p>A página que você está tentando acessar não existe.</p>

      {/* Componente Image do Next.js */}
      <Image
        src="/img-404.jpg"
        alt="Erro 404"
        width={500}
        height={300}
      />

      <p>
        <Link href="/">
        </Link>
      </p>
    </div>
  );
};

export default NotFoundPage;
