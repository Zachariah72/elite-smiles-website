import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Register from "./pages/Register";
import MembershipCardPage from "./pages/MembershipCardPage";
import Verify from "./pages/Verify";
import AdminDashboard from "./pages/AdminDashboard";
import Governance from "./pages/Governance";
import Programs from "./pages/Programs";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Impact from "./pages/Impact";
import GetInvolved from "./pages/GetInvolved";
import Partnerships from "./pages/Partnerships";
import News from "./pages/News";
import Story from "./pages/Story";
import Opportunity from "./pages/Opportunity";
import Support from "./pages/Support";
import Contact from "./pages/Contact";
import Information from "./pages/Information";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/register" element={<Register />} />
            <Route path="/membership-card" element={<MembershipCardPage />} />
            <Route path="/verify/:memberNo" element={<Verify />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/governance" element={<Governance />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="/partnerships" element={<Partnerships />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:slug" element={<Story />} />
            <Route path="/opportunities/:slug" element={<Opportunity />} />
            <Route path="/donate" element={<Support />} />
            <Route path="/contact" element={<Contact />} />
            {['privacy','terms','transparency','safeguarding','mental-health','unsubscribe'].map(path=><Route key={path} path={`/${path}`} element={<Information />} />)}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
