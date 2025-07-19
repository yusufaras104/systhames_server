import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  groups: [
    {name: 'basic', title: 'Basic Information'},
    {name: 'details', title: 'Product Details'},
    {name: 'specs', title: 'Technical Specifications'},
    {name: 'docs', title: 'Documentation'},
  ],
  fields: [
    // Basic Information
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'basic',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'basic',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      group: 'basic',
      description: 'Brief description for product listings'
    }),
    defineField({
      name: 'image',
      title: 'Main Image',
      type: 'image',
      group: 'basic',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'images',
      title: 'Additional Images',
      type: 'array',
      group: 'basic',
      of: [{type: 'image'}],
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      group: 'basic',
      to: [{type: 'category'}],
    }),
    
    // Product Details
    defineField({
      name: 'longDescription',
      title: 'Product Overview',
      type: 'array',
      group: 'details',
      description: 'Detailed product description shown in the Product Overview tab',
      of: [{type: 'block'}]
    }),
    defineField({
      name: 'applications',
      title: 'Applications',
      type: 'array',
      group: 'details',
      description: 'List of applications where this product can be used',
      of: [{type: 'string'}]
    }),
    defineField({
      name: 'qualityStandards',
      title: 'Quality Standards',
      type: 'text',
      group: 'details',
      description: 'Information about quality standards and testing'
    }),
    defineField({
      name: 'features',
      title: 'Key Features',
      type: 'array',
      group: 'details',
      description: 'Key product features (shown as bullet points)',
      of: [{type: 'string'}]
    }),
    
    // Technical Specifications
    defineField({
      name: 'partCode',
      title: 'Part Code',
      type: 'string',
      group: 'specs',
    }),
    defineField({
      name: 'sku',
      title: 'SKU',
      type: 'string',
      group: 'specs',
    }),
    defineField({
      name: 'conductorType',
      title: 'Conductor Type',
      type: 'string',
      group: 'specs',
      options: {
        list: [
          {title: 'Solid', value: 'Solid'},
          {title: 'Stranded', value: 'Stranded'},
          {title: 'CCA', value: 'CCA'},
        ],
      },
    }),
    defineField({
      name: 'coreSize',
      title: 'Core Size',
      type: 'string',
      group: 'specs',
    }),
    defineField({
      name: 'constructionType',
      title: 'Construction Type',
      type: 'string',
      group: 'specs',
    }),
    defineField({
      name: 'firePerformanceEuroclass',
      title: 'Fire Performance Euroclass',
      type: 'string',
      group: 'specs',
    }),
    defineField({
      name: 'brandingOnProduct',
      title: 'Branding on Product',
      type: 'string',
      group: 'specs',
    }),
    defineField({
      name: 'specifications',
      title: 'Additional Specifications',
      type: 'array',
      group: 'specs',
      description: 'Technical specifications as key-value pairs',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'key',
              title: 'Specification Name',
              type: 'string',
            },
            {
              name: 'value',
              title: 'Specification Value',
              type: 'string',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'complianceStandards',
      title: 'Compliance Standards',
      type: 'array',
      group: 'specs',
      description: 'Standards this product complies with',
      of: [{type: 'string'}]
    }),
    defineField({
      name: 'cableLength',
      title: 'Cable Length (m)',
      type: 'number',
      group: 'specs',
      description: 'The length of the cable in meters (for filtering)',
    }),
    
    // Documentation
    defineField({
      name: 'PDF_url',
      title: 'Main PDF URL',
      description: 'Link to the main product PDF document (e.g., datasheet)',
      type: 'url',
      group: 'docs',
    }),
    defineField({
      name: 'documents',
      title: 'Additional Documents',
      description: 'Links to additional product documentation',
      type: 'array',
      group: 'docs',
      of: [
        {
          type: 'object',
          title: 'Document',
          fields: [
            {
              name: 'title',
              title: 'Document Title',
              type: 'string',
              description: 'e.g., "Installation Guide", "Datasheet", etc.',
            },
            {
              name: 'description',
              title: 'Document Description',
              type: 'string',
              description: 'Brief description of the document',
            },
            {
              name: 'file',
              title: 'PDF File',
              type: 'file',
              options: {
                accept: 'application/pdf',
              },
              description: 'Upload the PDF document',
            },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category.title',
      media: 'image',
    },
    prepare(selection) {
      const {title, category} = selection
      return {
        ...selection,
        subtitle: category ? `${category}` : '',
      }
    },
  },
}) 