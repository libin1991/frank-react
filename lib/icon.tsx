import React from 'react'
import './importIcons'
import './icon.scss';
interface IconProps {
  name: string,
  onClick: React.MouseEventHandler<SVGElement>
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
  return (
    <span>
      <svg onClick={ props.onClick}>
        <use xlinkHref={`#${props.name}`} />
      </svg>
    </span>
  )
}

export default Icon