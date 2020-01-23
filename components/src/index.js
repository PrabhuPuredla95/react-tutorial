import React from 'react';
import ReactDom from 'react-dom';
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
const App = () => {
    return (
      <div className="ui container comments">
          <ApprovalCard>
              <CommentDetail author="Sam"/>
          </ApprovalCard>
          <ApprovalCard>
              <CommentDetail author="Alex"/>
          </ApprovalCard>
          <ApprovalCard>
              <CommentDetail author="Jane"/>
          </ApprovalCard>
          <ApprovalCard>
              Are you sure you want to this?
          </ApprovalCard>
      </div>
    );
}

ReactDom.render(<App/>, document.querySelector('#root'));