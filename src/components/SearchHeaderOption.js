import classNames from 'classnames'
import {useRouter} from 'next/router'

export default function SearchHeaderOption({type, title, Icon, selected}) {
  const router = useRouter()
  function selectTab () {
    console.log('router', router)
    router.push({
      pathname: router.pathname,
      query: { ...router.query, searchType: type }
    })
  }
  return (
    <div onClick={() => selectTab(title)} className={classNames("flex items-center space-x-1 border-b-4 border-transparent hover:text-blue-500 hover:border-blue-500 pb-3 cursor-pointer",
     {'text-blue-500 border-blue-500': selected})}>
      <Icon className="h-4"/>
      <p>{title}</p>
    </div>
  )
}
