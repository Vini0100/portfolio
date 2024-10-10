import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section>
        <Image
          src="photos/developer.svg"
          alt="Developer"
          width={343}
          height={332}
        />
      </section>
    </div>
  );
}
