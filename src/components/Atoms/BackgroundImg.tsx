import {ReactComponent as Database} from '../../assets/database.svg'
import {ReactComponent as Backend} from '../../assets/gear.svg'
import {ReactComponent as Frontend} from '../../assets/frontend.svg'
import {ReactComponent as Core} from '../../assets/laptop.svg'
import React from 'react'

const variant = {
  core: <Core/>,
  front: <Frontend/>,
  back: <Backend/>,
  db: <Database/>
}

export const BackgroundImg = () => (<Core />)