import BgImage from '../../medias/images/bg-hero.jpg'
import Logo from '../../medias/svg/personal-logo-bg-trans.svg'
import SocialLinks from '../elements/SocialLinks'

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
            <div className="min-w-[90%] min-h-[90%] p-5 flex flex-col items-center justify-center text-center lg:text-left">
                <div className="flex flex-col lg:flex-row w-full items-center justify-around xl:p-16 mix-blend-lighten">
                    <div className="max-w-[700px] z-10">
                        <h1 className="">
                            Développement web{' '}
                            <span className="text-gradient whitespace-nowrap">Front-end</span>
                        </h1>
                        <p className="py-3">
                            Créer des applications web modernes avec React pour
                            une interface interactive et utiliser Tailwind CSS
                            pour styliser efficacement.
                        </p>
                    </div>
                    <div className="h-full">
                        <img
                            src={Logo}
                            alt="mon logo"
                            className="object-cover mx-auto bg-primary w-44 h-44 md:w-64 md:h-64 lg:w-76 lg:h-76 xl:w-96 xl:h-96"
                        />
                    </div>
                </div>
                <div className="mt-10">
                    <SocialLinks />
                </div>
            </div>
        </section>
    )
}
