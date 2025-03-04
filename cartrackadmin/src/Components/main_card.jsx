import * as Tabs from '@radix-ui/react-tabs';
import Header from './header'

const MainCard = ({ children, title, tabs, onTabChange }) => {
  return (
    <div className="absolute w-[90%] h-[85vh] left-[50%] top-[120px] transform -translate-x-[45%] bg-[#F2F2F2] rounded-[20px] p-8 
      lg:w-[80%] lg:left-[40%] 
      md:w-[75%] md:left-[60%] 
      sm:w-[70%] sm:left-[62%]
      xs:w-[85%] xs:left-[58%]">
      <div className="flex flex-row justify-between items-center mb-6">
        <h2 className="text-[#0500C6] text-2xl font-semibold">{title}</h2>
        
        {tabs && tabs.length > 0 && (
          <Tabs.Root 
            defaultValue={tabs[0].label.toLowerCase()} 
            onValueChange={onTabChange}
          >
            <Tabs.List className="flex gap-4">
              {tabs.map((tab) => (
                <Tabs.Trigger
                  key={tab.label.toLowerCase()}
                  value={tab.label.toLowerCase()}
                  className="px-6 py-2 rounded-full data-[state=active]:bg-[#0500C6] data-[state=active]:text-white text-[#0500C6] border-2 border-[#0500C6]"
                >
                  {`${tab.label} (${tab.count})`}
                </Tabs.Trigger>
              ))}
            </Tabs.List>
          </Tabs.Root>
        )}
      </div>
      
      <div className="h-[calc(100%-120px)] overflow-y-auto
        lg:h-[calc(100%-110px)]
        md:h-[calc(100%-100px)]
        sm:h-[calc(100%-90px)]
        xs:h-[calc(100%-80px)]">
        {children}
      </div>
    </div>
  );
};

export default MainCard;
