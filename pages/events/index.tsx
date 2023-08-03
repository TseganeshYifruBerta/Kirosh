import EventsList from "@/components/events/EventsList";

function EventsPage ()  {
    return(
        <div>
            <div className="text-5xl font-extrabold p-4">COMMING SOON <span className="text-primary"> EVENTS</span></div>
            <EventsList />
        </div>
    )
}

export default EventsPage;