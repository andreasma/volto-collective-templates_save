import { TlcenterView, TlprojectView } from './components';
import '@plone/volto/config';

/**
 * Add your config changes here.
 * @module config
 * @example
 * export default function applyConfig(config) {
 *   config.settings = {
 *     ...config.settings,
 *     port: 4300,
 *     listBlockTypes: {
 *       ...config.settings.listBlockTypes,
 *       'my-list-item',
 *    }
 * }
 */

// All your imports required for the config here BEFORE this line

export default function applyConfig(config) {
  // Add here your project's configuration here by modifying `config` accordingly
  config.views = {
    ...config.views,
    contentTypesViews: {
      ...config.views.contentTypesViews,
      tlcenter: TlcenterView,
      tlproject: TlprojectView,
    },
  };
  return config;
}
