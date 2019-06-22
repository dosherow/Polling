import React from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components";

import Wrapper from "./Wrapper";
import PollGrid from "./PollGrid";
import MainDash from "./MainDash";
import MiddleRow1 from "./MiddleRow1";
import MiddleRow2 from "./MiddleRow2";
import MiddleRow3 from "./MiddleRow3";
import BottomRow1 from "./BottomRow1";
import BottomRow2 from "./BottomRow2";
import Header from "./Header";
import HeaderLinks from "./HeaderLinks";
import HeaderText from "./HeaderText";
import Square from "./Square";
import MainDashGrid from "./MainDashGrid";
import Question from "./Question";
import Category from "./Category";
import Participants from "./Participants";
import DiscussionButton from "./DiscussionButton";
import FilterResults from "./FilterResults";
import ResultsKey from "./ResultsKey";
import ResultIndividual from "./ResultIndividual";
import Graph1 from "./Graph1";
import ImgContainer from "./ImgContainer";
import PieChart from "./PieChart";
import Referrals from "./Referrals";
import Map from "./Map";
import Heat from "./Heat";
import ResultsOverview from "./ResultsOverview";
import Percent from "./Percent";
import ReferralLink from "./ReferralLink";
import Rank from "./Rank";

import graph from './graph1.png';
import pie from "./pie.png";
import map from "./map.png";
import heat from "./heat.png";

/* set classNames for each "Total" instance so that we can change individual styling
of different instances of same component name */

const Total = styled.div`
  width: 23vw;
  height: 1.2vh;
  border-radius: 1.2vw;
  border-weight: 0.2vw;
  position: relative;
  box-shadow: 0 0 20px 0 rgba(82, 95, 110, 0.2);
  top: -1.2vh;
  &.sagree {
    background-color: rgb(214,49,49, 0.6);
  }

  &.agree {
    background-color: rgb(214,49,163, 0.6);
  }

  &.neutral {
    background-color: rgb(64,93,217, 0.6);
  }

  &.sdisagree {
    background-color: rgb(64,217,211, 0.6);
  }

  &.disagree {
    background-color: rgb(123,217,64, 0.6);
  }
`

const PercentTotal = styled.div`
  position: relative;
  height: 1.2vh;
  border-radius: 1.2vw;
  box-shadow: 0 0 20px 0 rgba(82, 95, 110, 0.2);
  border-weight: 0.2vw;
  &.sagree {
    background-color: rgb(214,49,49, 1);
    width: 12.65vw;
  }

  &.agree {
    background-color: rgb(214,49,163, 1);
    width: 4.37vw;
  }

  &.neutral {
    background-color: rgb(64,93,217, 1);
    width: 1.84vw;
  }

  &.sdisagree {
    background-color: rgb(64,217,211, 1);
    width: 2.76vw;
  }

  &.disagree {
    background-color: rgb(123,217,64, 1);
    width: 1.38vw;
  }
`

export default class PollResults extends React.Component {

    state = {
        category: "Legislation",
        question: "Was Trump\'s declaration of a national emergency the best way to advance immigration reform?",
        numParticipants: "16,039 Participants"
    }

    render() {
    return (
    <Wrapper>
      <Header>
        <HeaderText primary>the</HeaderText>
        <HeaderText>polling project</HeaderText>
        <div></div>
                
        <HeaderLinks>FAQ</HeaderLinks>
                
        <HeaderLinks>Past Polls</HeaderLinks>
                
        <Square><Link to={"/"} style={{textDecoration: "none"}}>
        <HeaderLinks>Log Out</HeaderLinks></Link></Square>
      </Header>
      <PollGrid>
        <MainDash>
          <MainDashGrid>
            <Question>
              <Category>{this.state.category}
              </Category>
              {this.state.question}
            </Question>
            <Participants>{this.state.numParticipants}</Participants>
            <DiscussionButton>Discussion</DiscussionButton>
            <FilterResults>Filter Results</FilterResults>
            <ResultsKey>
              <ResultIndividual>Strongly Agree</ResultIndividual>
              <ResultIndividual>Agree</ResultIndividual>
              <ResultIndividual>Neutral</ResultIndividual>
              <ResultIndividual>Disagree</ResultIndividual>
              <ResultIndividual>Strongly Disagree</ResultIndividual>
            </ResultsKey>
            <ImgContainer><Graph1 src={graph}></Graph1></ImgContainer>
          </MainDashGrid>
        </MainDash>
        <MiddleRow1><PieChart src={pie}></PieChart></MiddleRow1>
        <MiddleRow2>
          <ResultsOverview>Strongly Agree<Percent>55%</Percent><Total className="sagree"><PercentTotal className="sagree"></PercentTotal></Total></ResultsOverview>
          <ResultsOverview>Agree<Percent>19%</Percent><Total className="agree"><PercentTotal className="agree"></PercentTotal></Total></ResultsOverview>
          <ResultsOverview>Neutral<Percent>8%</Percent><Total className="neutral"><PercentTotal className="neutral"></PercentTotal></Total></ResultsOverview>
          <ResultsOverview>Disagree<Percent>12%</Percent><Total className="disagree"><PercentTotal className="disagree"></PercentTotal></Total></ResultsOverview>
          <ResultsOverview>Strongly Disagree<Percent>6%</Percent><Total className="sdisagree"><PercentTotal className="sdisagree"></PercentTotal></Total></ResultsOverview>
        </MiddleRow2>
        <MiddleRow3>
          <Referrals>Top Referrals</Referrals>
          <ReferralLink><Rank>1</Rank>twitter.com/garyvee/status/11062</ReferralLink>
          <ReferralLink><Rank>2</Rank>twitter.com/KDTrey5/status/03836</ReferralLink>
          <ReferralLink><Rank>3</Rank>twitter.com/mcuban/status/14739</ReferralLink>
          <ReferralLink><Rank>4</Rank>twitter.com/CholeGMoretz/status/18495</ReferralLink>
          <ReferralLink><Rank>5</Rank>twitter.com/kobebryant/status/27830</ReferralLink>
          <ReferralLink><Rank>6</Rank>twitter.com/TimDraper/status/39436</ReferralLink>
          </MiddleRow3>
        <BottomRow1><Map src={map}></Map></BottomRow1>
        <BottomRow2><Heat src={heat}></Heat></BottomRow2>
      </PollGrid>
    </Wrapper>
    )
    }
}