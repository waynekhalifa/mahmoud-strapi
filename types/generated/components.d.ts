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

export interface SectionsHero extends Schema.Component {
  collectionName: 'components_sections_heroes';
  info: {
    displayName: 'Hero';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    picture: Attribute.Media;
    buttons: Attribute.Component<'links.button-link', true>;
    subTitle: Attribute.String;
    content: Attribute.Blocks;
  };
}

export interface SharedMapEmbed extends Schema.Component {
  collectionName: 'components_shared_map_embeds';
  info: {
    displayName: 'Map embed';
  };
  attributes: {
    url: Attribute.String & Attribute.Required;
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
      'sections.hero': SectionsHero;
      'shared.map-embed': SharedMapEmbed;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.recent-posts': SharedRecentPosts;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.text': SharedText;
      'shared.video-embed': SharedVideoEmbed;
    }
  }
}
