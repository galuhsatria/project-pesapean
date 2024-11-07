import Footer from '@/components/ui/footer';
import Navbar from '@/components/ui/navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
