import { InstagramIcon, Link, LinkedinIcon, P, WhatsappIcon } from '@/styles';
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
        <li key={index} className="flex items-start">
          <Link className="flex items-start">
            <P size="small" weight="font-light">
              {item}
            </P>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const SocialSection = ({ className }: { className?: string }) => (
  <div className={classNames(className)}>
    <P weight="font-bold" className="mb-4">
      Seguinos en:
    </P>
    <div className="flex gap-3.5">
      <Link href="https://www.instagram.com/bezlon.sp?igsh=ZmJwempham5zdzMy" externalLink>
        <InstagramIcon />
      </Link>
      <Link href="https://www.linkedin.com/company/bezlon-it" externalLink>
        <LinkedinIcon />
      </Link>
      <Link href="https://wa.me/5491122622034/" externalLink>
        <WhatsappIcon />
      </Link>
    </div>
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
          <SocialSection className="xs:hidden" />
        </div>
        <div className="flex justify-center xs:justify-around md:justify-between lg:justify-end flex-col md:flex-row lg:flex-col xs:gap-10 md:gap-0 lg:gap-10 w-svw mt-12 lg:w-[280px]">
          <SocialSection className="hidden xs:inline" />
          <div className="mx-auto md:mx-0 lg:mx-auto xs:mx-auto">
            <P weight="font-bold" className="mb-4 whitespace-nowrap">
              Proximamente disponible para:
            </P>
            <div className="flex gap-3.5">
              <img src="/images/apple-download.png" alt="apple download" />
              <img src="/images/android-download.png" alt="android download" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
