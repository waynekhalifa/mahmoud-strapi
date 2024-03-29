import type { Schema, Attribute } from '@strapi/strapi';

export interface ElementsFeatureColumn extends Schema.Component {
  collectionName: 'components_elements_feature_columns';
  info: {
    displayName: 'Feature column';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text;
    icon: Attribute.Media & Attribute.Required;
  };
}

export interface ElementsFeatureRow extends Schema.Component {
  collectionName: 'components_elements_feature_rows';
  info: {
    displayName: 'Feature row';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text;
    media: Attribute.Media;
  };
}

export interface ElementsFeature extends Schema.Component {
  collectionName: 'components_elements_features';
  info: {
    displayName: 'Feature';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    media: Attribute.Media;
    showLink: Attribute.Boolean & Attribute.DefaultTo<false>;
    newTab: Attribute.Boolean & Attribute.DefaultTo<false>;
    url: Attribute.String;
    text: Attribute.String;
  };
}

export interface LayoutFooter extends Schema.Component {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
    description: '';
  };
  attributes: {
    socialLinks: Attribute.Component<'links.social-link', true>;
    legalLinks: Attribute.Component<'links.link', true>;
  };
}

export interface LayoutLogo extends Schema.Component {
  collectionName: 'components_layout_logos';
  info: {
    displayName: 'Logo';
  };
  attributes: {
    logoText: Attribute.String;
    LogoImage: Attribute.Media;
  };
}

export interface LayoutNavbar extends Schema.Component {
  collectionName: 'components_layout_navbars';
  info: {
    displayName: 'Navbar';
  };
  attributes: {
    navbarLogo: Attribute.Component<'layout.logo'>;
    navbarLinks: Attribute.Component<'links.link', true>;
  };
}

export interface LinksButtonLink extends Schema.Component {
  collectionName: 'components_links_button_links';
  info: {
    displayName: 'Button Link';
  };
  attributes: {
    text: Attribute.String;
    newTab: Attribute.Boolean & Attribute.DefaultTo<false>;
    url: Attribute.String;
    type: Attribute.Enumeration<['primary', 'secondary']>;
  };
}

export interface LinksButton extends Schema.Component {
  collectionName: 'components_links_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    text: Attribute.String;
    type: Attribute.Enumeration<['primary', 'secondary']>;
  };
}

export interface LinksLink extends Schema.Component {
  collectionName: 'components_links_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    url: Attribute.String & Attribute.Required;
    newTab: Attribute.Boolean & Attribute.DefaultTo<false>;
    text: Attribute.String & Attribute.Required;
  };
}

export interface LinksSocialLink extends Schema.Component {
  collectionName: 'components_links_social_links';
  info: {
    displayName: 'Social link';
  };
  attributes: {
    url: Attribute.String & Attribute.Required;
    newTab: Attribute.Boolean & Attribute.DefaultTo<false>;
    text: Attribute.String & Attribute.Required;
    social: Attribute.Enumeration<
      ['facebook', 'twitter', 'linkedin', 'youtube', 'website']
    >;
  };
}

export interface MetaMetadata extends Schema.Component {
  collectionName: 'components_meta_metadata';
  info: {
    displayName: 'Metadata';
  };
  attributes: {
    metaTitle: Attribute.String & Attribute.Required;
    metaDescription: Attribute.Text & Attribute.Required;
  };
}

export interface SectionsAboutExperiences extends Schema.Component {
  collectionName: 'components_sections_about_experiences';
  info: {
    displayName: 'aboutExperiences';
  };
  attributes: {
    aboutExperiences: Attribute.Blocks;
  };
}

export interface SectionsAboutHero extends Schema.Component {
  collectionName: 'components_sections_about_heroes';
  info: {
    displayName: 'aboutHero';
  };
  attributes: {
    content: Attribute.Blocks;
    actionButton: Attribute.Component<'links.button-link'>;
  };
}

export interface SectionsCoachingHero extends Schema.Component {
  collectionName: 'components_sections_coaching_heroes';
  info: {
    displayName: 'coachingHero';
  };
  attributes: {
    title: Attribute.String;
    introduction: Attribute.Blocks;
    description: Attribute.Blocks;
    thumbnail: Attribute.Media;
  };
}

