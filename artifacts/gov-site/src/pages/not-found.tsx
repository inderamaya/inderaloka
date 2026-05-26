import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { AlertCircle, Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/GlassCard";

export default function NotFound() {
  return (
    <div className="flex-1 w-full min-h-[70vh] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl"
      >
        <GlassCard className="p-12 lg:p-20 text-center border-accent/20 bg-accent/5 rounded-[3rem] overflow-hidden relative">
          <div className="absolute top-0 right-0 p-12 opacity-5">
            <AlertCircle className="w-64 h-64 text-accent" />
          </div>

          <div className="relative z-10">
            <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent font-bold mb-8">System Error 404</div>
            <h1 className="font-serif text-5xl lg:text-7xl font-bold text-primary mb-8 leading-tight tracking-tighter">Page Not Found</h1>
            <p className="text-muted-foreground text-xl font-light mb-12 max-w-md mx-auto leading-relaxed">
              The requested digital asset could not be located on the national server. It may have been relocated or decommissioned.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button asChild size="lg" className="rounded-full bg-primary text-white h-14 px-10 font-mono text-[10px] font-bold uppercase tracking-widest hover:bg-accent transition-all">
                <Link href="/">
                  <Home className="mr-2 w-4 h-4" /> Return Home
                </Link>
              </Button>
              <Button variant="outline" size="lg" onClick={() => window.history.back()} className="rounded-full border-primary/20 h-14 px-10 font-mono text-[10px] font-bold uppercase tracking-widest hover:bg-white/10 transition-all">
                <ArrowLeft className="mr-2 w-4 h-4" /> Go Back
              </Button>
            </div>
          </div>
        </GlassCard>
      </motion.div>
    </div>
  );
}
