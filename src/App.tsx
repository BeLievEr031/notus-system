import Header from "./components/Header"
import NotusHeroImgSrc from "./assets/notuscolorsinverted.webp"
import ContactForm from "./components/ContactForm"
function App() {
  return (
    <div>
      <Header />
      <div className="pt-16">
        <main className="flex flex-col items-center bg-black">
          <div className="flex min-h-screen w-full flex-col items-center justify-center p-4">
            <div className="relative">
              <img
                alt="Notus Colors Inverted"
                width={500}
                height={300}
                decoding="async"
                data-nimg={1}
                className="object-contain"
                style={{ color: "transparent" }}
                src={NotusHeroImgSrc}
              />
            </div>
          </div>

          <ContactForm />
        </main>
      </div>
    </div>
  )
}

export default App