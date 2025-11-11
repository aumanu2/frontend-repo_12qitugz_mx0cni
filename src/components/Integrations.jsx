import { motion } from 'framer-motion'
import { Server, Cable, Database, Cloud } from 'lucide-react'

export default function Integrations(){
  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-purple-200/40 blur-3xl" />
      </div>
      <div className="mx-auto max-w-6xl px-6 text-center">
        <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-3xl md:text-4xl font-bold text-gray-900">
          Integrations
        </motion.h2>
        <motion.p initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.1, duration:0.6}} className="mx-auto mt-3 max-w-2xl text-gray-600">
          Seamless integration with existing claims and fraud systems.
        </motion.p>

        <div className="relative mx-auto mt-12 max-w-4xl">
          <Flow />
        </div>
      </div>
    </section>
  )
}

function Flow(){
  const nodes = [
    {Icon: Database, label: 'Data Sources'},
    {Icon: Server, label: 'APIs'},
    {Icon: Cloud, label: 'Insurers'},
    {Icon: Cable, label: 'TPAs'},
  ]

  return (
    <div className="relative rounded-2xl border border-purple-100 bg-gradient-to-b from-white to-[#F5F5F7] p-8 shadow-sm">
      <div className="absolute inset-0">
        {/* Pulsing connection lines */}
        {Array.from({length:6}).map((_,i)=> (
          <motion.div key={i} initial={{opacity:0.2}} animate={{opacity:[0.2,0.6,0.2]}} transition={{duration:2.5, repeat:Infinity, delay:i*0.2}} className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent" style={{top:`${(i+1)*14}%`}} />
        ))}
      </div>
      <div className="relative grid grid-cols-2 gap-6 md:grid-cols-4">
        {nodes.map(({Icon,label}, i)=> (
          <motion.div key={label} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true, amount:0.6}} transition={{duration:0.6, delay:i*0.05}} className="rounded-xl border border-purple-100 bg-white p-6 shadow-sm">
            <Icon className="mx-auto text-purple-600" />
            <div className="mt-3 font-medium text-gray-800">{label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
