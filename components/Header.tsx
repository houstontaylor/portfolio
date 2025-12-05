'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  
  const navItems = [
    { name: 'PROJECTS', path: '/projects' },
    { name: 'ABOUT', path: '/about' },
    { name: 'CONTACT', path: '/contact' },
    { name: 'RESUME', path: '/resume' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="relative bg-dark-neutral">
        {/* Main nav bar */}
        <nav className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-end gap-12">
          {/* Nav Items */}
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link key={item.name} href={item.path}>
                <motion.div
                  className="relative"
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span 
                    className="text-lg font-bold tracking-wider relative"
                    style={{ 
                      color: isActive ? 'var(--dark-green)' : 'var(--foreground)',
                    }}
                  >
                    {item.name}
                    {isActive && (
                      <>
                        {/* Decorative stars */}
                        <motion.span
                          className="absolute -left-6 top-1/2 -translate-y-1/2 text-green"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        >
                          ✦
                        </motion.span>
                        <motion.span
                          className="absolute -right-6 top-1/2 -translate-y-1/2 text-green"
                          animate={{ rotate: -360 }}
                          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        >
                          ✦
                        </motion.span>
                        {/* Underline */}
                        <motion.div
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-dark-green"
                          layoutId="underline"
                        />
                      </>
                    )}
                  </span>
                </motion.div>
              </Link>
            );
          })}
        </nav>

        {/* Logo circle */}
        <div className="absolute left-4 top-0">
          <Link href="/">
            <div className="w-32 h-32 rounded-full bg-dark-neutral flex items-center justify-center shadow-lg">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="relative"
              >
                <Image 
                  src="/Logo.svg"
                  alt="Houston Taylor"
                  width={95}
                  height={95}
                  className="cursor-pointer"
                />
              </motion.div>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}