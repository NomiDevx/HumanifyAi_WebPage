import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSolution } from './components/ProblemSolution';
import { SignatureStyles } from './components/SignatureStyles';
import { TrustArchitecture } from './components/TrustArchitecture';
import { HowItWorks } from './components/HowItWorks';
import { InteractivePlayground } from './components/InteractivePlayground';
import { FAQ } from './components/FAQ';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfService } from './components/TermsOfService';

export function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'privacy' | 'terms'>('home');

  // Handle URL changes & popstate (browser back/forward buttons)
  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();

      if (path.includes('/privacy') || hash === '#privacy') {
        setCurrentPage('privacy');
      } else if (path.includes('/terms') || hash === '#terms') {
        setCurrentPage('terms');
      } else {
        setCurrentPage('home');
      }
    };

    handleLocationChange();
    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const navigateToLegal = (page: 'privacy' | 'terms') => {
    setCurrentPage(page);
    window.history.pushState(null, '', `/${page}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = () => {
    setCurrentPage('home');
    window.history.pushState(null, '', '/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0A0B10] text-slate-100 flex flex-col selection:bg-violet-600/30 selection:text-violet-200">
      {/* Sticky Global Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigateLegal={navigateToLegal}
        onNavigateHome={navigateToHome}
      />

      {/* Main Content Router */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <>
            <Hero onExploreFeatures={() => {
              const el = document.getElementById('features');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }} />
            <ProblemSolution />
            <SignatureStyles />
            <TrustArchitecture onOpenPrivacy={() => navigateToLegal('privacy')} />
            <InteractivePlayground />
            <HowItWorks />
            <FAQ />
            <CTASection />
          </>
        )}

        {currentPage === 'privacy' && (
          <PrivacyPolicy onBackToHome={navigateToHome} />
        )}

        {currentPage === 'terms' && (
          <TermsOfService onBackToHome={navigateToHome} />
        )}
      </main>

      {/* Global Footer */}
      <Footer
        onNavigateLegal={navigateToLegal}
        onNavigateHome={navigateToHome}
      />
    </div>
  );
}

export default App;
