import React from 'react';

import {IHashIcons, IIconsProps} from './Icons.structure';
import Test from './test';
/**
 * @description Component to render all svg icons
 * @example ````tsx
 * <Icons name="arrow-down" size={20} color="#000" />
 * ````
 *
 * ### Available icons:
 * - SyncIcon       | • edit            | • wifi-off
 *
 * @param size - size of icon
 * @param color - color of icon
 * @param name - name of icon
 */
export default function Icons({size, color, name}: IIconsProps) {
  const iconsProps = {
    size,
    color,
  };

  const HashIcons: IHashIcons = {
    'test-icon': <Test {...iconsProps} />,
  };

  return HashIcons[name] || null;
}
