import Header from "./header/page";

export default function Home() {
  return (
    <>
      <Header />
      <main className="h-[calc(100vh-84px)] flex items-center justify-center">
        <h1 className=" text-4xl text-center font-bold mb-10 px-4">
          Practices from Dribbble
        </h1>
      </main>
    </>
  );
}
