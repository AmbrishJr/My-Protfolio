import clsx from 'clsx'

/**
 * Consistent section shell: semantic landmark, id anchor, vertical rhythm,
 * and a max-width content column.
 */
export default function Section({ id, className, children, full = false }) {
  return (
    <section
      id={id}
      className={clsx('scroll-mt-24 py-24 sm:py-32', className)}
    >
      <div className={full ? 'w-full' : 'container-px'}>{children}</div>
    </section>
  )
}
