import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
import Div_manual_list_parts from './Div_manual_list_parts';

export default () => (
    <Tabs>
        <TabList>
            <Tab>キッチン</Tab>
            <Tab>レジ</Tab>
            <Tab>キッチン</Tab>
            <Tab>レジ</Tab>
            <Tab>キッチン</Tab>
            <Tab>レジ</Tab>
        </TabList>

        <TabPanel>
            <Div_manual_list_parts />
            <Div_manual_list_parts />
            <Div_manual_list_parts />
        </TabPanel>
        <TabPanel>
            <Div_manual_list_parts />
            <Div_manual_list_parts />
        </TabPanel>
        <TabPanel>
            <Div_manual_list_parts />
        </TabPanel>
    </Tabs>
);
