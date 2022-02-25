import ResizeArea from './ResizeArea';
import ResizeAreaProps from './ResizeArea.d';
import {
  Stack,
} from '@mui/material';

const Template = (props: ResizeAreaProps) => <ResizeArea {...props} />;

const ContainerStyle = {
  height: 400,
  width: '100%',
  backgroundColor: 'black',
};

const HorizontalBarStyle = {
  width: 10,
  backgroundColor: 'blue',
};

const VerticalBarStyle = {
  height: 10,
  backgroundColor: 'blue',
};

const FlexComponentStyle = {
  flex: 1,
  backgroundColor: 'red',
};

function WestSample() {
  return (
    <Stack
      sx={ContainerStyle}
      direction='row-reverse'
    >
      <Template
        direction='w'
        minWidth={300}
        barProps={{
          style: HorizontalBarStyle
        }}
      >
        <div>Test Component</div>
      </Template>
      <div style={FlexComponentStyle} />
    </Stack>
  );
}

function EastSample() {
  return (
    <Stack
      sx={ContainerStyle}
      direction='row'
    >
      <Template
        direction='e'
        minWidth={300}
        barProps={{
          style: HorizontalBarStyle
        }}
      >
        <div>Test Component</div>
      </Template>
      <div style={FlexComponentStyle} />
    </Stack>
  );
}

function SouthSample() {
  return (
    <Stack
      sx={ContainerStyle}
      direction='column'
    >
      <Template
        direction='s'
        minHeight={100}
        barProps={{
          style: VerticalBarStyle
        }}
      >
        <div>Test Component</div>
      </Template>
      <div style={FlexComponentStyle} />
    </Stack>
  );
}

function NorthSample() {
  return (
    <Stack
      sx={ContainerStyle}
      direction='column-reverse'
    >
      <Template
        direction='n'
        minHeight={100}
        barProps={{
          style: VerticalBarStyle
        }}
      >
        <div>Test Component</div>
      </Template>
      <div style={FlexComponentStyle} />
    </Stack>
  );
}

export const WestResizeSample = WestSample.bind({
  /** TODO: Add arguments here */
});

export const EastResizeSample = EastSample.bind({
  /** TODO: Add arguments here */
});

export const SouthResizeSample = SouthSample.bind({
  /** TODO: Add arguments here */
});

export const NorthResizeSample = NorthSample.bind({
  /** TODO: Add arguments here */
});

const StoryObject = {
  title: 'core/ResizeArea',
  component: Template,
};

export default StoryObject;
