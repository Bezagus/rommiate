import { Copyright, Header, Phone } from '@/components';

export default function Home() {
  return (
    <main className="h-svh w-svw overflow-hidden flex flex-col justify-center relative">
      <Header />
      <Phone />
      <Copyright />
    </main>
  );
}
