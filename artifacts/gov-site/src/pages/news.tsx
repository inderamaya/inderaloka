      import React, { useState } from "react";
      import { Link } from "wouter";
      import { motion } from "framer-motion";
      import { Input } from "@/components/ui/input";
      import { Search } from "lucide-react";
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
        const [searchQuery, setSearchQuery] = useState("");
        const { t } = useLanguage();
        const n = t.news;

        const filteredNews = n.items.filter((item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
        );

        return (
          <div className="flex-1 w-full bg-background pb-20">
            {/* Hero & Search */}
            <div className="bg-secondary border-b border-border py-12">
              <div className="container mx-auto px-4 lg:px-8">
                <Breadcrumb className="mb-6 font-mono uppercase tracking-widest text-[10px]">
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink asChild>
                        <Link href="/">{n.breadcrumbHome}</Link>
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbPage className="text-primary">{n.breadcrumbCurrent}</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>

                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-primary mb-6">{n.pageTitle}</h1>
                <p className="text-muted-foreground text-base sm:text-lg max-w-2xl font-light mb-8">{n.pageDesc}</p>

                <div className="relative max-w-xl">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search news..."
                    className="pl-12 h-14 rounded-none border-border focus-visible:ring-accent focus-visible:border-accent text-base bg-background text-primary placeholder:text-muted-foreground"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* News List */}
            <div className="container mx-auto px-4 lg:px-8 pt-16">
              <div className="max-w-4xl mx-auto flex flex-col gap-8">
                {filteredNews.length === 0 ? (
                  <div className="text-center py-20 border border-border border-dashed">
                    <p className="text-muted-foreground font-mono text-sm uppercase tracking-widest">
                      No news found matching your search.
                    </p>
                  </div>
                ) : (
                  filteredNews.map((item, idx) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                    >
                      <Link
                        href={`/news/${item.id}`}
                        className="group block bg-card border border-border overflow-hidden hover:border-accent transition-colors"
                        data-testid={`card-news-${item.id}`}
                      >
                        <div className="flex flex-col md:flex-row">
                          {/* Image column */}
                          <div className="md:w-1/3 aspect-[16/10] md:aspect-auto overflow-hidden border-b md:border-b-0 md:border-r border-border">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                            />
                          </div>
                          {/* Content column */}
                          <div className="md:w-2/3 p-6 lg:p-8">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                              <span className="font-mono text-[10px] font-semibold text-primary px-3 py-1 bg-secondary uppercase tracking-widest">
                                {item.category}
                              </span>
                              <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
                                {item.date}
                              </span>
                            </div>
                            <h2 className="font-serif text-2xl lg:text-3xl text-primary mb-4 group-hover:text-accent transition-colors">
                              {item.title}
                            </h2>
                            <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                              {item.excerpt}
                            </p>
                            <div className="mt-6 flex items-center font-mono text-[10px] uppercase tracking-widest text-primary group-hover:text-accent">
                              {n.readStatement} <ArrowRight className="w-4 h-4 ml-2" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))
                )}

                {/* Pagination */}
                <div className="flex items-center justify-between border-t border-border pt-8 mt-8">
                  <Button
                    variant="outline"
                    className="rounded-none font-mono uppercase tracking-widest text-xs"
                    disabled
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" /> {n.previous}
                  </Button>
                  <div className="font-mono text-xs text-muted-foreground">{n.pageInfo}</div>
                  <Button
                    variant="outline"
                    className="rounded-none font-mono uppercase tracking-widest text-xs border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    data-testid="btn-news-next"
                  >
                    {n.next} <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        );
      }