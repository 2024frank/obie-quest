import Image from 'next/image';

export default function Logo() {
  return (
    <div className="flex justify-center mb-6">
      <Image
        src="/OberlinCollege-logo.png"
        alt="Oberlin College Logo"
        width={200}
        height={100}
        priority
        className="object-contain"
      />
    </div>
  );
} 