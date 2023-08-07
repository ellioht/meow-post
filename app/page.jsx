import Feed from '@/components/Feed'

const Landing = () => {
  return (
    <div className="mt-10">
      <section className="flex flex-center flex-col text-center">
        <h1 className="mt-5 text-6xl font-extrabold leading-[1.15] text-black">Meow Post</h1>
        <p className="mt-5 text-lg text-gray-600 sm:text-xl">Create and share posts by you and other fellow cats alike!</p>
      </section>
      <Feed />
    </div>
  )
}

export default Landing