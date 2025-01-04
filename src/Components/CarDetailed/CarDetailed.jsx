import { ScrollView, View } from "react-native";
import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import { setCurboat, setCurhost } from "../../Store/Global";
import { setBooking } from "../../Store/Global";
import { calculateAverageReview } from "../../Utils/Validate";

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
import ToastMessage from "../Basic/ToastMessage/ToastMessage";
import LoadingIndicator from "../Basic/LoadingIndicator";

const CarDetailed = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const curboat = useSelector((state) => state.Global.curboat);
  const curhost = useSelector((state) => state.Global.curhost);
  const loading = useSelector((state) => state.Global.loading);
  const curuser = useSelector((state) => state.Slice.user);

  const [plan, setPlan] = useState(null);
  const [boatId, setBoatId] = useState();
  const [userId, setUserId] = useState(null);
  const [toastType, setToastType] = useState("success");
  const [errormessage, setErrorMessage] = useState("");
  const toastRef = useRef(null);

  useEffect(() => {
    setBoatId(curboat?._id);
    setUserId(curuser?._id);
  }, [curboat, curuser]);

  const handleShowToast = () => {
    if (toastRef.current) {
      toastRef.current.show();
    }
  };

  const handleSubmit = async () => {
    if (userId == null) {
      setToastType("warning");
      setErrorMessage("Please sign in at the first");
      handleShowToast();
      return;
    }
    if (plan == null) {
      setToastType("warning");
      setErrorMessage("Please select plan");
      handleShowToast();
      return;
    }
    if (curhost.cohost == userId || curboat.user == userId) {
      setErrorMessage(
        "You are a cohost or host on this boat. You cannot reserve the boat."
      );
      handleShowToast();
      return;
    }
    await dispatch(
      setBooking({ userId, hostId: curhost._id, boatId, planId: plan })
    );
    navigation.navigate("Booking", { screen: "BookingDetail" });
  };

  return (
    <>
      <ScrollView>
        <HeaderImage></HeaderImage>
        <Summary
          location={curboat.location1}
          model={curboat.model}
          review={calculateAverageReview(curboat.reviews) || 0}
          booking={curboat.reviews.length || 0}
        ></Summary>
        <Services
          resrate={curhost.resrate || 100}
          cancellation={curboat.cancellation}
          capacity={curboat.capacity}
        ></Services>
        <Description des={curboat.description}></Description>
        <Accessories data={curboat.accessories}></Accessories>
        <Specs
          year={curboat.year}
          feets={curboat.size}
          brand={curboat.boatbrand}
          type={curboat.boattype}
          model={curboat.model}
          capacity={curboat.capacity}
        ></Specs>
        <Plans data={curboat.plans} setPlan={setPlan}></Plans>
        <Reviews
          review={curhost.review || 0}
          booking={curhost.booking || 0}
          data={curboat.reviews}
        ></Reviews>
        <Host
          name={curhost.firstName + " " + curhost.lastName}
          review={curhost.review || 0}
          resrate={curhost.resrate || 100}
          avatar={curhost.avatar}
        ></Host>
        <Details data={curboat.allowes}></Details>
        <Similar location1={curboat.location1} boatId={curboat._id}></Similar>
      </ScrollView>

      <ToastMessage
        type={toastType}
        description={errormessage}
        ref={toastRef}
      />
      <BookAction
        plan={plan}
        plans={curboat.plans}
        handleSubmit={handleSubmit}
      ></BookAction>
    </>
  );
};

export default CarDetailed;
