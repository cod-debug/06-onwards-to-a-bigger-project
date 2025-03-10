import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails(){
    return (
        <MeetupDetail 
            id="m1"
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Trevi_Fountain%2C_Rome%2C_Italy_2_-_May_2007.jpg/1920px-Trevi_Fountain%2C_Rome%2C_Italy_2_-_May_2007.jpg"
            title="First Meetup"
            address="Some Street 5, Some City"
            description="Our first meetup"
        />
    )
}

export default MeetupDetails;