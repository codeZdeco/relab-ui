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
    cursor: `${direction}-resize`,
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
        left: 0,
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
    BarProps,
  } = props;
  const [size, setSize] = useState<SizeProps>({
    width: minWidth ? minWidth : 'unset',
    height: minHeight ? minHeight : 'unset',
  });

  const barStyles = getBarStyles(direction, BarProps && BarProps.style ? BarProps?.style : {});

  const limitMinSize = (actualSize: number, minSize: number) => {
    return actualSize <= minSize ? minSize : actualSize;
  };

  /**
   * Handle resize component
   */
  const handleResize = useCallback((event: MouseEvent) => {
    const extraValue = {
      'e': event.movementX,
      'w': - event.movementX,
      's': event.movementY,
      'n': - event.movementY,
    };

    setSize(currentSize => ({
      width: typeof (currentSize.width) === 'number'
        ? limitMinSize(currentSize.width + extraValue[direction], minWidth ? minWidth : 0)
        : 'unset',
      height: typeof (currentSize.height) === 'number'
        ? limitMinSize(currentSize.height + extraValue[direction], minHeight ? minHeight : 0)
        : 'unset',
    }));
  }, [direction, minWidth, minHeight]);

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
      className={props.classes && props.classes.root}
      style={
        size as React.CSSProperties
      }
    >
      {children}
      <ResizeBar
        {...BarProps}
        className='ResizeAreaBar-root'
        role='button'
        style={barStyles as React.CSSProperties}
        onMouseDown={handleStartResize as unknown as MouseEventHandler<HTMLDivElement>}
      />
    </div>
  );
}

export default withStyles(styles)(ResizeArea);
