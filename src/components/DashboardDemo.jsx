import { motion } from 'framer-motion'

export default function DashboardDemo(){
  return (
    <section id="demo" className="relative overflow-hidden bg-gradient-to-b from-white to-[#EDECF8] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-3xl md:text-4xl font-bold text-gray-900">
          Interactive Dashboard Demo
        </motion.h2>
        <motion.p initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.1, duration:0.6}} className="mt-3 max-w-2xl text-gray-600">
          FraudOps turns complex fraud data into actionable insights — instantly.
        </motion.p>

        <div className="relative mt-12 grid grid-cols-12 gap-6">
          {/* Zoomable panels */}
          <Panel className="col-span-12 md:col-span-7" title="Case Overview" tooltip="Total active cases, escalations, and SLAs">
            <div className="grid grid-cols-3 gap-3">
              {[['Open',84],['Escalated',12],['Resolved',56]].map(([k,v])=> (
                <div key={k} className="rounded-lg border p-4 hover:shadow-md transition">
                  <div className="text-xs text-gray-500">{k}</div>
                  <div className="mt-1 text-2xl font-semibold text-gray-900">{v}</div>
                </div>
              ))}
            </div>
          </Panel>

          <Panel className="col-span-12 md:col-span-5" title="Risk Scoring" tooltip="Model confidence and drift monitoring">
            <div className="flex items-end gap-3">
              {[72,81,93,68].map((v,i)=> (
                <div key={i} className="flex-1">
                  <div className="mx-auto h-32 w-8 rounded bg-purple-100">
                    <div className="w-8 rounded-b bg-[#6C4EF8]" style={{height:`${v}%`}} />
                  </div>
                  <div className="mt-2 text-center text-xs text-gray-500">M{i+1}</div>
                </div>
              ))}
            </div>
          </Panel>

          <Panel className="col-span-12" title="Fraud Network" tooltip="Entity link analysis and community detection">
            <div className="grid grid-cols-6 gap-4">
              {Array.from({length:18}).map((_,i)=> (
                <motion.div key={i} whileHover={{scale:1.03}} className="relative h-24 rounded-lg bg-gradient-to-br from-white to-purple-50 ring-1 ring-purple-100">
                  <div className="absolute inset-0 m-auto h-10 w-10 rounded-full bg-purple-300/50" />
                  <div className="absolute inset-0 m-auto h-3 w-14 rounded-full bg-purple-400/40 blur" />
                </motion.div>
              ))}
            </div>
          </Panel>
        </div>
      </div>
    </section>
  )
}

function Panel({title, tooltip, className='', children}){
  return (
    <motion.div initial={{opacity:0, y:30, scale:0.98}} whileInView={{opacity:1, y:0, scale:1}} viewport={{once:true, amount:0.4}} transition={{duration:0.6}} className={`group relative overflow-hidden rounded-xl border border-purple-100 bg-white/70 p-6 shadow-lg backdrop-blur ${className}`}>
      <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-purple-400/20 to-purple-600/20 opacity-0 blur-2xl transition group-hover:opacity-100" />
      <div className="relative flex items-center justify-between">
        <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
        <span className="text-xs text-gray-500">{tooltip}</span>
      </div>
      <div className="relative mt-4">{children}</div>
    </motion.div>
  )
}
