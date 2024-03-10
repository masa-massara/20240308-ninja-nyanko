import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
import Div_manual_list_parts from './Div_manual_list_parts';
// const [currentSelectedPosion, setCurrentSelectedPosion] = useState("")
const Tabs_manual_list = ({positionMap} : {positionMap: Map<string, Array<{task: string, title: string}>>}) => {
    const keyTabs = Array.from(positionMap.keys()).map((key) =>
    <Tab key={key}>{key}</Tab>
    );

    return (
        <Tabs>
        <TabList>
            {keyTabs}
        </TabList>

        {Array.from(positionMap.keys()).map(key => {
            const tasks = positionMap.get(key);
            if(!tasks) return null
            return (
                <TabPanel>
                    {tasks?.map(task => (
                        <Div_manual_list_parts task={task.task} title={task.title} />
                    ))}
                </TabPanel>
            )
        })}
    </Tabs>
    )}
    


export default Tabs_manual_list

