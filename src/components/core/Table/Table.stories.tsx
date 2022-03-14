import Table from '.';

const values = [
  {
    id: 'SE1058',
    name: 'Mike',
    age: 25,
  },
  {
    id: 'SE1048',
    name: 'Johny',
    age: 30,
  },
  {
    id: 'SE1038',
    name: 'Jane',
    age: 23,
  },
];

const fields = [
  {
    id: 'id',
    label: 'Student ID',
    render: (_extra: any, value: any) => value['id'],
    isPrimary: true,
  },
  {
    id: 'name',
    label: 'Student Name',
    render: (_extra: any, value: any) => value['name'] === 'Mike' ? <input /> : value['name'],
  },
  {
    id: 'age',
    label: 'Student Age',
    render: (_extra: any, value: any) => value['age'],
    align: 'right',
  },
];

const conditions = [
  (value: any) => {

    return value['age'] < 25 && {
      style: {
        backgroundColor: 'blue',
        '& .MuiTableCell-root': {
          color: 'white !important',
        }
      },
    }
  },
  (value: any) => {

    return value['name'] === 'Mike' && {
      style: {
        backgroundColor: 'yellow',
      }
    }
  },
];

const args = {
  values,
  fields,
  conditions,
  sticky: true,
  RowProps: {
    onClick: (_event: any, value: any) => {
      console.log(value);
    }
  },
  selected: ['SE1048'],
  dense: true,
};

const Template = () => (
  <Table {...args} />
);

export const Example = Template.bind({});

const StoryObject = {
  title: 'core/Table',
  component: Example,
};

export default StoryObject;
