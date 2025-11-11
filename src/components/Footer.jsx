import { Linkedin } from 'lucide-react'

export default function Footer(){
  return (
    <footer className="bg-white py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <div className="text-sm text-gray-600">© FraudOps 2025</div>
        <nav className="flex items-center gap-6 text-sm text-gray-700">
          <a href="#about" className="hover:text-[#6C4EF8]">About</a>
          <a href="#platform" className="hover:text-[#6C4EF8]">Features</a>
          <a href="#resources" className="hover:text-[#6C4EF8]">Resources</a>
          <a href="#contact" className="hover:text-[#6C4EF8]">Contact</a>
          <a href="#" aria-label="LinkedIn" className="text-[#6C4EF8]">
            <Linkedin />
          </a>
        </nav>
      </div>
    </footer>
  )
}
