import Link from 'next/link';
import Container from './Container';

const Navbar = () => {
	return (
		<header className='bg-red-500'>
			<Container>
				<nav>
					<ul>
						<Link href='/category/men'>Hombres</Link>
						<Link href='/category/women'>Mujeres</Link>
						<Link href='/category/kid'>Ninos</Link>
					</ul>
				</nav>
			</Container>
		</header>
	);
};

export default Navbar;