export interface SectionsCoachingRequest extends Schema.Component {
  collectionName: 'components_sections_coaching_requests';
  info: {
    displayName: 'coachingRequest';
  };
  attributes: {
    heading: Attribute.String;
    description: Attribute.Blocks;
    button: Attribute.Component<'links.button-link'>;
  };
}

export interface SectionsCoachingTraining extends Schema.Component {
  collectionName: 'components_sections_coaching_trainings';
  info: {
    displayName: 'coachingTraining';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Blocks;
    reasonHeading: Attribute.String;
    reasonDescription: Attribute.Blocks;
    audienceHeading: Attribute.String;
    audienceDescription: Attribute.Blocks;
    button: Attribute.Component<'links.button-link'>;
  };
}

export interface SectionsContactInfo extends Schema.Component {
  collectionName: 'components_sections_contact_infos';
  info: {
    displayName: 'contactInfo';
  };
  attributes: {
    contactInfo: Attribute.Component<'shared.contact-info', true>;
  };
}

export interface SectionsContactMe extends Schema.Component {
  collectionName: 'components_sections_contact_mes';
  info: {
    displayName: 'contactMe';
  };
  attributes: {
    contactMeHeading: Attribute.String;
    contactMeAddress: Attribute.String;
    contactMeNumber: Attribute.String;
  };
}

export interface SectionsCourseModules extends Schema.Component {
  collectionName: 'components_sections_course_modules';
  info: {
    displayName: 'Course modules';
  };
  attributes: {
    heading: Attribute.String;
    modules: Attribute.Component<'shared.course-module', true>;
  };
}

export interface SectionsHero extends Schema.Component {
  collectionName: 'components_sections_heroes';
  info: {
    displayName: 'Hero';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    picture: Attribute.Media;
    buttons: Attribute.Component<'links.button-link', true>;
    subTitle: Attribute.String;
    content: Attribute.Blocks;
  };
}

export interface SectionsHowItWorks extends Schema.Component {
  collectionName: 'components_sections_how_it_works';
  info: {
    displayName: 'howItWorks';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    content: Attribute.Blocks;
  };
}

export interface SectionsMyExperience extends Schema.Component {
  collectionName: 'components_sections_my_experiences';
  info: {
    displayName: 'myExperience';
  };
  attributes: {
    heading: Attribute.String;
    content: Attribute.Blocks;
    partners: Attribute.Component<'shared.slider'>;
  };
}

export interface SectionsQualifications extends Schema.Component {
  collectionName: 'components_sections_qualifications';
  info: {
    displayName: 'qualifications';
    description: '';
  };
  attributes: {
    qualificationsHeading: Attribute.String;
    qualificationsItems: Attribute.Component<'shared.qualifcation-item', true>;
  };
}

export interface SectionsServices extends Schema.Component {
  collectionName: 'components_sections_services';
  info: {
    displayName: 'Services';
  };
  attributes: {
    servicesContent: Attribute.Blocks;
    servicesThumbnail: Attribute.Media;
  };
}

export interface SectionsTestimonials extends Schema.Component {
  collectionName: 'components_sections_testimonials';
  info: {
    displayName: 'testimonials';
    description: '';
  };
  attributes: {
    testimonials: Attribute.Component<'shared.testimonial', true>;
    testimonialsHeading: Attribute.String;
  };
}

export interface SharedContactInfo extends Schema.Component {
  collectionName: 'components_shared_contact_infos';
  info: {
    displayName: 'contactInfo';
  };
  attributes: {
    title: Attribute.String;
    value: Attribute.Text;
    icon: Attribute.Media;
  };
}

export interface SharedCourseModule extends Schema.Component {
  collectionName: 'components_shared_course_modules';
  info: {
    displayName: 'Course module';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
  };
}

export interface SharedMapEmbed extends Schema.Component {
  collectionName: 'components_shared_map_embeds';
  info: {
    displayName: 'Map embed';
    description: '';
  };
  attributes: {
    url: Attribute.Text & Attribute.Required;
  };
}

