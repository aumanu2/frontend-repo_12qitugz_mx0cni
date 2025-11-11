import { motion } from 'framer-motion'
import { ShieldCheck, Activity, FileSearch, BarChart3 } from 'lucide-react'

const features = [
  {
    icon: ShieldCheck,
    title: 'Automated Case Investigation',
    desc: 'AI workflows triage, enrich, and prioritize suspicious claims automatically.',
  },
  {
    icon: Activity,
    title: 'Real-time Reporting & Quality Insights',
    desc: 'Live dashboards with SLA tracking and quality metrics for every case.',
  },
  {
    icon: FileSearch,
    title: 'Centralised Intelligence Management',
    desc: 'Evidence, notes, and entities unified in a single intelligence layer.',
  },
  {
    icon: BarChart3,
    title: 'Advanced Fraud Pattern Detection',
    desc: 'Graph and sequence analytics surface coordinated fraud networks.',
  },
]

export default function HowItWorks(){
  return (
    <section id="platform" className="relative bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-3xl md:text-4xl font-bold text-gray-900">
          How FraudOps Works
        </motion.h2>
        <motion.p initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.15, duration:0.6}} className="mt-3 max-w-2xl text-gray-600">
          As you scroll, each capability connects into a unified fraud investigation workflow.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {features.map((f, i)=> (
            <motion.div key={f.title} initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once:true, amount:0.4}} transition={{delay:i*0.1, duration:0.6}} className="group relative overflow-hidden rounded-xl border border-purple-100 bg-gradient-to-br from-white to-[#F5F5F7] p-6 shadow-sm">
              <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-purple-100 blur-2xl opacity-60 group-hover:opacity-80 transition" />
              <f.icon className="text-purple-600" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-gray-600">{f.desc}</p>
              <div className="mt-4 h-px w-full bg-gradient-to-r from-purple-200 to-transparent" />
              <div className="mt-4 flex h-1 w-full overflow-hidden rounded bg-gray-100">
                <div className="bg-[#6C4EF8]" style={{width:`${70 + i*5}%`}} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
