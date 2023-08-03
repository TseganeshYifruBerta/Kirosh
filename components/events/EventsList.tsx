import Events from "@/data/designers/events.json"
import SingleEventCard from "../common/SingleEventCard"

const EventsList : React.FC = () => {
    return (
        <div>
            {Events.map((event) => (
                <div key={event.id}>
                    <SingleEventCard img={event.imgurl} description={event.description} date={event.date} location={event.location} eventName={event.eventName} />
                </div>
            ))}
        </div>
    )
}

export default EventsList