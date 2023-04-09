import './globals.css';
import Header from '@/components/header';


const Layout = ({children}) => {
    return (
        <html lang="en">
        <body className="h-screen bg-gray-300">
        <Header/>
        <main className="h-full">{children}</main>
        </body>
        </html>
    );
};

export default Layout;