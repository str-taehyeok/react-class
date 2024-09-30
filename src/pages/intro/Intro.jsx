import React from 'react';
import { Link } from 'react-router-dom';

const Intro = () => {
  return (
    <div>
      <div>
        여기는 소개 페이지!😉
      </div>
      <div>
        <Link to={"/job/developer"}>개발자</Link>
      </div>
      <div>
        <Link to="/job/planner">기획자</Link>
      </div>
    </div>
  );
};

export default Intro;