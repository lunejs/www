import { Featured } from '@/components/features';
import { Header } from '@/components/header';
import { Hero } from '@/components/hero';

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Featured />
    </div>
  );
}
