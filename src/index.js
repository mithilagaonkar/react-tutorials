import React from 'react';
import ReactDom from 'react-dom';
import faker from'faker';
import ComponetDetails from './ComponetDetails';
import ApprovalCard from './ApprovalCard';

const Priyesh = function () {
    return (
        <div className="ui container comments">
            
            <ApprovalCard><ComponetDetails name = "Mithila" date="today" msg="hi" image = {faker.image.avatar()}/></ApprovalCard>
            
           <ApprovalCard><ComponetDetails name = "priyesh" date="tommorow" msg="hello"image = {faker.image.avatar()}/></ApprovalCard>
            <ApprovalCard><ComponetDetails name= "Mayur" date="yesterday" msg="bye" image = {faker.image.avatar()}/> </ApprovalCard>
        </div>
    );
}
ReactDom.render(<Priyesh />, document.querySelector("#root"));