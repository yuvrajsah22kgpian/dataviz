import { createRoot } from 'ReactDOM';
import  {  Tabs  } from  'antd';
const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: '1',
    label: 'Tab 1',
    children: 'Content of Tab Pane 1',
  },
  {
    key: '2',
    label: 'Tab 2',
    children: 'Content of Tab Pane 2',
  },
  {
    key: '3',
    label: 'Tab 3',
    children: 'Content of Tab Pane 3',
  },
];
const Demo = () => <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
const ComponentDemo = Demo;
createRoot(mountNode).render(<ComponentDemo />);

export default ComponentDemo;