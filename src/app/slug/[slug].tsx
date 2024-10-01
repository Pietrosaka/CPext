import { useRouter } from 'next/router';

export default function SlugPage() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <h1>Slug: {slug}</h1>
      <p>Conteúdo da página dinâmica baseado no slug</p>
    </div>
  );
}