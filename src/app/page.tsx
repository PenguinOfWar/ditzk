import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="flex max-w-[640px]">
        <Image
          src="/ditzk.jpg"
          alt="Daphne Is The Zodiac Killer"
          className="w-[640px] m-w-[640px] border border-daphne-yellow rounded"
          priority
          width={0}
          height={0}
          sizes="100%"
          style={{ height: '100%' }}
        />
      </div>
    </main>
  );
}
