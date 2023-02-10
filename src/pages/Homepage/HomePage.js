import React from "react";
import MainTemplate from "../../components/MainTemplate/MainTemplate";
import Main from "../../components/Main/Main";
import cardImage1 from "../../images/icon-access-anywhere.svg";
import cardImage2 from "../../images/icon-security.svg";
import cardImage3 from "../../images/icon-collaboration.svg";
import cardImage4 from "../../images/icon-any-file.svg";
import profile1 from "../../images/profile-1.jpg";
import profile2 from "../../images/profile-2.jpg";
import profile3 from "../../images/profile-3.jpg";
import Card from "../../components/Card/Card";
import styles from "./Homepage.module.css";
import NewComponent from "../../components/Newcomponent/NewComponent";
import RatingCard from "../../components/RatingCard/RatingCard";
import Footer from "../../components/Footer/Footer";


const HomePage = () => {
  return (
    <MainTemplate>
      <h2>Home Page</h2>
      <Main />
      <div className={styles.container}>
        <Card
          title="Acces your files, anywhere"
          desc="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
          image={cardImage1}
        />
        <Card
          title="Security you can trust"
          desc="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
          image={cardImage2}
        />
        <Card
          title="Real-time collaboration"
          desc="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
          image={cardImage3}
        />
        <Card
          title="Store any type of file"
          desc="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
          image={cardImage4}
        />
      </div>

      <NewComponent />
      <div className={styles.ratingContainer}>
        <RatingCard
          desc="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
          image={profile1}
          name="Satish Patel"
          prof="Founder & CEO"
        />
        <RatingCard
          desc="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
          image={profile2}
          name="Bruce McKenzie"
          prof="Founder & CEO"
          
        />
        <RatingCard
          desc="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
          image={profile3}
          name="Iva Boyd"
          prof="Founder & CEO"
        />
      </div>
      <Footer/>
    </MainTemplate>
  );
};

export default HomePage;
