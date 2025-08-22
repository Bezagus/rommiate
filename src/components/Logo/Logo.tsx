import { H1 } from '@/styles/texts';
import Image from 'next/image';

const Logo = ({ size = 70 }: { size?: number }) => {
  return (
    <div className="flex flex-row items-end">
      <Image src="/images/logo.png" alt="logo" width={size} height={size} />
      <H1 className="text-primary -mb-4 hidden lg:block">ommiate</H1>
    </div>
  );
};

export default Logo;
