import clsx from 'clsx';
import { CSSProperties } from '@mui/styled-engine';
import { withStyles } from '@mui/styles';
import React, { MouseEventHandler, useCallback, useState } from 'react';
import ResizeAreaProps, { SizeProps, GetBarStylesFunc } from "./ResizeArea.d";
import styles from './ResizeArea.styles';

/**
 * Get Bar styles based on direction and user input
 * @param direction direction resize
 * @param overrideStyles style input by user
 * @returns Bar CSS style
 */
const getBarStyles: GetBarStylesFunc = function (direction, overrideStyles) {
  let styles: CSSProperties = {
    zIndex: 2,
    position: 'absolute',
    ...overrideStyles,
  };

  switch (direction) {
    case 'e':
      /** Horizontal resize to East */
      styles = {
        ...styles,
        right: 0,
        top: 0,
        height: '100%',
      };
      break;
    case 's':
      /** Vertical resize to South */
      styles = {
        ...styles,
        bottom: 0,
        left: 0,
        width: '100%',
      }
      break;
    case 'n':
      /** Vertical resize to North */
      styles = {
        ...styles,
        top: 0,
        left: 0,
        width: '100%',
      }
      break;
    case 'w':
      /** Horizontal resize to West */
      styles = {
        ...styles,
        right: 0,
        top: 0,
        height: '100%',
      }
      break;
  }

  return styles;
}

function ResizeBar(props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
  /** TODO: Custom bar */
  return (
    <div {...props} />
  );
}

function ResizeArea(props: ResizeAreaProps) {
  const {
    direction,
    children,
    minHeight,
    minWidth,
  } = props;
  const [size, setSize] = useState<SizeProps>({
    width: minWidth ? minWidth : 0,
    height: minHeight ? minHeight : 0,
  });

  const barStyles = getBarStyles(direction, props.classes && props.classes.bar ? props.classes.bar : {});

  /**
   * Handle resize component
   */
  const handleResize = useCallback((event: MouseEvent) => {
    setSize(currentSize => ({
      width: currentSize.width + event.movementX,
      height: currentSize.height + event.movementY,
    }));
  }, []);

  const handleStartResize = (event: MouseEvent) => {
    event.preventDefault();
    document.addEventListener('mousemove', handleResize);
    document.addEventListener('mouseup', handleStopResize);
  };

  const handleStopResize = (event: MouseEvent) => {
    event.preventDefault();
    document.removeEventListener('mousemove', handleResize);
    document.removeEventListener('mouseup', handleStartResize);
  };

  return (
    <div
      {...props}
      style={
        clsx(
          props.classes ? props.classes.root : {},
          size
        ) as React.CSSProperties
      }
    >
      {children}
      <ResizeBar
        role='button'
        style={barStyles as React.CSSProperties}
        onMouseDown={handleStartResize as unknown as MouseEventHandler<HTMLDivElement>}
      />
    </div>
  );
}

export default withStyles(styles)(ResizeArea);
