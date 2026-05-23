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
import { useLanguage } from "@/i18n/LanguageContext";

export default function News() {
  const { t } = useLanguage();
  const n = t.news;

  return (
    <div className="flex-1 w-full bg-background pb-20">
      <div className="bg-primary text-white py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <Breadcrumb className="mb-6 font-mono uppercase tracking-widest text-[10px]">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="text-white/60 hover:text-white">{n.breadcrumbHome}</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-white/40" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-white">{n.breadcrumbCurrent}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <h1 className="font-serif text-4xl lg:text-5xl mb-4">{n.pageTitle}</h1>
          <p className="text-white/70 font-light max-w-2xl">
            {n.pageDesc}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 pt-16">
        <div className="max-w-4xl mx-auto flex flex-col gap-8">
          {n.items.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <Link href={`/news/${item.id}`} className="group block bg-white border border-border p-6 lg:p-8 hover:border-accent transition-colors" data-testid={`card-news-${item.id}`}>
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
                  {n.readStatement} <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </Link>
            </motion.div>
          ))}

          {/* Pagination */}
          <div className="flex items-center justify-between border-t border-border pt-8 mt-8">
            <Button variant="outline" className="rounded-none font-mono uppercase tracking-widest text-xs" disabled>
              <ArrowLeft className="w-4 h-4 mr-2" /> {n.previous}
            </Button>
            <div className="font-mono text-xs text-muted-foreground">{n.pageInfo}</div>
            <Button variant="outline" className="rounded-none font-mono uppercase tracking-widest text-xs border-primary text-primary hover:bg-primary hover:text-white" data-testid="btn-news-next">
              {n.next} <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
