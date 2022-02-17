import Header from "../Components/Header";
import "./Home.css";
import LandingDisplay from "../Components/LandingDisplay";
import PostsContainer from "../Components/PostsContainer";

const Home = (props) => {

    return (
        <div class="min-h-screen grid">
            <div class="row-span-4">
                <LandingDisplay />
            </div>
            <div class="row-span-2">
                <PostsContainer />
            </div>


        </div >

    )

}

export default Home;