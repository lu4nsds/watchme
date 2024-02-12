import Signup from "./components/SignUp";
import Image from 'next/image'

export type PageProps = {
  params: { [key: string] : string | string[] | undefined};
  searchParams: { [key: string] : string | string[] | undefined};
}

export default function Home() {
  return (
    <main className="conteiner p-20 flex flex-col items-center justify-evenly lg:flex-row ">
      <div>
        <Image
            src="/logo.png"
            width={500}
            height={500}
            alt="Picture of the author"
          />
      </div> 
      <div className="" >
        <Signup/>
      </div>
    </main>
  );
}
