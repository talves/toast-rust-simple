import { h } from "preact";
import { Helmet } from "react-helmet";

export default (props) => {
  return (
    <div>
      <Helmet>
        <link rel="stylesheet" href="/styles.css" />
      </Helmet>
      {props.children}
    </div>
  );
};
