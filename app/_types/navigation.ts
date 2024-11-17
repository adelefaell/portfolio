import { Links } from './Links';

export const navigation = [
  { showOnHeader: true, title: 'Home', href: Links.HomePage() },

  { showOnHeader: true, title: 'Projects', href: Links.ProjectsPage() },
  { showOnHeader: true, title: 'About', href: Links.AboutPage() },

  { showOnHeader: true, title: 'Skills', href: Links.SkillsPage() },
  { showOnHeader: false, title: 'Quotes', href: Links.QuotesPage() },
  { showOnHeader: false, title: 'Recommends', href: Links.RecommendsPage() },
  { showOnHeader: false, title: 'Random Joke', href: Links.RandomJokePage() },
  { showOnHeader: false, title: 'Contact', href: Links.ContactPage() },
];
