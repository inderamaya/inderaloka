import React, { useState } from "react";
import { Link } from "wouter";
import { Search, FileText, Landmark, Shield, Plane, Book, Home as HomeIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const allServices = [
  { id: "s1", category: "Documents", icon: FileText, title: "Passports & Visas", desc: "Apply for, renew, or check the status of your passport or visa." },
  { id: "s2", category: "Documents", icon: FileText, title: "Birth & Death Certificates", desc: "Request certified copies of vital records." },
  { id: "s3", category: "Finance", icon: Landmark, title: "Tax Returns", desc: "File your annual income tax returns securely online." },
  { id: "s4", category: "Finance", icon: Landmark, title: "Business Licenses", desc: "Register a new business or renew an existing license." },
  { id: "s5", category: "Healthcare", icon: Shield, title: "Health Insurance Portal", desc: "Manage your national healthcare coverage." },
  { id: "s6", category: "Healthcare", icon: Shield, title: "Vaccination Records", desc: "Access and print your official immunization history." },
  { id: "s7", category: "Transport", icon: Plane, title: "Driver's Licenses", desc: "Renew your license or schedule a driving test." },
  { id: "s8", category: "Transport", icon: Plane, title: "Vehicle Registration", desc: "Register a new vehicle or transfer ownership." },
  { id: "s9", category: "Education", icon: Book, title: "Student Loans", desc: "Apply for state-sponsored education financing." },
];

export default function Services() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredServices = allServices.filter(s => 
    s.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    s.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex-1 w-full bg-background pb-20">
      <div className="bg-secondary border-b border-border py-8">
        <div className="container mx-auto px-4 lg:px-8">
          <Breadcrumb className="mb-6 font-mono uppercase tracking-widest text-[10px]">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-primary">Services</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <h1 className="font-serif text-4xl lg:text-5xl text-primary mb-6">Directory of Services</h1>
          <p className="text-muted-foreground text-lg max-w-2xl font-light mb-8">
            Access official government services and resources. Search by keyword or browse categories below.
          </p>

          <div className="relative max-w-xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input 
              type="text" 
              placeholder="Search services (e.g., 'Passport', 'Taxes')" 
              className="pl-12 h-14 rounded-none border-primary/20 focus-visible:ring-accent focus-visible:border-accent text-base bg-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              data-testid="input-search-services"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 pt-16">
        {filteredServices.length === 0 ? (
          <div className="text-center py-20 border border-border border-dashed">
            <p className="text-muted-foreground font-mono text-sm uppercase tracking-widest">No services found matching your criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
              >
                <Link href={`/services/${service.id}`} className="group block h-full border border-border p-6 lg:p-8 hover:border-accent hover:shadow-[0_0_0_1px_var(--accent)] transition-all bg-white">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-white transition-colors">
                      <service.icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground group-hover:text-primary transition-colors">
                      {service.category}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl text-primary mb-3 group-hover:text-accent transition-colors">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.desc}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
