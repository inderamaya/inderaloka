import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

const newsItems = [
  { id: "n1", date: "23 May 2026", category: "Economy", title: "New Economic Policy Guidelines Published for Q3", excerpt: "The Department of Finance has issued comprehensive guidelines detailing the economic restructuring program aimed at fostering sustainable growth." },
  { id: "n2", date: "20 May 2026", category: "Infrastructure", title: "Infrastructure Renewal Project Breaks Ground in Capital", excerpt: "A major overhaul of the capital's public transit and road networks has officially begun, promising long-term efficiency improvements." },
  { id: "n3", date: "15 May 2026", category: "Foreign Affairs", title: "Updated Travel Advisories Issued for International Citizens", excerpt: "The Department of State advises all citizens traveling abroad to review the newly updated safety protocols and visa requirements." },
  { id: "n4", date: "10 May 2026", category: "Health", title: "National Health Initiative Reaches Milestone", excerpt: "Over 5 million citizens have now enrolled in the expanded healthcare coverage program launched earlier this year." },
  { id: "n5", date: "02 May 2026", category: "Education", title: "Grants Announced for Higher Education Research", excerpt: "The Ministry of Education has allocated new funding aimed at supporting advanced research in science and technology." },
];

export default function News() {
  return (
    <div className="flex-1 w-full bg-background pb-20">
      <div className="bg-primary text-white py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <Breadcrumb className="mb-6 font-mono uppercase tracking-widest text-[10px]">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="text-white/60 hover:text-white">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-white/40" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-white">News & Announcements</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <h1 className="font-serif text-4xl lg:text-5xl mb-4">Official Announcements</h1>
          <p className="text-white/70 font-light max-w-2xl">
            Press releases, policy updates, and official statements from the government.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 pt-16">
        <div className="max-w-4xl mx-auto flex flex-col gap-8">
          {newsItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <Link href={`/news/${item.id}`} className="group block bg-white border border-border p-6 lg:p-8 hover:border-accent transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                  <span className="font-mono text-xs font-semibold text-primary px-3 py-1 bg-secondary uppercase tracking-widest">
                    {item.category}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
                    {item.date}
                  </span>
                </div>
                <h2 className="font-serif text-2xl lg:text-3xl text-primary mb-4 group-hover:text-accent transition-colors">
                  {item.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {item.excerpt}
                </p>
                <div className="mt-6 flex items-center font-mono text-xs uppercase tracking-widest text-primary group-hover:text-accent">
                  Read Statement <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </Link>
            </motion.div>
          ))}

          {/* Pagination Mock */}
          <div className="flex items-center justify-between border-t border-border pt-8 mt-8">
            <Button variant="outline" className="rounded-none font-mono uppercase tracking-widest text-xs" disabled>
              <ArrowLeft className="w-4 h-4 mr-2" /> Previous
            </Button>
            <div className="font-mono text-xs text-muted-foreground">Page 1 of 12</div>
            <Button variant="outline" className="rounded-none font-mono uppercase tracking-widest text-xs border-primary text-primary hover:bg-primary hover:text-white">
              Next <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
