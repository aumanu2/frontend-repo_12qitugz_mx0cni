import { motion } from 'framer-motion'
import { Sparkles, Play, ArrowRight } from 'lucide-react'

const primary = '#6C4EF8'

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-white via-[#F5F5F7] to-[#EDECF8]">
      {/* Ambient gradient aurora */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full blur-3xl opacity-40" style={{background:`radial-gradient(closest-side, ${primary}, transparent)`}} />
        <div className="absolute top-1/2 right-0 h-96 w-96 rounded-full blur-3xl opacity-30 translate-x-1/3" style={{background:`radial-gradient(closest-side, #B7A7FF, transparent)`}} />
      </div>

      {/* Subtle AI lines */}
      <AIGrid />

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.6}} className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white/70 px-4 py-2 text-sm text-gray-700 shadow-sm backdrop-blur">
          <Sparkles size={16} className="text-purple-500" />
          AI-powered Insurance Fraud Platform
        </motion.div>

        <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.15, duration:0.7}} className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
          The way we deal with Insurance Fraud is Changing.
        </motion.h1>

        <motion.p initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.3, duration:0.7}} className="mx-auto mt-5 max-w-2xl text-lg text-gray-600">
          Introducing FraudOps — An AI-powered Case Investigation Platform.
        </motion.p>

        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.45, duration:0.7}} className="mt-8 flex items-center justify-center gap-4">
          <a href="#demo" className="group inline-flex items-center gap-2 rounded-lg bg-[#6C4EF8] px-6 py-3 text-white shadow-lg shadow-purple-300/40 transition hover:brightness-110">
            Book a Demo
            <ArrowRight className="transition-transform group-hover:translate-x-0.5" size={18} />
          </a>
          <a href="#platform" className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-gray-800 ring-1 ring-gray-200 hover:ring-purple-300">
            <Play size={18} className="text-purple-500" />
            Explore Platform
          </a>
        </motion.div>

        {/* 3D-ish dashboard preview */}
        <motion.div initial={{opacity:0, scale:0.98, y:30}} whileInView={{opacity:1, scale:1, y:0}} viewport={{amount:0.4, once:true}} transition={{delay:0.2, duration:0.8}} className="relative mx-auto mt-14 max-w-5xl">
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple-400/40 to-purple-600/40 blur-xl" aria-hidden />
          <div className="relative overflow-hidden rounded-2xl border border-purple-200/60 bg-white shadow-2xl">
            <DashboardMock />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function AIGrid(){
  const lines = Array.from({length:12})
  return (
    <div className="pointer-events-none absolute inset-0">
      {lines.map((_,i)=> (
        <div key={i} className="absolute h-px w-full bg-gradient-to-r from-transparent via-purple-200/40 to-transparent" style={{top:`${(i+1)*7}%`}} />
      ))}
      {Array.from({length:10}).map((_,i)=> (
        <div key={`v-${i}`} className="absolute w-px h-full bg-gradient-to-b from-transparent via-purple-200/30 to-transparent" style={{left:`${(i+1)*9}%`}} />
      ))}
    </div>
  )
}

function DashboardMock(){
  return (
    <div className="bg-white">
      <div className="flex items-center gap-2 border-b px-4 py-3">
        <div className="flex gap-1">
          <span className="h-3 w-3 rounded-full bg-red-300" />
          <span className="h-3 w-3 rounded-full bg-yellow-300" />
          <span className="h-3 w-3 rounded-full bg-green-300" />
        </div>
        <div className="ml-3 text-sm text-gray-500">fraudops.ai/dashboard</div>
      </div>
      <div className="grid grid-cols-12 gap-5 p-6">
        <Card className="col-span-12 md:col-span-8">
          <h3 className="text-sm font-semibold text-gray-700">Fraud Alerts</h3>
          <div className="mt-4 grid grid-cols-3 gap-3">
            {['High','Medium','Low'].map((lvl, i)=> (
              <div key={lvl} className="rounded-lg border p-4 hover:shadow-md transition">
                <div className="text-xs text-gray-500">Severity</div>
                <div className="mt-1 font-semibold text-gray-800">{lvl}</div>
                <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-gray-100">
                  <div className="h-full rounded-full" style={{width:`${70 - i*15}%`, background:'#6C4EF8'}} />
                </div>
              </div>
            ))}
          </div>
        </Card>
        <Card className="col-span-12 md:col-span-4">
          <h3 className="text-sm font-semibold text-gray-700">Risk Score</h3>
          <div className="mt-4 flex items-end gap-2">
            {[60,75,92].map((v, i)=> (
              <div key={i} className="flex-1">
                <div className="mx-auto h-28 w-6 rounded bg-purple-100">
                  <div className="w-6 rounded-b bg-[#6C4EF8]" style={{height:`${v}%`}} />
                </div>
                <div className="mt-2 text-center text-xs text-gray-500">Q{i+1}</div>
              </div>
            ))}
          </div>
        </Card>
        <Card className="col-span-12">
          <h3 className="text-sm font-semibold text-gray-700">Network Map</h3>
          <div className="mt-3 grid grid-cols-6 gap-4">
            {Array.from({length:12}).map((_,i)=> (
              <div key={i} className="relative h-20 rounded-lg bg-gradient-to-br from-white to-purple-50 ring-1 ring-purple-100">
                <div className="absolute inset-0 m-auto h-8 w-8 rounded-full bg-purple-200/60" />
                <div className="absolute inset-0 m-auto h-2 w-12 rounded-full bg-purple-300/50 blur" />
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}

function Card({children, className=''}){
  return (
    <div className={`rounded-xl border border-purple-100 bg-white p-5 shadow-sm ${className}`}>
      {children}
    </div>
  )
}
