import Header from "./Header";
import "./Layout.css";
import LandingDisplay from "./LandingDisplay";
import PostsContainer from "./PostsContainer";

const Layout = (props) => {

    return (
        <div class="background">
            <Header />
            <LandingDisplay />
            <PostsContainer />

        </div>

    )

}

export default Layout;