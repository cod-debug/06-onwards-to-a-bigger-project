import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import Head from "next/head";

function NewMeetupPage() {
    const router = useRouter();
    async function addMeetupHandler(meetupData) {
        const response = await fetch('/api/new-meetup', {
            method: "POST",
            body: JSON.stringify(meetupData),
            headers: {
                'Content-Type': 'application/json'
            },
        });

        const data = await response.json();
        console.log(data);
        router.push('/');
    }
    return (<main>
        <Head>
            <title>Add a New Meetup</title>
            <meta name="description" content="Add your own meetup and create amazing network opportunities."></meta>
        </Head>
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </main>)
}

export default NewMeetupPage;