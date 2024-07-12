import { ESetting, TSetting } from '@ws-ui/webform-editor';
import { BASIC_SETTINGS, DEFAULT_SETTINGS, load } from '@ws-ui/webform-editor';

const commonSettings: TSetting[] = [
  {
    key: 'theme',
    label: 'theme',
    type: ESetting.SELECT,
    options: [
      {
        label: 'basic',
        value: 'basic',
      },
      {
        label: 'monokai',
        value: 'monokai',
      }
    ],
  },
  {
    key:'indentWidth',
    label:'Indent width',
    type:ESetting.NUMBER_FIELD,
  },
  {
    key:'collapsed',
    label:'Collapse',
    type:ESetting.CHECKBOX,
  },
  {
    key:'enableClipboard',
    label:'Enable clipboard',
    type:ESetting.CHECKBOX,
  }
];

const Settings: TSetting[] = [
  {
    key: 'properties',
    label: 'Properties',
    type: ESetting.GROUP,
    components: commonSettings,
  },
  ...DEFAULT_SETTINGS,
];

export const BasicSettings: TSetting[] = [
  ...commonSettings,
  ...load(BASIC_SETTINGS).filter('style.overflow'),
];

export default Settings;
