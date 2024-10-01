const Cabecalho = () => {
    return (
      <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 px-8 shadow-md">
        <h1 className="text-3xl font-bold">Meu Projeto Next.js</h1>
        <nav className="mt-4">
          <ul className="flex space-x-4">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">Sobre</a></li>
            <li><a href="/contact" className="hover:underline">Contato</a></li>
          </ul>
        </nav>
      </header>
    );
  };
  
  export default Cabecalho;
  