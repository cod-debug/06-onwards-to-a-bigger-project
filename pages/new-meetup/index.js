import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupPage(){
    function addMeetupHandler(meetupData){
        console.log(meetupData);
    }
    return (<main>
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </main>)
}

export default NewMeetupPage;