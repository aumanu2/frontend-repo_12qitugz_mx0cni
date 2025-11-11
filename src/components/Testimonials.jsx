import { motion } from 'framer-motion'

const testimonials = [
  {quote: 'FraudOps accelerated our case cycle times dramatically.', author: 'Chief Claims Officer'},
  {quote: 'The accuracy and transparency are game-changing for our audits.', author: 'Head of SIU'},
  {quote: 'Finally, a platform that unifies intelligence across teams.', author: 'Fraud Analytics Lead'},
]

export default function Testimonials(){
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-3xl md:text-4xl font-bold text-gray-900">What Clients Say</motion.h2>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i)=> (
            <motion.div key={i} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true, amount:0.6}} transition={{duration:0.6, delay:i*0.1}} className="rounded-xl border border-purple-100 bg-gradient-to-b from-[#FBFAFF] to-white p-6 shadow-sm">
              <p className="text-gray-800">“{t.quote}”</p>
              <div className="mt-4 text-sm text-gray-500">— {t.author}</div>
            </motion.div>
          ))}
        </div>
        <Counters />
      </div>
    </section>
  )
}

function Counters(){
  const stats = [
    {label: 'Case Speed', value: 40, suffix: '%'},
    {label: 'Detection Accuracy', value: 95, suffix: '%'},
    {label: 'Analyst Efficiency', value: 2.1, suffix: 'x'},
  ]
  return (
    <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
      {stats.map((s,i)=> (
        <motion.div key={s.label} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true, amount:0.6}} transition={{duration:0.6, delay:i*0.05}} className="rounded-xl border border-purple-100 bg-white p-6 text-center shadow-sm">
          <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} className="text-4xl font-extrabold text-[#6C4EF8]">
            <CountUp end={s.value} />{s.suffix}
          </motion.div>
          <div className="mt-2 text-sm text-gray-600">{s.label}</div>
        </motion.div>
      ))}
    </div>
  )
}

function CountUp({end}){
  return (
    <motion.span initial={{innerText:0}} whileInView={{innerText:end}} viewport={{once:true}} transition={{duration:1.8, ease:'easeOut'}}>
      {end}
    </motion.span>
  )
}
