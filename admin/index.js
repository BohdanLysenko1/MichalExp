import CMS from 'netlify-cms-app';

// Initialize the CMS
CMS.init();

// Example configuration (customize as needed)
const config = {
  backend: {
    name: 'git-gateway',
    branch: 'main',
  },
  media_folder: 'public/uploads',
  public_folder: '/uploads',
  collections: [
    {
      name: 'blog',
      label: 'Blog',
      folder: 'src/content/blog',
      create: true,
      slug: '{{slug}}',
      fields: [
        { label: 'Title', name: 'title', widget: 'string' },
        { label: 'Publish Date', name: 'date', widget: 'datetime' },
        { label: 'Featured Image', name: 'image', widget: 'image', required: false },
        { label: 'Description', name: 'description', widget: 'text' },
        { label: 'Body', name: 'body', widget: 'markdown' },
      ],
    },
  ],
};

CMS.registerPreviewStyle('/admin/preview.css');