'use client';
import React from 'react';
import {
  Copyright,
  Header,
  Port,
  DescriptiveSection,
  Footer,
  SectionSlider,
  CommunityCard,
  ResidenceCard,
} from '@/components';
import { CommunityCardProps } from '@/components/Cards/CommunityCard/CommunityCard';
import { ResidenceCardProps } from '@/components/Cards/ResidenceCard/ResidenceCard';

const HomePage = () => {
  return (
    <main className="min-h-svh max-w-svw overflow-x-hidden">
      <Header />
      <Port />
      <DescriptiveSection
        title="Conecta con tu futuro roomie"
        description="Sabemos que compartir tu espacio con un desconocido no siempre es fácil. Por eso te
            ayudamos a encontrar a esa persona con gustos, hábitos y estilos de vida compatibles con
            los tuyos. Así, tu nueva casa también se convierte en un lugar donde te sentís cómodo y
            acompañado."
        button={{
          label: 'Explorar',
          href: '#',
        }}
        image={{ src: '/images/people.png', alt: 'People Illustration' }}
      />

      <SectionSlider<CommunityCardProps>
        title="Comunidades"
        leftButton={{ label: 'Ver mas', href: '#' }}
        data={[
          {
            title: 'Estudiantes en Buenos Aires',
            location: 'Buenos Aires, Argentina',
            members: 1000,
            description:
              'Grupo de estudiantes en Buenos Aires para compartir info, hacer amigos, organizar juntadas y darnos una mano entre todos.',
          },
          {
            title: 'Estudiantes en Buenos Aires',
            location: 'Buenos Aires, Argentina',
            members: 1000,
            description:
              'Grupo de estudiantes en Buenos Aires para compartir info, hacer amigos, organizar juntadas y darnos una mano entre todos.',
          },
          {
            title: 'Estudiantes en Buenos Aires',
            location: 'Buenos Aires, Argentina',
            members: 1000,
            description:
              'Grupo de estudiantes en Buenos Aires para compartir info, hacer amigos, organizar juntadas y darnos una mano entre todos.',
          },
          {
            title: 'Estudiantes en Buenos Aires',
            location: 'Buenos Aires, Argentina',
            members: 1000,
            description:
              'Grupo de estudiantes en Buenos Aires para compartir info, hacer amigos, organizar juntadas y darnos una mano entre todos.',
          },
          {
            title: 'Estudiantes en Buenos Aires',
            location: 'Buenos Aires, Argentina',
            members: 1000,
            description:
              'Grupo de estudiantes en Buenos Aires para compartir info, hacer amigos, organizar juntadas y darnos una mano entre todos.',
          },
        ]}
        CardComponent={CommunityCard}
      />

      <DescriptiveSection
        title="¿Preferís mudarte ya?"
        description="Si buscás una opción más rápida y solo querés instalarte en una casa, departamento o habitación disponible, contamos con una sección especial para vos. Encontrá el lugar ideal sin complicaciones y empezá a disfrutarlo de inmediato."
        button={{
          label: 'Explorar',
          href: '#',
        }}
        image={{ src: '/images/keys.png', alt: 'Keys Illustration' }}
      />

      <SectionSlider<ResidenceCardProps>
        title="Viviendas"
        leftButton={{ label: 'Ver mas', href: '#' }}
        data={[
          {
            title: 'Estudiantes en Buenos Aires',
            location: 'Buenos Aires, Argentina',
            people: 4,
            bathrooms: 1,
            rooms: 2,
            description:
              'Grupo de estudiantes en Buenos Aires para compartir info, hacer amigos, organizar juntadas y darnos una mano entre todos.',
          },
          {
            title: 'Estudiantes en Buenos Aires',
            location: 'Buenos Aires, Argentina',
            people: 3,
            bathrooms: 2,
            rooms: 3,
            description:
              'Grupo de estudiantes en Buenos Aires para compartir info, hacer amigos, organizar juntadas y darnos una mano entre todos.',
          },
          {
            title: 'Estudiantes en Buenos Aires',
            location: 'Buenos Aires, Argentina',
            people: 4,
            bathrooms: 1,
            rooms: 1,
            description:
              'Grupo de estudiantes en Buenos Aires para compartir info, hacer amigos, organizar juntadas y darnos una mano entre todos.',
          },
          {
            title: 'Estudiantes en Buenos Aires',
            location: 'Buenos Aires, Argentina',
            people: 1,
            bathrooms: 1,
            rooms: 2,
            description:
              'Grupo de estudiantes en Buenos Aires para compartir info, hacer amigos, organizar juntadas y darnos una mano entre todos.',
          },
          {
            title: 'Estudiantes en Buenos Aires',
            location: 'Buenos Aires, Argentina',
            people: 1,
            bathrooms: 1,
            description:
              'Grupo de estudiantes en Buenos Aires para compartir info, hacer amigos, organizar juntadas y darnos una mano entre todos.',
          },
        ]}
        CardComponent={ResidenceCard}
      />

      <Footer />
      <Copyright />
    </main>
  );
};

export default HomePage;
