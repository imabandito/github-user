import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function SearchError() {
  return (
    <div className='error'>
        <h2>No user with such username :(</h2>
        <FontAwesomeIcon icon={faTriangleExclamation} className='icon-100'/>
    </div>
  )
}
