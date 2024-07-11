import { useRenderer, useSources } from '@ws-ui/webform-editor';
import cn from 'classnames';
import { FC, useEffect, useState } from 'react';

import { IObjectViewerProps } from './ObjectViewer.config';
import ReactJson from 'react-json-view';

const ObjectViewer: FC<IObjectViewerProps> = ({ theme,style, className, classNames = [] }) => {
  const { connect } = useRenderer();
  const [value, setValue] = useState<object>({});
  const {
    sources: { datasource: ds },
  } = useSources();

  useEffect(() => {
    if (!ds) return;

    const listener = async (/* event */) => {
      const v = await ds.getValue<object>();
      setValue(v);
    };

    listener();

    ds.addListener('changed', listener);

    return () => {
      ds.removeListener('changed', listener);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ds]);

  return (
    <div ref={connect} style={style} className={cn(className, classNames)}>
      <ReactJson src={value} theme={theme}/>
    </div>
  );
};

export default ObjectViewer;
