import Link from 'next/link'
import Router from 'next/router'
import {Button} from 'antd'
export default ()=>{
    function goClickB(){
        Router.push('/test/a')
    }
    return(
        <div>
            <Link href="/a" title="AAA">
                <Button>跳转</Button>
            </Link>
            <Button onClick={goClickB}>b</Button>
        </div>
    )
}
