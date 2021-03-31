class Machine extends React.Component{
	render()
	{
		const {s1,s2,s3}=this.props;
		let c=[this.props.s1,this.props.s2,this.props.s3]
		let output="You Lose"
		if (c[0]===c[1] && c[1]===c[2]){
			output="You win!!"
		}
		return(
			<div>
				<p>{s1}{s2}{s3}</p>
				{output}
			</div>
		)
	}
}