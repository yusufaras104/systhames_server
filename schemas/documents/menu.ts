import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'menu',
  title: 'Menu',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'template',
      title: 'Template',
      type: 'string',
      options: {
        list: [
          {title: 'About Us', value: 'About-Us'},
          {title: 'Solutions', value: 'solutions'},
          {title: 'Support', value: 'support'},
          {title: 'Contact', value: 'contact'},
        ],
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'submenus',
      title: 'Submenus',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: Rule => Rule.required(),
            },
            {
              name: 'slug',
              title: 'Slug',
              type: 'slug',
              options: { source: 'title', maxLength: 96 },
              validation: Rule => Rule.required(),
            },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {title: 'title', subtitle: 'template'},
  },
}) 