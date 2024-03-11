export default async function Home() {
  return (
    <div>
      {' '}
      {/* prettier-ignore */}
      <div className="bg-custom bg-size-custom flex min-h-screen w-full flex-col items-center justify-center bg-fixed text-white">
      <div className="fixed inset-0 bg-black/70" />
      <div className="z-10 mt-10 font-bold text-left mx-[400px] ">
      <div className="pb-5 z-10 text-6xl">Get a job!</div>
      <div className="pl-2 pb-10 text-3xl">CV Creator</div>
      <div className="pl-2 text-xl flex flex-col flex-wrap text-justify opacity-70">The curriculum vitae, or CV, is an essential component of the job search process, aiding employers in getting a better understanding of candidates. Information such as professional experience, education, and skills contained within it allows for a quick grasp of the potential benefits a candidate can bring to an organization. With a carefully crafted CV, candidates have the opportunity to showcase their professional accomplishments and stand out among others. It serves not only as a document but also as a tool for effective job hunting and building a professional reputation. In today&apos;s competitive job market, a well-prepared CV can be the key to professional success.</div>
      </div>
    </div>
    </div>
  );
}
