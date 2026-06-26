import { Testimonial } from '@/types/testimonial';

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'Head of Data Engineering',
    company: 'Nexus Analytics',
    content:
      'FluxMind reduced our pipeline build time by 80%. What used to take our team weeks now takes hours. The predictive intelligence feature caught 3 critical anomalies before they hit production.',
    avatar: 'SC',
    metric: {
      value: '80%',
      label: 'Faster Pipelines',
    },
  },
  {
    id: 2,
    name: 'Marcus Rodriguez',
    role: 'CTO',
    company: 'DataFlow Systems',
    content:
      'We evaluated 6 platforms before choosing FluxMind. The pricing engine transparency and the real-time analytics sold us. ROI was positive within the first month.',
    avatar: 'MR',
    metric: {
      value: '3x',
      label: 'ROI in 30 days',
    },
  },
  {
    id: 3,
    name: 'Priya Sharma',
    role: 'VP of Engineering',
    company: 'Orbis Data',
    content:
      'The auto-scaling infrastructure is genuinely magic. We had a 10x traffic spike during our product launch and FluxMind handled it without a single alert.',
    avatar: 'PS',
    metric: {
      value: '10x',
      label: 'Traffic Spike Handled',
    },
  },
  {
    id: 4,
    name: 'James Okafor',
    role: 'Data Architect',
    company: 'Vertex Intelligence',
    content:
      '200+ connectors means we stopped building custom integrations entirely. The universal connector system alone saved us 3 months of engineering work.',
    avatar: 'JO',
    metric: {
      value: '3mo',
      label: 'Engineering Saved',
    },
  },
];