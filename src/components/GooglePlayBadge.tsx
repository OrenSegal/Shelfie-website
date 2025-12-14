import Image from 'next/image';

export function GooglePlayBadge() {
  return (
    <Image
      src="/badges/GooglePlay_preorder.svg" 
      // src="/badges/GooglePlay_download.svg" 
      alt="Get it on Google Play" 
      width={135}
      height={71}
    />
  );
}
