//right side small transparent box showing the number of total photos with + sign

class NumBox extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div height = "40px" width = "123px" className = "numBox">{this.props.images.length + " PHOTOS +"}</div>
		)
		
	}
}