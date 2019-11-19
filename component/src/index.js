import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail'
import faker from 'faker';
import ApprovalCard from './ApprovalCard';
const App = ()=> {
    return (
    <div className= "ui container">
        <ApprovalCard>
            <CommentDetail 
                author='sam' 
                timeAgo='Yesterday at 2 PM' 
                comment='Nice blog' 
                avatar= {faker.image.avatar()}
            />
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail 
                author='alex' 
                timeAgo='Today at 1 AM' 
                comment='Well done' 
                avatar= {faker.image.avatar()}
            />
        </ApprovalCard>

        <ApprovalCard>
            <CommentDetail 
                author='jane' 
                timeAgo='Today at 6 PM' 
                comment='Effective' 
                avatar= {faker.image.avatar()}
            />
        </ApprovalCard>

        <ApprovalCard>
            <CommentDetail 
                author='jose' 
                timeAgo='Today at 9:30 PM' 
                comment='Gerat job' 
                avatar= {faker.image.avatar()}
            />
        </ApprovalCard>
    </div>
    )};

ReactDOM.render(
    <App />, document.querySelector('#root')
)