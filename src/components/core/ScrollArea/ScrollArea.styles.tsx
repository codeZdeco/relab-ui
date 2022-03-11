import { Styles } from "@mui/styles/withStyles";

const styles = () => ({
  root: {
    position: 'relative',
    overflow: 'auto',
    '& > *:first-child': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
    },
  },
});

export default styles as Styles<any, any, string>;
