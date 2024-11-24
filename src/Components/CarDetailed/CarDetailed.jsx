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
import Similar from "./Similar";
import BookAction from "./BookAction";

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import LoadingIndicator from "../Basic/LoadingIndicator";

const CarDetailed = () => {
  const dispatch = useDispatch();

  const curboat = useSelector((state) => state.Global.curboat);
  const curhost = useSelector((state) =>state.Global.curhost)
  const loading = useSelector((state) => state.Global.loading);

  const [plan, setPlan] = useState();

  return (
    <ScrollView>
      {loading ? (
        <LoadingIndicator />
      ) : (
        <>
          <HeaderImage></HeaderImage>
          <Summary location={curboat.location1} model ={curboat.model} review={curhost.review || 0} booking={curhost.booking || 0}></Summary>
          <Services resrate={curhost.resrate || 100} cancellation={curboat.cancellation} capacity={curboat.capacity}></Services>
          <Description des = {curboat.description}></Description>
          <Accessories data={curboat.accessories}></Accessories>
          <Specs year = {curboat.year} feets = {curboat.size} brand={curboat.boatbrand} type={curboat.boattype} model={curboat.model} capacity={curboat.capacity}></Specs>
          <Plans data={curboat.plans} setPlan={setPlan}></Plans>
          <Reviews review={curhost.review || 0} booking = {curhost.booking || 0} data = {curboat.reviews}></Reviews>
          <Host name={curhost.firstName +" "+ curhost.lastName} review={curhost.review || 0} resrate = {curhost.resrate || 100} avatar = {curhost.avatar}></Host>
          <Details data = {curboat.allowes}></Details>
          <Similar location1={curboat.location1} boatId={curboat._id}></Similar>
          <BookAction plan={plan} data={curboat.plans}></BookAction>
        </>
      )}
    </ScrollView>
  );
};

export default CarDetailed;
