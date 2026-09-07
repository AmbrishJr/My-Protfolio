import { motion } from 'framer-motion'
import Section from '../ui/Section'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import Marquee from '../ui/Marquee'
import { skills, marqueeSkills } from '../../data/content'

export default function Skills() {
  return (
    <>
      <Section id="skills">
        <SectionHeading index={2} title="Skills & Tools" kicker="What I work with" />

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((cat, i) => (
            <Reveal key={cat.group} delay={i * 0.06} className="space-y-4">
              <h3 className="flex items-center gap-2 font-mono text-sm text-accent">
                <span className="h-px w-6 bg-accent" />
                {cat.group}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {cat.items.map((item, j) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: j * 0.03, duration: 0.4 }}
                    className="chip transition-colors hover:border-accent hover:text-ink"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Section>

      <Marquee items={marqueeSkills} className="mb-24 sm:mb-32" />
    </>
  )
}
