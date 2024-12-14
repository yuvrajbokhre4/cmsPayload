import type { Block } from 'payload';

export const DoubleImageBlock: Block = {
  slug: 'doubleImageBlock',
  interfaceName: 'DoubleImageBlock',
  fields: [
    {
      name: 'media1',
      label: 'First Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'media2',
      label: 'Second Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'enableGutter',
      type: 'checkbox',
      label: 'Enable Gutter',
      defaultValue: true,
    },
    {
      name: 'disableInnerContainer',
      type: 'checkbox',
      label: 'Disable Inner Container',
      defaultValue: false,
    },
  ],
};
