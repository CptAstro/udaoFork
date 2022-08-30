import React, {useEffect} from "react"
import TopData from "../components/TopData"
import CardSection from "../components/CardSection"

import { useSelector } from 'react-redux';

function Dashboard() {
  useEffect(() => {
    document.title = "UDAO - Dashboard"
  }, []);
  
  let activeProposals = useSelector(state => state.activeProposals);
  let activeGrants = useSelector(state => state.activeGrants);

  let activeProposalsLength = activeProposals.length;
  let activeGrantsLength = activeGrants.length;

  return (
    <>
      <div className="mb-5 p-5 flex justify-center items-center rounded-lg bg-black">
        <TopData name="Active Proposals" data={activeProposalsLength}/>
        <TopData name="Active Grants" data={activeGrantsLength}/>
      </div>
      <div className="flex">
        <CardSection header="Active Proposals" data={activeProposals}/>
        <CardSection header="Active Grants" data={activeGrants}/>
      </div>
    </>
  )
}

export default Dashboard
