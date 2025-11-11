import { motion } from 'framer-motion'
import { Timer, Target, FileText, Users } from 'lucide-react'

const items = [
  {icon: Timer, title: 'Speed', desc: '40% faster investigation turnaround'},
  {icon: Target, title: 'Accuracy', desc: 'AI-driven case scoring'},
  {icon: FileText, title: 'Transparency', desc: 'Audit-ready logs and workflows'},
  {icon: Users, title: 'Collaboration', desc: 'Unified case communication'},
]

export default function Benefits(){
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-3xl md:text-4xl font-bold text-gray-900">Benefits</motion.h2>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-4">
          {items.map((it, i)=> (
            <motion.div key={it.title} initial={{opacity:0, y:20, filter:'blur(6px)'}} whileInView={{opacity:1, y:0, filter:'blur(0px)'}} viewport={{once:true, amount:0.6}} transition={{duration:0.6, delay:i*0.05}} className="rounded-xl border border-purple-100 bg-gradient-to-b from-[#FBFAFF] to-white p-6 shadow-sm">
              <it.icon className="text-purple-600" />
              <div className="mt-3 text-lg font-semibold text-gray-900">{it.title}</div>
              <div className="mt-1 text-gray-600">{it.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
