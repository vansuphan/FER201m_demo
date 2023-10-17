import React, { useEffect } from "react";
import { useState } from "react";
import styles from "./HomePage.module.scss";
import { Button } from "reactstrap";
import { counterActions } from "../../libs/redux/actions/counterActions";
import { useDispatch, useSelector } from "react-redux";
import { getMessager } from "../../libs/redux/actions/messagerAction";
import { store } from "../../libs/redux/store";
import Card from "../../components/carrd/Card";
import { Fade, FadeIn, FadeOut, Rotate, Slide, SlideInDown } from "react-animated-components";
// import { store as storeThunk } from "../../libs/redux/storeReactRedux";

export default function HomePage() {
  const [value, setValue] = useState(store.getState());
  const dispatch = useDispatch();

  const [didEnter, setDidEnter] = React.useState(false)
  const onDidEnter = () => setDidEnter(true)

  const messagerPayload = useSelector(
    (states) => states.messagerReducer?.payload
  );
  const loadingMessager = useSelector(
    (states) => states.messagerReducer?.loading
  );

  const onIncrement = () => {
    store.dispatch(counterActions.increment(10));
  };

  const onDecrement = () => {
    store.dispatch(counterActions.decrement(10));
  };

  const onGetMessages = () => {
    dispatch(getMessager());
  };

  useEffect(() => {
    store.subscribe(() => {
      setValue(store.getState());
    });
  }, []);

  return (
    <div className={styles.HomePage}>
      <hr />
      <section className="section-1 mt-5">
        <div className="container">
          <h3>Counter : {value || 0}</h3>
        </div>
        <div className="mt-2">
          <Button
            type="button"
            className="me-2 btn-danger"
            onClick={onDecrement}
          >
            Decrement
          </Button>
          <Button type="button" onClick={onIncrement} className="btn-success">
            Increment
          </Button>
        </div>

        <hr />

        <div>
          <p className="p-3">
            {loadingMessager ? "loading = true" : "loading = true"}
          </p>
          {messagerPayload &&
            messagerPayload?.length > 0 &&
            messagerPayload?.map((value, index) => {
              return (
                <p key={index}>
                  <b>{value?.sender}: </b>
                  {value?.messages}
                </p>
              );
            })}
        </div>
        <div>
          <Button type="button" onClick={onGetMessages} className="btn-success">
            Get Messages
          </Button>
        </div>
        <hr />
        <div className="container" style={{ overflowX: "hidden" }}>
          {/* <FadeOut active={didEnter}>
            <SlideInDown onComplete={onDidEnter}>🥧</SlideInDown>
          </FadeOut> */}
          <Slide direction="right" durationMs={1000}>
            <Card />
          </Slide>
          <FadeIn>
            <Rotate>🥧</Rotate>
          </FadeIn>
          <Fade>
            <Card />
          </Fade>
          <Fade delayMs={500}>
            <Card />
          </Fade>
          <Fade delayMs={1000}>
            <Card />
          </Fade>
          
        </div>
      </section>
      <hr />
    </div>
  );
}
