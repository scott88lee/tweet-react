class Tweet_Item extends React.Component {
    render() {
        return (
          <div>
            <h3>{this.props.screen_name}</h3>
            <h5>{this.props.display_url}</h5>
            <p>ID => {this.props.index}</p>
            <p>Text => {this.props.text}</p>
            <hr></hr>
          </div>
        );
    }
}

class Tweet_list extends React.Component {
	render() {
		let tweetComponents = this.props.tweets.map( (item, index) => {
			return <Tweet_Item key={item.id} index={item.id} text={item.text} screen_name={item.user.screen_name} display_url={item.user.entities.url.urls[0].display_url.toLowerCase()}>
              	   </Tweet_Item>
		});
		return (
			<div>
           		{tweetComponents}
        	</div>
        );
	}
}

ReactDOM.render(
    <Tweet_list tweets={tweets}/>,
    document.getElementById('root')
);