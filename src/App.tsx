import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CrewRequestModal } from './components/CrewRequestModal';
import { ApplyJobModal } from './components/ApplyJobModal';
import { HomePage } from './pages/HomePage';
import { ForEmployersPage } from './pages/ForEmployersPage';
import { ForPlumbersPage } from './pages/ForPlumbersPage';
import { TradesPage } from './pages/TradesPage';
import { TradeDetailPage } from './pages/TradeDetailPage';
import { JobsPage } from './pages/JobsPage';
import { JobDetailPage } from './pages/JobDetailPage';
import { PricingPage } from './pages/PricingPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { FaqPage } from './pages/FaqPage';
import { DashboardPage } from './pages/DashboardPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { PlumbingJob } from './types';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const [isCrewModalOpen, setIsCrewModalOpen] = useState(false);
  const [crewModalTrade, setCrewModalTrade] = useState<string | undefined>(undefined);

  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [selectedJobForApply, setSelectedJobForApply] = useState<PlumbingJob | null>(null);

  const handleOpenCrewModal = (trade?: string) => {
    setCrewModalTrade(trade);
    setIsCrewModalOpen(true);
  };

  const handleCloseCrewModal = () => {
    setIsCrewModalOpen(false);
    setCrewModalTrade(undefined);
  };

  const handleOpenApplyModal = (job?: PlumbingJob) => {
    setSelectedJobForApply(job || null);
    setIsApplyModalOpen(true);
  };

  const handleCloseApplyModal = () => {
    setIsApplyModalOpen(false);
    setSelectedJobForApply(null);
  };

  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900">
        <Navbar onRequestCrewOpen={() => handleOpenCrewModal()} />

        <main className="flex-1">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  onRequestCrewOpen={() => handleOpenCrewModal()}
                  onApplyJobOpen={handleOpenApplyModal}
                />
              }
            />
            <Route
              path="/for-employers"
              element={
                <ForEmployersPage onRequestCrewOpen={() => handleOpenCrewModal()} />
              }
            />
            <Route
              path="/for-plumbers"
              element={
                <ForPlumbersPage onApplyJobOpen={() => handleOpenApplyModal()} />
              }
            />
            <Route
              path="/trades"
              element={
                <TradesPage onRequestCrewOpen={(t) => handleOpenCrewModal(t)} />
              }
            />
            <Route
              path="/trades/:slug"
              element={
                <TradeDetailPage
                  onRequestCrewOpen={(t) => handleOpenCrewModal(t)}
                  onApplyJobOpen={() => handleOpenApplyModal()}
                />
              }
            />
            <Route
              path="/jobs"
              element={<JobsPage onApplyJobOpen={handleOpenApplyModal} />}
            />
            <Route
              path="/jobs/:id"
              element={<JobDetailPage onApplyJobOpen={handleOpenApplyModal} />}
            />
            <Route
              path="/pricing"
              element={
                <PricingPage onRequestCrewOpen={() => handleOpenCrewModal()} />
              }
            />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route
              path="/faq"
              element={<FaqPage onRequestCrewOpen={() => handleOpenCrewModal()} />}
            />
            <Route
              path="/my-dashboard"
              element={
                <DashboardPage
                  onApplyJobOpen={handleOpenApplyModal}
                  onRequestCrewOpen={() => handleOpenCrewModal()}
                />
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        <Footer />

        {/* Global Interactive Modals */}
        <CrewRequestModal
          isOpen={isCrewModalOpen}
          onClose={handleCloseCrewModal}
          defaultTrade={crewModalTrade}
        />

        <ApplyJobModal
          isOpen={isApplyModalOpen}
          onClose={handleCloseApplyModal}
          selectedJob={selectedJobForApply}
        />
      </div>
    </HashRouter>
  );
}
