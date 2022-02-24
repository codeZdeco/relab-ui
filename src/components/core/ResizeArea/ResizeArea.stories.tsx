import ResizeArea from './ResizeArea';
import ResizeAreaProps from './ResizeArea.d';
import {
  Box,
  Stack,
} from '@mui/material';

const Template = (props: ResizeAreaProps) => <ResizeArea {...props} />;

function Sample() {
  return (
    <Stack>
      <Template
        direction='e'
        minWidth={300}
        classes={{
          bar: {
            width: '10px',
            backgroundColor: 'black',
          }
        }}
      >
        <div>Test Component</div>
      </Template>
      <div
        style={{
          flex: 1,
          backgroundColor: 'red',
        }}
      />
    </Stack>
  );
}

export const Example = Sample.bind({
  /** TODO: Add arguments here */
});

const StoryObject = {
  title: 'core/ResizeArea',
  component: Sample,
};

export default StoryObject;
