import { InstagramIcon, LinkedinIcon, P, WhatsappIcon } from '@/styles';
import classNames from 'classnames';

const Section = ({
  title,
  items,
  className,
}: {
  title: string;
  items: string[];
  className?: string;
}) => (
  <div className={classNames(className)}>
    <P weight="font-bold" className="mb-4">
      {title}
    </P>
    <ul className="flex flex-col gap-4">
      {items.map((item, index) => (
        <li key={index}>
          <P size="small" weight="font-light">
            {item}
          </P>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <div className="border-black border-opacity-10 border-t">
      <footer className="container mx-auto py-16 flex flex-col lg:flex-row justify-between items-center px-4 xl:px-0">
        <div className="grid grid-cols-2 md:flex flex-col md:flex-row gap-6 md:gap-16 w-full justify-around lg:justify-start">
          <Section
            title="Ayudanos a Mejorar"
            items={['Reportar Problema', 'Dar reseña', 'Reportar Usuario ']}
          />
          <Section
            title="Sobre Nosotros"
            items={['Terminos y Condiciones', 'Servicios y Politicas']}
          />
          <Section
            title="Mas"
            items={['Publicar mi propiedad', 'Invertir en el Proyecto', 'Publicidad ']}
          />
          <div className="xs:hidden">
            <P weight="font-bold" className="mb-4">
              Seguinos en:
            </P>
            <div className="flex gap-3.5">
              <InstagramIcon />
              <LinkedinIcon />
              <WhatsappIcon />
            </div>
          </div>
        </div>
        <div className="flex justify-center xs:justify-around lg:justify-end flex-col md:flex-row lg:flex-col xs:gap-10 w-full mt-12 lg:w-[280px]">
          <div className="hidden xs:block">
            <P weight="font-bold" className="mb-4">
              Seguinos en:
            </P>
            <div className="flex gap-3.5">
              <InstagramIcon />
              <LinkedinIcon />
              <WhatsappIcon />
            </div>
          </div>
          <div className="mx-auto xs:mx-auto">
            <P weight="font-bold" className="mb-4">
              Proximamente disponible para:
            </P>
            <div className="flex gap-3.5">
              <img src="/images/apple-download.png" />
              <img src="/images/android-download.png" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
