import React from 'react';
import Feed from '../_components/Feed';

const App = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover and Share
        <br />
        {/* <br className="max-md:hidden" /> */}
        <span className="orange_gradient">AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Promptopia is an open-source AI prompting tool for modern creative
        topics like travel, food, coding, and more.
      </p>

      <Feed />
    </section>
  );
};

export default App;
