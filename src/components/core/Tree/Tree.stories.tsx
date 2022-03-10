import Tree from '.';
import { Folder, Earbuds } from '@mui/icons-material';

const data = [
  {
    studentId: 'SE1068',
    name: 'John Doe',
    extra: {},
    info: 'John Doe',
    children: [{
      studentId: 'SE1111',
      name: 'Jame',
      extra: {},
      info: 'Jame',
      icon: <Earbuds />,
    }],
  },
  {
    studentId: 'SE9991',
    name: 'Johny',
    action: (_event: React.MouseEvent<HTMLElement>, extra: any) => console.log('Johny here', extra.name),
    extra: {
      name: 'Johny Dang',
      age: 30,
    },
    info: 'Johny Dang',
  }
];

const Template = () => (
  <Tree
    values={data}
    defaultItem={{
      icon: <Folder />,
      action: (_event: React.MouseEvent<HTMLElement>, _extra: any) => console.log('Default here')
    }}
    ItemProps={{
      onContextMenu: (_event: any, value: any) => console.log(value),
    }}
    mapper={{
      id: 'studentId',
      label: 'name',
      tooltip: 'studentId',
    }}
  />
);

export const Example = Template.bind({});

const StoryObject = {
  title: 'core/Tree',
  component: Example,
};

export default StoryObject;
