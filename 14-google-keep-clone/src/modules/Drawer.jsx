import { HeaderBar, NavList } from '../components'
import { useState } from 'react'

const Drawer = () => {
  const [open, setOpen] = useState(false);

  const handleDrawer = () => {
    setOpen(prev => !prev);
  }

  const onNavClick = () => {
    setOpen(false);
  }

  return (
    <div className='drawer'>
      <HeaderBar handleDrawer={handleDrawer} />
      {open && <div className={`drawer-box  ${open ? 'open' : ''}`}>
        <NavList onClick={onNavClick} />
      </div>}
    </div>
  )
}

export default Drawer