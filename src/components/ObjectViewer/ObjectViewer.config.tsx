import { EComponentKind, T4DComponentConfig } from '@ws-ui/webform-editor';
import { Settings } from '@ws-ui/webform-editor';
import { MdOutlineTextSnippet } from 'react-icons/md';

import ObjectViewerSettings, { BasicSettings } from './ObjectViewer.settings';

export default {
  craft: {
    displayName: 'ObjectViewer',
    kind: EComponentKind.BASIC,
    props: {
      name: '',
      classNames: [],
      events: [],
    },
    related: {
      settings: Settings(ObjectViewerSettings, BasicSettings),
    },
  },
  info: {
    displayName: 'ObjectViewer',
    exposed: true,
    icon: MdOutlineTextSnippet,
    events: [
      {
        label: 'On Click',
        value: 'onclick',
      },
      {
        label: 'On Blur',
        value: 'onblur',
      },
      {
        label: 'On Focus',
        value: 'onfocus',
      },
      {
        label: 'On MouseEnter',
        value: 'onmouseenter',
      },
      {
        label: 'On MouseLeave',
        value: 'onmouseleave',
      },
      {
        label: 'On KeyDown',
        value: 'onkeydown',
      },
      {
        label: 'On KeyUp',
        value: 'onkeyup',
      },
    ],
    datasources: {
      accept: ['object'],
    },
  },
  defaultProps: {
  },
} as T4DComponentConfig<IObjectViewerProps>;

export interface IObjectViewerProps extends webforms.ComponentProps {
  theme: any;
  indentWidth:number;
  collapsed:boolean;
}
