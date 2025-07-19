import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'productFilters',
  title: 'Product Filters',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Title for the filters configuration (e.g., "Main Product Filters")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'constructionTypes',
      title: 'Construction Types',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'name', title: 'Display Name', type: 'string'},
            {name: 'value', title: 'Filter Value', type: 'string'},
          ],
        },
      ],
    }),
    defineField({
      name: 'conductorTypes',
      title: 'Conductor Types',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'name', title: 'Display Name', type: 'string'},
            {name: 'value', title: 'Filter Value', type: 'string'},
          ],
        },
      ],
    }),
    defineField({
      name: 'coreSizes',
      title: 'Core Sizes',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'name', title: 'Display Name', type: 'string'},
            {name: 'value', title: 'Filter Value', type: 'string'},
          ],
        },
      ],
    }),
    defineField({
      name: 'firePerformance',
      title: 'Fire Performance Classes',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'name', title: 'Display Name', type: 'string'},
            {name: 'value', title: 'Filter Value', type: 'string'},
          ],
        },
      ],
    }),
    defineField({
      name: 'cableLengths',
      title: 'Cable Lengths',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'name', title: 'Display Name', type: 'string'},
            {name: 'value', title: 'Filter Value', type: 'string'},
          ],
        },
      ],
    }),
    defineField({
      name: 'enableCustomCableLength',
      title: 'Enable Custom Cable Length Range',
      type: 'boolean',
      description: 'Allow users to select a custom cable length range (e.g., 1-100m) in addition to specific values.'
    }),
    defineField({
      name: 'customCableLengthLabel',
      title: 'Custom Cable Length Label',
      type: 'string',
      description: 'Label for the custom cable length range (e.g., "Custom (1-100m)")',
      hidden: ({parent}) => !parent?.enableCustomCableLength
    }),
    defineField({
      name: 'popularTags',
      title: 'Popular Tags',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'name', title: 'Tag Name', type: 'string'},
            {name: 'categorySlug', title: 'Category Slug', type: 'string'},
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
}) 