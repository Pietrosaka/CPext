'use client';
import { useEffect, useState } from "react";


export default function HomePage() {
const[message, setMessage] = useState('Carregando...');
  useEffect(() => {
    fetch('/api/teste')
      .then((response) => response.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-800">Bem-vindo ao Meu Projeto!</h1>
      <p className="mt-4 text-lg text-gray-600">Este é um exemplo de aplicação em Next.js com Tailwind CSS.</p>
      <div className="mt-6">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Saiba Mais
          {message}
        </button>
      </div>
    </div>
  );
}
