import { MongoClient, ObjectId } from "mongodb";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import Head from "next/head";

function MeetupDetails(props) {
    return (
        <>
            <Head>
                <title>{ props.meetup.title }</title>
                <meta name="description" content={props.meetup.description}></meta>
                <meta name="address" content={props.meetup.address}></meta>
            </Head>
            <MeetupDetail
                image={props.meetup.image}
                title={props.meetup.title}
                address={props.meetup.address}
                description={props.meetup.description}
            />
        </>
    )
}

export async function getStaticPaths() {
    const client = await MongoClient.connect('mongodb+srv://quensed:Xa2pKZI6FU3WKnHP@cluster0.c5sfw.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0');
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

    client.close();
    return {
        fallback: 'blocking',
        paths: meetups.map(meetup => ({ params: { meetupId: meetup._id.toString() } }))
    }
}

export async function getStaticProps(context) {
    const meetupId = context.params.meetupId;

    const client = await MongoClient.connect('mongodb+srv://quensed:Xa2pKZI6FU3WKnHP@cluster0.c5sfw.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0');
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const meetup = await meetupsCollection.findOne({ _id: new ObjectId(meetupId) })

    return {
        props: {
            meetup: {
                id: meetup._id.toString(),
                title: meetup.title,
                description: meetup.description,
                image: meetup.image,
                address: meetup.address
            }
        }
    }
}

export default MeetupDetails;

