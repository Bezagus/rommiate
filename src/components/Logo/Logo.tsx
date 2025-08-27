import { H5 } from '@/styles/texts';
import Image from 'next/image';

const Logo = ({ size = 46 }: { size?: number }) => {
  return (
    <div className="flex flex-row items-end">
      <Image src="/images/logo.png" alt="logo" width={size} height={size} />
      <H5 weight="font-black" className="text-primary -mb-2 hidden lg:block">
        ommiate
      </H5>
    </div>
  );
};

export default Logo;
