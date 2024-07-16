export default function HeroSection() {
  return (
    <>
      <nav className="flex py-2 px-4 bg-blue-400 rounded-full m-6">
        <div className="logo text-white text-2xl m-4">
          <a href="#">HeroSection</a>
        </div>

        <ul className="text-white flex m-4 mx-96">
          <a href="#">
            <li className="text-2xl mx-4">Home</li>
          </a>
          <a href="#">
            <li className="text-2xl mx-4">About</li>
          </a>
          <a href="#">
            <li className="text-2xl mx-4">Contact Us</li>
          </a>
        </ul>
      </nav>

      <section>
        <img
          src="./src/images/nature.jpg"
          alt="hero-section-image"
          className="w-full max-h-[560px] object-cover rounded-lg"
        />
      </section>

      <footer className="text-white flex justify-center bg-slate-500 mt-3 p-3">
        &copy; right reserved
      </footer>
    </>
  );
}
