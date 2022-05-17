import MeetupList from "../components/meetups/MeetupList"

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/1_zurich_panorama_grossmunster_limmat_river_2012.jpg/800px-1_zurich_panorama_grossmunster_limmat_river_2012.jpg',
    address: 'Limmatstrasse 1, 8001 Zurich',
    description: 'This is a meetup in Zurich'
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    image: 'https://starinnhotels.com/wp-content/uploads/2020/05/wien-header.jpg',
    address: 'Dampfschiffstrasse 2, 1030 Wien',
    description: 'This is a meetup in Vienna'
  }
]

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />
}

export async function getStaticProps() {
  // fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS
    },
    revalidate: 10
  }
}

export default HomePage