/**
 * Composition examples — components used inside components.
 *
 * These use the Storybook SDC addon runtime (`<component>.component(args)`),
 * the same pattern as the addon's own `page-example.stories.js`. Props are
 * passed as values; slots are passed as functions returning markup.
 *
 * Per-component stories live next to each component as `*.story.yml`.
 */
import card from '../components/card/card.component.yml';
import contentItem from '../components/content-item/content-item.component.yml';
import pagination from '../components/pagination/pagination.component.yml';
import separator from '../components/separator/separator.component.yml';
import pageHeader from '../components/page-header/page-header.component.yml';
import addToCalendar from '../components/add-to-calendar/add-to-calendar.component.yml';
import factFigures from '../components/fact-figures/fact-figures.component.yml';
import siteHeader from '../components/site-header/site-header.component.yml';
import siteFooter from '../components/site-footer/site-footer.component.yml';
import textMedia from '../components/text-media/text-media.component.yml';
import formGroup from '../components/form-group/form-group.component.yml';
import textInput from '../components/text-input/text-input.component.yml';
import select from '../components/select/select.component.yml';
import textArea from '../components/text-area/text-area.component.yml';
import button from '../components/button/button.component.yml';

const IMG = { src: 'https://placehold.co/640x360', alt: 'Example image' };

export default {
  title: 'ECL/Examples',
};

export const ArticleGrid = {
  name: 'Article grid',
  render: () => `
    <div class="ecl-row">
      ${[1, 2, 3].map((i) => `
        <div class="ecl-col-12 ecl-col-m-4">
          ${card.component({
            picture: { img: IMG },
            title: { label: `Article number ${i}`, path: '#' },
            description: 'A short teaser describing the article content.',
            labels: [{ label: 'News', variant: 'high' }],
            primary_meta: ['12 March 2026'],
            links: [{ label: 'Read more', path: '#' }],
          })}
        </div>`).join('')}
    </div>`,
};

export const NewsListing = {
  name: 'News listing',
  render: () => `
    <div class="ecl-container">
      ${contentItem.component({
        date: { day: '12', month: 'MAR', year: '2026' },
        title: 'First news item',
        description: 'A teaser for the first news item.',
        primary_meta: ['News'],
        links: [{ label: 'Read more', path: '#' }],
      })}
      ${separator.component({})}
      ${contentItem.component({
        date: { day: '08', month: 'MAR', year: '2026' },
        title: 'Second news item',
        description: 'A teaser for the second news item.',
        primary_meta: ['Press release'],
        links: [{ label: 'Read more', path: '#' }],
      })}
      ${separator.component({})}
      ${pagination.component({
        label: 'Pagination',
        items: [
          { type: 'previous', path: '#' },
          { label: '1', path: '#', type: 'current' },
          { label: '2', path: '#' },
          { label: '3', path: '#' },
          { type: 'next', path: '#' },
        ],
      })}
    </div>`,
};

export const EventPage = {
  name: 'Event page',
  render: () => `
    ${pageHeader.component({
      title: 'Annual conference 2026',
      description: 'Join us for a day of talks and workshops.',
      breadcrumb: { links: [{ label: 'Home', path: '#' }, { label: 'Events', path: '#' }, { label: 'Annual conference' }] },
      meta: ['Event', '12 March 2026'],
    })}
    <div class="ecl-container ecl-u-mv-l">
      ${addToCalendar.component({
        title: 'Save the date',
        meta: [
          { icon: { name: 'calendar', family: 'phosphor' }, label: '12 March 2026' },
          { icon: { name: 'map-pin', family: 'phosphor' }, label: 'Brussels' },
        ],
        button: { label: 'Add to calendar', variant: 'primary', icon: { name: 'calendar-plus', family: 'phosphor' } },
      })}
      ${factFigures.component({
        columns: 3,
        items: [
          { icon: { name: 'microphone-stage', family: 'phosphor' }, value: '40', description: 'Speakers' },
          { icon: { name: 'users', family: 'phosphor' }, value: '1 200', description: 'Attendees' },
          { icon: { name: 'presentation', family: 'phosphor' }, value: '25', description: 'Sessions' },
        ],
      })}
    </div>`,
};

export const ContactForm = {
  name: 'Contact form',
  render: () => `
    <form class="ecl-container">
      ${formGroup.component({
        label: 'Full name', for: 'cf-name', required: true, required_text: '*',
        control: () => textInput.component({ id: 'cf-name', name: 'name', placeholder: 'Your name' }),
      })}
      ${formGroup.component({
        label: 'Country', for: 'cf-country',
        control: () => select.component({ id: 'cf-country', name: 'country', options: [{ value: '', label: 'Choose…' }, { value: 'be', label: 'Belgium' }, { value: 'fr', label: 'France' }] }),
      })}
      ${formGroup.component({
        label: 'Message', for: 'cf-msg',
        control: () => textArea.component({ id: 'cf-msg', name: 'message', rows: 5, placeholder: 'Your message…' }),
      })}
      ${button.component({ label: 'Send message', variant: 'primary', type: 'submit' })}
    </form>`,
};

export const FullPage = {
  name: 'Full page',
  render: () => `
    ${siteHeader.component({
      site_name: 'Example site',
      logo: { src_desktop: 'https://placehold.co/160x80?text=Logo', alt: 'Logo', path: '#' },
      cta_link: { label: 'Subscribe', path: '#' },
      menu: { items: [{ label: 'Home', path: '#', is_current: true }, { label: 'Policies', path: '#' }, { label: 'News', path: '#' }, { label: 'Contact', path: '#' }] },
    })}
    ${pageHeader.component({
      title: 'Welcome',
      description: 'A full page composed from ECL components.',
      breadcrumb: { links: [{ label: 'Home', path: '#' }, { label: 'Welcome' }] },
    })}
    <div class="ecl-container ecl-u-mv-l">
      ${textMedia.component({
        title: 'About this site',
        description: 'An example built entirely from ECL Single Directory Components.',
        link: { label: 'Learn more', path: '#' },
        media_container: { picture: { img: IMG } },
      })}
    </div>
    ${siteFooter.component({
      section_common: { links: [{ label: 'About', path: '#' }, { label: 'Contact', path: '#' }, { label: 'Legal notice', path: '#' }], links_inline: true },
    })}`,
};
