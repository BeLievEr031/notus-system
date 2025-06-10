import LogoSrc from "../assets/logo.webp"
function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 bg-black border-b border-white z-50">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="h-12 pl-4 md:pl-8">
                        <img
                            alt="Notus Logo"
                            width={180}
                            height={48}
                            decoding="async"
                            data-nimg={1}
                            className="h-full w-auto"
                            style={{ color: "transparent" }}
                            src={LogoSrc}
                        />
                    </div>
                    <div className="flex items-center space-x-8 pr-4 md:pr-8">
                        <a
                            href="#contact-section"
                            className="relative text-white font-medium group"
                        >
                            CONTACT US
                            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
                        </a>
                        <div className="relative">
                            <button
                                className="text-white font-medium px-2 py-1 uppercase transition-opacity duration-300 hover:opacity-70 cursor-pointer"
                                aria-label="Language"
                                aria-expanded="false"
                                aria-haspopup="true"
                            >
                                EN
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    )
}

export default Header