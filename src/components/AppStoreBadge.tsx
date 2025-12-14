import Image from 'next/image';

export function AppStoreBadge() {
  return (
    <Image
      src="/badges/Apple_preorder.svg" 
      // src="/badges/Apple_download.svg" 
      alt="Download in App Store" 
      width={135}
      height={71}
    />
  );
}
