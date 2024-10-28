import { ScrollView } from "react-native";
import HeaderImage from "./HeaderImage";
import Summary from "./Summary";
import Services from "./Services";
import Description from "./Description";
import Accessories from "./Accessories";
import Specs from "./Specs";
import Plans from "./Plans";
import Reviews from "./Reviews";
import Host from "./Host";
import Details from "./Details";
import BookAction from "./BookAction";
const CarDetailed = () => {
  return (
    <ScrollView>
      <HeaderImage></HeaderImage>
      <Summary></Summary>
      <Services></Services>
      <Description></Description>
      <Accessories></Accessories>
      <Specs></Specs>
      <Plans></Plans>
      <Reviews></Reviews>
      <Host></Host>
      <Details></Details>
      <BookAction></BookAction>
    </ScrollView>
  );
};

export default CarDetailed;
