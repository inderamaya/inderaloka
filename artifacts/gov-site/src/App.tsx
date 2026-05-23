import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { Layout } from "@/components/layout";
import Home from "@/pages/home";
import Services from "@/pages/services";
import News from "@/pages/news";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import History from "@/pages/about/history";
import Constitution from "@/pages/about/constitution";
import NationalSymbols from "@/pages/about/national-symbols";
import AdminDivision from "@/pages/about/administrative-division";
import Currency from "@/pages/about/currency";
import Royal from "@/pages/royal/index";
import HisMajesty from "@/pages/royal/his-majesty";
import CouncilOfRegency from "@/pages/royal/council-of-regency";
import RoyalFamily from "@/pages/royal/royal-family";
import OrdersAndDecorations from "@/pages/royal/orders-and-decorations";
import CustomsAndRegalia from "@/pages/royal/customs-and-regalia";
import RoyalStatement from "@/pages/royal/royal-statement";
import Palaces from "@/pages/royal/palaces";
import Directory from "@/pages/directory";
import { LanguageProvider } from "@/i18n/LanguageContext";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/news" component={News} />
      <Route path="/about" component={About} />
      <Route path="/about/history" component={History} />
      <Route path="/about/constitution" component={Constitution} />
      <Route path="/about/national-symbols" component={NationalSymbols} />
      <Route path="/about/administrative-division" component={AdminDivision} />
      <Route path="/about/currency" component={Currency} />
      <Route path="/royal" component={Royal} />
      <Route path="/royal/his-majesty" component={HisMajesty} />
      <Route path="/royal/council-of-regency" component={CouncilOfRegency} />
      <Route path="/royal/royal-family" component={RoyalFamily} />
      <Route path="/royal/orders-and-decorations" component={OrdersAndDecorations} />
      <Route path="/royal/customs-and-regalia" component={CustomsAndRegalia} />
      <Route path="/royal/royal-statement" component={RoyalStatement} />
      <Route path="/royal/palaces" component={Palaces} />
      <Route path="/directory" component={Directory} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LanguageProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Layout>
              <Router />
            </Layout>
          </WouterRouter>
        </LanguageProvider>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
