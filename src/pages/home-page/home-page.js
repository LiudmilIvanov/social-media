import React from "react"
import Aside from "../../components/aside/aside"
import HeaderNavigation from "../../components/header/navigation"
import PostComponent from "../../components/post/post"

class HomePage extends React.Component {

    render() {
        return (
            <div>
                <HeaderNavigation />
                <body>
                    <div>
                        <Aside />
                    </div>
                    <div>
                        <PostComponent />
                    </div>
                </body>
            </div>
        )
    }
}

export default HomePage

