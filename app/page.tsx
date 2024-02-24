export default async function Home() {
  return (
    <div>
      {' '}
      {/* prettier-ignore */}
      <div className="bg-custom bg-size-custom flex min-h-screen w-full flex-col items-center justify-center bg-fixed text-white">
      <div className="fixed inset-0 bg-black/70" />
      <div className="z-10 mt-10 font-bold text-left mx-[500px] ">
      <div className="pb-5 z-10 text-8xl">Get a job!</div>
      <div className="pl-2 pb-10 text-3xl">CV Creator</div>
      <div className="pl-2 text-xl flex flex-col flex-wrap text-justify opacity-60">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</div>
      </div>
    </div>
    </div>
  );
}
