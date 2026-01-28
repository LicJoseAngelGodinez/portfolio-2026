import styles from './ProjectsSection.module.css';
import { CardProject } from './CardProject';

const projects = [
  {
    title: 'National Tourism Platform',
    badge: 'VisitMexico · Government of Mexico',
    description: 'Building a large-scale public-facing tourism platform under tight deadlines. Delivering modular, content-driven templates for a nationwide audience without modern design tooling.',
    highlights: [
      { 
        icon: 'view_quilt', 
        text: 'Developing modular, reusable page templates for dynamic content rendering.' 
      },
      { 
        icon: 'schedule', 
        text: 'Delivering production-ready features under aggressive timelines to secure a national bid.' 
      },
      { 
        icon: 'dns', 
        text: 'Collaborating on a custom CMS to enable large-scale content management.' 
      },
    ],
    legacyTech: 'PHP / JavaScript / HTML / CSS',
    modernTech: 'Bootstrap / Modular Templates',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBzqtnRp_p1nnFCqQa3W83OfrmKJ4Vqkgd2Gqi9eFsaHpX88qzPXP7jNmj6gwmeUSP5QxHwC4D8kzCIgeuNJVRIModHIhcvoKzE7W9RnGolwzkHCgFaFScReIR_xcvTKeIttfYndsUrkb6VJNBZC0Dde4PHoMSOdooZFx1eGFT2x1FzgNoBPmJs7J4m57aJXRdSeGl6rnoDc0tlzlHeRdlatWFtvn2H-tCSprejcrEcxzgz60CA15tKYof2Bbs8KHP1cPIYmA-8vR4',
  },
  {
    title: 'Enterprise eCommerce Platform',
    badge: 'Walmart Mexico · Multi-Market Monorepo',
    description:
      'Contributing to a large-scale, multi-brand eCommerce platform serving millions of users across different markets. Working within a shared monorepository to deliver market-specific features without impacting global stability.',
    highlights: [
      {
        icon: 'flag',
        text: 'Implementing feature flags to safely experiment, validate impact, and control rollouts by market.',
      },
      {
        icon: 'hub',
        text: 'Developing React-based features within a shared monorepo used by multiple countries and brands.',
      },
      {
        icon: 'groups',
        text: 'Collaborating with US-based core teams to align changes with global architectural standards.',
      },
    ],
    legacyTech: 'Shared Global Codebase',
    modernTech: 'Market-Aware Domain Architecture',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCyDbvPhOGNBSEWCOMbKi8BsFe8n3xtIP1mZx40F1xF24mu9ef1uCk4oR-hhJvplXXurfG3PpFiodPUnIEi6wwhyoB9-qlSrofU-tKbJpwjHIFJ-400NkQ-a7gs6tdMmMOd6ZS4JPOnW-YLOOCBGhR7M5GO8gaHX2veWbrelv8RLBMYy1GTliNKXF9QTJfS8tkjQT_-PyzH7aNpluo2jPZrtq0sVvMbvrBz7ht0xFQtSRL8Avn6U0CIna5sPnIwl4fj-zzFmuqMRZs',
  },
  {
    title: 'Real-Time Financial News Platform',
    badge: 'Dow Jones NewsPlus',
    description:
      'Front-end development on a real-time, premium financial news dashboard used by institutional investors. Focused on migrating legacy UI patterns into a modern design system while ensuring accessibility, performance, and responsive behavior across high-pressure market workflows.',
    highlights: [
      {
        icon: 'swap_horiz',
        text: 'Migrating legacy components to a new design system, standardizing error, empty states, and core UI patterns.',
      },
      {
        icon: 'show_chart',
        text: 'Enhancing real-time market modules like watchlists and market selectors with improved UX and data handling.',
      },
      {
        icon: 'accessibility',
        text: 'Improving accessibility and responsiveness, including screen reader support, keyboard navigation, and small-screen fixes.',
      },
    ],
    legacyTech: 'Legacy UI components / Previous design library',
    modernTech:
      'React / CSS Modules / Jest / React Query / Design Systems / Accessibility-first',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCyDbvPhOGNBSEWCOMbKi8BsFe8n3xtIP1mZx40F1xF24mu9ef1uCk4oR-hhJvplXXurfG3PpFiodPUnIEi6wwhyoB9-qlSrofU-tKbJpwjHIFJ-400NkQ-a7gs6tdMmMOd6ZS4JPOnW-YLOOCBGhR7M5GO8gaHX2veWbrelv8RLBMYy1GTliNKXF9QTJfS8tkjQT_-PyzH7aNpluo2jPZrtq0sVvMbvrBz7ht0xFQtSRL8Avn6U0CIna5sPnIwl4fj-zzFmuqMRZs',
  },
];

export function ProjectsSection() {
  return (
    <section className={styles.section} id="realms">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.titleWrapper}>
            <span className={`material-symbols-outlined ${styles.titleIcon}`}>pets</span>
            <h2 className={styles.title}>Guarded Realms</h2>
            <span className={`material-symbols-outlined ${styles.titleIcon}`}>pets</span>
          </div>
          <p className={styles.subtitle}>Geri and Freki guard the code of these domains.</p>
        </div>
        <div className={styles.grid}>
          {projects.map((project) => (
            <CardProject key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
