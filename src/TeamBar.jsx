import logo from './logo.svg';
import './TeamBar.css';

import React from 'react'
class TeamBar extends React.Component {

	constructor(props){
		super(props)
	}

  render() {
		let props = this.props
		function renderMilestones(milestones){
			let objs = []
			for(let ms of milestones){
				objs.push(<div style={{height:ms.progress + '%'}}><span>{ms.label}</span></div>)
			}
			return objs
		}
		return (
			<div className="prog">
				<div className="prog-bar" style={{backgroundColor:props.color,height:props.progress+"%"}}></div>
	
				<div className="milestones">
					{renderMilestones(props.milestones)}
					{/* <div className="milestone-1">
						<span>ms 1</span>
					</div>
					<div className="milestone-2">
						<span>ms 2</span>
					</div> */}
				</div>
			</div>
		);
  }
}

export default TeamBar;
