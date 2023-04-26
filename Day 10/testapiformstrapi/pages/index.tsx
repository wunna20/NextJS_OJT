import { GetServerSideProps } from "next";
import axios from 'axios';

const Home = ({ restaurants, error }) => {

  // if (error) {
  //   return <div>An error occured: {error.message}</div>;
  // }
  // return (
  //   <div>
  //     <h1 className="text-white font-mono font-bold text-3xl m-3">Restaurants</h1>
  //     <br />
  //     <ul>
  //       {restaurants.data.map(restaurant => (
  //         <li key={restaurant.id} className="p-3">
  //           <h5 className="text-white font-mono font-bold text-lg">{restaurant.attributes.Name}</h5>
  //           <p className="text-gray-300 font-light font-sans">{restaurant.attributes.Description}</p>
  //         </li>
  //       ))}
  //     </ul>

  //   </div>
  // );
};

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:1337/api/restaurants');
  const data = await res.json();
  console.log('data', data)
  return {
      props: { restaurants: data }
  };
}

export default Home;