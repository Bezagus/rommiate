import { P } from '@/styles/texts';

const Copyright = () => {
  return (
    <div className="bg-secondary-50 py-3 flex gap-1 flex-col md:flex-row items-center justify-center absolute bottom-0 w-svw">
      <P size="small" className="text-center">
        &copy; 2025 Rommiate. Todos los derechos reservados.
      </P>
      <P size="small" className="hidden md:block">
        |
      </P>
      <P size="small">Powered by Bezlon.</P>
    </div>
  );
};

export default Copyright;
