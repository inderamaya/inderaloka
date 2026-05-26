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
import Tourism from "@/pages/tourism";
import Royal from "@/pages/royal/index";
import HisMajesty from "@/pages/royal/his-majesty";
import CouncilOfRegency from "@/pages/royal/council-of-regency";
import RoyalFamily from "@/pages/royal/royal-family";
import OrdersAndDecorations from "@/pages/royal/orders-and-decorations";
import CustomsAndRegalia from "@/pages/royal/customs-and-regalia";
import RoyalStatement from "@/pages/royal/royal-statement";
import Palaces from "@/pages/royal/palaces";
import RoyalAdvisoryCouncil from "@/pages/royal/royal-advisory-council";
import PalaceCourtiers from "@/pages/royal/palace-courtiers";
import Directory from "@/pages/directory";
import Government from "@/pages/government/index";
import Executive from "@/pages/government/executive/index";
import PrimeMinister from "@/pages/government/executive/prime-minister";
import Cabinet from "@/pages/government/executive/cabinet";
import PoliticalParties from "@/pages/government/executive/political-parties";
import Legislative from "@/pages/government/legislative/index";
import Parliament from "@/pages/government/legislative/parliament";
import Senate from "@/pages/government/legislative/senate";
import HouseOfRepresentatives from "@/pages/government/legislative/house-of-representatives";
import Judiciary from "@/pages/government/judiciary/index";
import ChiefJustice from "@/pages/government/judiciary/chief-justice";
import SupremeCourt from "@/pages/government/judiciary/supreme-court";
import CourtOfAppeal from "@/pages/government/judiciary/court-of-appeal";
import SyariahCourt from "@/pages/government/judiciary/syariah-court";
import StateOfficials from "@/pages/government/state-officials";
import Healthcare from "@/pages/services/healthcare";
import Education from "@/pages/services/education";
import { LanguageProvider } from "@/i18n/LanguageContext";
import ScrollToTop from "@/components/scroll-to-top";
import { ThemeProvider } from "next-themes";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/services/healthcare" component={Healthcare} />
      <Route path="/services/education" component={Education} />
      <Route path="/news" component={News} />
      <Route path="/about" component={About} />
      <Route path="/about/history" component={History} />
      <Route path="/about/constitution" component={Constitution} />
      <Route path="/about/national-symbols" component={NationalSymbols} />
      <Route path="/about/administrative-division" component={AdminDivision} />
      <Route path="/about/currency" component={Currency} />
      <Route path="/tourism" component={Tourism} />
      <Route path="/royal" component={Royal} />
      <Route path="/royal/his-majesty" component={HisMajesty} />
      <Route path="/royal/council-of-regency" component={CouncilOfRegency} />
      <Route path="/royal/royal-family" component={RoyalFamily} />
      <Route path="/royal/orders-and-decorations" component={OrdersAndDecorations} />
      <Route path="/royal/customs-and-regalia" component={CustomsAndRegalia} />
      <Route path="/royal/royal-statement" component={RoyalStatement} />
      <Route path="/royal/palaces" component={Palaces} />
      <Route path="/royal/royal-advisory-council" component={RoyalAdvisoryCouncil} />
      <Route path="/royal/palace-courtiers" component={PalaceCourtiers} />
      <Route path="/government" component={Government} />
      <Route path="/government/executive" component={Executive} />
      <Route path="/government/executive/prime-minister" component={PrimeMinister} />
      <Route path="/government/executive/cabinet" component={Cabinet} />
      <Route path="/government/executive/political-parties" component={PoliticalParties} />
      <Route path="/government/legislative" component={Legislative} />
      <Route path="/government/legislative/parliament" component={Parliament} />
      <Route path="/government/legislative/senate" component={Senate} />
      <Route path="/government/legislative/house-of-representatives" component={HouseOfRepresentatives} />
      <Route path="/government/judiciary" component={Judiciary} />
      <Route path="/government/judiciary/chief-justice" component={ChiefJustice} />
      <Route path="/government/judiciary/supreme-court" component={SupremeCourt} />
      <Route path="/government/judiciary/court-of-appeal" component={CourtOfAppeal} />
      <Route path="/government/judiciary/syariah-court" component={SyariahCourt} />
      <Route path="/government/state-officials" component={StateOfficials} />
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
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <LanguageProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <ScrollToTop />
            <Layout>
              <Router />
            </Layout>
          </WouterRouter>
        </LanguageProvider>
        </ThemeProvider>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
