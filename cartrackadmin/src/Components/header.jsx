import * as Tabs from '@radix-ui/react-tabs'

const Header = ({ title, tabs, onTabChange }) => {
  return (
    <div className="flex flex-row justify-around items-center gap-6">
      <h1 className="text-[#0500C6] text-3xl font-bold">{title}</h1>
    </div>
  )
}

export default Header;