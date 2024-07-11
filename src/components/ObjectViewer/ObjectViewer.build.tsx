import { useEnhancedNode } from '@ws-ui/webform-editor';
import cn from 'classnames';
import { FC } from 'react';

import { IObjectViewerProps } from './ObjectViewer.config';
import ReactJson from 'react-json-view';

const ObjectViewer: FC<IObjectViewerProps> = ({ style, className, classNames = [] }) => {
  const {
    connectors: { connect },
  } = useEnhancedNode();

  return (
    <div ref={connect} style={style} className={cn(className, classNames)}>
      <ReactJson src={{}} />
    </div>
  );
};

export default ObjectViewer;
