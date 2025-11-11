import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function CTA(){
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-[#F5F5F7] py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/3 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-purple-300/40 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-80 w-80 translate-x-1/3 rounded-full bg-purple-200/40 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-3xl md:text-4xl font-bold text-gray-900">
          Empower Your Fraud Investigations.
        </motion.h2>
        <motion.p initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.1, duration:0.6}} className="mx-auto mt-3 max-w-2xl text-gray-600">
          Detect Smarter. Resolve Faster. With FraudOps.
        </motion.p>
        <motion.a href="#demo" initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.2, duration:0.6}} className="group mt-8 inline-flex items-center gap-2 rounded-lg bg-[#6C4EF8] px-6 py-3 text-white shadow-lg shadow-purple-300/40 hover:brightness-110">
          Book Your Free Demo
          <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
        </motion.a>
      </div>
    </section>
  )
}
