import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";
import Head from "next/head";

function HomePage(props) {
    return (
        <>
            <Head>
                <title>React Meetups</title>
                <meta name="description" content="Browse a huge list highly active React meetups!"></meta>
            </Head>
            <MeetupList meetups={props.meetups} />
        </>
    )
}

export async function getStaticProps() {
    const client = await MongoClient.connect('mongodb+srv://quensed:Xa2pKZI6FU3WKnHP@cluster0.c5sfw.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0');
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const meetups = await meetupsCollection.find().toArray();

    client.close();

    return {
        props: {
            meetups: meetups.map(meetup => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString()
            })),
        },
        revalidate: 1,
    };
}

export default HomePage;