var App = React.createClass({
    getInitialState:function(){
        return {
            name: "Arthur Dent",
            age: "42",
            major: "Hitchhiking",
            classYears: "Graduate"
        };
    },
    updateName:function(e){
        this.setState({name: e.target.value});
    },
    updateAge:function(e){
        this.setState({age: e.target.value});
    },
    updateMajor:function(e){
        this.setState({major: e.target.value});
    },
    updateClass:function(e){
        this.setState({classYears: e.target.value});
    },
    render:function(){
        return (
            <div>
                <h1>Introduction</h1>
                <div className="col-md-3">
                    <input className="form-control" type="text" placeholder={this.state.name} onChange={this.updateName}></input>
                    <input className="form-control" type="text" placeholder={this.state.age} onChange={this.updateAge}></input>
                    <input className="form-control" type="text" placeholder={this.state.major} onChange={this.updateMajor}></input>
                    <input className="form-control" type="text" placeholder={this.state.classYears} onChange={this.updateClass}></input>
                </div>
                <p>Hello! My name is {this.state.name}. I'm {this.state.age} years old, and I am a {this.state.classYears} {this.state.major} major at Union College.</p>
            </div>
      );
    }
});
React.render(<App />, document.getElementById('introduction'));
