import { Target, ChevronRight, Globe, Shield, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"

export default function Footer() {
  const sections = [
    {
      title: "Learning",
      links: ["Browse Courses", "Learning Paths", "Skill Assessments", "Certificates", "Mobile App"],
    },
    {
      title: "Community",
      links: ["Student Forums", "Study Groups", "Mentorship", "Events", "Success Stories"],
    },
    {
      title: "Support",
      links: ["Help Center", "Contact Us", "Live Chat", "Course Support", "Technical Help"],
    },
  ]

  return (
    <footer className="bg-black text-white py-20 relative overflow-hidden border-t border-gray-800">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 to-black"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 rounded-3xl flex items-center justify-center shadow-2xl shadow-orange-500/25">
                <Target className="w-8 h-8 text-white" />
              </div>
              <div>
                <span className="text-3xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                  SkillNest
                </span>
                <div className="text-sm text-orange-300">Empowering Future Leaders</div>
              </div>
            </div>
            <p className="text-gray-400 mb-8 leading-relaxed text-lg">
              Transforming lives through cutting-edge education, expert instruction, and a global community of learners.
              Join millions who chose SkillNest for their career transformation.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, index) => (
                <div
                  key={index}
                  className="w-12 h-12 bg-gray-800 rounded-2xl flex items-center justify-center hover:bg-gray-700 cursor-pointer transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                >
                  <Icon className="w-6 h-6 text-gray-400 hover:text-white transition-colors" />
                </div>
              ))}
            </div>
          </div>

          {sections.map((section, index) => (
            <div key={index}>
              <h3 className="text-xl font-bold mb-6 text-white">{section.title}</h3>
              <ul className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-gray-400">
              <p>&copy; 2024 SkillNest. All rights reserved.</p>
            </div>
            <div className="flex gap-8 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                <span>Available in 50+ countries</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-400" />
                <span>SSL Secured</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
