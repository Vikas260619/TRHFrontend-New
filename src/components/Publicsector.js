import React from 'react'
import Common from '../Container/Common'
import Industriecommon from '../Container/Industriecommon'

function Publicsector(props) {
  return (
    <div>
    <Common
          name="Public Sector"
          description=" Join our global team to transform what’s next."
      />
      <Industriecommon
            imgsrc="images/public sector.jpg"

      />


  </div>  )
}

Publicsector.propTypes = {}

export default Publicsector
