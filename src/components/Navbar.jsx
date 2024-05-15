/* eslint-disable react/prop-types */
import Logo from "./Logo";

const Navbar = (props) => {
	return (
		<nav className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-800 border-b border-indigo-500 shadow-lg">
			<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
				<div className="flex h-20 items-center justify-between">
					<div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
						<a
							href="/index.html"
							className="flex flex-shrink-0 items-center mr-4"
						>
							<Logo className="h-10 w-10 rounded-full" />
							<span className="hidden md:flex md:justify-center text-white text-2xl font-bold ml-2">
								{props.title}
							</span>
						</a>
						<div className="md:ml-auto">
							<div className="flex space-x-2"></div>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
