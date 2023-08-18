import links from '../../data/socialLinksData'
export default function Footer() {
    return (
        <section>
            <div className="w-full p-12">
                <div className="flex flex-col items-center justify-center xl:flex-row xl:items-end">
                    <div className='flex-1 flex flex-col items-center justify-center xl:items-start'>
                        <p className='underline m-5'>Contact</p>
                        <div className="flex flex-col items-center justify-center gap-10 m-5 xl:items-start">
                            <a
                                className="text-xs md:text-lg lg:text-xl xl:text-2xl"
                                href="mailto: cornicjonathangmail.com"
                            >
                                cornicjonathan@gmail.com
                            </a>
                            <p className=''>06 62 96 23 80</p>
                        </div>
                        <div>
                            <ul className="flex gap-10 m-5">
                                {links.map(
                                    ({ id, child, name, href, download }) => (
                                        <li key={id} name={name}>
                                            <a
                                                href={href}
                                                download={download}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                {child}
                                            </a>
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>
                    </div>
                    <div className='flex-1 flex flex-col items-center justify-center xl:items-end'>
                        <div>
                            <p className="m-5">
                                Réalisé avec React et Tailwind
                            </p>
                        </div>
                        <div className="m-5 ">
                            <p className="text-center">
                                © 2023 Cornic Jonathan Tous droits réservés
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
