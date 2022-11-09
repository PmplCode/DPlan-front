import "./PlansPage.css";
import { useContext, useEffect } from "react";
import { useState } from "react";
import userService from "../../services/user.service";
import Plan from "../../components/Plan/Plan";
import { AuthContext } from "../../context/auth.context";

let allPlans;

function PlansPage() {

  const [plans, setPlans] = useState([]);
  const {isLoggedIn, user} = useContext(AuthContext);
  const [reset, setReset] = useState(false)

    useEffect(()=>{
      if(isLoggedIn) {
        userService.getUserPlans(user.username)
        .then(results => {
          console.log("results get User Plans: ", results.data.plans)
          allPlans = results.data.plans.map(plan => {
            return plan;
          })
            setPlans(allPlans);
        })
      }
    }, [isLoggedIn, reset]);
    console.log("allPlans useEffect: ", allPlans)

    const adminHandler = () => {
      setPlans(allPlans.filter(pla => {
        return pla.status === "admin"
      }))
      console.log("allPlans admin: ", allPlans)
    }

    const acceptedHandler = () => {
      setPlans(allPlans.filter(pla => {
        return pla.status === "accepted"
      }))
      console.log("allPlans admin: ", allPlans)
    }

    const deniedHandler = () => {
      setPlans(allPlans.filter(pla => {
        return pla.status === "denied"
      }))
      console.log("allPlans admin: ", allPlans)
    }

    const pendingHandler = () => {
      setPlans(allPlans.filter(pla => {
        return pla.status === "pending"
      }))
      console.log("allPlans admin: ", allPlans)
    }

    const resetHandler = () => {
      setReset(!reset)
    }

    return (
      <div className="container">
        <h1>Plans Page</h1>
        <section>
          <button onClick={resetHandler}>All Plans</button>
          <button onClick={adminHandler}>Admin</button>
          <button onClick={acceptedHandler}>Accepted</button>
          <button onClick={pendingHandler}>Pending</button>
          <button onClick={deniedHandler}>Denied</button>
        </section>
        <div className="row justify-content-center">
          {plans.map((plan, k) => (
            <Plan plan={plan} key={k} />
          ))}
        </div>
      </div>
    );
}

export default PlansPage;