export interface SharedMedia extends Schema.Component {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
  };
  attributes: {
    file: Attribute.Media;
  };
}

export interface SharedQualifcationItem extends Schema.Component {
  collectionName: 'components_shared_qualifcation_items';
  info: {
    displayName: 'qualifcationItem';
  };
  attributes: {
    title: Attribute.String;
    thumbnail: Attribute.Media;
  };
}

export interface SharedQuote extends Schema.Component {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    body: Attribute.Text & Attribute.Required;
    author: Attribute.String & Attribute.Required;
  };
}

export interface SharedRecentPosts extends Schema.Component {
  collectionName: 'components_shared_recent_posts';
  info: {
    displayName: 'recentPosts';
  };
  attributes: {
    active: Attribute.Boolean;
    numberOfPosts: Attribute.Integer;
  };
}

export interface SharedRichText extends Schema.Component {
  collectionName: 'components_shared_rich_texts';
  info: {
    displayName: 'Rich text';
  };
  attributes: {
    body: Attribute.RichText;
  };
}

export interface SharedRichtext extends Schema.Component {
  collectionName: 'components_shared_richtexts';
  info: {
    displayName: 'richtext';
  };
  attributes: {
    body: Attribute.Blocks;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'Seo';
  };
  attributes: {
    metaTitle: Attribute.String & Attribute.Required;
    metaDescription: Attribute.Text & Attribute.Required;
    shareImage: Attribute.Media;
  };
}

export interface SharedSlider extends Schema.Component {
  collectionName: 'components_shared_sliders';
  info: {
    displayName: 'Slider';
  };
  attributes: {
    files: Attribute.Media;
  };
}

export interface SharedTestimonial extends Schema.Component {
  collectionName: 'components_shared_testimonials';
  info: {
    displayName: 'testimonial';
  };
  attributes: {
    content: Attribute.Blocks;
    author: Attribute.Media;
  };
}

export interface SharedText extends Schema.Component {
  collectionName: 'components_shared_texts';
  info: {
    displayName: 'Text';
    description: '';
  };
  attributes: {
    Text: Attribute.String;
  };
}

export interface SharedVideoEmbed extends Schema.Component {
  collectionName: 'components_shared_video_embeds';
  info: {
    displayName: 'Video embed';
  };
  attributes: {
    url: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'elements.feature-column': ElementsFeatureColumn;
      'elements.feature-row': ElementsFeatureRow;
      'elements.feature': ElementsFeature;
      'layout.footer': LayoutFooter;
      'layout.logo': LayoutLogo;
      'layout.navbar': LayoutNavbar;
      'links.button-link': LinksButtonLink;
      'links.button': LinksButton;
      'links.link': LinksLink;
      'links.social-link': LinksSocialLink;
      'meta.metadata': MetaMetadata;
      'sections.about-experiences': SectionsAboutExperiences;
      'sections.about-hero': SectionsAboutHero;
      'sections.coaching-hero': SectionsCoachingHero;
      'sections.coaching-request': SectionsCoachingRequest;
      'sections.coaching-training': SectionsCoachingTraining;
      'sections.contact-info': SectionsContactInfo;
      'sections.contact-me': SectionsContactMe;
      'sections.course-modules': SectionsCourseModules;
      'sections.hero': SectionsHero;
      'sections.how-it-works': SectionsHowItWorks;
      'sections.my-experience': SectionsMyExperience;
      'sections.qualifications': SectionsQualifications;
      'sections.services': SectionsServices;
      'sections.testimonials': SectionsTestimonials;
      'shared.contact-info': SharedContactInfo;
      'shared.course-module': SharedCourseModule;
      'shared.map-embed': SharedMapEmbed;
      'shared.media': SharedMedia;
      'shared.qualifcation-item': SharedQualifcationItem;
      'shared.quote': SharedQuote;
      'shared.recent-posts': SharedRecentPosts;
      'shared.rich-text': SharedRichText;
      'shared.richtext': SharedRichtext;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.testimonial': SharedTestimonial;
      'shared.text': SharedText;
      'shared.video-embed': SharedVideoEmbed;
    }
  }
}
