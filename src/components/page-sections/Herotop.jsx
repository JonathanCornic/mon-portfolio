import BgImage from '../../medias/images/bg-hero.jpg'
import Logo from '../../medias/svg/personal-logo-bg-trans.svg'

export default function Herotop() {
    return (
        <section
            id="Accueil"
            className="section py-20"
            style={{
                backgroundImage: `url(${BgImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
            }}
        >
            <div className="min-w-[90%] min-h-[90%] p-5 flex items-center justify-center text-center lg:text-left">
                <div className="flex flex-col lg:flex-row w-full items-center justify-around xl:p-20 mix-blend-lighten">
                    <div className="max-w-[700px]">
                        <h1 className="">
                            Je suis un Développeur{' '}
                            <span className="text-gradient">Front-end</span>
                        </h1>
                        <p className="py-3">
                            Construire des applications web performentes et
                            maintenables avec React JS et les mettre en forme
                            avec Tailwind CSS .
                        </p>
                    </div>
                    <div className="">
                        <img
                            src={Logo}
                            alt="mon logo"
                            className="mx-auto bg-primary w-44 h-44 md:w-64 md:h-64 lg:w-76 lg:h-76 xl:w-96 xl:h-96"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
