'use client';
import { Copyright, Footer, Header } from '@/components';
import { Button } from '@/styles';

const Page404 = () => {
  return (
    <main className="min-h-svh max-w-svw overflow-x-hidden">
      <Header />
      <div className="py-10">
        <img src="/images/404.png" alt="404" className="mx-auto" />
        <Button className="mx-auto w-[200px] mt-10" href="/">
          Volver al Inicio
        </Button>
      </div>
      <div>
        <Footer />
        <Copyright />
      </div>
    </main>
  );
};

export default Page404;
