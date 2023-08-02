import Stories from "@/data/designers/designers.json"
import SingleStoriesCard from "./SingleStoriesCard"

const StoriesList : React.FC = () => {
    return (
        <div>
{Stories.map((story) => (
    <div key={story.id}>
        <SingleStoriesCard img={story.imgurl} name={story.name} location={story.location} bio={story.bio} />

    </div>
))}
        </div>
    )
}

export default StoriesList;