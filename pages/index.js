import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A First Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Trevi_Fountain%2C_Rome%2C_Italy_2_-_May_2007.jpg/1920px-Trevi_Fountain%2C_Rome%2C_Italy_2_-_May_2007.jpg',
        address: 'Some address 5, 12345 Some City',
        description: 'This is a first meetup'
    },
    {
        id: 'm2',
        title: 'A Second Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Trevi_Fountain%2C_Rome%2C_Italy_2_-_May_2007.jpg/1920px-Trevi_Fountain%2C_Rome%2C_Italy_2_-_May_2007.jpg',
        address: 'Some address 10, 54321 Some City',
        description: 'This is a second meetup'
    }
];

function HomePage(props){
    return (<MeetupList meetups={props.meetups} />)
}

export async function getStaticProps(){
    return {
        props: {
            meetups: DUMMY_MEETUPS,
        },
        revalidate: 1,
    };
}

export default HomePage;