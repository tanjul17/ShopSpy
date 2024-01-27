import Image from 'next/image'
import Link from 'next/link'


const navIcons = [
    { src: '/assets/icons/search.svg', alt: 'search' },
    { src: '/assets/icons/black-heart.svg', alt: 'heart' },
    { src: '/assets/icons/user.svg', alt: 'user' },
]
const Navbar = () => {
    return (
        <header className='w-full'>
            <nav className='nav'>
                <Link href="/" className='flex items-center gap-1 font-bold text-2xl'>
                    <img src={'/assets/icons/logo2.svg'} width={28} height={28} alt="logo" />
                    <p nav-logo >
                        Shop<span className='text-sky-500'>Spy</span>
                    </p>
                </Link>

                <div className="flex items-center gap-5">
                    {navIcons.map((icon) => (
                        <Image
                            key={icon.alt}
                            src={icon.src} 
                            alt={icon.alt}
                            width={28}
                            height={28}
                            className='object-contain' />
                    ))
                    }
                </div>
            </nav>
        </header>
    )
}

export default Navbar