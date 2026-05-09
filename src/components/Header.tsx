import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const menuItems = ['Home', 'About'];
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="shadow p-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Left */}
                <NavLink to="/" className="font-bold text-lg">Gift Registry</NavLink>

                {/* Centre - Desktop Nav Only */}
                <nav className="hidden md:flex items-center space-x-8">
                {menuItems.map((item, index) => (
                    <NavLink key={index} to={`/${item}`} className="hover:underline">{item}</NavLink>
                ))}
                </nav>

                {/* Right */}

                <div className="flex items-center space-x-4">
                    <button className='flex items-center space-x-4'>
                        Sign In
                    </button>

                    {/* Mobile Menu Button */}
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)} 
                        className="md:hidden"
                        aria-label="Toggle menu">
                        {isMenuOpen ? (<X className="w-6 h-6" />) : (<Menu className="w-6 h-6" />)}
                    </button>
                </div>
            </div>

        {/* Mobile Dropdown - Shows when menu is open */}
        {isMenuOpen && (
            <div className="md:hidden border-t pt-4">
                <nav className="flex flex-col space-y-2">
                    {menuItems.map((item, index) => (
                            <NavLink
                                key={index}
                                to={`/${item}`}
                                onClick={() => setIsMenuOpen(false)}
                                className="px-4 py-2 hover:bg-purple-600/10">
                                {item}
                            </NavLink>
                    ))}
                </nav>
            </div>
        )}

        </header>
    );
};

export default Header;
