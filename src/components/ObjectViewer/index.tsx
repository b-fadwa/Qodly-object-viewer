import config, { IObjectViewerProps } from './ObjectViewer.config';
import { T4DComponent, useEnhancedEditor } from '@ws-ui/webform-editor';
import Build from './ObjectViewer.build';
import Render from './ObjectViewer.render';

const ObjectViewer: T4DComponent<IObjectViewerProps> = (props) => {
  const { enabled } = useEnhancedEditor((state) => ({
    enabled: state.options.enabled,
  }));

  return enabled ? <Build {...props} /> : <Render {...props} />;
};

ObjectViewer.craft = config.craft;
ObjectViewer.info = config.info;
ObjectViewer.defaultProps = config.defaultProps;

export default ObjectViewer;
